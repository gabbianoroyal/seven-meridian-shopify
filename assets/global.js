// Seven Meridian — Global JS

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var headerNav = document.querySelector('.header-nav');
  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      headerNav.style.display = expanded ? 'none' : 'flex';
      headerNav.style.flexDirection = 'column';
      headerNav.style.position = 'absolute';
      headerNav.style.top = '100%';
      headerNav.style.left = '0';
      headerNav.style.right = '0';
      headerNav.style.background = '#fff';
      headerNav.style.padding = '16px 24px';
      headerNav.style.borderBottom = '1px solid var(--color-border)';
      headerNav.style.gap = '16px';
      if (expanded) headerNav.removeAttribute('style');
    });
  }
});
