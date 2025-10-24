// navslider.js
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul.nav-links a');
  const page = document.getElementById('page');

  links.forEach(link => {
    link.addEventListener('click', e => {
      // Prevent normal navigation immediately
      e.preventDefault();

      // Get link href
      const href = link.getAttribute('href');

      // Start fade out
      page.classList.remove('visible');
      page.classList.add('hidden');

      // After fade duration, change page
      setTimeout(() => {
        window.location.href = href;
      }, 600); // must match CSS transition duration
    });
  });
});
