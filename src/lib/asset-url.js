// Vite uses / locally and /portfolio_project/ in the published build.
export function assetUrl(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
