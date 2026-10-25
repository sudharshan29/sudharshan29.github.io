# QA Portfolio

Static site. Content lives in `content.js`; `build.js` bakes it into plain HTML so search engines see everything without running JavaScript.

## Edit and rebuild
1. Edit `content.js` (text, links, experience, skills, projects, `siteUrl`).
2. Run `node build.js`. This regenerates `index.html`, `sitemap.xml` and `robots.txt`.
3. Open `index.html` to preview.

Do not edit `index.html` by hand. It is overwritten on every build.

## Files
- `content.js`: all content and SEO settings
- `build.js`: generator (needs Node.js, no packages)
- `styles.css`, `script.js`: design and light interactions (menu, scroll reveal)
- `og-image.png`: 1200x630 link-preview image
- Resume: intentionally not published (it contains a phone number). Set `resume` in `content.js` to a phone-free PDF to show a button.

## SEO checklist
- `siteUrl` in `content.js` must match where the site is published (canonical, sitemap, link preview).
- After publishing, add the site to Google Search Console and submit `sitemap.xml`.
- Link the site from LinkedIn, GitHub and any freelance profiles.

## Publish on GitHub Pages
1. Create a public repo named `sudharshan29.github.io` (must match your username exactly).
2. Push these files to `main`.
3. Settings → Pages → Deploy from branch → `main` / root.
4. Live at `https://sudharshan29.github.io/`.
