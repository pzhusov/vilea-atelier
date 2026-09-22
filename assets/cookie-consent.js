/* VÍLEÁ Atelier — Cookie consent + conditional Google Analytics load */

(function () {
  var CONSENT_KEY = 'vilea-cookie-consent';
  var GA_ID = 'G-N5RRS41BET';

  function loadGA() {
    if (window.__vileaGtagLoaded) return;
    window.__vileaGtagLoaded = true;

    // Pre-push default consent state (denied) — required by Google Consent Mode v2
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function showBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.removeAttribute('hidden');
  }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (b) b.setAttribute('hidden', '');
  }

  // Boot logic — runs as soon as the snippet executes
  var saved = null;
  try { saved = localStorage.getItem(CONSENT_KEY); } catch (e) { /* private mode */ }

  if (saved === 'accepted') {
    loadGA();
  } else if (saved === 'rejected') {
    // Stay disabled — no GA, no cookies
  } else {
    // First visit (or storage unavailable) — show banner
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }

  // Wire up buttons (delegate — works even if banner is added later)
  document.addEventListener('DOMContentLoaded', function () {
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');

    function setConsent(value) {
      try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* ignore */ }
      hideBanner();
      if (value === 'accepted') loadGA();
    }

    if (acceptBtn) acceptBtn.addEventListener('click', function () { setConsent('accepted'); });
    if (rejectBtn) rejectBtn.addEventListener('click', function () { setConsent('rejected'); });
  });
})();
