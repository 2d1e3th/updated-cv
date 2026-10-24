import { useRef } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { Award, ChevronDown, Sprout, Circle, GitBranch, Leaf, Flower2 } from 'lucide-react';
import { achievements, achievementCategories } from '../data/achievements';
import { experience } from '../data/experience';
import { rhythm } from '../data/profile';
import { Reveal, SectionHeading, Tags } from '../components/Shared';

export function Achievements() {
  return <section id="achievements" data-chapter="5" className="milestones-band" aria-label="Achievements and certifications"><div className="page-width section-space"><Reveal><SectionHeading number="06" eyebrow="SMALL STEPS. MEANINGFUL GROWTH." title={<>Milestones <em>&amp; Credentials.</em></>}><Award size={42} strokeWidth={1} className="milestone-icon" aria-hidden="true" /></SectionHeading><details className="milestone-register"><summary><div><span className="eyebrow">THE MILESTONE REGISTER</span><h3>A record of learning along the way.</h3></div><span className="register-action">Explore the register <ChevronDown size={17} aria-hidden="true" /></span></summary><div className="register-body">{achievements.length ? achievements.map(item => <article key={item.id}><p className="eyebrow">{item.category} / {item.year}</p><h3>{item.title}</h3><p>{item.issuer}</p><p>{item.description}</p>{item.url && <a className="text-link" href={item.url}>View credential</a>}</article>) : <><Sprout size={28} strokeWidth={1.1} aria-hidden="true" /><p>Verified certificates, seminars, training, and academic milestones will be added here.</p><p className="register-note">A growing record, with each entry confirmed before publication.</p></>}<Tags items={achievementCategories} /></div></details></Reveal></div></section>;
}
export function Experience() {
  return <section id="experience" data-chapter="6" className="page-width section-space" aria-label="Experience and involvement"><Reveal><SectionHeading number="07" eyebrow="LEARNING THROUGH PARTICIPATION" title={<>Experience<br /><em>&amp; Involvement.</em></>}><p>Academic, collaborative, and community chapters.</p></SectionHeading><div className="experience-timeline">{experience.length ? experience.map(item => <article key={item.id}><span className="eyebrow">{item.year}</span><div><h3>{item.role} / {item.activity}</h3><p>{item.organization}</p><p>{item.description}</p><Tags items={item.skills} /></div></article>) : <article><span className="eyebrow">CURRENTLY GROWING</span><div><h3>Building experience through<br />learning and collaboration.</h3><p>Academic projects, school activities, seminars, technical activities, volunteer work, and organization involvement will appear here as verified details are added.</p><span className="experience-note">Every meaningful chapter begins with a willingness to learn.</span></div></article>}</div></Reveal></section>;
}
export function WorkingRhythm() {
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start .85','end .5']});
  const reduce=useReducedMotion();
  const icons=[Circle,GitBranch,Leaf,Flower2];
  return <section className="rhythm-section" ref={ref} aria-labelledby="rhythm-title"><div className="page-width section-space"><Reveal><div className="rhythm-heading"><p className="eyebrow">A LITTLE METHOD. A LITTLE MOMENTUM.</p><h2 id="rhythm-title">My Working <em>Rhythm.</em></h2><p>From a first thought to a more thoughtful result.</p></div><div className="rhythm-steps"><svg viewBox="0 0 1000 100" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M50 70C200 70 220 30 350 45S580 75 660 40S850 30 950 50" stroke="#d0c5d1" /><motion.path d="M50 70C200 70 220 30 350 45S580 75 660 40S850 30 950 50" stroke="#8b9c82" strokeWidth="1.5" style={{pathLength:reduce?1:scrollYProgress}} /></svg>{rhythm.map(([label,text],i)=>{const Icon=icons[i];return <Reveal key={label} className="rhythm-step" delay={reduce?0:i*.07}><span className="rhythm-node"><Icon size={22} strokeWidth={1.2} aria-hidden="true" /></span><span className="rhythm-number">0{i+1}</span><h3>{label}</h3><p>{text}</p></Reveal>;})}</div></Reveal></div></section>;
}
