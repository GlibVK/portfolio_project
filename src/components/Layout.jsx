import { useEffect } from 'react';
import { Link, Outlet, ScrollRestoration, useLocation, useNavigationType } from 'react-router-dom';
import { profile } from '../content/profile.js';

export default function Layout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.state?.returnTo) {
        if (navigationType !== 'POP') {
          if (Number.isFinite(location.state.returnY)) {
            window.scrollTo({ top: location.state.returnY, behavior: 'instant' });
          } else {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
          }
        }
        document.getElementById(`project-${location.state.returnTo}`)?.focus({ preventScroll: true });
      } else if (navigationType !== 'POP' && !location.hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.querySelector('h1')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.hash, location.state, navigationType]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Link to="/#hero" className="brand" aria-label={`${profile.name}, portfolio home`}>
        <span className="brand-name">{profile.name}</span>
        <span className="brand-role">{profile.role}</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link to="/#projects">Projects</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
    <Outlet />
    <ScrollRestoration />
  </>;
}
