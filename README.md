# Sasikiran Kakumani — Professional Portfolio & Technical Showcase

[![Deploy to GitHub Pages](https://github.com/sasikiran211/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/sasikiran211/Portfolio/actions/workflows/deploy.yml)

A high-performance, responsive portfolio website engineered for **Sasikiran Kakumani**, B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) undergraduate at Vasireddy Venkatadri Institute of Technology (VVITU).

Positioned for **Data Analyst**, **Data Science**, and **AI/ML** technical internship and early-career opportunities.

---

## 🎨 Visual Design Authority & Palette

Engineered with a professional Persian Blue, Black, and White design system featuring complete Light and Dark theme switching:

| Element | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | **Persian Blue** | `#1C39BB` | Primary CTAs, active navigation, focus rings, key metric highlights |
| **Dark Base** | **Deep Obsidian / Black** | `#080808` / `#0C0C0C` | Dark theme surface, elevated bento cards, technical depth |
| **Light Base** | **Pure White / Neutral** | `#FFFFFF` / `#F9FAFB` | Light theme surface, crisp readability, elevated editorial base |
| **Success Indicator**| **Emerald** | `#10B981` | Verified status, live streak indicators, platform validation |

### Typography Pairing
- **Headings & Key Metrics:** `Manrope` (Clean modern geometric grotesque)
- **Body & Editorial Specs:** `Inter` (Ultra-legible system typography)
- **Technical Telemetry:** `JetBrains Mono` / Monospace (Code metrics, tags, data parameters)

---

## 🏗️ Technical Architecture & Stack

- **Framework:** React 18 + TypeScript + Vite 5 (Ultra-fast build, optimized asset chunking)
- **Styling:** Tailwind CSS with custom theme variables, dark mode class switching, and responsive breakpoints
- **3D Interactive Graphics:** Three.js / WebGL geometric data core with mouse parallax tracking and theme adaptation
- **Email Automation:** Vercel Serverless Function (`/api/contact`) integrated with **Resend**, featuring honeypot spam protection, rate limiting, and dual notification delivery
- **Custom Cursor:** Elegant navy-blue circular pointer with smooth trailing lerp physics, interactive hover feedback, touch-screen auto-disabling, and reduced-motion support
- **Decoupled Data Architecture:** All content, credentials, projects, and statistics are stored in clean TypeScript data modules under `src/data/` for simple updates without touching UI layout code
- **SEO & Social:** OpenGraph, Twitter cards, meta tags, Schema.org `Person` JSON-LD structured data, XML Sitemap, and `robots.txt`

---

## 📂 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── api/
│   ├── contact.js              # Serverless contact form handler (Resend integration)
│   └── contact.ts              # TypeScript definition and serverless handler
├── public/
│   ├── favicon.svg             # Custom Persian Blue SK monogram SVG favicon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Search engine indexing sitemap
│   └── Sasikiran_Kakumani_Resume.pdf # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx # Self-contained GitHub and LinkedIn SVG icons
│   │   ├── About.tsx           # Academic profile, authentic bio narrative, 9 focus areas
│   │   ├── Certifications.tsx  # 9 verified credentials with live search & modal details
│   │   ├── CodingStats.tsx     # Take U Forward (166 problems, rank #577) & platform stats
│   │   ├── Contact.tsx         # Contact inquiry form with serverless Resend dispatch
│   │   ├── CustomCursor.tsx    # Navy blue trailing animated desktop cursor
│   │   ├── Education.tsx       # Chronological academic milestones (SSC, Inter, B.Tech)
│   │   ├── Footer.tsx          # Full sitemap and attributions
│   │   ├── Hero.tsx            # Headline, authentic introduction, CTAs & 3D WebGL core
│   │   ├── Navbar.tsx          # Sticky glass navigation with Light/Dark mode switcher
│   │   ├── Projects.tsx        # 3 featured projects with architectural modal
│   │   ├── Resume.tsx          # ATS-friendly resume view with download & print
│   │   └── ThreeCanvas.tsx     # Three.js 3D geometric visualizer
│   ├── context/
│   │   └── ThemeContext.tsx    # React theme provider with localStorage persistence
│   ├── data/
│   │   ├── certificatesData.ts # 9 verified credentials catalog
│   │   ├── codingProfilesData.ts # Take U Forward, CodeChef, LeetCode, HackerRank stats
│   │   ├── profileData.ts      # Profile, bio narrative, academic milestones
│   │   ├── projectsData.ts     # Civic Flow, RetainIQ, Nexora AI Dashboard
│   │   └── skillsData.ts       # Categorized skills and proficiency rankings
│   ├── App.tsx                 # Core layout wrapping all 8 sections in order
│   ├── index.css               # Tailwind directives and theme rules
│   └── main.tsx                # Application root mounting
├── .env.example                # Example environment configuration for Resend
├── package.json                # Project dependencies and build scripts
├── tailwind.config.js          # Tailwind CSS theme extension
├── test-api.js                 # API validation and rate-limiting test suite
├── vercel.json                 # Vercel deployment configuration & API rewrites
└── vite.config.ts              # Vite bundler configuration
```

---

## 🚀 Local Development Setup

1. **Clone repository:**
   ```bash
   git clone https://github.com/sasikiran211/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional for email):**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Resend API credentials:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_RECEIVER_EMAIL=sasikirankakumani@gmail.com
   CONTACT_SENDER_EMAIL=Portfolio Contact <onboarding@resend.dev>
   ```

4. **Run API Test Suite:**
   ```bash
   npm run test:api
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

6. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🌐 Public Deployment

### Option 1: Vercel (Recommended for full serverless email functionality)
1. Import repository on [Vercel](https://vercel.com/new).
2. Set Environment Variables in Project Settings:
   - `RESEND_API_KEY`
   - `CONTACT_RECEIVER_EMAIL`
   - `CONTACT_SENDER_EMAIL`
3. Click **Deploy**. Vercel will build the frontend and deploy the `/api/contact` serverless function.

### Option 2: GitHub Pages (Automated via GitHub Actions)
- Pushing to the `main` branch automatically triggers `.github/workflows/deploy.yml` which builds and publishes the site to GitHub Pages.

---

## 📄 License & Attribution

&copy; 2026 Sasikiran Kakumani. All rights reserved.
