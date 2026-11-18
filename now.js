/* About page content. Hand-updated.
   current: static cards. To add a book back: { "kind": "Reading", "title": "...", "meta": "Author", "tint": "#D9CBB6" }
   route: SVG path in a 0-100 box (generated from the activity's GPS file).
   picks: expandable cards; "why" is the text shown when opened. */
window.NOW = {
  "current": [
    { "kind": "Reading", "img": "img/book-golden-son.webp", "pos": "center 40%", "title": "Golden Son", "meta": "Pierce Brown · on Goodreads", "tint": "#E2D3AE",
      "href": "https://www.goodreads.com/book/show/18966819-golden-son" },
    { "kind": "Latest hike", "title": "Golden Gate Canyon Hike", "meta": "6.0 mi · 1,309 ft gain · Oct 2026", "tint": "#CFD8C6",
      "route": "M29.2 48.6 L30.4 50.8 L32.9 52.7 L34.4 56.2 L37.6 57.0 L39.3 60.2 L40.2 63.3 L42.1 66.2 L44.0 68.0 L44.8 71.4 L46.4 74.1 L47.9 77.0 L50.3 79.4 L53.0 81.0 L54.7 81.9 L57.5 82.7 L60.3 82.3 L63.0 83.5 L65.8 85.3 L68.4 85.1 L70.3 84.0 L73.0 84.4 L75.0 86.3 L76.8 88.3 L79.0 89.8 L78.1 86.9 L78.0 85.6 L79.7 86.9 L79.8 84.4 L78.4 82.9 L78.5 81.0 L80.1 79.8 L81.2 78.2 L79.7 78.0 L78.0 76.1 L76.0 74.2 L74.2 72.6 L74.8 69.9 L75.3 67.1 L75.0 65.0 L74.6 62.1 L73.9 59.3 L73.7 56.3 L75.6 54.2 L77.9 53.4 L79.1 52.8 L78.0 51.9 L76.5 49.5 L75.6 46.7 L74.9 43.9 L73.6 41.8 L73.9 40.5 L71.8 40.4 L69.7 39.4 L68.1 37.7 L65.6 36.3 L63.1 35.3 L61.1 33.3 L59.6 30.9 L57.1 29.2 L54.4 27.6 L53.0 25.0 L50.9 23.5 L49.8 23.0 L49.2 21.0 L47.7 19.2 L45.5 17.3 L43.1 16.6 L41.8 15.3 L41.2 13.2 L40.6 15.0 L40.4 17.6 L39.6 20.2 L38.8 19.5 L37.8 16.8 L36.5 15.1 L34.5 12.7 L32.7 10.2 L32.1 12.3 L31.6 14.9 L30.6 16.8 L29.5 16.9 L27.6 17.8 L26.3 19.3 L25.9 22.3 L23.5 22.6 L21.1 20.4 L19.4 21.2 L19.4 27.1 L20.1 28.7 L21.5 29.3 L24.8 30.3 L28.4 32.0 L29.2 34.6 L28.2 37.7 L26.3 41.0 L25.2 44.4 L24.6 48.2 L23.5 51.9 L25.3 54.9 L27.4 55.6 L25.3 53.4 L27.0 52.3 L29.4 50.7 L29.1 48.8" },
    { "kind": "Last race", "title": "North Table Mountain Trail Race", "meta": "10.3 mi · 1:26:06 · 1,549 ft gain · Sep 2026", "tint": "#D3D6DE",
      "route": "M90.0 47.1 L87.8 45.8 L85.6 46.2 L83.4 47.9 L81.7 49.2 L79.3 49.5 L76.7 49.5 L76.9 53.7 L78.0 56.1 L75.6 56.9 L73.1 56.1 L72.1 58.1 L70.7 54.6 L69.4 53.5 L68.0 53.0 L67.9 55.1 L68.1 57.7 L67.9 59.7 L66.5 61.9 L66.9 59.3 L65.0 61.7 L63.2 62.7 L61.5 63.3 L59.4 62.3 L57.7 61.3 L55.8 59.8 L53.4 59.0 L52.4 59.1 L53.4 61.5 L53.0 63.3 L52.3 65.1 L53.5 67.2 L53.8 69.3 L52.6 71.1 L50.2 72.0 L49.0 73.8 L47.8 75.5 L45.9 75.8 L43.8 76.9 L41.5 76.9 L39.7 75.7 L37.7 75.2 L35.8 74.8 L33.8 74.5 L33.2 73.7 L31.8 74.0 L30.3 73.0 L29.1 73.4 L26.8 73.2 L24.7 74.2 L23.1 72.9 L22.8 70.9 L22.1 68.8 L21.7 66.0 L21.4 63.6 L19.8 62.5 L18.7 60.2 L17.4 58.4 L15.1 57.2 L12.9 56.5 L11.5 54.7 L10.3 52.4 L10.0 50.0 L11.4 47.8 L11.7 45.2 L12.7 43.3 L14.1 41.3 L15.7 40.0 L17.9 39.2 L20.5 39.3 L22.6 39.8 L23.8 39.0 L25.7 37.4 L27.5 35.8 L30.0 34.9 L32.1 35.1 L33.6 35.8 L35.2 35.3 L37.1 35.5 L37.9 33.4 L37.8 30.9 L38.0 28.3 L38.1 26.4 L39.1 25.3 L41.6 24.5 L43.7 23.2 L45.7 23.1 L47.8 24.3 L49.8 24.7 L52.3 25.3 L54.4 25.4 L56.4 27.1 L58.2 27.9 L59.5 30.0 L60.7 31.8 L62.1 34.2 L63.0 36.2 L63.9 38.5 L64.1 40.9 L64.3 42.8 L64.5 45.5 L64.4 47.8 L63.8 48.7 L64.9 49.9 L66.8 52.0 L67.6 53.4 L69.3 52.4 L70.9 54.7 L71.5 57.1 L72.1 57.4 L73.7 56.4 L76.0 56.9 L78.0 56.1 L77.0 54.0 L76.6 51.6 L76.3 49.4 L78.6 49.5 L81.1 49.4 L83.1 48.0 L85.2 46.4 L87.9 45.9 L89.9 47.1" }
  ],
  "picks": [
    { "kind": "Album", "img": "img/pick-phoebe.webp", "pos": "center 45%", "title": "Lost Weekend", "meta": "Phoebe Bridgers", "tint": "#B9D3D0",
      "why": ["Endless sonic creativity and a vocal range I love to work to", "Her honest lyrics and dedication to her art inspire me to do the same"] },
    { "kind": "Film", "img": "img/pick-wildwood.webp", "pos": "center 32%", "title": "Wildwood", "meta": "Directed by Travis Knight, LAIKA Studios", "tint": "#C9D6C3",
      "why": ["16 years in the making, with every costume and expression made by hand", "As AI speeds up my work, it reminds me what patient, deliberate design looks like"] },
    { "kind": "Game", "img": "img/pick-zelda.webp", "pos": "center 40%", "title": "The Legend of Zelda: Ocarina of Time Remake", "meta": "Nintendo Switch 2", "tint": "#C7D3DE",
      "why": ["Good redesign knows what not to change", "New tech only where it adds: a fuller world, a grander score"] }
  ]
};
