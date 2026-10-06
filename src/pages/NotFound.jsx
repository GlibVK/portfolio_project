import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';

export default function NotFound() {
  return <main id="main" className="not-found" tabIndex={-1}>
    <PageMeta title="Page not found — Analytics portfolio" description="This page could not be found. Return to the portfolio to explore the projects." />
    <p className="eyebrow">404 / Nothing to analyse here</p>
    <h1 tabIndex={-1}>This page isn’t<br />in the dataset.</h1>
    <p>The project may have moved, or the link may be incomplete.</p>
    <Link to="/#projects" className="text-link">Back to Portfolio</Link>
  </main>;
}
