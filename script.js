/*
  AbdulKabeer Mabinuori Portfolio
  script.js

  Project data, homepage rendering,
  project pages, navigation and interactions.
*/


/* =========================================================
   1. PROJECT DATA
   ========================================================= */

const PROJECTS = {

  "asani-kitchen": {
    title: "ASANI Kitchen",
    category: "Brand Identity",
    group: "branding",
    year: "2025",

    summary:
      "Taking a student food business from Osun State and giving it a new visual identity for its move to Ibadan.",

    overview:
      "ASANI Kitchen started as a joint student business in Osun State. After graduation, the business owner returned home to Ibadan and wanted to continue the business independently. The project focused on helping ASANI Kitchen introduce itself to a new local audience.",

    objective:
      "The wordmark uses the name ASANI with a spoon motif built into the lettering. For the Ibadan launch, I designed a newspaper style announcement with a food tray shaped like a map of Ibadan. The idea was simple: the food itself becomes part of the location. The same visual could work across social media and larger formats such as roadside banners, while immediately suggesting both food and Ibadan.",

    gallery: [
      "assets/asani-kitchen/1.jpg",
      "assets/asani-kitchen/2.jpg",
      "assets/asani-kitchen/3.jpg"
    ]
  },


  "treats-by-dee": {
    title: "Treats by Dee",
    category: "Brand Identity",
    group: "branding",
    year: "2026",

    summary:
      "A clean visual identity and launch system for a local snacks and beverages brand.",

    overview:
      "Treats by Dee was preparing to launch as a local snacks and beverages brand. The challenge was to make the business look clean and professional while still making it immediately clear what kind of products customers could expect.",

    objective:
      "The logo uses chocolate and cream tones, with a black version for situations where colour is not needed. For the launch, I designed a folded newspaper style announcement featuring kulikuli, plantain chips, dodo ikire, and zobo placed around the layout. The products themselves help communicate the category before the audience reads the details. I also created a Now Open flyer, business flyer, and product labels so the same visual direction could continue across the brand.",

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
    category: "Social Media Design",
    group: "branding",
    year: "2026",

    summary:
      "A promotional social media flyer designed to present a nail care business clearly.",

    overview:
      "A social media promotional design for Bola for Nails, created to communicate the business and its services in a clean, easy to share format.",

    objective:
      "The focus was on making the service immediately understandable while keeping the design polished enough to represent a beauty business professionally.",

    gallery: [
      "assets/bola-for-nails/1.jpg"
    ]
  },


  "elysora": {
    title: "Elysora",
    category: "Social Media Design",
    group: "branding",
    year: "2025",

    summary:
      "A social media flyer designed to give Elysora a clean and distinct visual presence.",

    overview:
      "A promotional design for Elysora, created around a clean visual direction that gives the business a recognisable presence on social media.",

    objective:
      "The design was focused on presenting the business clearly while using typography, spacing, and colour to create a polished first impression.",

    gallery: [
      "assets/elysora/1.jpg"
    ]
  },


  "smeeha-boots": {
    title: "Smeeha Boots",
    category: "Social Media Design",
    group: "branding",
    year: "2024",

    summary:
      "A promotional flyer designed to communicate a footwear business and its product range quickly.",

    overview:
      "A social media flyer for Smeeha Boots, created to present the available footwear range in a format that could capture attention quickly while keeping the information organised.",

    objective:
      "The design needed to communicate the product category and range without overwhelming the viewer. The layout keeps the products prominent and makes the main message easy to understand within a few seconds.",

    gallery: [
      "assets/smeeha-boots/1.png"
    ]
  },


  "threadline-co": {
    title: "Threadline Co.",
    category: "Social Media Design",
    group: "branding",
    year: "2026",

    summary:
      "A promotional flyer for a tailoring business offering custom wear, alterations, and sewing training.",

    overview:
      "A promotional design for Threadline Co., created to present the tailoring business and its range of services in one clear visual.",

    objective:
      "The goal was to communicate several services without allowing the flyer to become difficult to read. The visual direction was kept clean and refined to support the premium feel of the tailoring brand.",

    gallery: [
      "assets/threadline-co/1.png"
    ]
  },


  "ybk-xchange": {
    title: "YBK Xchange",
    category: "Social Media Design",
    group: "branding",
    year: "2025",

    summary:
      "A promotional flyer for a business offering gift card, currency, and cryptocurrency exchange services.",

    overview:
      "YBK Xchange needed a social media graphic that could communicate several services within one design. The flyer covered foreign bank transfers, gift cards, and cryptocurrency.",

    objective:
      "The challenge was to communicate different service categories quickly without making the design feel crowded. The layout separates the services clearly while keeping the overall graphic energetic and easy to scan.",

    gallery: [
      "assets/ybk-xchange/1.jpg"
    ]
  },


  "election-campaign": {
    title: "University Election Campaign",
    category: "Campaign Design",
    group: "campaign",
    year: "2025",

    summary:
      "A series of campaign graphics for student association elections.",

    overview:
      "A collection of election campaign materials created for student association candidates. The designs included declarations of intent, campaign posters, vote graphics, and congratulatory materials.",

    objective:
      "The campaign materials needed to make the candidates and their positions immediately recognisable across different posts. I created a consistent visual direction that could be carried through the different stages of the campaign.",

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
    group: "campaign",
    year: "2025",

    summary:
      "A complete visual campaign for an event built around entrepreneurs, creatives, brands, and artists.",

    overview:
      "Indigo Atelier was positioned as more than a party. It was an experience designed to bring entrepreneurs, creatives, brand owners, and artists together in one space. The campaign was built around the idea of 'The Heaven's Made Experience'.",

    objective:
      "The project covered the event information graphics, backdrop banner, artist announcements, sponsor graphics, crew call, countdowns, event essentials, ticket designs, and thank you graphics. The challenge was keeping all of these materials connected so the audience experienced one event identity rather than a collection of separate flyers.",

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
    group: "campaign",
    year: "2025",

    summary:
      "A launch campaign for a streetwear clothing brand built around its first collection.",

    overview:
      "Reaper SZN is a streetwear clothing brand. The first product featured the phrase 'Rise Rule Reap' on the back of a round neck shirt, with the brand logo placed at the front.",

    objective:
      "I developed the product visuals around the snake skin inspired texture of the 'Rise Rule Reap' design. The collection was presented through black and white clothing alongside blue, green, and black caps. I also created a three day launch sequence and a long campaign banner that was divided into three sections so the complete design could sit across the first three pinned Instagram posts.",

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
    group: "social",
    year: "2024–2025",

    summary:
      "A collection of social media and communication designs for a university microbiology students' association.",

    overview:
      "NAMS, the Nigerian Association of Microbiology Students, needed engaging visual content for a student audience. The work covered different moments across the academic and social calendar.",

    objective:
      "I created designs for new month messages, resumption, Ramadan, microbiology facts, executive unveiling, membership IDs, and school signage. The goal was to make the association's communication feel organised and recognisable while keeping the individual posts engaging for students.",

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
    group: "campaign",
    year: "2024-2026",

    summary:
      "A social media campaign designed to make financial planning feel clear, professional, and approachable.",

    overview:
      "Financial and investment content can be difficult to communicate online because people are naturally cautious about who they trust with money. This project focused on presenting a financial consultant as a professional who could help people make more informed decisions about their finances.",

    objective:
      "The designs communicated services including retirement planning, education planning, tax efficient planning, gaining financial clarity, and planning money with confidence. I also created a handbill in the same direction and developed the 'Loving Is Also Planning Ahead' Valentine's Day concept to connect financial planning with a familiar everyday subject.",

    gallery: [
      "assets/financial-consultant/1.jpg",
      "assets/financial-consultant/2.jpg",
      "assets/financial-consultant/3.jpg"
    ]
  },


  "fyb": {
    title: "FYB",
    category: "Campaign Design",
    group: "campaign",
    year: "2025",

    summary:
      "Event graphics for final year student celebrations and activities.",

    overview:
      "The FYB project focused on visual materials for final year student activities, including the anticipation of FYB Week and the complete activity lineup.",

    objective:
      "The designs needed to create anticipation before the event while making the schedule easy for students to understand and share. I also created a sign out day flyer for another school as part of this type of final year celebration work.",

    gallery: [
      "assets/fyb/1.jpg",
      "assets/fyb/2.jpg",
      "assets/fyb/3.jpg",
      "assets/fyb/4.jpg"
    ]
  },


  "wedding-invitations": {
    title: "Wedding Invitations",
    category: "Invitation Design",
    group: null,
    year: "2024",

    summary:
      "Two wedding invitation directions exploring traditional and contemporary visual styles.",

    overview:
      "This project explored two different approaches to wedding invitation design. One was created for an Islamic, Fulani, and Hausa wedding, while the other followed a more contemporary direction for a Yoruba and Igbo wedding.",

    objective:
      "The goal was to make both invitations feel clean and classy while allowing each design to reflect the character of the wedding it represented. The project focused on typography, layout, cultural cues, and the clear presentation of event information.",

    gallery: [
      "assets/wedding-invitations/1.jpg",
      "assets/wedding-invitations/2.jpg",
      "assets/wedding-invitations/3.jpg",
      "assets/wedding-invitations/4.jpg"
    ]
  }

};


/* =========================================================
   2. EXPLICIT PROJECT ORDER
   ========================================================= */

const PROJECT_ORDER = [
  "indigo-atelier",
  "asani-kitchen",
  "treats-by-dee",
  "financial-consultant",
  "reaper-szn",
  "nams",
  "fyb",
  "election-campaign",
  "elysora",
  "ybk-xchange",
  "bola-for-nails",
  "threadline-co",
  "smeeha-boots",
  "wedding-invitations"
];


/* =========================================================
   3. HELPERS
   ========================================================= */

function qs(param) {
  return new URLSearchParams(window.location.search).get(param);
}


function arrowIcon() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}


/* =========================================================
   4. HOMEPAGE WORK GRID
   ========================================================= */

function renderWorkGrid(filterGroup) {
  const grid = document.getElementById("work-grid");

  if (!grid) return;

  const slugs = filterGroup
    ? PROJECT_ORDER.filter(slug => PROJECTS[slug].group === filterGroup)
    : PROJECT_ORDER;

  grid.innerHTML = slugs
    .map(slug => {
      const p = PROJECTS[slug];

      return `
        <a
          class="project-card reveal"
          href="project.html?project=${slug}"
          aria-label="View ${p.title} project"
        >

          <div class="project-card__media">
            <img
              src="${p.gallery[0]}"
              alt="${p.title} ${p.category}"
              loading="lazy"
              width="800"
              height="600"
            >
          </div>

          <div class="project-card__body">

            <div class="project-card__cat">
              ${p.category}
            </div>

            <h3 class="project-card__title">
              ${p.title}
            </h3>

            <p class="project-card__desc">
              ${p.summary}
            </p>

            <span class="project-card__arrow">
              View project
              ${arrowIcon()}
            </span>

          </div>

        </a>
      `;
    })
    .join("");
}


/* =========================================================
   5. HERO COLLAGE
   ========================================================= */

function renderCollage() {
  const collage = document.getElementById("hero-collage");

  if (!collage) return;

  const picks = [
    { slug: "asani-kitchen", i: 0, cls: "collage__item--1" },
    { slug: "fyb", i: 0, cls: "collage__item--2" },
    { slug: "indigo-atelier", i: 0, cls: "collage__item--wide" },
    { slug: "bola-for-nails", i: 0, cls: "collage__item--4" },
    { slug: "treats-by-dee", i: 1, cls: "collage__item--5" }
  ];

  collage.innerHTML = picks
    .map(pick => {
      const p = PROJECTS[pick.slug];
      const src = p.gallery[pick.i];

      return `
        <div class="collage__item ${pick.cls}">
          <img
            src="${src}"
            alt="${p.title} preview"
            loading="lazy"
          >
        </div>
      `;
    })
    .join("");
}


/* =========================================================
   5b. HERO TAGLINE FILTERS
   ("Branding · Campaign · Social Design" click to filter work)
   ========================================================= */

const GROUP_LABELS = {
  branding: "Branding",
  campaign: "Campaign",
  social: "Social Design"
};

let defaultWorkDesc = "";

function setWorkStatus(filterGroup) {
  const desc = document.getElementById("work-desc");
  if (!desc) return;

  if (!defaultWorkDesc) {
    defaultWorkDesc = desc.textContent.trim();
  }

  if (!filterGroup) {
    desc.textContent = defaultWorkDesc;
    return;
  }

  desc.innerHTML =
    `Showing <strong>${GROUP_LABELS[filterGroup]}</strong> work — ` +
    `<a href="#work" id="clear-filter" class="chip-btn chip-btn--ghost">show everything</a>`;
}

function applyFilter(filterGroup) {
  renderWorkGrid(filterGroup);
  setWorkStatus(filterGroup);

  document.querySelectorAll(".tag-filter").forEach(el => {
    el.classList.toggle("is-active", el.dataset.group === filterGroup);
  });

  observeReveals();
}

function initHeroFilters() {
  document.querySelectorAll(".tag-filter").forEach(el => {
    el.addEventListener("click", () => {
      applyFilter(el.dataset.group);
    });
  });

  // event delegation so the "show everything" link works even though
  // it's injected into the DOM later, after a filter is applied
  document.addEventListener("click", e => {
    if (e.target && e.target.id === "clear-filter") {
      e.preventDefault();
      applyFilter(null);
    }
  });
}


/* =========================================================
   6. PROJECT PAGE
   ========================================================= */

function renderProjectPage() {
  const root = document.getElementById("project-root");

  if (!root) return;

  const slug = qs("project");
  const p = PROJECTS[slug];

  if (!p) {

    root.innerHTML = `
      <div
        class="container"
        style="padding-block:120px; text-align:center;"
      >

        <p class="eyebrow">
          Not found
        </p>

        <h1 style="margin-top:14px;">
          This project doesn't exist.
        </h1>

        <p
          class="muted"
          style="margin-top:14px;"
        >
          <a
            href="index.html#work"
            class="btn btn--ghost"
            style="margin-top:20px;"
          >
            Back to all work
          </a>
        </p>

      </div>
    `;

    document.title =
      "Project not found | AbdulKabeer Mabinuori";

    return;
  }


  document.title =
    `${p.title} | AbdulKabeer Mabinuori`;


  const gallerySlides = p.gallery.slice(1);


  root.innerHTML = `

    <section class="project-hero container">

      <a
        href="index.html#work"
        class="project-hero__back"
      >
        ← All projects
      </a>

      <p class="eyebrow">
        ${p.category}
      </p>

      <h1
        style="
          margin-top:14px;
          font-size:clamp(34px,6vw,58px);
        "
      >
        ${p.title}
      </h1>

      <p
        class="muted"
        style="
          max-width:560px;
          margin-top:16px;
          font-size:16.5px;
        "
      >
        ${p.summary}
      </p>


      <div class="project-hero__meta">

        <div class="meta-item">
          <span class="eyebrow">
            Category
          </span>

          <span class="value">
            ${p.category}
          </span>
        </div>


        <div class="meta-item">
          <span class="eyebrow">
            Year
          </span>

          <span class="value">
            ${p.year}
          </span>
        </div>


        <div class="meta-item">
          <span class="eyebrow">
            Role
          </span>

          <span class="value">
            Visual Designer
          </span>
        </div>

      </div>


      <div class="project-hero__image reveal">

        <img
          src="${p.gallery[0]}"
          alt="${p.title} hero image"
          width="1600"
          height="1000"
        >

      </div>

    </section>


    <section class="container project-copy">

      <div class="project-copy__block reveal">

        <h3>
          Overview
        </h3>

        <p>
          ${p.overview}
        </p>

      </div>


      <div class="project-copy__block reveal">

        <h3>
          Design objective
        </h3>

        <p>
          ${p.objective}
        </p>

      </div>

    </section>


    ${
      gallerySlides.length
        ? `
          <section class="container">

            <p
              class="eyebrow"
              style="margin-bottom:20px;"
            >
              Gallery
            </p>

            <div class="gallery">

              ${gallerySlides
                .map(
                  src => `
                    <div class="gallery__item reveal">

                      <img
                        src="${src}"
                        alt="${p.title} additional view"
                        loading="lazy"
                        width="800"
                        height="600"
                      >

                    </div>
                  `
                )
                .join("")}

            </div>

          </section>
        `
        : ""
    }


    ${renderNextProject(slug)}

  `;


  observeReveals();
}


/* =========================================================
   7. NEXT PROJECT
   ========================================================= */

function renderNextProject(currentSlug) {

  const idx =
    PROJECT_ORDER.indexOf(currentSlug);

  const nextSlug =
    PROJECT_ORDER[
      (idx + 1) % PROJECT_ORDER.length
    ];

  const next =
    PROJECTS[nextSlug];


  return `

    <section class="container">

      <div class="next-project">

        <div>

          <p class="eyebrow next-project__label">
            Next project
          </p>

          <p class="next-project__title">
            ${next.title}
          </p>

        </div>


        <a
          class="next-project__link"
          href="project.html?project=${nextSlug}"
          aria-label="View next project: ${next.title}"
        >

          <div class="next-project__thumb">

            <img
              src="${next.gallery[0]}"
              alt=""
              loading="lazy"
            >

          </div>

          ${arrowIcon()}

        </a>

      </div>

    </section>

  `;
}


/* =========================================================
   8. SCROLL REVEAL
   ========================================================= */

function observeReveals() {

  const items =
    document.querySelectorAll(
      ".reveal:not(.is-visible)"
    );


  if (!("IntersectionObserver" in window)) {

    items.forEach(el => {
      el.classList.add("is-visible");
    });

    return;
  }


  const io =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            io.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold: 0.12
      }
    );


  items.forEach(el => {
    io.observe(el);
  });
}


/* =========================================================
   9. MOBILE NAVIGATION
   ========================================================= */

function initNavToggle() {

  const toggle =
    document.querySelector(
      ".nav__toggle"
    );

  const links =
    document.querySelector(
      ".nav__links"
    );


  if (!toggle || !links) return;


  toggle.addEventListener(
    "click",
    () => {

      const isOpen =
        links.classList.toggle(
          "is-open"
        );

      toggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  links
    .querySelectorAll("a")
    .forEach(a => {

      a.addEventListener(
        "click",
        () => {
          links.classList.remove(
            "is-open"
          );
        }
      );

    });
}


/* =========================================================
   10. INITIALISE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initNavToggle();

    initHeroFilters();

    renderWorkGrid();

    renderCollage();

    renderProjectPage();

    observeReveals();

  }
);
