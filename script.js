function goTo(page) {
  document.querySelectorAll('.page').forEach(function (el) { el.classList.remove('active'); });
  var target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('.mobile-menu').forEach(function (m) { m.classList.remove('open'); });
  window.scrollTo({ top: 0 });
  history.replaceState(null, '', '#' + page);
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function initNavScroll() {
  var nav = document.getElementById('nav');
  var scrolled = false;
  function onScroll() {
    var y = window.scrollY;
    var next = scrolled ? y > 8 : y > 48;
    if (next !== scrolled) {
      scrolled = next;
      nav.classList.toggle('scrolled', scrolled);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  initNavScroll();
  var initial = (window.location.hash || '#home').slice(1);
  goTo(initial);
});
