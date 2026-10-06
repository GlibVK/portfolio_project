import { useState } from 'react';
import { profile } from '../content/profile.js';

export default function ContactLinks() {
  const [notice, setNotice] = useState('');
  const contacts = [
    { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '' },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
  ];
  return <>
    <div className="contact-links">
      {contacts.map(({ label, href }) => href
        ? <a key={label} href={href} rel={label === 'Email' ? undefined : 'noopener noreferrer'}>{label}</a>
        : <button key={label} type="button" aria-describedby="contact-notice" onClick={() => setNotice(`${label} contact has not been added yet.`)}>{label}<span className="sr-only"> — not yet configured</span></button>)}
      <span className="contact-location">{profile.location}</span>
    </div>
    <p className="contact-notice" id="contact-notice" role="status">{notice || 'Contact details coming soon.'}</p>
  </>;
}
