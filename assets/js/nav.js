(function () {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const isJa = document.documentElement.lang === 'ja';
  const openLabel = isJa ? 'メニューを開く' : 'Open menu';
  const closeLabel = isJa ? 'メニューを閉じる' : 'Close menu';
  const openText = isJa ? 'メニュー' : 'Menu';
  const closeText = isJa ? '閉じる' : 'Close';

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
    const textSpan = toggle.querySelector('.menu-text');
    if (textSpan) textSpan.textContent = open ? closeText : openText;
    if (open) {
      nav.classList.add('is-open');
    } else {
      nav.classList.remove('is-open');
    }
  }

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  window.matchMedia('(min-width: 881px)').addEventListener('change', function (e) {
    if (e.matches && nav.classList.contains('is-open')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
