document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider img');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.style.display = idx === index ? 'block' : 'none';
    });
  }

  document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});
