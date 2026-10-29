# Cynbit Technologies — Interactive AI Architecture Lab & Project Scoping Engine

> **Full Stack Developer Intern Practical Assessment**  
> **Applicant:** Yogesh Patil  
> **Task:** Improve Cynbit's Website — Practical Technical Assessment  
> **Submission Portal:** [Cynbit Candidate Portal](https://www.cynbit.in/candidate/cmsd7jaq9000704l6bcxc7c0m)  

---

## 🌟 Overview & Core Improvement

Cynbit Technologies positions itself as *"The Optimistic Architect"*, specializing in **Autonomous AI Agents**, **Enterprise Software Architecture**, and **High-Performance Engineering**.

### The Problem in Existing Website:
- On the live Cynbit website (`https://cynbit.in`), the primary hero CTA is **"Start discovery"**, which navigates directly to a generic, static text form (`/contact`) with basic fields (`Full Name`, `Email`, `Company`, `Industry`, `Message`).
- Prospective clients, founders, and enterprise technical leads arriving at an AI automation firm have no immediate way to:
  1. Visualize what an AI agent or scalable cloud architecture would look like for their domain.
  2. Estimate project sprints, engineering delivery timelines, or ROI.
  3. Witness an autonomous agent executing workflows in real-time before booking a call.
- This creates substantial friction and drop-off in the discovery-to-lead pipeline.

### The Proposed & Implemented Solution:
We engineered the **Cynbit AI Architecture Lab & Interactive Scoping Engine**:
1. **Interactive Architecture Configurator**:
   - 4-step guided scoping: Domain selection (Autonomous Agents, Enterprise Full-Stack, Cloud Systems, Proprietary SaaS), cognitive capability selection (RAG, Tool-Calling, Human-in-the-Loop, Zero-Trust Guardrails), and cloud/vector database preferences.
2. **Dynamic Live SVG Architecture Topology Visualizer**:
   - Real-time reactive diagram rendering the ingestion pipelines, Cynbit Agent Core, vector databases, and API integrations dynamically as user parameters change.
3. **Real-Time Delivery & ROI Estimation Algorithms**:
   - Computes delivery timelines (e.g. 8-12 weeks), engineering sprints, projected operational efficiency gains (+60% to +90%), and estimated monthly hours saved.
4. **Live Cynbit Autonomous Agent Sandbox**:
   - An interactive, simulated runtime demonstrating how Cynbit AI Agents think, invoke external tools, cross-reference knowledge graphs, and execute enterprise actions with sub-30ms latency.
5. **1-Click Architectural Blueprint & Proposal Exporter**:
   - Compiles full technical requirements into an executive specification document ready to copy (Markdown) or download (`.md` / printable spec), automatically pre-filling discovery inquiries to `opportunities@cynbit.in`.

---

## 🚀 Live Demo & Local Setup

### Running Locally:
```bash
# Clone the repository
git clone <your-repo-url>
cd "Cynbit's"

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production:
```bash
npm run build
```
The optimized bundle is generated in `/dist` and ready for instant deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🛠️ Technology Stack Choices

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | **React 18 + Vite** | Ultra-fast HMR, sub-second production builds (807ms), zero hydration lag, pristine Lighthouse score. |
| **Styling** | **Cynbit Vanilla CSS Design System** | Tokenized CSS variables matching Cynbit's brand palette (Primary `#2563eb`, Cyan `#06b6d4`, Dark Slate `#0a0e1a`, glassmorphism, responsive drawers). No bloated CSS frameworks. |
| **Interactivity** | **Canvas-Confetti + Dynamic SVG** | Rich micro-interactions and visual delight upon blueprint generation without third-party heavy graphing dependencies. |
| **Icons & Typography** | **Plus Jakarta Sans + Google Material Symbols** | Exact typographic consistency with Cynbit's production design. |

---

## 📂 Project Structure

```
Cynbit's/
├── dist/                     # Optimized production bundle
├── public/
│   ├── favicon.svg           # Cynbit SVG favicon
│   └── logo.svg              # Cynbit vector logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive navigation with Lab trigger
│   │   ├── Hero.jsx          # Hero section with live status & CTAs
│   │   ├── BlueprintLab.jsx  # Interactive scoping & SVG visualizer (Core Feature)
│   │   ├── AgentSandbox.jsx  # Live autonomous agent runtime simulator
│   │   ├── EcosystemShowcase.jsx # Infrastructure, SaaS & BitElevate showcase
│   │   ├── MetricsAndTestimonials.jsx # Validation & client proof points
│   │   ├── Footer.jsx        # Jaipur HQ details, inquiry channels
│   │   └── BlueprintModal.jsx # Markdown/Download specification exporter
│   ├── App.jsx               # Main application container
│   ├── index.css             # Cynbit architectural design system
│   └── main.jsx              # React DOM entrypoint
├── index.html                # SEO-optimized HTML5 entrypoint
├── package.json              # Project dependencies & scripts
├── vite.config.js            # Vite configuration
├── TECHNICAL_REPORT.md       # Comprehensive assessment submission report
└── README.md                 # Project documentation
```

---


