/* Local resource map for the design-canvas runtime in support.js.
 *
 * support.js (src/cdn.ts) resolves React and ReactDOM from unpkg.com unless
 * window.__resources already maps those URLs somewhere else. Without this file
 * both pages need outbound access to unpkg.com to render at all — on a filtered
 * hospital network, or from a copy on a share drive, they come up blank.
 *
 * The two files in vendor/ are the exact 18.3.1 UMD production builds; they
 * match the SRI hashes support.js pins for the CDN copies.
 *
 * Entries are only filled in if nothing has claimed them yet, so the
 * single-file offline build — which supplies its own blob URLs here — keeps
 * working unchanged.
 */
(function () {
  var have = (window.__resources = window.__resources || {});
  var local = {
    'https://unpkg.com/react@18.3.1/umd/react.production.min.js': './vendor/react.production.min.js',
    'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': './vendor/react-dom.production.min.js'
  };
  for (var url in local) if (!have[url]) have[url] = local[url];
})();
