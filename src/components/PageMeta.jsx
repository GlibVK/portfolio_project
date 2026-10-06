import { useEffect } from 'react';

const defaultDescription = 'Product and financial analytics portfolio. Turning data into insight and better decisions with SQL, JavaScript, React, Power BI and Qlik Sense.';

export default function PageMeta({ title, description = defaultDescription }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content = description;
  }, [title, description]);
  return null;
}
