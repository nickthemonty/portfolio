(function () {
  var root = document.documentElement;
  function current() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function label() {
    var dark = current() === 'dark';
    document.querySelectorAll('[data-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
  document.querySelectorAll('[data-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
  });
  label();
})();
