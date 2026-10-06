import { profile, skills } from '../content/profile.js';
import { projects } from '../content/projects.js';
import ProjectRow from '../components/ProjectRow.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactLinks from '../components/ContactLinks.jsx';
import PageMeta from '../components/PageMeta.jsx';

export default function Portfolio() {
  return <main id="main" className="portfolio" tabIndex={-1}>
    <PageMeta title={`${profile.name} — ${profile.role}`} />
    <section id="hero" className="hero scene" aria-labelledby="hero-title">
      <img className="hero-art" src="/images/hero.webp" alt="Analyst at a desk, surrounded by dashboards, charts and SQL, bringing data together." width="768" height="462" fetchPriority="high" />
      <div className="hero-copy">
        <h1 id="hero-title" tabIndex={-1}>I turn data<br />into decisions.</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="data-story">Data <span aria-hidden="true">→</span> Insight <span aria-hidden="true">→</span> Decision</p>
        <p className="hero-location">{profile.location} <span aria-hidden="true">·</span> {profile.availability}</p>
      </div>
    </section>
    <section id="skills" className="mind scene" aria-labelledby="skills-title">
      <Reveal>
        <div className="section-heading">
          <h2 id="skills-title">Analysis is my<br />storytelling.</h2>
          <p>Raw Data → Patterns → Insight → Decision</p>
        </div>
        <div className="mind-stage">
          <picture>
            <source media="(max-width: 600px)" srcSet="/images/mind-mobile.webp" />
            <img className="mind-art" src="/images/mind.webp" alt="An analyst connects raw data, patterns and insights along flowing amber chart lines." width="768" height="372" loading="lazy" decoding="async" />
          </picture>
          <div className="skill-stack">
            <h3>Product & Financial Analytics</h3>
            <ul aria-label="Professional skills">{skills.map((skill) => <li className={skill === 'Product Analytics' || skill === 'Financial Analytics' ? 'sr-only' : undefined} key={skill}>{skill}</li>)}</ul>
          </div>
        </div>
      </Reveal>
    </section>
    <section id="projects" className="projects scene" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Selected projects</h2>
        <p>Illustrative projects · Demo metrics</p>
      </div>
      <div className="project-list">{projects.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}</div>
    </section>
    <section id="contact" className="finale scene" aria-labelledby="contact-title">
      <Reveal>
        <img className="finale-art" src="/images/finale.webp" alt="The analyst beside a whiteboard connecting hypotheses, experiments, conversion and growth." width="768" height="294" loading="lazy" decoding="async" />
        <div className="finale-copy">
          <h2 id="contact-title">Let’s turn your data<br />into the next decision.</h2>
          <ContactLinks />
        </div>
      </Reveal>
    </section>
  </main>;
}
