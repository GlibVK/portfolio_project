import { assetUrl } from '../lib/asset-url.js';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function ProjectRow({ project, index }) {
  const location = useLocation();
  const navigate = useNavigate();
  function openProject(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(`/projects/${project.slug}`, {
      state: { fromPortfolio: `${location.pathname}${location.hash}`, returnY: window.scrollY },
    });
  }
  return <Reveal className={`project-row ${index % 2 ? 'project-row-reversed' : ''}`}>
    <div className="project-copy">
      <h3>{project.title}</h3>
      <p>{project.question}</p>
      <p className="discipline">{project.discipline}</p>
      <dl className="project-metrics" aria-label="Illustrative metrics, not verified business outcomes">
        {project.metrics.map((metric) => <div key={metric.label}>
          <dt>{metric.label}</dt><dd>{metric.value}</dd>
        </div>)}
      </dl>
      <Link id={`project-${project.slug}`} className="text-link" to={`/projects/${project.slug}`} onClick={openProject}>
        Explore project <ArrowRightIcon weight="bold" aria-hidden="true" />
        <span className="sr-only">: {project.title}</span>
      </Link>
    </div>
    <figure className="project-preview">
      <img src={assetUrl(project.preview)} alt={project.previewAlt} width={project.previewWidth} height={project.previewHeight} loading="lazy" decoding="async" />
      <figcaption className="sr-only">Static concept preview. Interactive analysis is planned.</figcaption>
    </figure>
  </Reveal>;
}
