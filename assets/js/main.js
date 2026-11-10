// ===== Menú hamburguesa =====
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

// ===== Caso de estudio (modal) =====
document.querySelectorAll('[data-case-study]').forEach((button) => {
  const dialog = document.getElementById(button.dataset.caseStudy);
  button.addEventListener('click', () => dialog.showModal());
});

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => dialog.close());
  });
  // Cerrar al hacer clic en el fondo oscuro
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
});