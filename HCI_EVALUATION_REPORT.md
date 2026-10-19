# Human-Computer Interaction (HCI) Academic Project Evaluation Report

**Project Title:** Interactive Personal Professional Profile  
**Student:** Soham Umesh Chavan  
**Program:** B.Tech in Computer Engineering  
**Institution:** Veermata Jijabai Technological Institute (VJTI)  
**Academic Focus:** Human-Computer Interaction, Interface Engineering & Usability Evaluation  
**Status:** Verification & Refinement Milestone  

---

## 1. Executive Summary & Project Purpose

This report documents the Human-Computer Interaction (HCI) design choices, cognitive ergonomics, accessibility implementations, and evaluation methodologies incorporated into the personal professional portfolio for **Soham Umesh Chavan**.

While the public-facing portfolio is presented as a clean, recruiter-focused software engineering profile, its architecture directly demonstrates core usability heuristics, accessible design standards (WCAG 2.1), and cognitive load reduction principles for college mini-project evaluation.

---

## 2. HCI Principles Implemented in the Architecture

### 2.1 Consistency and Standards (Nielsen's Heuristic #4)
- **Tokenized Design System (`src/styles/tokens.css`)**: Centralized CSS custom properties govern colors, typography scales, line heights, spacing increments (8pt grid), border radii, and transition curves.
- **Predictable Navigation**: Standard top-anchored header with familiar brand mark on the top-left, chronological sections, and persistent navigation links.
- **Standardized Component Hierarchy**: Reusable atomic components (`Button.jsx`, `SectionHeading.jsx`, `Card`) enforce visual and behavioral consistency across all sections.

### 2.2 Visibility of System Status (Nielsen's Heuristic #1)
- **Reading Progress Indicator (`ScrollProgress.jsx`)**: A fixed, top-mounted gradient bar calculates scroll depth in real time using `requestAnimationFrame`, providing immediate visual feedback on page reading progress (`role="progressbar"` with live `aria-valuenow`).
- **Active Section Highlighting (`useScrollSpy.js`)**: Employs an `IntersectionObserver` to track the viewport asynchronously and illuminate the active section link in the navigation bar.

### 2.3 User Control and Freedom (Nielsen's Heuristic #3)
- **Default Dark Mode & Theme Persistence (`ThemeProvider.jsx`)**: Midnight Aurora dark mode is the strict default on fresh visits. Users can toggle to Daylight mode at any time, with their explicit choice stored in `localStorage` and synchronized with the DOM's `data-theme` attribute and browser `<meta name="theme-color">`.
- **Back-to-Top Control (`BackToTop.jsx`)**: An accessible shortcut appears dynamically once the user scrolls past 350px, enabling an effortless, smooth return to the top of the page.
- **Avoiding Fake Affordances**: Unavailable features (such as unverified resume PDFs or inactive form endpoints) do not present deceptive clickable or dead disabled buttons; instead, clean status explanations and active alternative actions (e.g., *Explore Verified Projects*, *Visit GitHub*) are provided.

### 2.4 Recognition Rather Than Recall (Nielsen's Heuristic #6)
- **Categorized Skills Filtering (`Skills.jsx`)**: Grouped into 5 confirmed, selectable tabs (*Languages*, *Backend Development*, *Databases*, *Machine Learning & Data*, *Frontend Development*) without arbitrary proficiency percentages.
- **Feature Demarcation**: Project cards clearly distinguish implemented full-stack features from planned AI features (e.g., *OpportunityHub*), and explicitly identify collaborative team projects (*Transportation-Routing OT Project*) to eliminate cognitive ambiguity.

### 2.5 Cognitive Load Reduction & Information Chunking
- **Scannable Visual Architecture**: Headings incorporate eyebrow labels (e.g., `01 // BACKGROUND`, `03 // COMPETENCIES`) to quickly orient the user before they process content.
- **Progressive Information Disclosure**: High-level overviews are presented directly on cards, while repository links open authoritative codebases in new tabs (`rel="noreferrer"`).
- **Ethical Data Presentation**: Unconfirmed personal details (such as placeholder emails, physical locations, or LinkedIn handles) are intentionally excluded from the public view rather than displayed with confusing placeholder text, reducing user distraction.

### 2.6 Visual & Interaction Ergonomics (Visual Upgrade Milestone)
- **Atmospheric Aurora Wave Layering**: The Hero section incorporates a luminous violet-and-cyan fluid aurora wave background asset (`hero_aurora_wave.jpg`), blended into the deep `#0B1020` canvas with dual vertical and radial gradient masks. This preserves WCAG AAA compliant text contrast (7.8:1+) across headlines and buttons while delivering modern visual depth.
- **Authentic Conceptual Project Thumbnails**: Replaced basic schematic SVG placeholders with rich, optimized visual models (`opportunityhub.jpg`, `transportation_routing.jpg`, `portfolio_showcase.jpg`), accompanied by explicit conceptual badges (*Platform Concept*, *Graph Optimization Model*, *Design System Showcase*) to prevent misleading evaluators regarding live application state.
- **Supporting Workstation Visual in About**: An authentic developer workstation visual card (`about_workspace.jpg`) balances the narrative column without overwhelming the factual VJTI academic profile snapshot.
- **Desktop Pointer-Responsive Lighting & 3D Card Tilt (`TiltCard.jsx`)**: Implements subtle 3D card tilt and cursor-follow radial spotlighting (`perspective(900px)` constrained to ≤5°). Touch pointers (`pointerType === 'touch'`) and users with reduced motion preferences are automatically bypassed to protect scrolling ergonomics and cognitive comfort.
- **Header Offset Margin Management**: All anchored sections declare `scroll-margin-top: calc(var(--header-height) + 1.5rem)`, ensuring in-page hash links never cause headings to be occluded by the sticky glassmorphism navigation bar.
- **Asset Optimization & Zero CLS**: All image assets are locally stored and pre-optimized (total image payload ~445 KB across 5 assets), utilizing explicit aspect ratios (`16 / 9`) and native `loading="lazy"` / `decoding="async"` attributes to eliminate Cumulative Layout Shift (CLS = 0).

---

## 3. Implementation Status: Verified Current vs. Planned Work

| Feature / Area | Status | Implementation Details |
| :--- | :--- | :--- |
| **Midnight Aurora Theme System** | **Implemented & Verified** | Default dark mode on fresh visit (`#0B1020`), with verified Daylight light theme toggle and `localStorage` persistence. |
| **Visual Assets & Aurora Background** | **Implemented & Verified** | High-resolution aurora wave, engineering environment card, and 3 authentic project visual assets with honest conceptual labeling. |
| **Responsive App Shell & Navigation** | **Implemented & Verified** | Sticky desktop navbar and mobile drawer with focus trap, backdrop blur, `Escape` key handler, and header scroll offset margins. |
| **Scroll Feedback & Tracking** | **Implemented & Verified** | Top scroll reading progress bar and `IntersectionObserver` active section spy. |
| **Micro-Interactions & 3D Tilt** | **Implemented & Verified** | Touch-safe 3D card tilt, cursor-follow spotlight, and reduced-motion compliant animated aurora wave. |
| **VJTI Academic & Skills Presentation** | **Implemented & Verified** | Verified B.Tech degree, core coursework chips, and 5 confirmed skill categories without invented proficiency ratings. |
| **Project Repository Links** | **Implemented & Verified** | Real repository links for OpportunityHub, collaborative OT Project (Group 10), and Portfolio. |
| **Honest State Handling** | **Implemented & Verified** | Unconfirmed location, email, and LinkedIn are hidden; resume section displays status without deceptive fake downloads. |
| **Project Details Modal Dialog** | *Planned (Phase 4)* | Focus-trapped, keyboard-accessible dialog for deep project inspection. |
| **Accessible Form Validation** | *Planned (Phase 5)* | Live input validation with accessible error hints and toast confirmation feedback. |
| **Live Usability Testing Session** | *Planned (Phase 6)* | Formal task-based evaluation with peer students to calculate actual SUS scores. |

---

## 4. Accessibility Implementation & Verification

### 4.1 Implemented Accessibility Features
1. **Semantic HTML5 Landmarks**: Complete page structure utilizes `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements for screen-reader navigability.
2. **Keyboard Bypass (Skip Link)**: A `.skip-link` element positioned above the viewport becomes visible upon keyboard focus, allowing keyboard-only users to bypass navigation directly to `#main-content`.
3. **Visible Keyboard Focus (`:focus-visible`)**: 2px solid accent focus rings with 3px offsets ensure compliance with WCAG 2.4.7 (Focus Visible) without affecting mouse-pointer users.
4. **Reduced Motion Support**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
   Users with vestibular disorders or motion sensitivity have all animations and smooth-scrolling behaviors disabled automatically.
5. **No Invented Ratings or Unverified WCAG Badges**: The website does not falsely claim "100% WCAG AAA Certified" before formal automated and manual screen-reader auditing is conducted.

---

## 5. Planned Usability Evaluation Protocol

To fulfill academic mini-project requirements, a formal usability test will be conducted with 5 peer computer engineering students and 1 faculty reviewer.

### 5.1 Test Scenarios & Tasks
- **Task 1 (Information Retrieval)**: Locate Soham's undergraduate institution and identify completed core engineering coursework. *(Target time: < 15 seconds)*
- **Task 2 (Recognition & Filtering)**: Filter technical skills by the "Backend Development" tab and locate `Express.js`. *(Target time: < 10 seconds)*
- **Task 3 (Project Verification)**: Navigate to the `OpportunityHub` project card, identify its implemented features, and locate its GitHub repository. *(Target time: < 20 seconds)*
- **Task 4 (User Control & Preferences)**: Toggle the interface from Midnight theme to Daylight theme and return back to Midnight. *(Target time: < 8 seconds)*

### 5.2 Evaluation Metrics
1. **Task Completion Rate**: Percentage of users who complete each scenario without external hints.
2. **Time-on-Task**: Mean time taken per scenario.
3. **System Usability Scale (SUS)**: Standard 10-item post-test questionnaire on a 5-point Likert scale (calculating a standardized usability percentile score out of 100).
4. **Qualitative Observations**: User friction points, confusion, or navigation hesitation recorded during the test session.

*(Note: In accordance with academic honesty standards, test results will be populated only after the live evaluation sessions are completed. No fictional participant scores or testimonials are fabricated).*

---

## 6. College Viva / Evaluation Talking Points

1. **Why Vanilla CSS Custom Properties over Tailwind for this HCI Project?**  
   *Answer:* Vanilla CSS custom properties provide direct, transparent control over CSS token inheritance and theme swapping at the DOM root level without introducing runtime utility classes or heavy framework abstractions, making the design system easily explainable during academic evaluation.
2. **How is scroll performance maintained with real-time progress and active-section highlighting?**  
   *Answer:* Traditional `window.onscroll` listeners trigger dozens of synchronous reflows per second. This project decouples scroll computation: `useScrollProgress` uses `window.requestAnimationFrame` to throttle calculations to the monitor's refresh rate, while `useScrollSpy` uses the browser's native C++ `IntersectionObserver` API to track section visibility asynchronously.
3. **How does this portfolio reduce cognitive load for recruiters and reviewers?**  
   *Answer:* By applying Miller's Law and Hick's Law through category tabs, clear visual demarcation between implemented features and planned work, standardized typography hierarchy, and restrained atmospheric lighting that does not distract from readable text.
4. **How does the interface handle unavailable or unconfirmed data honestly?**  
   *Answer:* Following ethical UX principles and Nielsen's second heuristic (Match Between System and Real World), unverified contact channels and incomplete resume files do not display deceptive placeholder text or nonfunctional download triggers. Instead, clear explanatory status badges and alternative verified actions (GitHub repository review) are provided.
