import PageMeta from '../components/PageMeta.jsx';

export default function RouteError() {
  return <main id="main" className="not-found">
    <PageMeta title="Unable to load — Analytics portfolio" />
    <h1>Let’s try that again.</h1>
    <p>The page could not be loaded. Refresh it, or return to the portfolio.</p>
    <a href="/" className="text-link">Back to Portfolio</a>
  </main>;
}
