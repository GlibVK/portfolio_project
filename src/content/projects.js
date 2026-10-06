// Illustrative concepts only. These are not client work or verified outcomes.
export const projects = [
  {
    slug: 'saas-churn-reduction',
    title: 'SaaS Churn Reduction',
    question: 'Which customer signals reveal preventable churn?',
    discipline: 'Product analytics',
    preview: '/images/project-churn.webp',
    previewWidth: 368,
    previewHeight: 218,
    previewAlt: 'Illustrative SaaS dashboard with customer segments, churn indicators and an activity chart. All figures are demo data.',
    metrics: [{ label: 'Revenue', value: '+18%' }, { label: 'Retention', value: '+25%' }],
    description: 'A product analytics concept for exploring customer behaviour, identifying retention patterns and deciding where to investigate next.',
    tools: ['SQL', 'React', 'Product Analytics', 'Experimentation'],
    questions: ['Where do customers disengage?', 'Which segments need closer attention?', 'What retention hypothesis should be tested next?'],
    roadmap: ['Segment filters', 'Retention cohorts', 'Conversion funnels', 'Customer drill-down'],
  },
  {
    slug: 'ecommerce-growth-strategy',
    title: 'E-commerce Growth Strategy',
    question: 'Which channels and products create sustainable growth?',
    discipline: 'Product & financial analytics',
    preview: '/images/project-growth.webp',
    previewWidth: 400,
    previewHeight: 234,
    previewAlt: 'Illustrative commerce dashboard with revenue trends, channel comparisons and product mix. All figures are demo data.',
    metrics: [{ label: 'Revenue', value: '+18%' }, { label: 'Retention', value: '+25%' }],
    description: 'A financial analytics concept for connecting acquisition, product mix and unit economics to a clearer growth decision.',
    tools: ['SQL', 'React', 'Financial Analytics', 'Unit Economics'],
    questions: ['Which channels contribute to sustainable growth?', 'How does product mix affect margin?', 'Which assumption has the greatest financial impact?'],
    roadmap: ['Channel filters', 'Unit economics', 'Financial scenarios', 'What-if analysis'],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
