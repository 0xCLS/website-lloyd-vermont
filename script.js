const menuButton = document.getElementById('menu-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
menuButton.addEventListener('click', () => {
  const isOpen = primaryNavigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close main navigation' : 'Open main navigation');
});
primaryNavigation.addEventListener('click', event => {
  if (event.target.closest('a')) {
    primaryNavigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open main navigation');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const returnFocus = primaryNavigation.classList.contains('open') && primaryNavigation.contains(document.activeElement);
    primaryNavigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open main navigation');
    if (returnFocus) menuButton.focus();
  }
});


// V5 testimonial carousel: intentional navigation only; no autoplay while reading.
const testimonialSlides = Array.from(document.querySelectorAll('.testimonial-slides .testimonial'));
if (testimonialSlides.length > 0) {
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));
  const count = document.getElementById('testimonial-count');
  const carousel = document.querySelector('.testimonial-carousel');
  let activeIndex = 0;

  function collapseTestimonial(slide) {
    const full = slide.querySelector('.full-testimonial');
    const excerpt = slide.querySelector('.testimonial-excerpt');
    const button = slide.querySelector('.testimonial-expand');
    full.hidden = true;
    excerpt.hidden = false;
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = (slide.dataset.testimonialIndex === '2' ? 'Read the full commentary' : 'Read the full testimonial') + ' <span aria-hidden="true">+</span>';
  }
  function showTestimonial(index) {
    activeIndex = (index + testimonialSlides.length) % testimonialSlides.length;
    testimonialSlides.forEach((slide, i) => {
      if (i !== activeIndex) collapseTestimonial(slide);
      slide.hidden = i !== activeIndex;
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-current', i === activeIndex);
      dot.setAttribute('aria-current', String(i === activeIndex));
    });
    count.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(testimonialSlides.length).padStart(2, '0')}`;
  }
  document.getElementById('testimonial-previous').addEventListener('click', () => showTestimonial(activeIndex - 1));
  document.getElementById('testimonial-next').addEventListener('click', () => showTestimonial(activeIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showTestimonial(i)));
  testimonialSlides.forEach(slide => {
    slide.querySelector('.testimonial-expand').addEventListener('click', () => {
      const full = slide.querySelector('.full-testimonial');
      const excerpt = slide.querySelector('.testimonial-excerpt');
      const button = slide.querySelector('.testimonial-expand');
      const expanding = full.hidden;
      full.hidden = !expanding;
      excerpt.hidden = expanding;
      button.setAttribute('aria-expanded', String(expanding));
      button.innerHTML = expanding ? 'Show less <span aria-hidden="true">−</span>' :
        (slide.dataset.testimonialIndex === '2' ? 'Read the full commentary' : 'Read the full testimonial') + ' <span aria-hidden="true">+</span>';
    });
  });
  carousel.addEventListener('keydown', event => {
    if (event.target.matches('button') && event.key === 'ArrowRight') {
      event.preventDefault(); showTestimonial(activeIndex + 1);
    } else if (event.target.matches('button') && event.key === 'ArrowLeft') {
      event.preventDefault(); showTestimonial(activeIndex - 1);
    }
  });
  showTestimonial(0);
}
