# Portfolio Build Brief for Codex

> **Mission:** Design, build, validate, and prepare for deployment a minimal, premium-quality personal engineering portfolio for Amine (use the exact full name and spelling from the CV). This is an IMPLEMENTATION brief, not merely a request for mockups, plans, or suggestions.
>
> **Audience:** Recruiters, engineering managers, internship/PFE evaluators, and potential collaborators hiring for software engineering, data engineering, and applied AI/ML roles.
>
> **Outcome:** A fast, professional, trustworthy portfolio that communicates what Amine actually built, what he personally contributed, and why his work matters. Elegance comes from content quality, typography, whitespace, and careful details - not flashy effects.

---

## 0. Instructions to Codex: read this first

You are the lead product designer, frontend engineer, technical writer, and QA reviewer for this portfolio.

**Do not stop at recommendations. Implement the working website in the current repository.** Inspect the repository first; keep good existing work, improve or replace weak parts, and do not destroy unrelated files. Choose pragmatic tools rather than introducing unnecessary complexity.

Work autonomously on non-controversial design and engineering decisions. Do not block progress because some source material is missing. For missing facts, leave an explicit, centrally managed `needsVerification` or TODO entry and omit unsupported public claims. **Never invent** degrees, graduation dates, company names, employer titles, work history, awards, client outcomes, technologies, performance numbers, or project demos.

Before writing promotional copy, review the available CV and technical evidence. In the final response, list what was implemented, how to run it, what was verified, and exactly what remains to be supplied or confirmed.

### Where to find the source material

1. **CV (most important for identity, experience, education, achievements, and skills).** Search the local repository for a PDF or DOCX with `CV`, `resume`, `curriculum`, or `Amine` in its filename. Recommended private input: `input/cv.pdf` or `input/cv.docx`. It may be named differently: discover it, do not assume it is absent based only on the suggested path.
2. **Personal GitHub:** https://github.com/AB-Amine
3. **Previous personal website:** https://ab-amine.github.io/
4. **Collaborative portfolio / team work:** https://nexolith-dev.vercel.app/
5. **Local project assets and evidence:** inspect `assets/`, `public/`, `input/`, `screenshots/`, documentation, linked repositories, and any project descriptions supplied with the CV.
6. **User-provided information:** later, explicit instructions from the portfolio owner override stylistic defaults here, but do not justify inventing facts.

If network access is available, inspect the linked projects and their code/README content. If links cannot be opened, use local sources and identify what remains unverified. Never treat a failed fetch as proof that a project does not exist.

### Source-of-truth priorities

- **Identity, degree, school, dates, internships, job titles:** CV and documented evidence.
- **Project architecture, libraries, real functionality:** repository source code and reproducible demos (not marketing language from a README alone).
- **Individual contribution to team projects:** documented ownership, Git history, team description, or the owner's explicit account.
- **Awards, rankings, impact claims:** CV and/or public evidence; otherwise use modest, non-numeric wording or omit.
- **Links:** verify that each URL is real and points to the intended artifact before showing it as clickable.
- **Tech stack:** display only technologies actually used in the project; do not claim skill mastery because a logo or dependency appears somewhere.

Create a small non-public content-verification checklist as part of the implementation notes. Do not publish private evidence or personal data.

---

## 1. Positioning and content strategy

**Primary purpose:** secure interviews and opportunities for PFE internships, graduate/early-career engineering roles, and technically serious collaborations.

**Desired perception:** capable, thoughtful, technically curious, dependable, and able to build products end-to-end. Present strong work confidently, without pretending to be a senior engineer.

**Working positioning (revise after CV review):**

> Software & Data Engineering | Applied AI | Building useful products end-to-end

**Content rules:**

- Write in **clear, polished English** by default. Use professional, natural sentences and concrete verbs; avoid buzzword-heavy AI-generated marketing prose.
- If the CV confirms current student status, show it naturally in the hero/about. If not confirmed, do not infer it.
- Lead with evidence: projects, role, problem solved, methods, technical decisions, and outcomes.
- Limit the homepage to **3-4 best projects**. Additional work may go to a restrained "Other work" subsection only when useful.
- Distinguish *personal*, *academic*, *hackathon*, and *collaborative* projects; credit teammates appropriately.
- Do not imply a collaborative Nexolith project was built alone. Do not imply Nexolith is a formal employer or founded company without verification.
- Do not claim "production-ready", "enterprise-grade", "100% accurate", "AI architect", or "millions of requests" unless supportable.
- No empty achievements, invented testimonials, fake client logos, stock statistics, or fictional professional experience.

---

## 2. Project selection: inspect before deciding

The projects below are **priority candidates, not verified final claims**. Inspect actual source code, available project media, and CV before writing their case studies. Choose the best 3-4 based on relevance, completeness, individual contribution, technical depth, and available evidence.

### Candidate A - Khadija AI (prefer as hero project if supported by evidence)

Potential focus: AI-powered mobile health awareness with Darija-language interaction and computer-vision features.

- Investigate where the actual project repository, demo, screenshots, and architecture are stored. It may be in a team repository or linked elsewhere, not necessarily under the personal GitHub account.
- Confirm **what is implemented**: chatbot, model/provider, app framework, computer vision, care-summary features, and safeguards; don't assume the feature list is complete or operational.
- Confirm Amine's personal role and any teammates, plus whether a hackathon placement can be substantiated.
- Present as an *awareness/educational* application, not a validated diagnostic system or predictor of medical risk.
- If code is private, make a factual case study with permitted screenshots and a demo/video; do not fabricate a source link.

### Candidate B - Quantum Analytics / real-time data platform

Candidate repository: https://github.com/AB-Amine/dashbord_simple

- Inspect the actual Kafka/PySpark/database/dashboard components and whether they run together.
- Explain the real, demonstrated ingestion -> processing -> storage -> visualization flow.
- Include a simple architecture graphic only if it matches the code.
- Never repeat ambitious performance figures from README files without measurements. Report validated benchmarks or no metrics at all.
- Name this project according to its supported functionality, not the most impressive-sounding README heading.

### Candidate C - MediGest / appointment and clinic management

Candidate repository: https://github.com/AB-Amine/gestion_rendez_vous

- Confirm stack, role, implemented features, and deployment maturity.
- Prefer showing concrete engineering work: data models, authentication, app flows, validation, architecture, and tests.
- Do not publicly expose insecure demo credentials, real patient data, or personal information. If the app has security limitations, state them honestly and avoid linking to an unsafe public deployment.
- Use sanitized screenshots and synthetic demo data.

### Candidate D - strongest Nexolith collaborative product

Reference: https://nexolith-dev.vercel.app/

- Review listed products and choose **one** only if it provides distinct evidence of full-stack/product collaboration and Amine's participation.
- A Zakat/financial-calculation application is a candidate **only if the portfolio, CV, or source confirms it**.
- Show the team context, scope of work, stack, and Amine's specific contribution.
- If the collaborative work cannot be verified, substitute the best supported individual repository, rather than inventing details.

### Reserve options

- https://github.com/AB-Amine/project-ML (machine learning): consider if well documented, evaluated, and reproducible.
- Any other substantial verified project from the CV, GitHub, or Nexolith may outrank the candidates above.
- Calculator/basic static coursework is not a flagship by default; keep accessible through GitHub but do not feature prominently unless it contains unusually strong work.

### What each featured project needs

A home-page card containing:

- Real screenshot, interface still, or meaningful architecture visual; if unavailable, use an elegant text/typography-based card rather than an unrelated stock photo.
- Real title and honest one-sentence summary.
- 2-4 verified stack labels.
- "My role" or "Team project" context when relevant.
- Link to its case study, plus **working** GitHub and/or demo links only when available.

A short case-study detail page containing:

1. The problem and intended audience.
2. Project context (personal, academic, hackathon, collaborative) and ownership.
3. What was built and what is actually working.
4. Technical architecture and significant engineering decisions.
5. Challenges, trade-offs, testing, and lessons learned.
6. Results/recognition when verifiable.
7. Screenshots, code, and live/video demo links that work.

Do **not** stretch a simple project into a long, inflated case study. A clear two-minute read is preferable to generic walls of text.

---

## 3. Website information architecture

Build a small, coherent site with top-level sections in the following order. No unnecessary pages or navigation items.

### Top navigation

Minimal wordmark, e.g. `Amine.` (correct name from CV), and anchors:

`Projects` | `Experience` | `Skills` | `About` | `Contact`

A small `Resume` action may appear in navigation if an approved public CV is available.

### Hero / above the fold

Within the first screen, answer:

- Who is this person?
- What area of engineering do they work in?
- What kinds of problems and products have they built?
- Where can I see the work or resume?

Include:

- Correct name and one strong, specific professional headline.
- 1-2 short sentences that connect software, data, and applied AI **only as supported by evidence**.
- Primary CTA: `View projects`.
- Secondary CTA: `Download resume` if the approved PDF exists, otherwise `Contact me`.
- Discreet links to GitHub and verified LinkedIn.
- Optional small verified achievement line (e.g. hackathon award) only with evidence.

Avoid: typewriter text, big animated particles, rotating slogans, generic programmer stock photos, fake counters, and crowded technology logo clouds.

### Selected projects

Show **3-4 projects** in a clean grid, with the strongest first. Make Khadija AI first if it can be verified and has sufficient material. Card design must be consistent. Project detail pages must feel like part of the same design system.

### Experience

Read this section **from the CV**, not from guesses about GitHub activity.

For each documented position:

- Employer / organization and verified role title.
- Start and end dates as given (do not infer months).
- 2-3 concise, outcome-focused bullets showing personal contributions, systems/tools, and observable results.
- If work was freelance, volunteer, academic, or collaborative, label accurately.
- Do not fill the page with empty experience cards. If no formal experience is verified, use a tasteful "Engineering experience & collaborations" treatment drawn from real roles or omit the section until evidence is provided.

### Skills

Extract all possible candidate technologies from the CV, but publish only credible, relevant skills. Cross-check against repositories when possible. Organize into **four concise groups at most**:

- Languages & foundations
- Backend & web engineering
- Data engineering & databases
- AI/ML & engineering tools

Adapt category names to what is actually evidenced. Show about 5-8 representative items per group *maximum*; remove irrelevant items rather than creating a massive technology directory. No percentage bars, star ratings, or unjustified "expert" labels.

### About and education

A readable, human paragraph (70-110 words) explaining technical interests, work approach, what Amine enjoys building, and current career direction using only verified information.

Include education in a compact format: institution, program/major, dates if documented, and optionally one relevant specialization or qualification. Certifications/awards may have a concise section if there are substantive verified ones; otherwise skip it.

### Contact / footer

Friendly professional closing line; email link, GitHub, LinkedIn if verified, and CV action if available. Use a `mailto:` link rather than a complex email backend unless the repository already has a secure working contact system. All external links must be valid.

No public home address, date of birth, national ID, or personal telephone number by default. Do not publish contact details beyond those appropriate for a professional public website.

---

## 4. Visual design direction - minimalist, refined, recruiter-friendly

**Mood:** understated, engineered, calm, confident, and premium. Think an excellent design-conscious engineer's resume turned into an interactive website, *not* a SaaS landing page and *not* a futuristic AI dashboard.

### Design system

| Element | Direction |
| --- | --- |
| Primary theme | Light / warm-white, with ink-dark text |
| Background | `#FAFAF8` or similar near-white |
| Primary text | `#151A23` or near-black navy |
| Muted text | `#64748B` with accessible contrast |
| Accent | One restrained blue, e.g. `#2563EB` |
| Borders | Thin neutral gray, e.g. `#E5E7EB` |
| Fonts | Geist, Inter, or another high-quality sans-serif, max 1-2 families |
| Content width | Approximately 1080-1160px desktop maximum |
| Whitespace | Generous; clear vertical rhythm and breathing room |
| Cards | Subtle borders, 12-16px radius, near-flat surfaces |
| Shadows | Minimal or none; never large floating UI shadows |
| Motion | Quick, subtle fades/hover states; respect reduced motion |

Choose a cohesive subset, use CSS variables/design tokens, and avoid accidental mix-and-match styling. Dark mode is optional and secondary; it must not delay the usable light-mode experience.

### Layout details

- Sticky or simple navigation with a subtle divider, not a bulky glassmorphism header.
- Hero with clear hierarchy; avoid giant decorative shapes competing with text.
- Projects use restrained cards; prefer a 2-column desktop grid and 1-column mobile layout.
- Readable 16-18px body text and comfortable line lengths; avoid tiny gray text.
- Consistent section headings and generous section spacing.
- Use actual project imagery where authorized. Missing imagery: create simple custom line-based SVG/diagram visuals from verified technical facts, not fake screenshots.
- Icons should be minimal and consistent. Do not use meaningless icon decoration everywhere.
- Responsive at 320px mobile widths up through desktop, including touch targets and readable navigation.
- Use a polished, subtle hover/focus interaction for buttons, links, and cards. No scroll-jacking or attention-grabbing animations.

### Copywriting voice

Aim for: "I built X to solve Y, using Z. My contribution was A, and we learned/measured B."

Avoid: "visionary digital transformation architect leveraging cutting-edge revolutionary synergies" or similar claims.

The result should look credible if a senior engineer, recruiter, or engineering manager views it for 30 seconds.

---

## 5. Implementation and engineering rules

### Stack decision

**Inspect the current repository first.** If there is an existing maintainable React/Next.js/Vite app, evolve it rather than blindly replacing everything. If starting from scratch or a very limited old static site, prefer:

- TypeScript
- Next.js App Router with static-friendly pages, or Vite + React if simpler and equally suitable for the existing deployment context
- Tailwind CSS or carefully structured CSS modules (choose one coherent method)
- Very few dependencies; an icon package only if actually useful
- Deployment compatible with Vercel

Do not build a backend, CMS, database, AI chat widget, authentication system, or complicated build pipeline for a static personal portfolio. This portfolio must be easy to maintain without paying for services.

### Maintainable content

Store editable facts in a **central typed data layer**, for example `src/data/portfolio.ts`, not scattered across layout components. Include structures for:

- Identity, headline, summary, professional links, and CV path.
- Experience (role, organization, dates, bullets, evidence status).
- Education and achievements (only verified facts).
- Skills, grouped and ordered intentionally.
- Projects (slug, name, summary, stack, personal role, team context, description, links, screenshot, validation status, highlights, challenges).

The site should not show incomplete, placeholder, or unverified items to visitors. Provide safe fallbacks when a link or visual asset is unavailable. Use content-driven rendering and static project pages.

### CV handling: important privacy requirement

- Read the user's CV to extract relevant skills, experience, education, and professional contacts.
- A file in `input/` is **private source material**, not a public download. Add `input/` to `.gitignore` if it is local to this portfolio repo. Never embed or commit the private original automatically.
- Publish a CV download at `/cv.pdf` only if `public/cv.pdf` is a **public-approved, privacy-reviewed** copy.
- If only a private CV is present, build the portfolio normally but hide the `Download resume` button until a safe-to-publish copy exists. Include a clear TODO in the completion summary.
- Avoid transferring private address, date of birth, personal identifiers, or phone numbers into website copy. An email address is acceptable only if it is intended for professional contact.
- If CV parsing is imperfect, do not guess; check the document again or mark uncertain information for confirmation.

### Required functionality

- Working anchor navigation; mobile menu only if needed.
- Accessible project cards and case-study routes.
- Working GitHub / demo / LinkedIn links only when available.
- Clear CV open/download action if a public CV exists.
- Contact via professional email if sourced.
- Basic 404/not-found experience and polished empty states.
- Real metadata: title, description, canonical URL when final domain is known, Open Graph/Twitter image, favicon, sitemap, robots configuration where appropriate.
- Content-specific social preview, not generic default framework branding.
- Semantic HTML, accessible headings, keyboard navigability, visible focus states, contrast meeting WCAG AA where practical, descriptive alt text, reduced-motion support.
- Responsive images and appropriate lazy loading below the fold. Avoid heavy libraries and layout shifts.
- No secrets, passwords, API keys, raw CV data, or private documents in public assets or source-controlled files.

---

## 6. Execution sequence - do the actual work

### Phase 1 - Inspect and verify

1. Examine project tree, package manager, current pages/components, styling, assets, and build commands.
2. Locate and read CV PDF/DOCX. Extract factual identity, education, roles, dates, skills, relevant achievements, and contact information.
3. Inspect GitHub, Nexolith, project READMEs/source, and supplied local evidence as access permits.
4. Rank the best 3-4 projects on proof, engineering depth, relevance, and diversity (AI, data, software, collaboration).
5. Record content gaps in `CONTENT_TO_VERIFY.md` without including private CV information.
6. Decide what can be published immediately; omit unsupported claims and links.

### Phase 2 - Design and implement

1. Choose the least complex sensible stack consistent with the repository.
2. Create consistent tokens, typography, layouts, spacing, and reusable components.
3. Implement hero, project grid, experience, skills, about, education/achievements, contact, and footer.
4. Implement 3-4 project case-study pages only when the project facts are grounded; otherwise show fewer verified projects instead of fillers.
5. Use real authorized screenshots or tasteful verified diagrams. Optimize all images.
6. Wire every functioning link and CTA; no `#` placeholders, broken targets, fake buttons, or lorem ipsum.
7. Add responsive behavior, a11y, SEO basics, and Vercel-ready configuration.

### Phase 3 - Validate and polish

1. Install dependencies with the existing package manager; don't mix lockfiles.
2. Run build, lint, typecheck, and tests where available; **fix errors** rather than merely reporting them.
3. Inspect 320px, 375px, 768px, 1024px, and large desktop layouts where preview/browser tooling is available.
4. Check every internal and external link, navigation anchor, CV file, social link, project image, and case-study route.
5. Check keyboard access, focus order, color contrast, reduced motion, alt text, and heading hierarchy.
6. Run Lighthouse or equivalent if available; aim for 90+ in performance, accessibility, best practices, and SEO on mobile, without fabricating scores.
7. Remove unused assets, placeholder copy, console errors, suspicious dependencies, and unnecessary scripts.
8. Verify no CV/private data has been exposed in public output or commits.
9. Write short setup and deployment steps in the main project documentation, preserving this brief if needed.

### Phase 4 - Final deliverables

Provide:

- The **implemented, functioning website** in this repository (not Figma screenshots alone).
- A concise `README` section for local startup, build, and Vercel deployment.
- Typed, easy-to-edit content data.
- Genuine project case studies as supported by evidence.
- `CONTENT_TO_VERIFY.md` with precise outstanding facts or missing assets, if any.
- A final summary with: changes made, project choices and rationale, commands run/results, any inaccessible sources, and high-priority next actions.

Do not claim deployment has succeeded if it has not actually been deployed. Do not claim tests passed if they were not run.

---

## 7. Acceptance criteria - definition of done

The portfolio is ready for professional use **only if**:

- [ ] In 10 seconds, a recruiter can identify who Amine is, his engineering focus, and where to see his best work.
- [ ] The top 3-4 projects are truly his work (or accurately credited shared work), with understandable summaries and evidence.
- [ ] The strongest relevant verified project is shown first (Khadija AI if supporting materials justify it).
- [ ] Experience, skills, education, and awards reflect the CV and other reliable evidence, with no invented facts.
- [ ] Every displayed project button goes somewhere real; missing links are not rendered.
- [ ] The resume button works only if a safe public CV exists.
- [ ] Desktop and mobile design look deliberately polished, consistent, and easy to read.
- [ ] No generic stock-person photography, fake metrics, excessive animations, clutter, or skill percentage bars.
- [ ] The build and checks pass, or remaining failures and their causes are documented honestly.
- [ ] Basic accessibility, SEO, mobile performance, and data privacy are addressed.
- [ ] Content can be updated by editing one obvious data file rather than many UI components.
- [ ] A reader can contact Amine and navigate to GitHub/LinkedIn with verified links.

### Priority order if time or context is limited

1. **Correct, verifiable content and privacy**
2. **Excellent typography, layout, and usability**
3. **Strong project presentation and case studies**
4. **Functional links, CV, and contact**
5. **Build quality, accessibility, mobile polish, and SEO**
6. Optional cosmetic details only after everything above works

---

## 8. Command to give Codex

Copy the following into Codex after adding this README and your CV to the workspace:

> Read `README.md` fully. Treat it as the binding implementation specification for my personal portfolio. Find and analyze my CV, inspect the existing repository and all accessible verified project sources, then **implement the complete clean, minimal, professional portfolio in this repository**. Prioritize my strongest AI, data engineering, and software projects, including Khadija AI if evidence supports it. Extract and accurately present my real experiences, technical skills, education, and achievements from the CV. Clearly distinguish collaborative work from solo work. Do not fabricate anything, do not add placeholder links, and do not make the site over-designed. Finish by running all available checks, fixing failures, and explaining how to run and deploy the site, as well as any content I still need to verify or provide. **Do the work, not just a plan.**

---

**North star:** A small, complete, credible, beautifully restrained engineering portfolio that convinces through demonstrable work, not marketing language.

---

## Portfolio implementation

The site is a lightweight React + TypeScript single-page app built with Vite. Portfolio facts live in [`src/data/portfolio.ts`](src/data/portfolio.ts); project pages use the same typed project entries and are served through Vercel rewrites. Styling is kept in one token-based stylesheet with responsive layouts and reduced-motion support.

### Run locally

Requires Node.js 20.19+ or 22.12+ and Corepack (the repository pins pnpm 9.15.4).

```bash
corepack pnpm install
corepack pnpm dev
```

### Build and preview

```bash
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
corepack pnpm preview
```

### Deploy to Vercel

Import this repository into Vercel. Vercel detects Vite and the `pnpm-lock.yaml`; use `pnpm run build` as the build command and `dist` as the output directory. Project case-study paths are routed through [`vercel.json`](vercel.json). Set the final production domain in the deployment after it is chosen; canonical URL and sitemap are intentionally not set to an unconfirmed domain.

The source CV is private. It is ignored by Git and is not copied to `public/`. To publish a resume later, add a privacy-reviewed approved copy at `public/cv.pdf`, then set `identity.resume` in `src/data/portfolio.ts` and render the download action.
