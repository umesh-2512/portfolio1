/* ===================================================================
   Runs on every page:
     1. Live clock — Auckland time (auto-adjusts for NZDT / NZST)
     2. Current year in the footer
     3. Gallery lightbox (only does something on gallery.html)
     4. Project category tabs (only does something on projects.html)
     5. Reveal project cards on scroll (only does something on projects.html)
     6. Render a case study from ?slug= (only does something on case-study.html)
     7. Render a blog post from ?slug= (only does something on blog-post.html)
   Each block checks that its element exists first, so the same file
   is safe to include everywhere.
   =================================================================== */

// 1. Clock --------------------------------------------------------
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString("en-NZ", {
    timeZone: "Pacific/Auckland", // handles daylight saving automatically
    hour: "numeric",
    minute: "2-digit",
  });
}
updateClock();
setInterval(updateClock, 15000); // refresh every 15s

// 2. Footer year ------------------------------------------------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 3. Gallery lightbox -----------------------------------------
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const bigImg = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".lightbox__close");
  const previousButton = lightbox.querySelector(".lightbox__prev");
  const nextButton = lightbox.querySelector(".lightbox__next");
  let lightboxImages = [];
  let lightboxIndex = 0;

  function showLightboxImage(index) {
    lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
    const image = lightboxImages[lightboxIndex];
    bigImg.src = image.src;
    bigImg.alt = image.alt;
  }

  document.addEventListener("click", (event) => {
    const thumb = event.target.closest(".gallery-grid img, .post-gallery img");
    if (!thumb) return;
    const gallery = thumb.closest(".gallery-grid, .post-gallery");
    lightboxImages = Array.from(gallery.querySelectorAll("img"));
    lightboxIndex = lightboxImages.indexOf(thumb);
    showLightboxImage(lightboxIndex);
    lightbox.classList.add("open");
  });

  previousButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showLightboxImage(lightboxIndex - 1);
  });

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showLightboxImage(lightboxIndex + 1);
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    lightbox.classList.remove("open");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.classList.remove("open");
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "ArrowLeft") showLightboxImage(lightboxIndex - 1);
    if (event.key === "ArrowRight") showLightboxImage(lightboxIndex + 1);
    if (event.key === "Escape") lightbox.classList.remove("open");
  });
}

// 4. Project category tabs (Development / Consulting) --------
const projTabs = document.querySelectorAll(".tab");
if (projTabs.length) {
  const activate = (tab) => {
    projTabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1; // roving tabindex for keyboard users
    });
    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === "panel-" + tab.dataset.panel);
    });
  };

  projTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const step = e.key === "ArrowRight" ? 1 : -1;
      const next = projTabs[(i + step + projTabs.length) % projTabs.length];
      next.focus();
      activate(next);
    });
  });
}

// 5. Reveal project cards as they enter the viewport ---------
const cardGroups = document.querySelectorAll(".cards");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (cardGroups.length && !reduceMotion && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  cardGroups.forEach((group) => {
    group.classList.add("reveal"); // now the CSS hides the cards until seen
    group.querySelectorAll(".card").forEach((card, i) => {
      card.style.setProperty("--reveal-i", i); // stagger delay, restarts per group
      io.observe(card);
    });
  });
}

// 6. Case study page: render from ?slug= against consulting.js ------
const caseRoot = document.getElementById("case-root");
if (caseRoot && typeof CONSULTING_PROJECTS !== "undefined") {
  const slug = new URLSearchParams(location.search).get("slug");
  const project = CONSULTING_PROJECTS.find((p) => p.slug === slug);

  const backLink =
    '<p class="case-back"><a href="projects.html">&larr; Back to Projects</a></p>';

  if (!project) {
    caseRoot.innerHTML = backLink + "<p>Sorry, that case study could not be found.</p>";
  } else {
    // per-page SEO
    document.title = project.title + " | Umesh Nayak";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", project.description);

    const sectionsHtml = project.sections
      .map((s) => {
        let body = "";
        if (s.body) body += "<p>" + s.body + "</p>";
        if (s.paras) body += s.paras.map((p) => "<p>" + p + "</p>").join("");
        if (s.list) {
          body += "<ul>" + s.list.map((li) => "<li>" + li + "</li>").join("") + "</ul>";
        }
        return '<section class="case-section"><h2>' + s.heading + "</h2>" + body + "</section>";
      })
      .join("");

    const tagsHtml =
      '<ul class="tags">' +
      project.tags.map((t) => "<li>" + t + "</li>").join("") +
      "</ul>";

    const logoHtml = project.logo
      ? '<img class="case-logo" src="' + project.logo + '" alt="' + project.title + ' logo" />'
      : "";

    caseRoot.innerHTML =
      backLink +
      '<span class="card-badge ' + project.badgeClass + '">' + project.badge + "</span>" +
      logoHtml +
      '<h1 class="case-title">' + project.title + "</h1>" +
      '<p class="case-meta">' + project.meta + "</p>" +
      (project.hook ? '<p class="case-hook">' + project.hook + "</p>" : "") +
      '<p class="case-overview">' + project.overview + "</p>" +
      tagsHtml +
      sectionsHtml +
      '<p class="case-back case-back--bottom"><a href="projects.html">&larr; Back to Projects</a></p>';
  }
}

// 7. Blog post page: render from ?slug= against blog.js ------------
const postRoot = document.getElementById("post-root");
if (postRoot && typeof BLOG_POSTS !== "undefined") {
  const postSlug = new URLSearchParams(location.search).get("slug");
  const post = BLOG_POSTS.find((p) => p.slug === postSlug);

  const postBackLink = '<p class="post-back"><a href="blogs.html">&larr; Back to Blog</a></p>';

  if (!post) {
    postRoot.innerHTML = postBackLink + "<p>Sorry, that post could not be found.</p>";
  } else {
    // per-page SEO
    document.title = post.hook + " | Umesh Nayak";
    const postDesc = document.querySelector('meta[name="description"]');
    if (postDesc) postDesc.setAttribute("content", post.body[0]);

    const bodyHtml = post.body.map((para) => "<p>" + para + "</p>").join("");
    const imageHtml = post.image
      ? '<img class="post-image" src="' + post.image + '" alt="">'
      : "";
    const galleryHtml = post.gallery && post.gallery.length
      ? '<div class="post-gallery">' +
        post.gallery.map((image) =>
          '<button class="post-gallery__item" type="button" aria-label="Open image: ' + image.alt + '">' +
          '<img src="' + image.src + '" alt="' + image.alt + '">' +
          '</button>'
        ).join("") +
        '</div>'
      : "";
    const relatedHtml = post.related
      ? '<p class="post-related"><a href="' +
        post.related.href +
        '">' +
        post.related.label +
        " &rarr;</a></p>"
      : "";

    postRoot.innerHTML =
      postBackLink +
      '<div class="post-head">' +
      '<img class="post-avatar" src="' + post.avatar + '" alt="' + post.author + '">' +
      '<div>' +
      '<div class="post-name">' + post.author + '</div>' +
      '<div class="post-meta">' +
      post.role +
      ' &middot; <time datetime="' + post.date + '">' + post.dateLabel + '</time>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<p class="post-hook">' + post.hook + '</p>' +
      '<div class="post-body">' + bodyHtml + '</div>' +
      imageHtml +
      galleryHtml +
      relatedHtml +
      '<p class="post-back post-back--bottom"><a href="blogs.html">&larr; Back to Blog</a></p>';
  }
}
