import React from 'react'
import { createRoot } from 'react-dom/client'
import { education, experience, identity, projects, skillGroups, type Project } from './data/portfolio'
import './styles.css'

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  const variants: Record<Project['visual'], React.ReactNode> = {
    care: <><circle cx="90" cy="75" r="29"/><path d="M75 75h30M90 60v30"/><path d="M45 135c6-18 20-27 45-27s39 9 45 27"/><path d="M138 46h34m-34 12h22"/></>,
    stream: <><rect x="25" y="43" width="42" height="60" rx="5"/><rect x="84" y="43" width="42" height="60" rx="5"/><rect x="143" y="43" width="42" height="60" rx="5"/><path d="M67 73h17m42 0h17M78 68l6 5-6 5m48-10 6 5-6 5"/><path d="M34 57h24m-24 12h18m-18 12h21M93 58h23m-23 12h16m-16 12h21M152 59h22m-22 12h15m-15 12h18"/></>,
    clinic: <><rect x="45" y="34" width="90" height="101" rx="8"/><path d="M90 53v34M73 70h34M59 104h19m24 0h19M59 116h19m24 0h19"/><path d="M72 34v-9h36v9"/></>,
    market: <><path d="M29 127h143M38 114l30-28 24 14 33-43 35 14"/><path d="M151 71h11v11"/><path d="M43 43v81M79 43v81M115 43v81M151 43v81" strokeDasharray="3 7" opacity=".28"/><circle cx="68" cy="86" r="4"/><circle cx="92" cy="100" r="4"/><circle cx="125" cy="57" r="4"/></>,
    lift: <><rect x="50" y="22" width="80" height="116" rx="2"/><path d="M90 22v116M50 138h80M64 38h13m26 0h13M66 128l15-11V44L66 34m48 94-15-11V44l15-10"/><path d="M145 48v24m0 0-5-6m5 6 5-6M145 109V85m0 0-5 6m5-6 5 6"/></>,
  }
  return <div className={`project-visual visual-${kind}`} aria-hidden="true"><span className="visual-index">0{projects.findIndex(p => p.visual === kind) + 1}</span><svg viewBox="0 0 210 160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{variants[kind]}</svg><span className="visual-caption">{kind === 'care' ? 'CARE · EDUCATION' : kind === 'stream' ? 'INGEST → PROCESS → SERVE' : kind === 'clinic' ? 'SCHEDULE · RECORD · REVIEW' : kind === 'lift' ? 'PRODUCTS · CONFIGURE · CONTACT' : 'SIGNAL · MODEL · TEST'}</span><span className="visual-note">Illustrative visual · no product screenshot supplied</span></div>
}

function Header({ detail = false }: { detail?: boolean }) {
  const links = [['Projects', 'projects'], ['Experience', 'experience'], ['Skills', 'skills'], ['Education', 'education'], ['About', 'about'], ['Contact', 'contact']]
  const target = (id: string) => detail ? `/#${id}` : `#${id}`
  return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><a className="wordmark" href={detail ? '/' : '#top'} aria-label="Amine Bazaoui home">amine<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a className={id === 'contact' ? 'nav-contact' : ''} href={target(id)} key={id}>{label}{id === 'contact' && <Arrow diagonal />}</a>)}</nav><details className="mobile-nav"><summary aria-label="Open navigation">Menu <span aria-hidden="true">⌄</span></summary><nav aria-label="Mobile navigation">{links.map(([label, id]) => <a href={target(id)} key={id}>{label}</a>)}</nav></details></header></>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${index === 0 ? 'project-featured' : ''}`}>
    <a href={`/projects/${project.slug}`} className="project-art" aria-label={`Read the ${project.title} case study`}><ProjectVisual kind={project.visual} /><span className="art-link">Read case study <Arrow diagonal /></span></a>
    <div className="project-copy"><p className="eyebrow">{project.category}</p><h3><a href={`/projects/${project.slug}`}>{project.title}</a></h3><p className="project-summary">{project.summary}</p><p className="project-context">{project.cardNote}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={`/projects/${project.slug}`}>Case study <Arrow /></a>{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>}</div></div>
  </article>
}

function Home() {
  return <><Header /><main id="main-content" tabIndex={-1}>
    <section id="top" className="hero wrap"><div className="hero-copy"><p className="eyebrow availability"><span /> KHOURIBGA, MOROCCO <span className="availability-divider">·</span> OPEN TO SOFTWARE, DATA & APPLIED AI ROLES</p><p className="hero-kicker">SOFTWARE ENGINEERING <span>·</span> DATA <span>·</span> APPLIED AI</p><h1>{identity.name}</h1><p className="hero-statement">{identity.headline}</p><p className="hero-intro">{identity.intro}</p><div className="hero-actions"><a className="button button-primary" href="#projects">View selected projects <Arrow /></a><a className="button button-secondary" href={`mailto:${identity.email}`}>Contact me <Arrow diagonal /></a></div><div className="hero-social"><a href={identity.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div></div><div className="hero-note"><div className="note-mark">AB</div><p>Artificial Intelligence<br />& Deep Learning</p><span>Excellence Degree · Graduated 2026</span></div><div className="hero-bottom"><span>Selected work · 2024—2026</span><a href="#projects">Explore projects ↓</a></div></section>

    <section id="projects" className="section wrap"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Projects with a purpose.</h2></div><p className="section-aside">A selection across applied AI, data systems, and product engineering.</p></div><div className="projects-grid">{projects.filter(p => p.featured).map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div></section>

    <section id="experience" className="section section-tinted"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>Learning by building.</h2></div><p className="section-aside">Internships and engineering practice.</p></div><div className="timeline">{experience.map(item => <article className="timeline-row" key={item.organization}><time>{item.date}</time><div><h3>{item.role}</h3><p className="timeline-org">{item.organization}<span> · {item.location}</span></p>{item.contributions && <ul className="timeline-contributions">{item.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>}</div><span className="timeline-type">Internship</span></article>)}</div></div></section>

    <section id="skills" className="section wrap"><div className="section-heading"><div><p className="eyebrow">03 / TOOLKIT</p><h2>Tools for the work.</h2></div><p className="section-aside">A concise set drawn from my studies and projects.</p></div><div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-group" key={group.title}><span className="skill-index">0{i + 1}</span><h3>{group.title}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>

    <section id="education" className="section education-section"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">04 / EDUCATION</p><h2>Education & certifications.</h2></div><p className="section-aside">Formal study and professional certificates.</p></div><article className="degree-card"><span className="degree-date">{education.dates}</span><div><h3>{education.degree}</h3><p>{education.institution}</p><p className="degree-detail">{education.detail}</p></div><span className="degree-status">Completed</span></article><div className="certifications"><p className="eyebrow">CERTIFICATIONS</p><ul>{education.certifications.map(item => <li key={item}>{item}</li>)}</ul></div></div></section>

    <section id="about" className="section about-section"><div className="wrap about-layout"><div><p className="eyebrow">05 / A LITTLE ABOUT ME</p><h2>Curiosity, made<br />concrete.</h2></div><div className="about-copy">{identity.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className="about-note">{identity.about.note}</p></div></div></section>

    <section id="contact" className="contact-section"><div className="wrap contact-inner"><p className="eyebrow">06 / CONTACT</p><h2>Have a problem worth<br /><em>building for?</em></h2><p>I’m open to software, data, and applied AI opportunities, as well as technical collaborations.</p><a className="button button-light" href={`mailto:${identity.email}`}>Email Amine <Arrow diagonal /></a><div className="contact-links"><a href={identity.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={`mailto:${identity.email}`}>Email <Arrow diagonal /></a></div></div></section>
  </main><Footer /></>
}

function CaseStudy({ project }: { project: Project }) {
  return <><Header detail /><main id="main-content" className="case-main wrap" tabIndex={-1}><a className="back-link" href="/#projects">← All projects</a><div className="case-hero"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p><ProjectVisual kind={project.visual} /></div><div className="case-layout"><aside className="case-meta"><div><span>Context</span><p>{project.context}</p></div><div><span>My role</span><p>{project.role}</p></div><div><span>Technology</span><ul>{project.stack.map(s => <li key={s}>{s}</li>)}</ul></div>{project.github && <a className="case-github" href={project.github} target="_blank" rel="noreferrer">View repository <Arrow diagonal /></a>}</aside><article className="case-body"><section><p className="eyebrow">OVERVIEW</p><p>{project.overview}</p></section><section><p className="eyebrow">WHAT IT INCLUDES</p><ul>{project.built.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="eyebrow">ENGINEERING NOTES</p><ul>{project.decisions.map(item => <li key={item}>{item}</li>)}</ul></section><section><p className="eyebrow">EVIDENCE & NEXT STEPS</p><p>{project.learnings}</p></section></article></div><nav className="case-next" aria-label="More projects"><span>Continue exploring</span><a href="/#projects">All selected work <Arrow /></a></nav></main><Footer /></>
}

function Footer() { return <footer className="site-footer"><div className="wrap footer-inner"><a href="/#top" className="wordmark">amine<span>.</span></a><span>© {new Date().getFullYear()} Amine Bazaoui</span><span>Made with care in Morocco.</span></div></footer> }

const slug = window.location.pathname.match(/^\/projects\/([^/]+)/)?.[1]
const project = projects.find(item => item.slug === slug)
const unknownPath = window.location.pathname !== '/' && !project
document.title = project ? `${project.title} — Amine Bazaoui` : unknownPath ? 'Page not found — Amine Bazaoui' : 'Amine Bazaoui — AI, Data & Software Engineering'
createRoot(document.getElementById('root')!).render(project ? <CaseStudy project={project} /> : unknownPath ? <><Header /><main id="main-content" className="not-found wrap" tabIndex={-1}><p className="eyebrow">404 / NOT FOUND</p><h1>This page isn’t here.</h1><a href="/#projects">Back to selected work <Arrow /></a></main><Footer /></> : <Home />)
