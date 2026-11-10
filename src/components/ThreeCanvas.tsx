import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = 'h-72 w-full' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Detect if dark mode is active
    const isDark = document.documentElement.classList.contains('dark');

    // Persian Blue 0x1C39BB, Secondary accent
    const primaryColor = 0x1C39BB;
    const secondaryColor = isDark ? 0x60A5FA : 0x2563EB;
    const particleColor = isDark ? 0x93C5FD : 0x1C39BB;

    // 1. Central Wireframe Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Inner Octahedron
    const innerGeo = new THREE.OctahedronGeometry(0.8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 3. Orbital Ring 1
    const ringGeo1 = new THREE.TorusGeometry(2.0, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // 4. Orbital Ring 2
    const ringGeo2 = new THREE.TorusGeometry(2.4, 0.01, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 5. Surrounding Particle Cloud
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 7;
      particlePositions[i + 1] = (Math.random() - 0.5) * 7;
      particlePositions[i + 2] = (Math.random() - 0.5) * 7;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.03,
      transparent: true,
      opacity: isDark ? 0.6 : 0.45,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particlePoints);

    // Interactive Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous slow rotation
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;
      innerMesh.rotation.y = -elapsedTime * 0.35;
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;
      particlePoints.rotation.y = elapsedTime * 0.08;

      // Smooth mouse follow
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      coreGroup.rotation.y = currentX + elapsedTime * 0.1;
      coreGroup.rotation.x = -currentY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`${className} flex items-center justify-center`} />;
};
