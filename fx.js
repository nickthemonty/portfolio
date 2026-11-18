/* Layout switcher state, scroll reveal and pointer tilt. All motion respects prefers-reduced-motion. */
(function () {
  var d = document, root = d.documentElement;
  var cur = (d.body.className.match(/layout-[ab]/) || [""])[0];
  d.querySelectorAll(".switch a").forEach(function (a) { if (a.getAttribute("data-l") === cur) a.setAttribute("aria-current", "page"); });

  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  root.classList.add("fx");

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var t = e.target; t.classList.add("in"); io.unobserve(t);
      setTimeout(function () { t.style.transitionDelay = ""; }, 1200);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  d.querySelectorAll(".proj,.bench-card,.quotes blockquote,.mini,.site-card,.squiggle").forEach(function (el) {
    el.classList.add("rv");
    var i = [].indexOf.call(el.parentNode.children, el);
    el.style.transitionDelay = Math.min(i, 3) * 90 + "ms";
    io.observe(el);
  });

  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  d.querySelectorAll(".proj .frame,.mini .frame,.bench-art").forEach(function (f) {
    f.classList.add("tilt");
    f.addEventListener("pointermove", function (e) {
      var r = f.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      f.style.transform = "perspective(900px) rotateY(" + (x * 6).toFixed(2) + "deg) rotateX(" + (-y * 6).toFixed(2) + "deg)";
    });
    f.addEventListener("pointerleave", function () { f.style.transform = ""; });
  });
})();

/* v1.4: zigzag path drawn by scroll, cursor chip, carousels that play on hover */
(function () {
  var d = document;
  if (!d.body.classList.contains("layout-a")) return;
  var rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Carousels advance while hovered
  if (fine && !rm) d.querySelectorAll(".mini").forEach(function (m) {
    var next = m.querySelector(".car-btn.next"), t;
    if (!next) return;
    m.addEventListener("mouseenter", function () { m.classList.add("playing"); t = setInterval(function () { next.click(); }, 1400); });
    m.addEventListener("mouseleave", function () { m.classList.remove("playing"); clearInterval(t); });
  });

})();

/* v1.8: copy button draws a check after copying */
document.querySelectorAll(".copy-btn").forEach(function (b) {
  b.addEventListener("click", function () {
    setTimeout(function () {
      if (b.textContent === "Copied") b.insertAdjacentHTML("beforeend", '<svg class="ck" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5"/></svg>');
    }, 60);
  });
});
