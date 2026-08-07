/* =========================================================
   AbdulKabeer Mabinuori — Portfolio
   script.js — project data + rendering + interactions

   TO ADD OR EDIT A PROJECT:
   Just add/edit an entry in the PROJECTS object below.
   Nothing else needs to change — the homepage grid and the
   project template page both read from this single source.
   ========================================================= */

/* ---------- 1. Project data (single source of truth) ---------- */
const PROJECTS = {

  "asani-kitchen": {
    title: "ASANI Kitchen",
    category: "Brand Identity",
    year: "2025",
    summary: "A wordmark and pre-launch identity for a Nigerian food brand.",
    overview: "ASANI Kitchen needed a mark that could carry a food business from first announcement to opening day. The project covers the primary wordmark, a launch-date teaser, and a newspaper-style \u201Ccoming soon\u201D announcement built for social.",
    objective: "Build a logo that feels handcrafted and appetite-driven \u2014 the interlocking hand motif worked into the lettering nods to cooking and hospitality \u2014 then extend that same identity into a staged pre-launch reveal so the brand feels considered before a single dish ships.",
    gallery: [
      "assets/asani-kitchen/1.jpg",
      "assets/asani-kitchen/2.jpg",
      "assets/asani-kitchen/3.jpg"
    ]
  },

  "treats-by-dee": {
    title: "Treats by Dee",
    category: "Brand Identity",
    year: "2025",
    summary: "Logo, packaging, and a full launch sequence for a treats brand.",
    overview: "A complete identity system for a home-based confectionery brand: primary logo, product label, a sticker for packaging, and a three-stage social launch \u2014 \u201Ccoming soon,\u201D countdown, and \u201Cnow open.\u201D",
    objective: "Give a small food brand a shelf-ready identity, then sequence the rollout so the audience is warmed up before opening day rather than surprised by it.",
    gallery: [
      "assets/treats-by-dee/1.jpg",
      "assets/treats-by-dee/2.jpg",
      "assets/treats-by-dee/3.jpg",
      "assets/treats-by-dee/4.jpg",
      "assets/treats-by-dee/5.jpg",
      "assets/treats-by-dee/6.jpg"
    ]
  },

  "bola-for-nails": {
    title: "Bola for Nails",
    category: "Brand Identity",
    year: "2024",
    summary: "Promotional flyer for a nail care brand.",
    overview: "A brand flyer for Bola for Nails, presenting the brand's services in one clean, shareable graphic built for social media.",
    objective: "Give a nail care brand a polished, professional flyer that works equally well as a social post and a printed handout.",
    gallery: [
      "assets/bola-for-nails/1.jpg"
    ]
  },

  "elysora": {
    title: "Elysora",
    category: "Brand Identity",
    year: "2024",
    summary: "Brand flyer for the Elysora label.",
    overview: "A brand identity flyer for Elysora, built around clean typography and a considered color palette to give the label a distinct visual tone.",
    objective: "Establish an elegant, memorable first impression for the Elysora brand in a single, versatile flyer format.",
    gallery: [
      "assets/elysora/1.jpg"
    ]
  },

  "smeeha-boots": {
    title: "Smeeha Boots",
    category: "Brand Identity",
    year: "2024",
    summary: "Launch flyer for a footwear brand \u2014 Smeeha Boots Palace.",
    overview: "A promotional flyer for Smeeha Boots Palace, showcasing a range of ladies' boots, unisex shoes, and other footwear under one bold \u201CBoot Up Today\u201D call to action.",
    objective: "Turn a full product catalog into one energetic, scroll-stopping flyer that highlights the range without feeling cluttered.",
    gallery: [
      "assets/smeeha-boots/1.png"
    ]
  },

  "threadline-co": {
    title: "Threadline Co.",
    category: "Brand Identity",
    year: "2024",
    summary: "Brand flyer for a premium tailoring house in Doha, Qatar.",
    overview: "A brand flyer for Threadline \u2014 Haus of Fit, a Doha-based tailoring business offering custom wear, alterations, and sewing training.",
    objective: "Present a full range of tailoring services clearly on a single flyer, while keeping the visual tone premium enough to match an \u201Celegant, premium tailoring\u201D positioning.",
    gallery: [
      "assets/threadline-co/1.png"
    ]
  },

  "ybk-xchange": {
    title: "YBK Xchange",
    category: "Social Media Design",
    year: "2025",
    summary: "Promotional flyer for a gift card and crypto exchange service.",
    overview: "A social media flyer for YBK Xchange, a trading service covering foreign bank transfers, gift cards (Apple, Amazon, Razer Gold, Xbox), and cryptocurrency (Bitcoin, Ethereum, Solana).",
    objective: "Fit three distinct service categories \u2014 banking, gift cards, and crypto \u2014 onto one flyer without it feeling crowded, while keeping an energetic, trustworthy tone that invites people to reach out.",
    gallery: [
      "assets/ybk-xchange/1.jpg"
    ]
  },

  "election-campaign": {
    title: "University Election Campaign",
    category: "Campaign Design",
    year: "2024",
    summary: "A full campaign poster series for a university association election.",
    overview: "A coordinated set of campaign materials for candidates running for presidency and vice-presidency of Departmental and Student union positions, respectively. \u2014 including a declaration of intent, manifesto points, and supporting campaign posters.",
    objective: "Give a student election campaign the same visual discipline as a professional political run: one consistent palette, crest, and typographic system across every poster, so the candidate reads as prepared and credible.",
    gallery: [
      "assets/election-campaign/1.jpg",
      "assets/election-campaign/2.jpg",
      "assets/election-campaign/3.jpg",
      "assets/election-campaign/4.jpg",
      "assets/election-campaign/5.jpg",
      "assets/election-campaign/6.jpg",
      "assets/election-campaign/7.jpg"
    ]
  },

  "indigo-atelier": {
    title: "Indigo Atelier",
    category: "Campaign Design",
    year: "2024",
    summary: "A full event campaign, from first flyer to thank-you.",
    overview: "\u201CIndigo Atelier \u2014 A Heaven Made Experience\u201D is a Lagos event campaign spanning a lead flyer, wide-format banner, countdown series, artist lineup card, sponsor deck, and a closing thank-you graphic.",
    objective: "Carry one visual system \u2014 palette, type, iconography \u2014 across every touchpoint of the event so it reads as a single coordinated launch rather than a stack of unrelated flyers.",
    gallery: [
      "assets/indigo-atelier/1.jpg",
      "assets/indigo-atelier/2.jpg",
      "assets/indigo-atelier/3.jpg",
      "assets/indigo-atelier/4.jpg",
      "assets/indigo-atelier/5.jpg",
      "assets/indigo-atelier/6.jpg",
      "assets/indigo-atelier/7.jpg"
    ]
  },

  "reaper-szn": {
    title: "Reaper SZN",
    category: "Campaign Design",
    year: "2024",
    summary: "Launch campaign for a streetwear label.",
    overview: "Launch creative for Reaper, a streetwear label: countdown posts, a billboard concept, product-detail graphics, and the announcement for its SZN collection.",
    objective: "Build a bold, high-contrast identity that reads at billboard scale and on a phone screen alike \u2014 moody staging and a strong star mark carrying the brand across every format.",
    gallery: [
      "assets/reaper-szn/1.jpg",
      "assets/reaper-szn/2.jpg",
      "assets/reaper-szn/3.jpg",
      "assets/reaper-szn/4.jpg"
    ]
  },

  "nams": {
    title: "NAMS",
    category: "Social Media Design",
    year: "2024\u20132025",
    summary: "Ongoing content design for a university student association.",
    overview: "Recurring visual content for the Nigerian Association of Microbiology Students, OOU chapter \u2014 membership ID cards, a monthly engagement calendar, executive introductions, and campus signage.",
    objective: "Keep a student association's voice consistent across dozens of small, recurring posts, so members recognize NAMS content at a glance even without a caption.",
    gallery: [
      "assets/nams/1.jpg",
      "assets/nams/2.jpg",
      "assets/nams/3.jpg",
      "assets/nams/4.jpg",
      "assets/nams/5.jpg",
      "assets/nams/6.jpg",
      "assets/nams/7.jpg",
      "assets/nams/8.jpg"
    ]
  },

  "financial-consultant": {
    title: "Financial Consultant",
    category: "Campaign Design",
    year: "2025",
    summary: "Social campaign for a financial planning advisor.",
    overview: "A content series for a financial planning advisor, including a Valentine's Day campaign, \u201CLove Is Also Planning Ahead,\u201D and promotional design for a wealth-building webinar.",
    objective: "Translate financial planning \u2014 retirement, education savings, wealth protection \u2014 into warm, human visuals that invite a conversation instead of reading like a bank ad.",
    gallery: [
      "assets/financial-consultant/1.jpg",
      "assets/financial-consultant/2.jpg",
      "assets/financial-consultant/3.jpg"
    ]
  },

  "fyb": {
    title: "FYB",
    category: "Social Media Design",
    year: "2024",
    summary: "Graphic design for a final-year send-off series.",
    overview: "A graphic series for a Final Year Bash \u2014 the send-off milestone marking a graduating class's last stretch together.",
    objective: "Capture a celebratory, nostalgic tone in a clean, shareable format built for group reposting.",
    gallery: [
      "assets/fyb/1.jpg",
      "assets/fyb/2.jpg",
      "assets/fyb/3.jpg",
      "assets/fyb/4.jpg"
    ]
  },

  "wedding-invitations": {
    title: "Wedding Invitations",
    category: "Brand Identity",
    year: "2024",
    summary: "A full invitation suite balancing elegance and logistics.",
    overview: "A wedding invitation suite covering typography, floral motifs, and full event logistics \u2014 traditional ceremony, church wedding, and reception \u2014 on one considered page.",
    objective: "Design a keepsake-quality invitation that reads clearly at a glance for guests checking times and venues, while still feeling personal and ornamented.",
    gallery: [
      "assets/wedding-invitations/1.jpg",
      "assets/wedding-invitations/2.jpg",
      "assets/wedding-invitations/3.jpg",
      "assets/wedding-invitations/4.jpg"
    ]
  }

};

/* Explicit display order (also used for "next project" navigation) */
const PROJECT_ORDER = [
  "indigo-atelier",         // Complete campaign system (strongest)
  "asani-kitchen",          // Brand identity
  "treats-by-dee",          // Branding + packaging + launch
  "financial-consultant",   // Corporate/social campaign
  "fyb",                    // Event/community branding
  "election-campaign",      // Campaign poster
  "elysora",                // Premium branding
  "ybk-xchange",            // Business branding
  "bola-for-nails",         // Beauty branding
  "reaper-szn",             // Creative/streetwear project
  "nams",                   // Community organization
  "threadline-co",          // Fashion identity
  "smeeha-boots",           // Fashion/social branding
  "wedding-invitations"     // Personal invitation (finish with something different)
];

/* ---------- 2. Small helpers ---------- */
function qs(param){
  return new URLSearchParams(window.location.search).get(param);
}

function arrowIcon(){
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
         '<path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/* ---------- 3. Homepage: render the work grid ---------- */
function renderWorkGrid(){
  const grid = document.getElementById("work-grid");
  if (!grid) return;

  grid.innerHTML = PROJECT_ORDER.map(slug => {
    const p = PROJECTS[slug];
    return `
      <a class="project-card reveal" href="project.html?project=${slug}" aria-label="View ${p.title} project">
        <div class="project-card__media">
          <img src="${p.gallery[0]}" alt="${p.title} \u2014 ${p.category}" loading="lazy" width="800" height="600">
        </div>
        <div class="project-card__body">
          <div class="project-card__cat">${p.category}</div>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.summary}</p>
          <span class="project-card__arrow">View project ${arrowIcon()}</span>
        </div>
      </a>`;
  }).join("");
}

/* ---------- 4. Homepage: build the hero collage from real work ---------- */
function renderCollage(){
  const collage = document.getElementById("hero-collage");
  if (!collage) return;

  // Layout: item 1 + 2 sit side by side, item 3 (a landscape banner) drops
  // to its own full-width row automatically, then item 4 + 5 sit side by
  // side below it. See .collage / .collage__item--wide in style.css.
  const picks = [
    { slug: "asani-kitchen",  i: 0, cls: "collage__item--1" },
    { slug: "fyb",             i: 0, cls: "collage__item--2" },
    { slug: "indigo-atelier",  i: 0, cls: "collage__item--wide" },
    { slug: "bola-for-nails",  i: 0, cls: "collage__item--4" },
    { slug: "treats-by-dee",   i: 1, cls: "collage__item--5" }
  ];

  collage.innerHTML = picks.map(pick => {
    const p = PROJECTS[pick.slug];
    const src = p.gallery[pick.i];
    return `
      <div class="collage__item ${pick.cls}">
        <img src="${src}" alt="${p.title} preview" loading="lazy">
      </div>`;
  }).join("");
}

/* ---------- 5. Project page: render a single project ---------- */
function renderProjectPage(){
  const root = document.getElementById("project-root");
  if (!root) return;

  const slug = qs("project");
  const p = PROJECTS[slug];

  if (!p){
    root.innerHTML = `
      <div class="container" style="padding-block:120px; text-align:center;">
        <p class="eyebrow">Not found</p>
        <h1 style="margin-top:14px;">This project doesn't exist.</h1>
        <p class="muted" style="margin-top:14px;">
          <a href="index.html#work" class="btn btn--ghost" style="margin-top:20px;">Back to all work</a>
        </p>
      </div>`;
    document.title = "Project not found \u2014 AbdulKabeer Mabinuori";
    return;
  }

  document.title = `${p.title} \u2014 AbdulKabeer Mabinuori`;

  const gallerySlides = p.gallery.slice(1); // first image already used as hero

  root.innerHTML = `
    <section class="project-hero container">
      <a href="index.html#work" class="project-hero__back">&larr; All projects</a>
      <p class="eyebrow">${p.category}</p>
      <h1 style="margin-top:14px; font-size:clamp(34px,6vw,58px);">${p.title}</h1>
      <p class="muted" style="max-width:560px; margin-top:16px; font-size:16.5px;">${p.summary}</p>

      <div class="project-hero__meta">
        <div class="meta-item">
          <span class="eyebrow">Category</span>
          <span class="value">${p.category}</span>
        </div>
        <div class="meta-item">
          <span class="eyebrow">Year</span>
          <span class="value">${p.year}</span>
        </div>
        <div class="meta-item">
          <span class="eyebrow">Role</span>
          <span class="value">Visual Designer</span>
        </div>
      </div>

      <div class="project-hero__image reveal">
        <img src="${p.gallery[0]}" alt="${p.title} hero image" width="1600" height="1000">
      </div>
    </section>

    <section class="container project-copy">
      <div class="project-copy__block reveal">
        <h3>Overview</h3>
        <p>${p.overview}</p>
      </div>
      <div class="project-copy__block reveal">
        <h3>Design objective</h3>
        <p>${p.objective}</p>
      </div>
    </section>

    ${gallerySlides.length ? `
    <section class="container">
      <p class="eyebrow" style="margin-bottom:20px;">Gallery</p>
      <div class="gallery">
        ${gallerySlides.map(src => `
          <div class="gallery__item reveal">
            <img src="${src}" alt="${p.title} additional view" loading="lazy" width="800" height="600">
          </div>`).join("")}
      </div>
    </section>` : ""}

    ${renderNextProject(slug)}
  `;

  observeReveals();
}

function renderNextProject(currentSlug){
  const idx = PROJECT_ORDER.indexOf(currentSlug);
  const nextSlug = PROJECT_ORDER[(idx + 1) % PROJECT_ORDER.length];
  const next = PROJECTS[nextSlug];

  return `
    <section class="container">
      <div class="next-project">
        <div>
          <p class="eyebrow next-project__label">Next project</p>
          <p class="next-project__title">${next.title}</p>
        </div>
        <a class="next-project__link" href="project.html?project=${nextSlug}" aria-label="View next project: ${next.title}">
          <div class="next-project__thumb">
            <img src="${next.gallery[0]}" alt="" loading="lazy">
          </div>
          ${arrowIcon()}
        </a>
      </div>
    </section>`;
}

/* ---------- 6. Scroll-reveal (IntersectionObserver) ---------- */
function observeReveals(){
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
}

/* ---------- 7. Mobile nav toggle ---------- */
function initNavToggle(){
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("is-open"));
  });
}

/* ---------- 8. Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  renderWorkGrid();
  renderCollage();
  renderProjectPage();
  observeReveals();
});
