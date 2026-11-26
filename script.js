document.getElementById('year').textContent = new Date().getFullYear();
const dialog = document.getElementById('lightbox');
const expanded = document.getElementById('lightbox-image');
const caption = document.getElementById('lightbox-caption');
document.querySelectorAll('.image-button').forEach(button => {
  button.addEventListener('click', () => {
    expanded.src = button.dataset.image;
    expanded.alt = button.querySelector('img').alt;
    caption.textContent = button.dataset.caption || '';
    dialog.showModal();
  });
});
document.getElementById('lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
