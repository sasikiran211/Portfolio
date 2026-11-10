# Sasikiran Kakumani — Professional Portfolio & Technical Showcase

A modern, fast, editorial-grade portfolio website engineered for **Sasikiran Kakumani**, B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) undergraduate at Vasireddy Venkatadri Institute of Technology (VVITU).

Positioned for **Data Analyst**, **Data Science**, and **AI/ML** internship and early-career opportunities.

---

## 🎨 Visual Design Authority & Palette

Strictly adheres to the curated editorial palette:

| Element | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Main Surface** | **Cream** | `#EEE8DF` | Primary background, clean and warm editorial base |
| **Cards & Dividers** | **Beige** | `#C4BCB0` | Card borders, secondary surfaces, tags, subtle frames |
| **Typography & Accents** | **Deep Ocean** | `#2C365A` | Headings, primary CTA buttons, navigation, key focal points |
| **High Contrast** | **White** | `#FFFFFF` | Inner cards, elevated reading surfaces, crisp contrast |

### Typography Pairing
- **Headings & Editorial Leads:** `Playfair Display` (Classic Editorial Serif)
- **Body & Technical Specs:** `Plus Jakarta Sans` (Clean, modern geometric sans-serif)

---

## 🏗️ Technical Architecture & Stack

- **Framework:** React 18 + TypeScript + Vite 5 (Ultra-fast build, zero cold-start, pure static output)
- **Styling:** Tailwind CSS with custom palette configuration and typography scale
- **Decoupled Data Architecture:** All content, credentials, projects, and statistics are stored in clean TypeScript data modules under `src/data/` for simple updates without touching UI layout code
- **SEO & Social:** OpenGraph, Twitter cards, meta tags, Schema.org `Person` JSON-LD structured data, XML Sitemap, and `robots.txt`
- **Accessibility:** Semantic HTML5, ARIA labels, responsive navigation with keyboard support, and high-contrast color ratios

---

## 📂 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom Deep Ocean + Cream monogram SVG favicon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Search engine indexing sitemap
│   └── Sasikiran_Kakumani_Resume.pdf # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx # Self-contained GitHub and LinkedIn SVG icons
│   │   ├── About.tsx           # Academic story, data philosophy, and 4 focus pillars
│   │   ├── Certifications.tsx  # Filterable verified credentials gallery with modal
│   │   ├── CodingStats.tsx     # Take U Forward milestone snapshot & platform cards
│   │   ├── Contact.tsx         # Recruiter inquiry form & direct contact channels
│   │   ├── Education.tsx       # VVITU B.Tech (7.5 CGPA), Intermediate, and SSC
│   │   ├── Footer.tsx          # Editorial footer with sitemap and palette attribution
│   │   ├── Hero.tsx            # Impact hero with monogram avatar, CTAs, and badges
│   │   ├── Navbar.tsx          # Sticky glassmorphism header with mobile drawer
│   │   ├── Projects.tsx        # SweetFlow & Written a Queue case studies + modal
│   │   ├── Resume.tsx          # Interactive resume preview + one-click PDF print/download
│   │   └── Skills.tsx          # Categorized skills with honest proficiency labels
│   ├── data/
│   │   ├── certificatesData.ts # 9 verified credentials with details and issuer badges
│   │   ├── codingProfilesData.ts # Take U Forward metrics & platform handles
│   │   ├── profileData.ts      # Bio, academic details, education records, links
│   │   ├── projectsData.ts     # Schema for SweetFlow, Written a Queue, and future work
│   │   └── skillsData.ts       # 5 categories with honest proficiency indicators
│   ├── App.tsx                 # Main application view assembling all sections
│   ├── index.css               # Base Tailwind, typography imports, and custom scrollbar
│   └── main.tsx                # React root mount
├── dist/                       # Production-ready compiled static files
├── tailwind.config.js          # Tailored color palette and typography tokens
├── vercel.json                 # Vercel deployment routing configuration
└── vite.config.ts              # Vite compiler configuration
```

---

## 📊 Verified Records Included

### 1. Coding Profiles & Problem-Solving
- **Take U Forward Milestone Snapshot:**
  - Current Streak: **40 Days**
  - Highest Streak: **51 Days**
  - Problems Solved: **166**
  - Active Days: **189**
  - Contributions: **1,905**
  - Global Rank: **#577**
  - Coins Earned: **~1.02K**
  - DSA Roadmap: Basic (57/292), Core (94/850), Overall (166/1,468)
  - Languages: C++, C, Java, JavaScript, Python
- **CodeChef:** [`sasikiran_24`](https://www.codechef.com/users/sasikiran_24)
- **HackerRank:** [`Sasikiran_24`](https://www.hackerrank.com/profile/Sasikiran_24) (Verified Java & Python certifications)
- **LeetCode:** [`Sasikiran_24`](https://leetcode.com/u/Sasikiran_24/)
- **GeeksforGeeks:** [`SasikianKakumani`](https://www.geeksforgeeks.org/user/SasikianKakumani/)
- **GitHub:** [`sasikiran211`](https://github.com/sasikiran211)

### 2. Verified Certifications
1. **SQL Case Study – SQL Workshop** (Infosys Springboard)
2. **Learning Python** (LinkedIn Learning)
3. **Python Libraries for Data Science** (LinkedIn Learning)
4. **Foundations of Prompt Engineering** (AWS Training)
5. **GenAI Powered Data Analytics Job Simulation** (Tata / Forage)
6. **Full Stack Web Development with AI** (Internshala, 8-week program)
7. **Java (Basic) Certification** (HackerRank)
8. **SQL: From Foundations to Practical Problem Solving**
9. **Python (Basic) Certification** (HackerRank)

### 3. Academic Records
- **Vasireddy Venkatadri Institute of Technology (VVITU):** B.Tech in CSE (AI & ML) — **7.5 CGPA** (Second Year, First Semester)
- **Sri Gowthami Junior College:** Intermediate (MPC) — **97.7%**
- **Sri Gowthami E-techno School:** Secondary School Certificate (SSC) — **90.33%**

---

## 🛠️ How to Update Content

1. **Add or Edit Projects:**
   Open `src/data/projectsData.ts` and edit or append new projects to the `projectsData` array.
2. **Update Coding Streaks & Numbers:**
   Open `src/data/codingProfilesData.ts` to update the snapshot numbers as your milestones advance.
3. **Add New Certifications:**
   Open `src/data/certificatesData.ts` and add your new credential item.
4. **Update Resume File:**
   Replace `public/Sasikiran_Kakumani_Resume.pdf` with your updated PDF file and run `npm run build`.

---

## 🚀 Public Deployment Guide

### Option 1: Vercel (Recommended & Ready)
1. Install Vercel CLI (or connect GitHub):
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```
2. Or push to your GitHub repo and import into [Vercel Dashboard](https://vercel.com):
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Option 2: GitHub Pages (Automated via GitHub Actions)
1. Create a repository on your GitHub account (`https://github.com/new`), e.g., `portfolio`.
2. Push this codebase:
   ```bash
   git remote add origin https://github.com/sasikiran211/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** on your GitHub repository:
   - Build and deployment: Select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` workflow will automatically build and publish the live site to `https://sasikiran211.github.io/portfolio/`!

### Option 3: Netlify
```bash
npx netlify deploy --prod --dir=dist
```
