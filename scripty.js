// Lightbox
const images = document.querySelectorAll('.grid img');
const lightbox = document.getElementById('lightbox');
const imgLarge = document.getElementById('img-large');
const close = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    imgLarge.src = img.src;
    imgLarge.alt = img.alt;
  });
});

close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== imgLarge) {
    lightbox.style.display = 'none';
  }
});
