import { assetUrl } from '../lib/asset-url.js';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { getProject } from '../content/projects.js';
import { profile } from '../content/profile.js';
import NotFound from './NotFound.jsx';
import PageMeta from '../components/PageMeta.jsx';

// The same shell serves every project. Future mini-apps mount in project-workspace.
export default function ProjectPage() {
  const { slug } = useParams();
  const location = useLocation();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  const backTarget = location.state?.fromPortfolio || '/#projects';
  const returnState = { returnTo: project.slug, returnY: location.state?.returnY };

  return <main id="main" className="project-page" tabIndex={-1}>
    <PageMeta title={`${project.title} — ${profile.name}`} description={`${project.question} An illustrative ${project.discipline} project.`} />
    <Link className="text-link back-link" to={backTarget} state={returnState}>
      <ArrowLeftIcon aria-hidden="true" /> Back to Portfolio
    </Link>
    <header className="project-intro">
      <p className="eyebrow">{project.discipline} <span> / </span> Project preview</p>
      <h1 tabIndex={-1}>{project.title}</h1>
      <p className="project-question">{project.question}</p>
      <p className="project-description">{project.description}</p>
      <ul className="tool-list" aria-label="Project disciplines and tools">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
    </header>
    <section className="project-workspace" aria-labelledby="workspace-title">
      <div className="workspace-heading">
        <h2 id="workspace-title">The analytical workspace</h2>
        <span className="status-label">Concept preview</span>
      </div>
      <figure>
        <img src={assetUrl(project.preview)} alt={project.previewAlt} width={project.previewWidth} height={project.previewHeight} />
        <figcaption>Illustrative design with demo data. This is a static preview, not a live analytics application.</figcaption>
      </figure>
    </section>
    <div className="project-context">
      <section aria-labelledby="questions-title"><h2 id="questions-title">From data to a decision</h2><ul>{project.questions.map((question) => <li key={question}>{question}</li>)}</ul></section>
      <section aria-labelledby="next-title"><h2 id="next-title">Planned exploration</h2><ul>{project.roadmap.map((item) => <li key={item}>{item}</li>)}</ul><p className="muted">Interactive analysis will be added in a future iteration.</p></section>
    </div>
    <Link className="text-link back-link" to={backTarget} state={returnState}><ArrowLeftIcon aria-hidden="true" /> Back to Portfolio</Link>
  </main>;
}
