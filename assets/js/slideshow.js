document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-bg-slideshow .slide');
    let currentIndex = 0;
    const slideInterval = 3500;

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
});