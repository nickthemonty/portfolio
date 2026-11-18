/* ON/OFF SWITCH for case studies.
   Set visible:false to hide a case study: its card disappears from the home page,
   it drops out of "Next case study", search engines skip it, and visitors are sent home.
   To preview a hidden page, add #preview to its URL. Order here = order on the site. */
window.PROJECTS = [
  { slug: "equipment-economics",   title: "Equipment Economics",                   visible: false },
  { slug: "opportunity-detection", title: "Opportunity Detection",  visible: true  },
  { slug: "speak-up",              title: "Speak Up",                              visible: true  },
  { slug: "offline-inspections",   title: "VisionLink Offline Inspections",        visible: false },
  { slug: "disclosure-approval",   title: "Disclosure Approval Experience",        visible: true  }
];

/* Résumé PDF: put the file in the site root and set its name here, e.g. "Nick-Montesano-Resume.pdf". Leave "" to hide the buttons. */
window.RESUME_PDF = "";

/* Optional About links: paste a public profile URL to show it; leave "" to hide. */
window.LINKS = {
  LinkedIn:  "https://www.linkedin.com/in/nick-montesano",
  Strava:    "",
  Letterboxd:""
};

(function () {
  var P = window.PROJECTS, live = P.filter(function (p) { return p.visible; });
  var here = document.body.getAttribute("data-slug");
  var root = document.body.getAttribute("data-root") || "";

  // Home page: hide cards for switched-off projects
  document.querySelectorAll("[data-project]").forEach(function (el) {
    var p = P.find(function (x) { return x.slug === el.getAttribute("data-project"); });
    if (p && !p.visible) el.remove();
  });

  // Case study page: guard + next link
  if (here) {
    var me = P.find(function (x) { return x.slug === here; });
    if (me && !me.visible) {
      var m = document.createElement("meta"); m.name = "robots"; m.content = "noindex";
      document.head.appendChild(m);
      if (location.hash !== "#preview") { location.replace(root + "index.html"); return; }
    }
    var nx = document.getElementById("next");
    if (nx) {
      var i = live.findIndex(function (x) { return x.slug === here; });
      var n = live[(i + 1) % live.length];
      if (!n || n.slug === here) nx.remove();
      else { nx.querySelector("a").href = n.slug + ".html"; nx.querySelector(".t").textContent = n.title + " →"; }
    }
  }

  // Number visible case studies 01, 02…
  document.querySelectorAll("[data-n]").forEach(function (el, i) { el.textContent = String(i + 1).padStart(2, "0"); });

  // Résumé PDF buttons
  document.querySelectorAll("[data-pdf]").forEach(function (a) {
    if (window.RESUME_PDF) { a.href = root + window.RESUME_PDF; a.hidden = false; } else a.remove();
  });

  // Link lists
  document.querySelectorAll("[data-links]").forEach(function (ul) {
    Object.keys(window.LINKS).forEach(function (k) {
      if (!window.LINKS[k]) return;
      var li = document.createElement("li"), a = document.createElement("a");
      a.href = window.LINKS[k]; a.textContent = k; li.appendChild(a); ul.appendChild(li);
    });
  });
})();

/* Image carousels on "More work" cards */
document.querySelectorAll("[data-carousel]").forEach(function (c) {
  var imgs = c.querySelectorAll("img"), n = imgs.length, i = 0, count = c.querySelector(".car-count");
  var label = c.querySelector(".car-label");
  function show(k) {
    imgs[i].hidden = true; i = (k + n) % n; imgs[i].hidden = false; count.textContent = (i + 1) + " / " + n;
    var t = imgs[i].getAttribute("data-label"); if (label) { label.textContent = t || ""; label.hidden = !t; }
  }
  show(0);
  c.querySelector(".prev").addEventListener("click", function () { show(i - 1); });
  c.querySelector(".next").addEventListener("click", function () { show(i + 1); });
  c.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") show(i - 1); if (e.key === "ArrowRight") show(i + 1); });
});

/* "How I made this site" accordion */
document.querySelectorAll(".acc-btn").forEach(function (b) {
  var panel = document.getElementById(b.getAttribute("aria-controls")), card = b.closest(".site-card");
  b.addEventListener("click", function () {
    var open = b.getAttribute("aria-expanded") !== "true";
    b.setAttribute("aria-expanded", String(open)); panel.hidden = !open;
    card.classList.toggle("open", open);
  });
});

/* Lightbox: click any case-study image or carousel image to view larger */
(function () {
  var lb = document.createElement("div"); lb.className = "lb"; lb.hidden = true;
  lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Enlarged image");
  var im = document.createElement("img"); im.alt = ""; var x = document.createElement("button");
  var hold = document.createElement("div"); hold.className = "lb-anno";
  x.type = "button"; x.setAttribute("aria-label", "Close"); x.textContent = "×";
  lb.appendChild(im); lb.appendChild(hold); lb.appendChild(x); document.body.appendChild(lb);
  var st = document.createElement("style");
  st.textContent = "main img:not(a img):not(.avatar),.anno-v{cursor:zoom-in}.lb-anno{display:none;width:min(94vw,calc(90vh * var(--ar,1.56)));background:#fff;border-radius:8px;cursor:zoom-out}.lb.is-anno img{display:none}.lb.is-anno .lb-anno{display:block}.lb-anno .anno-v{cursor:zoom-out}.page-about main img{cursor:inherit!important}";
  document.head.appendChild(st);
  var last = null;
  function close() { lb.hidden = true; im.src = ""; hold.innerHTML = ""; lb.classList.remove("is-anno"); document.body.style.overflow = ""; if (last) last.focus(); }
  function open() { last = document.activeElement; lb.hidden = false; document.body.style.overflow = "hidden"; x.focus(); }
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.closest && t.closest(".lb")) { close(); return; }
    var av = t.closest && t.closest(".anno-v");
    if (av && !t.closest("a")) {
      var src = av.querySelector("img");
      if (src) { im.src = src.currentSrc || src.src; im.alt = src.alt || ""; open(); }
      return;
    }
    if (t.tagName === "IMG" && t.closest("main") && !document.body.classList.contains("page-about") && !t.closest("a") && !t.classList.contains("avatar") && t.naturalWidth > 120) {
      e.preventDefault(); im.src = t.currentSrc || t.src; im.alt = t.alt || ""; open();
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) close(); });
})();

/* Copy email buttons */
document.querySelectorAll(".copy-btn").forEach(function (b) {
  b.addEventListener("click", function () {
    var v = b.getAttribute("data-copy"), label = b.textContent;
    function done(t) { b.textContent = t; setTimeout(function () { b.textContent = label; }, 2000); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(function () { done("Copied"); }, function () { done(v); });
    else done(v);
  });
});

/* Notes toggle: one switch per case study shows or hides every annotation on the page.
   Floats bottom-right while an annotated screen is on screen; remembers the choice. */
(function () {
  var figs = document.querySelectorAll(".anno");
  if (!figs.length) return;
  var KEY = "notes-off", off = false;
  try { off = localStorage.getItem(KEY) === "1"; } catch (e) {}
  var b = document.createElement("button");
  b.type = "button"; b.className = "notes-toggle";
  b.innerHTML = '<span class="nt-track" aria-hidden="true"><span class="nt-knob"></span></span><span class="nt-label">Notes</span>';
  function set(v) {
    off = v; document.body.classList.toggle("notes-off", off);
    b.setAttribute("aria-pressed", String(!off));
    b.setAttribute("aria-label", off ? "Show notes on screens" : "Hide notes on screens");
    try { localStorage.setItem(KEY, off ? "1" : "0"); } catch (e) {}
  }
  b.addEventListener("click", function () { set(!off); });
  document.body.appendChild(b); set(off);
  if ("IntersectionObserver" in window) {
    var seen = new Set();
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.isIntersecting ? seen.add(e.target) : seen.delete(e.target); });
      b.classList.toggle("show", seen.size > 0);
    }, { rootMargin: "0px 0px -15% 0px" });
    figs.forEach(function (f) { io.observe(f); });
  } else b.classList.add("show");
})();


/* Mobile nav: hamburger button toggles the primary nav under 700px */
(function () {
  var head = document.querySelector(".site-head"), nav = head && head.querySelector("nav");
  if (!nav) return;
  nav.id = nav.id || "primary-nav";
  var b = document.createElement("button");
  b.type = "button"; b.className = "nav-btn";
  b.setAttribute("aria-controls", nav.id); b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-label", "Open menu");
  b.innerHTML = '<span class="bars" aria-hidden="true"><i></i><i></i><i></i></span>';
  head.appendChild(b);
  function set(open) {
    document.body.classList.toggle("nav-open", open);
    b.setAttribute("aria-expanded", String(open)); b.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  b.addEventListener("click", function () { set(!document.body.classList.contains("nav-open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.body.classList.contains("nav-open")) { set(false); b.focus(); } });
  document.addEventListener("click", function (e) { if (!head.contains(e.target)) set(false); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
  matchMedia("(min-width: 701px)").addEventListener("change", function (m) { if (m.matches) set(false); });
})();
