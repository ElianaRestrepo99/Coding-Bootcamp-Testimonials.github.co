
document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'flex';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    if (nextButton && prevButton) { // Asegúrate de que los botones existen antes de añadir eventos
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }

    showSlide(currentIndex);
});


