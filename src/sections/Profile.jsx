import { ArrowDown, ArrowUpRight, Sprout, BookOpen, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile, qualities, interests } from '../data/profile';
import { Reveal, SocialLinks, Tags, SectionHeading } from '../components/Shared';

export function Profile() {
  const reduce = useReducedMotion();
  return <>
    <section className="hero page-width" id="profile" data-chapter="0" aria-labelledby="profile-title">
      <div className="hero-topline"><p className="eyebrow"><BookOpen size={14} strokeWidth={1.3} aria-hidden="true" />THE DIGITAL FIELDBOOK</p><span className="volume">PERSONAL EDITION / VOL. 01</span></div>
      <div className="hero-grid">
        <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">FIELD NOTE / 001 <span>AN INTRODUCTION</span></p>
          <h1 id="profile-title"><span>May Antonette</span><em>A. Alterado</em></h1>
          <p className="career-title">Information Technology Student</p>
          <p className="hero-line">Organizing information.<br />Exploring technology.<br />Building what comes next.</p>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions"><a className="button" href="#projects">Explore My Work <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href="/cv">View CV <ArrowUpRight size={15} aria-hidden="true" /></a></div>
          <SocialLinks />
        </motion.div>
        <motion.div className="portrait-field" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65, delay: 0.15 }}>
          <figure className="photo-paper"><img src="/assets/profile.webp" srcSet="/assets/profile-small.webp 360w, /assets/profile.webp 720w" sizes="(max-width:700px) 270px, (max-width:1000px) 36vw, 380px" alt="May Antonette A. Alterado wearing a black blazer and light blouse" width="720" height="926" fetchPriority="high" /><figcaption><span>ANTONETTE / PROFILE</span><span>BSIT / DNSc</span></figcaption></figure>
          <span className="photo-annotation annotation-one">01 / ORGANIZED</span><span className="photo-annotation annotation-two">02 / CURIOUS</span><span className="photo-annotation annotation-three">03 / ADAPTABLE</span>
          <svg className="portrait-stem" viewBox="0 0 140 210" fill="none" aria-hidden="true"><path d="M34 204C100 140 32 80 110 8M62 170C18 167 18 130 18 130C62 130 67 150 62 170ZM72 129C112 126 127 98 127 98C90 96 77 109 72 129ZM77 81C48 80 40 53 40 53C73 53 80 68 77 81ZM96 39C123 37 127 16 127 16C104 17 99 26 96 39Z" stroke="currentColor" strokeWidth="1" /></svg>
        </motion.div>
      </div>
      <div className="hero-bottom"><p><Sprout size={17} strokeWidth={1.3} aria-hidden="true" />Where organized ideas grow into meaningful work.</p><a href="#about">TURN THE PAGE <ArrowDown size={13} aria-hidden="true" /></a></div>
    </section>
    <Reveal className="page-width"><section className="objective" aria-labelledby="objective-title"><div><p className="eyebrow">A NOTE ON DIRECTION</p><h2 id="objective-title">What I’m<br /><em>growing toward.</em></h2></div><div><p className="eyebrow">CAREER OBJECTIVE</p><blockquote>{profile.objective}</blockquote></div></section></Reveal>
  </>;
}
export function About() {
  const notes = [['Full Name',profile.name],['Program',profile.program],['Status',profile.level],['Institution',profile.institution],['Location',profile.location],['Email',<a href={`mailto:${profile.email}`}>{profile.email}</a>]];
  return <section className="page-width section-space" id="about" data-chapter="1" aria-labelledby="about-title"><Reveal className="about-grid"><div className="about-heading"><p className="eyebrow">02 / THE PERSON BEHIND THE PAGES</p><h2 id="about-title">Behind<br /><em>the work.</em></h2><p className="signature">May Antonette A. Alterado</p></div><div className="about-body"><p className="lead">A thoughtful approach.<br />A place for every detail.<br />Always room to grow.</p><p>I’m a Bachelor of Science in Information Technology undergraduate who enjoys bringing structure to information, projects, and digital work.</p><p>My strengths include documentation, research, data organization, spreadsheet-based tasks, project coordination, and using digital and AI-assisted tools to improve productivity.</p><p>I value accuracy, organization, clear communication, collaboration, and continuous learning. I’m interested in opportunities where technology and practical problem-solving come together.</p><Tags items={qualities} /></div></Reveal><Reveal className="quick-notes"><h3><BookOpen size={18} strokeWidth={1.3} aria-hidden="true" />Quick Notes</h3><dl className="quick-grid">{notes.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="quick-interests"><p>CAREER INTERESTS</p><Tags items={interests} /></div><div className="mt-5"><SocialLinks /></div></Reveal></section>;
}
export function Education() {
  return <section className="canvas-band" id="education" data-chapter="2" aria-label="Education"><div className="page-width section-space"><Reveal><SectionHeading number="03" eyebrow="BUILDING THE FOUNDATION" title={<>Learning today.<br /><em>Growing for tomorrow.</em></>}><p>Education /<br />Notes from my academic path.</p></SectionHeading><div className="academic-timeline"><article className="academic-entry"><div><span className="status-label"><span className="h-1.5 w-1.5 rounded-full bg-aubergine" />{profile.level}</span><p>Current academic path</p></div><div><h3>{profile.program}</h3><p className="institution">{profile.institution}</p><p>Developing knowledge in information systems, digital tools, data handling, documentation, and web development fundamentals.</p></div></article><article className="academic-entry"><div><span className="eyebrow">DETAILS TO BE ADDED</span></div><div className="education-placeholder"><h3>Senior High School</h3><p>Earlier chapters of my education will be added once the details are confirmed.</p><div className="placeholder-fields"><span>School name — pending</span><span>Track / strand — pending</span><span>Years — pending</span></div></div></article></div></Reveal></div></section>;
}
