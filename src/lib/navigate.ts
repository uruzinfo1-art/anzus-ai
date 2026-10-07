import type React from 'react';

// Navega dentro del sitio sin recargar la página (el enrutado vive en App.tsx).
export const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  window.history.pushState({}, '', href);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0 });
};
