const customerTestimonials = [`Part 1`, `Part 2`, `Part 3`];

let currentIdx = 0;

function showCurrentSlide() {
    const itemContainer = document.querySelector(
        ".testimonials-carousel .carousel-container"
    );
    itemContainer.innerHTML = customerTestimonials[currentIdx];
}

function nextSlide() {
    currentIdx++;
    if (currentIdx >= customerTestimonials.length) currentIdx = 0;
    showCurrentSlide();
}

function prevSlide() {
    currentIdx--;
    if (currentIdx <= 0) currentIdx = customerTestimonials.length - 1;
    showCurrentSlide();
}

setInterval(nextSlide, 10000);

document
    .querySelector(".testimonials-carousel .slide-prev")
    .addEventListener("click", prevSlide);
document
    .querySelector(".testimonials-carousel .slide-next")
    .addEventListener("click", nextSlide);

showCurrentSlide();