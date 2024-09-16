// Slider JavaScript
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function showSlide(n) {
    const slideWidth = 100; // Since each slide has 100% width
    document.querySelector('.slider').style.transform = `translateX(-${n * slideWidth}%)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause the auto-slide on user interaction and resume after 5 seconds
next.addEventListener('click', () => {
    nextSlide();
    resetSlideInterval();
});

prev.addEventListener('click', () => {
    prevSlide();
    resetSlideInterval();
});

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize the first slide
showSlide(index);
