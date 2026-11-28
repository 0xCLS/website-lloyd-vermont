# Building Your Own Wealth Yourself

Static HTML, CSS and JavaScript; no build step. The approved design, book cover, photographs and testimonials are retained. Open `index.html` locally or serve this directory over HTTP.

Production: https://buildingyourownwealth.com/ (Cloudflare Pages). GitHub Pages remains a preview at https://0xcls.github.io/website-lloyd-vermont/. Relative navigation keeps both hosts working; canonical and sitemap URLs point to production. Cloudflare Pages serves the biography at `/about` and redirects `/about.html` there.

Newsletter subscription is not active. Kit is the selected provider; a client-owned account, verified sender, consent and end-to-end testing are still required. Never put private credentials in browser code or Git. Publish a client-approved privacy notice reflecting actual services before collection or analytics.

Maintain metadata, structured data, sitemap, financial education disclosures and content permissions when publishing changes. Verify deployment, both pages, links, assets, responsive layouts, DNS and redirects after release. `_headers` supplies Cloudflare Pages security headers; GitHub Pages does not apply that file. `404.html` handles missing Pages paths and links back to the canonical production site. Analytics remains disabled pending privacy approval.

On 28 November 2026, one Lighthouse mobile lab run against production measured performance 97, LCP 2.2 seconds and CLS 0. These are synthetic observations, not field data. Keyboard focus was sampled in Chromium at desktop and mobile widths; screen-reader and real-device review remain outstanding.
