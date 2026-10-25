#!/usr/bin/env node
/*
  Builds index.html, sitemap.xml and robots.txt from content.js.
  Run after editing content.js:   node build.js
  The text is written into the HTML itself, so search engines and link
  previews see everything without running JavaScript.
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const P = vm.runInNewContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8') + ';PORTFOLIO', {});

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = P.siteUrl ? (P.siteUrl.endsWith('/') ? P.siteUrl : P.siteUrl + '/') : '';
const city = P.location.split(',')[0];
const pageTitle = P.pageTitle;
const hasProjects = P.projects.length > 0;

let sectionNo = 0;
const secHead = (label, title, id, extra = '') => {
  sectionNo += 1;
  const n = String(sectionNo).padStart(2, '0');
  return `<div class="sec-head reveal"><span class="mono"><b>${n}</b> / ${esc(label)}</span><h2 id="${id}">${esc(title)}</h2></div>${extra}`;
};
const chips = (items, strong) =>
  `<ul class="chips">${items.map((t) => `<li class="chip${strong ? ' strong' : ''}">${esc(t)}</li>`).join('')}</ul>`;

// ---------- sections ----------
const navItems = [['home', 'Home'], ['about', 'About'], ['services', 'Services'], ['skills', 'Skills'], ['experience', 'Experience']];
if (hasProjects) navItems.push(['projects', 'Projects']);
navItems.push(['contact', 'Contact']);

const words = P.headline.split(' ');
const lastWord = words.pop();

const hero = `
  <section class="hero" id="home">
    <div class="wrap">
      <div>
        <p class="mono status">${esc(P.heroTag)} · ${esc(city)}</p>
        <h1>${esc(words.join(' '))} <em>${esc(lastWord)}</em></h1>
        <p class="role">${esc(P.roleLine)}</p>
        <p class="lead">${esc(P.intro)}</p>
        <div class="actions">
          <a class="btn primary" href="mailto:${esc(P.email)}?subject=${encodeURIComponent(P.enquirySubject)}">Start a project</a>
          <a class="btn" href="#services">View services</a>
        </div>
      </div>
      <div class="term" aria-hidden="true">
        <div class="term-bar"><span class="mono">checkout.spec.js</span><span class="mono">illustrative</span></div>
<pre><span class="t-c">// A typical Playwright test shape</span>
<span class="t-k">import</span> { test, expect } <span class="t-k">from</span> <span class="t-s">'@playwright/test'</span>;
<span class="t-k">import</span> { CartPage } <span class="t-k">from</span> <span class="t-s">'../pages/CartPage'</span>;

test(<span class="t-s">'user can remove an item from the cart'</span>,
  <span class="t-k">async</span> ({ page }) =&gt; {
    <span class="t-k">const</span> cart = <span class="t-k">new</span> CartPage(page);
    <span class="t-k">await</span> cart.open();
    <span class="t-k">await</span> cart.removeItem(<span class="t-s">'Sample product'</span>);
    <span class="t-k">await</span> expect(cart.emptyMessage).toBeVisible();
  });</pre>
      </div>
    </div>
  </section>`;

const about = `
  <section id="about" aria-labelledby="about-title">
    <div class="wrap">
      ${secHead('About', 'Quality as part of how the team builds.', 'about-title')}
      <div class="about-grid reveal"><span class="mono">Profile</span><div class="copy">${P.about.map((t) => `<p>${esc(t)}</p>`).join('')}</div></div>
      <div class="approach reveal">${P.approach.map((a) => `<div><span class="mono">${esc(a.label)}</span><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></div>`).join('')}</div>
    </div>
  </section>`;

const servicesHead = secHead('Services', 'What I can do for your team.', 'services-title');
const services = `
  <section id="services" aria-labelledby="services-title">
    <div class="wrap">
      ${servicesHead}
      <div class="proj-list">${P.services.map((v, i) => `
        <div class="proj reveal"><span class="mono">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(v.title)}</h3><p class="svc-text">${esc(v.text)}</p>${chips(v.stack)}</div></div>`).join('')}
      </div>
      <div class="sec-head reveal" style="margin-top:72px"><span class="mono">How a project runs</span><h2 id="process-title" style="font-size:clamp(1.3rem,3vw,1.8rem)">A simple, predictable process.</h2></div>
      <div class="approach reveal">${P.process.map((a) => `<div><span class="mono">${esc(a.label)}</span><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></div>`).join('')}</div>
    </div>
  </section>`;

const skills = `
  <section id="skills" aria-labelledby="skills-title">
    <div class="wrap">
      ${secHead('Skills', 'Tools I use day to day.', 'skills-title')}
      <div class="reveal">
        <div class="skill-row core"><span class="mono">Core</span>${chips(P.skills.core, true)}</div>
        ${P.skills.also.map((g) => `<div class="skill-row"><span class="mono">${esc(g.group)}</span>${chips(g.items)}</div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const experience = `
  <section id="experience" aria-labelledby="experience-title">
    <div class="wrap">
      ${secHead('Experience', 'Background.', 'experience-title')}
      ${P.experience.map((j) => `
      <article class="job reveal">
        <div><span class="mono">${esc(j.period)}</span></div>
        <div>
          <h3>${esc(j.role)}</h3>
          <div class="co">${esc(j.company)} · ${esc(j.place)}</div>
          <p class="sum">${esc(j.summary)}</p>
          <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
          ${chips(j.stack)}
        </div>
      </article>`).join('')}
      <div class="edu reveal"><span class="mono">Education</span><div><strong>${esc(P.education.degree)} · ${esc(P.education.period)}</strong><div>${esc(P.education.school)}</div></div></div>
    </div>
  </section>`;

const projects = !hasProjects ? '' : `
  <section id="projects" aria-labelledby="projects-title">
    <div class="wrap">
      ${secHead('Projects', 'Selected work.', 'projects-title')}
      <div class="proj-list">${P.projects.map((p) => `
        <article class="proj reveal">
          <span class="mono">${esc(p.label)}</span>
          <div>
            <h3>${esc(p.name)}</h3>
            <span class="mono">${esc(p.context)}</span>
            <dl class="case">
              <dt class="mono">Problem</dt><dd>${esc(p.problem)}</dd>
              <dt class="mono">Approach</dt><dd>${esc(p.approach)}</dd>
              <dt class="mono">Outcome</dt><dd>${esc(p.outcome)}</dd>
            </dl>
            ${chips(p.stack)}
            ${p.link ? `<p><a class="go" href="${esc(p.link)}" rel="noopener">View repository →</a></p>` : ''}
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>`;

const L = P.links;
const contactLinks = [['Book a call', L.booking], ['LinkedIn', L.linkedin], ['GitHub', L.github], ['Upwork', L.upwork], ['Fiverr', L.fiverr], ['Freelancer', L.freelancer]]
  .filter((l) => l[1])
  .map((l) => `<a class="btn" href="${esc(l[1])}" rel="noopener me" target="_blank">${esc(l[0])} ↗</a>`)
  .join('\n        ');
const engagement = (P.engagement || []).length
  ? `<div class="reveal eng-list">${P.engagement.map((e) => `<div class="eng"><span class="mono">${esc(e.label)}</span><span>${esc(e.value)}</span></div>`).join('')}</div>`
  : '';

const contact = `
  <section id="contact" aria-labelledby="contact-title">
    <div class="wrap">
      ${secHead('Contact', 'Have a project in mind?', 'contact-title')}
      <p class="contact-big reveal"><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></p>
      ${engagement}
      <p class="reveal" style="color:var(--muted);max-width:60ch">${esc(P.availability)}</p>
      <div class="actions reveal">
        ${contactLinks}
        ${P.resume ? `<a class="btn" href="${esc(P.resume)}" download>Resume (PDF)</a>` : ''}
      </div>
    </div>
  </section>`;

// ---------- structured data ----------
const sameAs = [L.linkedin, L.github, L.upwork, L.fiverr, L.freelancer].filter(Boolean);
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': url + '#website', url: url || undefined, name: `${P.name} | Freelance Software Testing`, inLanguage: 'en' },
    {
      '@type': 'Person', '@id': url + '#person', name: P.name, url: url || undefined,
      jobTitle: 'Software Tester and QA Automation Engineer', email: P.email,
      address: { '@type': 'PostalAddress', addressLocality: city, addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
      sameAs, knowsAbout: P.skills.core.concat(['Manual testing', 'Regression testing', 'AI product testing']),
      image: url ? url + 'og-image.png' : undefined,
    },
    {
      '@type': 'ProfessionalService', '@id': url + '#service', name: `${P.name} - Freelance Software Testing`,
      url: url || undefined, provider: { '@id': url + '#person' }, areaServed: ['India', 'Worldwide (remote)'],
      description: P.description,
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Software testing services',
        itemListElement: P.services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.text } })),
      },
    },
  ],
};
const ldJson = JSON.stringify(ld).replace(/</g, '\\u003c');

// ---------- page ----------
const og = url
  ? `<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(url)}og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(P.name)} - ${esc(P.roleLine)}">
<link rel="canonical" href="${esc(url)}">`
  : '';

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(P.description)}">
<meta name="author" content="${esc(P.name)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0b0d10">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(P.name)}">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(P.description)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(pageTitle)}">
<meta name="twitter:description" content="${esc(P.description)}">
${og}
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230b0d10'/%3E%3Ctext x='32' y='42' font-family='monospace' font-size='28' font-weight='700' text-anchor='middle' fill='%23c6f432'%3ESS%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"></noscript>
<link rel="stylesheet" href="styles.css">
<script type="application/ld+json">${ldJson}</script>
<script>document.documentElement.className += ' js';</script>
</head>
<body>

<header class="nav">
  <div class="wrap">
    <a href="#home" class="brand"><i>SS</i><span>${esc(P.name)}</span></a>
    <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="menu">MENU</button>
    <nav aria-label="Primary">
      <ul id="menu">
        ${navItems.map((n) => `<li><a href="#${n[0]}">${n[1]}</a></li>`).join('\n        ')}
      </ul>
    </nav>
  </div>
</header>

<main>${hero}${about}${services}${skills}${experience}${projects}${contact}
</main>

<footer>
  <div class="wrap">
    <span class="mono">© ${new Date().getFullYear()} ${esc(P.name)}</span>
    <span class="mono">${esc(P.location)}</span>
  </div>
</footer>

<script src="script.js" defer></script>
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), html);

// ---------- robots + sitemap ----------
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n${url ? `\nSitemap: ${url}sitemap.xml\n` : ''}`);
if (url) {
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(root, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`);
}
console.log(`built index.html (${html.length} bytes), robots.txt${url ? ', sitemap.xml' : ' (no siteUrl: canonical/sitemap skipped)'}`);
