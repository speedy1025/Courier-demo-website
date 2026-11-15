/**
 * Builds a URL for a file that lives in the `public/` folder.
 *
 * Files in `public/` are copied as-is and are NOT processed by Vite, so a plain
 * string like "/images/hero.jpg" points at the domain root and breaks when the
 * site is hosted in a sub-folder (e.g. GitHub Pages: /repo-name/images/hero.jpg).
 *
 * `import.meta.env.BASE_URL` is set by Vite from `base` in vite.config.js, so
 * with `base: './'` this returns "./images/hero.jpg" — relative to the page, which
 * works at the domain root and in any sub-folder, in dev and in the build.
 *
 *   asset('images/hero.jpg')  →  './images/hero.jpg'
 */
export function asset(path) {
  const clean = String(path).replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
