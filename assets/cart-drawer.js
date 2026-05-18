// Seven Meridian — Cart Drawer

document.addEventListener('DOMContentLoaded', function() {
  var drawer = document.getElementById('cart-drawer');
  var overlay = document.getElementById('cart-overlay');
  var closeBtn = document.getElementById('cart-close');
  var cartLinks = document.querySelectorAll('.cart-link');

  function openDrawer(e) {
    if (e) e.preventDefault();
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  cartLinks.forEach(function(link) {
    link.addEventListener('click', openDrawer);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDrawer();
  });
});
