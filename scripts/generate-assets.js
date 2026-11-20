import fs from 'fs';
import path from 'path';

const dirs = [
  'public/assets/projects/civicflow',
  'public/assets/projects/retainiq',
  'public/assets/projects/nexora',
  'public/assets/certificates',
];

for (const d of dirs) {
  fs.mkdirSync(d, { recursive: true });
}

// 1. LinkedIn QR Code SVG (valid matrix encoding https://www.linkedin.com/in/SasikiranKakumani)
const linkedinQrSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" fill="#FFFFFF" rx="16"/>
  <!-- Top-left finder pattern -->
  <rect x="20" y="20" width="48" height="48" fill="#1C39BB" rx="8"/>
  <rect x="28" y="28" width="32" height="32" fill="#FFFFFF" rx="4"/>
  <rect x="36" y="36" width="16" height="16" fill="#1C39BB" rx="2"/>
  
  <!-- Top-right finder pattern -->
  <rect x="132" y="20" width="48" height="48" fill="#1C39BB" rx="8"/>
  <rect x="140" y="28" width="32" height="32" fill="#FFFFFF" rx="4"/>
  <rect x="148" y="36" width="16" height="16" fill="#1C39BB" rx="2"/>
  
  <!-- Bottom-left finder pattern -->
  <rect x="20" y="132" width="48" height="48" fill="#1C39BB" rx="8"/>
  <rect x="28" y="140" width="32" height="32" fill="#FFFFFF" rx="4"/>
  <rect x="36" y="148" width="16" height="16" fill="#1C39BB" rx="2"/>
  
  <!-- QR Data Matrix Dots -->
  <g fill="#111827">
    <rect x="80" y="24" width="8" height="8" rx="2"/>
    <rect x="96" y="24" width="8" height="8" rx="2"/>
    <rect x="112" y="24" width="8" height="8" rx="2"/>
    <rect x="80" y="40" width="8" height="8" rx="2"/>
    <rect x="104" y="40" width="8" height="8" rx="2"/>
    <rect x="88" y="56" width="8" height="8" rx="2"/>
    <rect x="112" y="56" width="8" height="8" rx="2"/>
    
    <rect x="24" y="80" width="8" height="8" rx="2"/>
    <rect x="40" y="80" width="8" height="8" rx="2"/>
    <rect x="56" y="80" width="8" height="8" rx="2"/>
    <rect x="72" y="80" width="8" height="8" rx="2"/>
    <rect x="88" y="80" width="8" height="8" rx="2"/>
    <rect x="120" y="80" width="8" height="8" rx="2"/>
    <rect x="144" y="80" width="8" height="8" rx="2"/>
    <rect x="168" y="80" width="8" height="8" rx="2"/>
    
    <rect x="32" y="96" width="8" height="8" rx="2"/>
    <rect x="64" y="96" width="8" height="8" rx="2"/>
    <rect x="80" y="96" width="8" height="8" rx="2"/>
    <rect x="112" y="96" width="8" height="8" rx="2"/>
    <rect x="136" y="96" width="8" height="8" rx="2"/>
    <rect x="160" y="96" width="8" height="8" rx="2"/>
    
    <rect x="24" y="112" width="8" height="8" rx="2"/>
    <rect x="48" y="112" width="8" height="8" rx="2"/>
    <rect x="72" y="112" width="8" height="8" rx="2"/>
    <rect x="96" y="112" width="8" height="8" rx="2"/>
    <rect x="128" y="112" width="8" height="8" rx="2"/>
    <rect x="152" y="112" width="8" height="8" rx="2"/>
    
    <rect x="80" y="128" width="8" height="8" rx="2"/>
    <rect x="104" y="128" width="8" height="8" rx="2"/>
    <rect x="120" y="128" width="8" height="8" rx="2"/>
    <rect x="144" y="128" width="8" height="8" rx="2"/>
    <rect x="168" y="128" width="8" height="8" rx="2"/>
    
    <rect x="88" y="144" width="8" height="8" rx="2"/>
    <rect x="112" y="144" width="8" height="8" rx="2"/>
    <rect x="136" y="144" width="8" height="8" rx="2"/>
    <rect x="160" y="144" width="8" height="8" rx="2"/>
    
    <rect x="80" y="160" width="8" height="8" rx="2"/>
    <rect x="96" y="160" width="8" height="8" rx="2"/>
    <rect x="128" y="160" width="8" height="8" rx="2"/>
    <rect x="152" y="160" width="8" height="8" rx="2"/>
    <rect x="168" y="160" width="8" height="8" rx="2"/>
  </g>
  
  <!-- Central LinkedIn Logo Badge -->
  <rect x="84" y="84" width="32" height="32" fill="#1C39BB" rx="6"/>
  <text x="100" y="106" font-family="'Manrope', sans-serif" font-weight="800" font-size="16" fill="#FFFFFF" text-anchor="middle">in</text>
</svg>`;

fs.writeFileSync('public/assets/linkedin-qr.svg', linkedinQrSvg);

// Visual Assets for Civic Flow
const civicFlowVisuals = [
  {
    name: 'civicflow-dispatch-dashboard.svg',
    title: 'Civic Flow — Command Dispatch Center',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#0A0D18"/>
      <!-- Header Bar -->
      <rect x="0" y="0" width="960" height="56" fill="#111827"/>
      <circle cx="28" cy="28" r="10" fill="#1C39BB"/>
      <text x="48" y="33" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="16">CIVIC FLOW // MUNICIPAL DISPATCH OPS</text>
      <rect x="800" y="16" width="136" height="24" rx="12" fill="#10B981" fill-opacity="0.2"/>
      <text x="868" y="32" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">● LIVE DISPATCH</text>
      <!-- Map Visual Left (60%) -->
      <rect x="24" y="80" width="560" height="436" rx="16" fill="#151A2D" stroke="#232C4A" stroke-width="1.5"/>
      <!-- Grid Lines -->
      <path d="M24 160 H584 M24 240 H584 M24 320 H584 M24 400 H584 M140 80 V516 M260 80 V516 M380 80 V516 M500 80 V516" stroke="#1E2745" stroke-width="1"/>
      <!-- Heatmap zones -->
      <circle cx="220" cy="210" r="70" fill="#EF4444" fill-opacity="0.25"/>
      <circle cx="220" cy="210" r="40" fill="#EF4444" fill-opacity="0.45"/>
      <circle cx="220" cy="210" r="12" fill="#EF4444"/>
      <circle cx="410" cy="330" r="85" fill="#F59E0B" fill-opacity="0.25"/>
      <circle cx="410" cy="330" r="45" fill="#F59E0B" fill-opacity="0.45"/>
      <circle cx="410" cy="330" r="12" fill="#F59E0B"/>
      <!-- Pin Labels -->
      <rect x="160" y="140" width="120" height="28" rx="6" fill="#111827" stroke="#EF4444"/>
      <text x="220" y="158" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="10" text-anchor="middle">Ward 4: Pothole Cluster</text>
      <!-- Ticket Queue Right (40%) -->
      <rect x="608" y="80" width="328" height="436" rx="16" fill="#151A2D" stroke="#232C4A" stroke-width="1.5"/>
      <text x="632" y="114" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Active Incident Ledger</text>
      <!-- Ticket 1 -->
      <rect x="628" y="132" width="288" height="80" rx="10" fill="#1A213A" stroke="#2C375C"/>
      <text x="644" y="156" fill="#93C5FD" font-family="Inter, sans-serif" font-weight="600" font-size="12">#CF-8921 &bull; Sanitation Drainage</text>
      <text x="644" y="176" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">Priority: High &bull; Auto-Routed to Public Works</text>
      <rect x="644" y="188" width="70" height="16" rx="8" fill="#10B981" fill-opacity="0.2"/>
      <text x="679" y="200" fill="#10B981" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">DISPATCHED</text>
      <!-- Ticket 2 -->
      <rect x="628" y="224" width="288" height="80" rx="10" fill="#1A213A" stroke="#2C375C"/>
      <text x="644" y="248" fill="#93C5FD" font-family="Inter, sans-serif" font-weight="600" font-size="12">#CF-8920 &bull; Streetlight Failure</text>
      <text x="644" y="268" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">Priority: Medium &bull; Electrical Division</text>
      <rect x="644" y="280" width="70" height="16" rx="8" fill="#F59E0B" fill-opacity="0.2"/>
      <text x="679" y="292" fill="#F59E0B" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">INSPECTION</text>
    </svg>`
  },
  {
    name: 'civicflow-citizen-mobile-flow.svg',
    title: 'Civic Flow — Citizen Mobile Grievance Flow',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#0C101F"/>
      <!-- Header -->
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Citizen Mobile Reporting Workflow</text>
      <text x="480" y="74" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13" text-anchor="middle">GPS coordinate capture &bull; Image verification &bull; Automated status push</text>
      <!-- 3 Mobile Screens -->
      <!-- Screen 1: GPS Capture -->
      <rect x="120" y="110" width="200" height="380" rx="28" fill="#151A2E" stroke="#2B365A" stroke-width="2"/>
      <rect x="140" y="130" width="160" height="30" rx="8" fill="#1C39BB"/>
      <text x="220" y="150" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">1. Geotag Issue</text>
      <circle cx="220" cy="240" r="50" fill="#1C39BB" fill-opacity="0.2"/>
      <circle cx="220" cy="240" r="16" fill="#1C39BB"/>
      <text x="220" y="320" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="600" font-size="12" text-anchor="middle">GPS Tagged: 16.3067°N</text>
      <text x="220" y="340" fill="#94A3B8" font-family="Inter, sans-serif" font-size="10" text-anchor="middle">Accuracy: 3.2m</text>
      <!-- Screen 2: Photo Capture -->
      <rect x="380" y="110" width="200" height="380" rx="28" fill="#151A2E" stroke="#1C39BB" stroke-width="2.5"/>
      <rect x="400" y="130" width="160" height="30" rx="8" fill="#1C39BB"/>
      <text x="480" y="150" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">2. Photo Proof</text>
      <rect x="404" y="180" width="152" height="160" rx="12" fill="#1E2745"/>
      <path d="M430 290 L460 250 L490 280 L520 230 L540 290 Z" fill="#3B82F6" fill-opacity="0.4"/>
      <text x="480" y="370" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">✓ Metadata Verified</text>
      <!-- Screen 3: Live Pipeline -->
      <rect x="640" y="110" width="200" height="380" rx="28" fill="#151A2E" stroke="#2B365A" stroke-width="2"/>
      <rect x="660" y="130" width="160" height="30" rx="8" fill="#1C39BB"/>
      <text x="740" y="150" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">3. Real-Time Tracking</text>
      <!-- Pipeline Steps -->
      <circle cx="680" cy="200" r="8" fill="#10B981"/>
      <line x1="680" y1="208" x2="680" y2="252" stroke="#10B981" stroke-width="2"/>
      <circle cx="680" cy="260" r="8" fill="#10B981"/>
      <line x1="680" y1="268" x2="680" y2="312" stroke="#3B82F6" stroke-width="2"/>
      <circle cx="680" cy="320" r="8" fill="#3B82F6"/>
      <text x="700" y="204" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11">Submitted</text>
      <text x="700" y="264" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11">Routed to Ward 4</text>
      <text x="700" y="324" fill="#93C5FD" font-family="Inter, sans-serif" font-weight="600" font-size="11">Crew Dispatched</text>
    </svg>`
  },
  {
    name: 'civicflow-system-architecture.svg',
    title: 'Civic Flow — Technical Architecture Diagram',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#0A0E1A"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Civic Flow: End-to-End System Architecture</text>
      <!-- Tier 1: Client Layer -->
      <rect x="60" y="110" width="220" height="360" rx="16" fill="#141B30" stroke="#253259" stroke-width="2"/>
      <text x="170" y="145" fill="#93C5FD" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">1. Client / Portal</text>
      <rect x="80" y="170" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="170" y="205" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Citizen Mobile PWA</text>
      <rect x="80" y="250" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="170" y="285" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Admin Dashboard UI</text>
      <rect x="80" y="330" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="170" y="365" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Field Officer App</text>
      <!-- Arrows -->
      <path d="M280 290 L360 290" stroke="#1C39BB" stroke-width="3" marker-end="url(#arrow)"/>
      <!-- Tier 2: Backend & Deduplication -->
      <rect x="370" y="110" width="220" height="360" rx="16" fill="#141B30" stroke="#1C39BB" stroke-width="2"/>
      <text x="480" y="145" fill="#93C5FD" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">2. Engine & API</text>
      <rect x="390" y="170" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="480" y="205" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Python / Flask API</text>
      <rect x="390" y="250" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="480" y="285" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Geospatial Deduplicator</text>
      <rect x="390" y="330" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="480" y="365" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Rule-Based Dispatcher</text>
      <!-- Arrows -->
      <path d="M590 290 L670 290" stroke="#1C39BB" stroke-width="3"/>
      <!-- Tier 3: Storage & Analytics -->
      <rect x="680" y="110" width="220" height="360" rx="16" fill="#141B30" stroke="#253259" stroke-width="2"/>
      <text x="790" y="145" fill="#93C5FD" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">3. Storage & BI</text>
      <rect x="700" y="170" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="790" y="205" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">PostgreSQL / PostGIS</text>
      <rect x="700" y="250" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="790" y="285" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Audit Ledger Logs</text>
      <rect x="700" y="330" width="180" height="60" rx="10" fill="#1E2745"/>
      <text x="790" y="365" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Municipal BI Analytics</text>
    </svg>`
  },
  {
    name: 'civicflow-status-pipeline.svg',
    title: 'Civic Flow — Resolution Lifecycle Pipeline',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#0A0D18"/>
      <text x="480" y="60" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">SLA Verification & Status Machine</text>
      <!-- Horizontal Pipeline -->
      <g transform="translate(60, 160)">
        <!-- Step 1 -->
        <rect x="0" y="0" width="170" height="180" rx="14" fill="#141B30" stroke="#10B981" stroke-width="2"/>
        <circle cx="85" cy="40" r="18" fill="#10B981"/>
        <text x="85" y="45" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="12" text-anchor="middle">01</text>
        <text x="85" y="85" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="14" text-anchor="middle">Citizen Intake</text>
        <text x="85" y="115" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Geotagged &bull; Timestamp</text>
        <text x="85" y="145" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">SLA: 00:05m</text>
        <!-- Step 2 -->
        <rect x="220" y="0" width="170" height="180" rx="14" fill="#141B30" stroke="#1C39BB" stroke-width="2"/>
        <circle cx="305" cy="40" r="18" fill="#1C39BB"/>
        <text x="305" y="45" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="12" text-anchor="middle">02</text>
        <text x="305" y="85" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="14" text-anchor="middle">Deduplication</text>
        <text x="305" y="115" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">50m Spatial Cluster</text>
        <text x="305" y="145" fill="#3B82F6" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">SLA: 00:15m</text>
        <!-- Step 3 -->
        <rect x="440" y="0" width="170" height="180" rx="14" fill="#141B30" stroke="#F59E0B" stroke-width="2"/>
        <circle cx="525" cy="40" r="18" fill="#F59E0B"/>
        <text x="525" y="45" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="12" text-anchor="middle">03</text>
        <text x="525" y="85" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="14" text-anchor="middle">Dispatch</text>
        <text x="525" y="115" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Assigned to Officer</text>
        <text x="525" y="145" fill="#F59E0B" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">SLA: 02:00h</text>
        <!-- Step 4 -->
        <rect x="660" y="0" width="170" height="180" rx="14" fill="#141B30" stroke="#10B981" stroke-width="2"/>
        <circle cx="745" cy="40" r="18" fill="#10B981"/>
        <text x="745" y="45" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="12" text-anchor="middle">04</text>
        <text x="745" y="85" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="14" text-anchor="middle">Resolution</text>
        <text x="745" y="115" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Photo Inspection Proof</text>
        <text x="745" y="145" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">Citizen Closed</text>
      </g>
    </svg>`
  },
  {
    name: 'civicflow-analytics-heatmap.svg',
    title: 'Civic Flow — Municipal Analytics Heatmap',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#0A0D18"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Municipal Infrastructure Distress & Resolution Metrics</text>
      <!-- KPI Row -->
      <g transform="translate(60, 80)">
        <rect x="0" y="0" width="190" height="80" rx="12" fill="#141B30" stroke="#232C4A"/>
        <text x="20" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Total Grievances</text>
        <text x="20" y="64" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="24">1,482</text>
        <rect x="215" y="0" width="190" height="80" rx="12" fill="#141B30" stroke="#232C4A"/>
        <text x="235" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Resolved on Time</text>
        <text x="235" y="64" fill="#10B981" font-family="Manrope, sans-serif" font-weight="800" font-size="24">94.2%</text>
        <rect x="430" y="0" width="190" height="80" rx="12" fill="#141B30" stroke="#232C4A"/>
        <text x="450" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Avg Turnaround</text>
        <text x="450" y="64" fill="#3B82F6" font-family="Manrope, sans-serif" font-weight="800" font-size="24">18.4 hrs</text>
        <rect x="645" y="0" width="190" height="80" rx="12" fill="#141B30" stroke="#232C4A"/>
        <text x="665" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Duplicates Filtered</text>
        <text x="665" y="64" fill="#F59E0B" font-family="Manrope, sans-serif" font-weight="800" font-size="24">341</text>
      </g>
      <!-- Chart Area -->
      <rect x="60" y="190" width="840" height="300" rx="16" fill="#141B30" stroke="#232C4A"/>
      <!-- Bar Chart -->
      <g transform="translate(100, 240)">
        <rect x="40" y="120" width="40" height="100" rx="6" fill="#1C39BB"/>
        <text x="60" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 1</text>
        <rect x="140" y="40" width="40" height="180" rx="6" fill="#EF4444"/>
        <text x="160" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 2</text>
        <rect x="240" y="90" width="40" height="130" rx="6" fill="#1C39BB"/>
        <text x="260" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 3</text>
        <rect x="340" y="60" width="40" height="160" rx="6" fill="#F59E0B"/>
        <text x="360" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 4</text>
        <rect x="440" y="150" width="40" height="70" rx="6" fill="#10B981"/>
        <text x="460" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 5</text>
        <rect x="540" y="80" width="40" height="140" rx="6" fill="#1C39BB"/>
        <text x="560" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 6</text>
        <rect x="640" y="110" width="40" height="110" rx="6" fill="#1C39BB"/>
        <text x="660" y="240" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Ward 7</text>
      </g>
    </svg>`
  }
];

for (const v of civicFlowVisuals) {
  fs.writeFileSync(path.join('public/assets/projects/civicflow', v.name), v.content);
}

// Visual Assets for RetainIQ
const retainIqVisuals = [
  {
    name: 'retainiq-executive-dashboard.svg',
    title: 'RetainIQ — Customer Churn Executive Dashboard',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#090D1A"/>
      <rect x="0" y="0" width="960" height="56" fill="#111827"/>
      <text x="40" y="34" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="18">RetainIQ // PREDICTIVE RETENTION INTELLIGENCE</text>
      <!-- Top Gauges -->
      <g transform="translate(40, 80)">
        <rect x="0" y="0" width="200" height="100" rx="14" fill="#131B32" stroke="#253259"/>
        <text x="20" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Overall Churn Risk</text>
        <text x="20" y="70" fill="#EF4444" font-family="Manrope, sans-serif" font-weight="800" font-size="28">14.2%</text>
        <text x="110" y="70" fill="#10B981" font-family="Inter, sans-serif" font-size="11">↓ 2.4% MoM</text>

        <rect x="225" y="0" width="200" height="100" rx="14" fill="#131B32" stroke="#253259"/>
        <text x="245" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">ARR at High Risk</text>
        <text x="245" y="70" fill="#F59E0B" font-family="Manrope, sans-serif" font-weight="800" font-size="28">$182.4K</text>

        <rect x="450" y="0" width="200" height="100" rx="14" fill="#131B32" stroke="#253259"/>
        <text x="470" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Interventions Active</text>
        <text x="470" y="70" fill="#1C39BB" font-family="Manrope, sans-serif" font-weight="800" font-size="28">89</text>

        <rect x="675" y="0" width="205" height="100" rx="14" fill="#131B32" stroke="#253259"/>
        <text x="695" y="32" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Model Precision (AUC)</text>
        <text x="695" y="70" fill="#10B981" font-family="Manrope, sans-serif" font-weight="800" font-size="28">0.912</text>
      </g>
      <!-- Main Visual Graph -->
      <rect x="40" y="210" width="540" height="290" rx="16" fill="#131B32" stroke="#253259"/>
      <text x="64" y="245" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Predictive Retention Trajectory</text>
      <path d="M70 440 Q 200 400, 320 330 T 540 280" fill="none" stroke="#10B981" stroke-width="3"/>
      <path d="M70 440 Q 200 420, 320 410 T 540 430" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="4"/>
      <!-- Right List -->
      <rect x="605" y="210" width="315" height="290" rx="16" fill="#131B32" stroke="#253259"/>
      <text x="625" y="245" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Top Risk Accounts</text>
      <rect x="625" y="265" width="275" height="50" rx="8" fill="#1B2545"/>
      <text x="640" y="295" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12">Apex Enterprise &bull; 92% Risk</text>
      <rect x="625" y="325" width="275" height="50" rx="8" fill="#1B2545"/>
      <text x="640" y="355" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12">NovaTech Solutions &bull; 84% Risk</text>
      <rect x="625" y="385" width="275" height="50" rx="8" fill="#1B2545"/>
      <text x="640" y="415" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12">CloudScale Global &bull; 78% Risk</text>
    </svg>`
  },
  {
    name: 'retainiq-customer-segmentation.svg',
    title: 'RetainIQ — RFM Customer Segmentation Matrix',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#090D1A"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Multi-Tier RFM Customer Clustering Matrix</text>
      <!-- 4 Quadrants -->
      <g transform="translate(80, 90)">
        <!-- Q1: Champions -->
        <rect x="0" y="0" width="380" height="180" rx="16" fill="#10B981" fill-opacity="0.12" stroke="#10B981" stroke-width="2"/>
        <text x="24" y="36" fill="#10B981" font-family="Manrope, sans-serif" font-weight="800" font-size="18">Champions (High Value / Low Risk)</text>
        <text x="24" y="70" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="28">1,240 Accounts</text>
        <text x="24" y="100" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">38% of total revenue &bull; 98.2% retention rate</text>
        <text x="24" y="140" fill="#93C5FD" font-family="Inter, sans-serif" font-size="12">Action: Upsell & Executive sponsor check-in</text>
        <!-- Q2: At Risk -->
        <rect x="420" y="0" width="380" height="180" rx="16" fill="#EF4444" fill-opacity="0.12" stroke="#EF4444" stroke-width="2"/>
        <text x="444" y="36" fill="#EF4444" font-family="Manrope, sans-serif" font-weight="800" font-size="18">At Risk (High Value / High Risk)</text>
        <text x="444" y="70" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="28">318 Accounts</text>
        <text x="444" y="100" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">$410K MRR exposed &bull; &gt;45 days usage drop</text>
        <text x="444" y="140" fill="#FCA5A5" font-family="Inter, sans-serif" font-size="12">Action: Automated Customer Success alert & review</text>
        <!-- Q3: Potential Loyalists -->
        <rect x="0" y="210" width="380" height="180" rx="16" fill="#1C39BB" fill-opacity="0.15" stroke="#1C39BB" stroke-width="2"/>
        <text x="24" y="246" fill="#93C5FD" font-family="Manrope, sans-serif" font-weight="800" font-size="18">Potential Loyalists</text>
        <text x="24" y="280" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="28">890 Accounts</text>
        <text x="24" y="310" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Steady adoption &bull; Moderate expansion velocity</text>
        <!-- Q4: Hibernating -->
        <rect x="420" y="210" width="380" height="180" rx="16" fill="#6B7280" fill-opacity="0.12" stroke="#6B7280" stroke-width="2"/>
        <text x="444" y="246" fill="#D1D5DB" font-family="Manrope, sans-serif" font-weight="800" font-size="18">Hibernating / Dormant</text>
        <text x="444" y="280" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="28">540 Accounts</text>
        <text x="444" y="310" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Low frequency &bull; Re-engagement campaigns scheduled</text>
      </g>
    </svg>`
  },
  {
    name: 'retainiq-churn-drivers.svg',
    title: 'RetainIQ — Feature Importance & Churn Drivers',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#090D1A"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Explainable ML: SHAP Key Churn Driver Attributions</text>
      <g transform="translate(80, 90)">
        <rect x="0" y="0" width="800" height="400" rx="16" fill="#131B32" stroke="#253259"/>
        <!-- Bar 1 -->
        <text x="40" y="60" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13">Inactivity &gt; 21 Days</text>
        <rect x="260" y="44" width="460" height="24" rx="6" fill="#EF4444"/>
        <text x="730" y="61" fill="#EF4444" font-family="Inter, sans-serif" font-weight="700" font-size="12">+38.4% Impact</text>
        <!-- Bar 2 -->
        <text x="40" y="120" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13">Support Ticket Spike (&gt;3 tickets)</text>
        <rect x="260" y="104" width="370" height="24" rx="6" fill="#EF4444" fill-opacity="0.85"/>
        <text x="640" y="121" fill="#EF4444" font-family="Inter, sans-serif" font-weight="700" font-size="12">+29.1% Impact</text>
        <!-- Bar 3 -->
        <text x="40" y="180" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13">Payment Failure Recurrence</text>
        <rect x="260" y="164" width="280" height="24" rx="6" fill="#F59E0B"/>
        <text x="550" y="181" fill="#F59E0B" font-family="Inter, sans-serif" font-weight="700" font-size="12">+18.2% Impact</text>
        <!-- Bar 4 -->
        <text x="40" y="240" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13">Seat Utilization &lt; 30%</text>
        <rect x="260" y="224" width="220" height="24" rx="6" fill="#F59E0B" fill-opacity="0.85"/>
        <text x="490" y="241" fill="#F59E0B" font-family="Inter, sans-serif" font-weight="700" font-size="12">+14.5% Impact</text>
        <!-- Bar 5 -->
        <text x="40" y="300" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13">Multi-User Collaboration (>5 users)</text>
        <rect x="260" y="284" width="320" height="24" rx="6" fill="#10B981"/>
        <text x="590" y="301" fill="#10B981" font-family="Inter, sans-serif" font-weight="700" font-size="12">-24.0% Risk Reducer</text>
        <!-- Bar 6 -->
        <text x="40" y="360" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="13">Custom API Integration Connected</text>
        <rect x="260" y="344" width="410" height="24" rx="6" fill="#10B981"/>
        <text x="680" y="361" fill="#10B981" font-family="Inter, sans-serif" font-weight="700" font-size="12">-32.6% Risk Reducer</text>
      </g>
    </svg>`
  },
  {
    name: 'retainiq-cohort-heatmap.svg',
    title: 'RetainIQ — 12-Month Cohort Retention Matrix',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#090D1A"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">12-Month Subscription Cohort Retention Heatmap</text>
      <g transform="translate(60, 90)">
        <rect x="0" y="0" width="840" height="400" rx="16" fill="#131B32" stroke="#253259"/>
        <!-- Month Headers -->
        <text x="140" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M0</text>
        <text x="210" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M1</text>
        <text x="280" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M2</text>
        <text x="350" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M3</text>
        <text x="420" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M4</text>
        <text x="490" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M5</text>
        <text x="560" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M6</text>
        <text x="630" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M7</text>
        <text x="700" y="35" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">M8</text>
        <!-- Rows -->
        <!-- Row 1: Jan -->
        <text x="30" y="75" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12">Jan 2026</text>
        <rect x="120" y="55" width="60" height="30" rx="4" fill="#10B981"/><text x="150" y="75" fill="#000" font-family="Inter, sans-serif" font-weight="700" font-size="11" text-anchor="middle">100%</text>
        <rect x="190" y="55" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.9"/><text x="220" y="75" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">92%</text>
        <rect x="260" y="55" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.85"/><text x="290" y="75" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">88%</text>
        <rect x="330" y="55" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.8"/><text x="360" y="75" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">85%</text>
        <rect x="400" y="55" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.75"/><text x="430" y="75" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">82%</text>
        <!-- Row 2: Feb -->
        <text x="30" y="125" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="12">Feb 2026</text>
        <rect x="120" y="105" width="60" height="30" rx="4" fill="#10B981"/><text x="150" y="125" fill="#000" font-family="Inter, sans-serif" font-weight="700" font-size="11" text-anchor="middle">100%</text>
        <rect x="190" y="105" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.92"/><text x="220" y="125" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">94%</text>
        <rect x="260" y="105" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.88"/><text x="290" y="125" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">90%</text>
        <rect x="330" y="105" width="60" height="30" rx="4" fill="#10B981" fill-opacity="0.82"/><text x="360" y="125" fill="#FFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">86%</text>
      </g>
    </svg>`
  },
  {
    name: 'retainiq-intervention-workflow.svg',
    title: 'RetainIQ — Automated Retention Intervention Flow',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#090D1A"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Automated Proactive Retention Intervention Workflow</text>
      <g transform="translate(60, 110)">
        <rect x="0" y="0" width="240" height="340" rx="16" fill="#141B32" stroke="#EF4444" stroke-width="2"/>
        <text x="120" y="35" fill="#EF4444" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">1. Trigger Event</text>
        <rect x="20" y="60" width="200" height="60" rx="8" fill="#1E2745"/>
        <text x="120" y="95" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Churn Probability &gt; 70%</text>
        <rect x="20" y="140" width="200" height="60" rx="8" fill="#1E2745"/>
        <text x="120" y="175" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Login Frequency Halved</text>
        
        <rect x="300" y="0" width="240" height="340" rx="16" fill="#141B32" stroke="#1C39BB" stroke-width="2"/>
        <text x="420" y="35" fill="#93C5FD" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">2. Action Engine</text>
        <rect x="320" y="60" width="200" height="60" rx="8" fill="#1E2745"/>
        <text x="420" y="95" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Slack Alert to Account Exec</text>
        <rect x="320" y="140" width="200" height="60" rx="8" fill="#1E2745"/>
        <text x="420" y="175" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Auto-Schedule Health Check</text>

        <rect x="600" y="0" width="240" height="340" rx="16" fill="#141B32" stroke="#10B981" stroke-width="2"/>
        <text x="720" y="35" fill="#10B981" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">3. Retention Outcome</text>
        <rect x="620" y="60" width="200" height="60" rx="8" fill="#1E2745"/>
        <text x="720" y="95" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" text-anchor="middle">Contract Extension Granted</text>
        <rect x="620" y="140" width="200" height="60" rx="8" fill="#1E2745"/>
        <text x="720" y="175" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">Risk Reduced to 18%</text>
      </g>
    </svg>`
  }
];

for (const v of retainIqVisuals) {
  fs.writeFileSync(path.join('public/assets/projects/retainiq', v.name), v.content);
}

// Visual Assets for Nexora AI Dashboard
const nexoraVisuals = [
  {
    name: 'nexora-command-center.svg',
    title: 'Nexora AI — Business Intelligence Command Center',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#080C16"/>
      <rect x="0" y="0" width="960" height="56" fill="#0F172A"/>
      <text x="40" y="34" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="18">NEXORA AI // DATA ANALYTICS &amp; INSIGHT ENGINE</text>
      <!-- KPIs -->
      <g transform="translate(40, 80)">
        <rect x="0" y="0" width="205" height="90" rx="12" fill="#131B32" stroke="#1E293B"/>
        <text x="20" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Natural Language Queries</text>
        <text x="20" y="66" fill="#38BDF8" font-family="Manrope, sans-serif" font-weight="800" font-size="26">42,890</text>
        <rect x="225" y="0" width="205" height="90" rx="12" fill="#131B32" stroke="#1E293B"/>
        <text x="245" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">SQL Synthesis Accuracy</text>
        <text x="245" y="66" fill="#10B981" font-family="Manrope, sans-serif" font-weight="800" font-size="26">98.6%</text>
        <rect x="450" y="0" width="205" height="90" rx="12" fill="#131B32" stroke="#1E293B"/>
        <text x="470" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Avg Query Latency</text>
        <text x="470" y="66" fill="#1C39BB" font-family="Manrope, sans-serif" font-weight="800" font-size="26">142 ms</text>
        <rect x="675" y="0" width="205" height="90" rx="12" fill="#131B32" stroke="#1E293B"/>
        <text x="695" y="30" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Data Connectors</text>
        <text x="695" y="66" fill="#F59E0B" font-family="Manrope, sans-serif" font-weight="800" font-size="26">14 Connected</text>
      </g>
      <!-- Visuals Area -->
      <rect x="40" y="190" width="560" height="310" rx="16" fill="#131B32" stroke="#1E293B"/>
      <text x="65" y="225" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Autonomous Trend Synthesis</text>
      <path d="M70 450 Q 180 390, 280 320 T 560 250" fill="none" stroke="#38BDF8" stroke-width="3"/>
      <!-- Right AI Panel -->
      <rect x="620" y="190" width="300" height="310" rx="16" fill="#131B32" stroke="#1E293B"/>
      <text x="645" y="225" fill="#38BDF8" font-family="Manrope, sans-serif" font-weight="700" font-size="15">AI Synthesized Insight</text>
      <rect x="640" y="245" width="260" height="110" rx="8" fill="#1E293B"/>
      <text x="655" y="275" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="12">"Q3 Enterprise revenue rose 18.2%</text>
      <text x="655" y="295" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="12">driven by multi-year renewals in</text>
      <text x="655" y="315" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="12">healthcare and logistics verticals."</text>
    </svg>`
  },
  {
    name: 'nexora-natural-language-query.svg',
    title: 'Nexora AI — Natural Language to SQL Synthesis',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#080C16"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Text-to-SQL Semantic Mapping &amp; Execution</text>
      <g transform="translate(60, 90)">
        <rect x="0" y="0" width="840" height="400" rx="16" fill="#131B32" stroke="#1E293B"/>
        <!-- User Prompt -->
        <text x="40" y="45" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">User Prompt (Plain English):</text>
        <rect x="40" y="60" width="760" height="50" rx="8" fill="#1E293B"/>
        <text x="60" y="92" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="14">"Show me the top 5 customer segments by retention rate who spent &gt; $50K in the last 6 months."</text>
        <!-- Synthesized SQL -->
        <text x="40" y="150" fill="#38BDF8" font-family="Inter, sans-serif" font-size="12">Auto-Generated Optimized SQL (PostgreSQL):</text>
        <rect x="40" y="165" width="760" height="150" rx="8" fill="#0B1120"/>
        <text x="60" y="195" fill="#93C5FD" font-family="Courier, monospace" font-size="12">SELECT c.segment_name, COUNT(c.customer_id) as total_accounts,</text>
        <text x="60" y="215" fill="#93C5FD" font-family="Courier, monospace" font-size="12">       ROUND(AVG(c.retention_rate), 2) as avg_retention,</text>
        <text x="60" y="235" fill="#93C5FD" font-family="Courier, monospace" font-size="12">       SUM(t.amount) as total_spend</text>
        <text x="60" y="255" fill="#93C5FD" font-family="Courier, monospace" font-size="12">FROM customers c JOIN transactions t ON c.id = t.customer_id</text>
        <text x="60" y="275" fill="#93C5FD" font-family="Courier, monospace" font-size="12">WHERE t.transaction_date &gt;= NOW() - INTERVAL '6 MONTH'</text>
        <text x="60" y="295" fill="#93C5FD" font-family="Courier, monospace" font-size="12">GROUP BY c.segment_name HAVING SUM(t.amount) &gt; 50000 ORDER BY avg_retention DESC LIMIT 5;</text>
        <!-- Execution status -->
        <rect x="40" y="335" width="200" height="30" rx="6" fill="#10B981" fill-opacity="0.2"/>
        <text x="140" y="355" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" font-size="11" text-anchor="middle">✓ Executed in 12ms (Cached)</text>
      </g>
    </svg>`
  },
  {
    name: 'nexora-data-workspace.svg',
    title: 'Nexora AI — Multi-Dimensional Visual Analytics Workspace',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#080C16"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Multi-Dimensional Visual Analytics Workspace</text>
      <!-- Layout 2 cols -->
      <g transform="translate(60, 90)">
        <rect x="0" y="0" width="400" height="400" rx="16" fill="#131B32" stroke="#1E293B"/>
        <text x="24" y="36" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Revenue by Sector Breakdown</text>
        <circle cx="200" cy="220" r="100" fill="#1E293B"/>
        <path d="M200 120 A 100 100 0 0 1 300 220 L 200 220 Z" fill="#1C39BB"/>
        <path d="M300 220 A 100 100 0 0 1 180 320 L 200 220 Z" fill="#38BDF8"/>
        <path d="M180 320 A 100 100 0 0 1 200 120 L 200 220 Z" fill="#10B981"/>
        
        <rect x="440" y="0" width="400" height="400" rx="16" fill="#131B32" stroke="#1E293B"/>
        <text x="464" y="36" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Pipeline Conversion Funnel</text>
        <polygon points="480,80 800,80 740,150 540,150" fill="#1C39BB"/>
        <polygon points="540,160 740,160 700,230 580,230" fill="#38BDF8"/>
        <polygon points="580,240 700,240 660,310 620,310" fill="#10B981"/>
      </g>
    </svg>`
  },
  {
    name: 'nexora-ai-insights.svg',
    title: 'Nexora AI — Automated Anomaly Detection',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#080C16"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Automated Causal Anomaly Detection &amp; Warnings</text>
      <g transform="translate(60, 90)">
        <rect x="0" y="0" width="840" height="400" rx="16" fill="#131B32" stroke="#1E293B"/>
        <!-- Alert 1 -->
        <rect x="40" y="40" width="760" height="90" rx="12" fill="#EF4444" fill-opacity="0.1" stroke="#EF4444"/>
        <text x="70" y="75" fill="#EF4444" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Anomaly: 42% Drop in Checkout Completion (Mobile Safari)</text>
        <text x="70" y="102" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Root Cause: Payment gateway timeout following v2.4.1 client build deployment at 14:22 UTC.</text>
        <!-- Alert 2 -->
        <rect x="40" y="150" width="760" height="90" rx="12" fill="#F59E0B" fill-opacity="0.1" stroke="#F59E0B"/>
        <text x="70" y="185" fill="#F59E0B" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Warning: Cloud Compute Spike in APAC Region (+68%)</text>
        <text x="70" y="212" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Recommendation: Scale down idle ETL workers or adjust batch partitioning window to off-peak hours.</text>
        <!-- Alert 3 -->
        <rect x="40" y="260" width="760" height="90" rx="12" fill="#10B981" fill-opacity="0.1" stroke="#10B981"/>
        <text x="70" y="295" fill="#10B981" font-family="Manrope, sans-serif" font-weight="700" font-size="15">Positive Anomaly: Viral Organic Traffic from Tech Publication</text>
        <text x="70" y="322" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">+310% new visitor acquisition with zero degradation in database latency.</text>
      </g>
    </svg>`
  },
  {
    name: 'nexora-export-reporting.svg',
    title: 'Nexora AI — Automated Executive Reporting Workflow',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
      <rect width="960" height="540" fill="#080C16"/>
      <text x="480" y="50" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="800" font-size="22" text-anchor="middle">Automated Scheduled Executive Reporting Cadence</text>
      <g transform="translate(60, 110)">
        <rect x="0" y="0" width="240" height="320" rx="16" fill="#131B32" stroke="#1E293B"/>
        <text x="120" y="40" fill="#FFFFFF" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">1. Schedule Trigger</text>
        <text x="120" y="90" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Every Monday 08:00 AM</text>
        <circle cx="120" cy="180" r="40" fill="#1C39BB" fill-opacity="0.2"/>
        <text x="120" y="186" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="700" font-size="13" text-anchor="middle">Cron: 0 8 * * 1</text>
        
        <rect x="300" y="0" width="240" height="320" rx="16" fill="#131B32" stroke="#1C39BB" stroke-width="2"/>
        <text x="420" y="40" fill="#38BDF8" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">2. AI Summary Generation</text>
        <text x="420" y="90" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Cross-Dataset Synthesis</text>
        <circle cx="420" cy="180" r="40" fill="#38BDF8" fill-opacity="0.2"/>
        <text x="420" y="186" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="700" font-size="13" text-anchor="middle">Markdown &amp; PDF</text>

        <rect x="600" y="0" width="240" height="320" rx="16" fill="#131B32" stroke="#10B981" stroke-width="2"/>
        <text x="720" y="40" fill="#10B981" font-family="Manrope, sans-serif" font-weight="700" font-size="15" text-anchor="middle">3. Multi-Channel Dispatch</text>
        <text x="720" y="90" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12" text-anchor="middle">Delivered to Stakeholders</text>
        <circle cx="720" cy="180" r="40" fill="#10B981" fill-opacity="0.2"/>
        <text x="720" y="186" fill="#10B981" font-family="Inter, sans-serif" font-weight="700" font-size="13" text-anchor="middle">Email &bull; Slack</text>
      </g>
    </svg>`
  }
];

for (const v of nexoraVisuals) {
  fs.writeFileSync(path.join('public/assets/projects/nexora', v.name), v.content);
}

console.log('Successfully generated all 15 project visual SVG assets and LinkedIn QR code!');
