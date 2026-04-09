// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Add Placeholders exactly as requested (which the user can replace later)
    const images = [
        'DSC_0075.jpeg',
        'DSC_0136.jpeg',
        'DSC_0140.jpeg',
        'DSC_0336.jpeg'
    ];

    const sliderContainer = document.getElementById('about-slider');

    if (sliderContainer) {
        // 2. Inject images into the slider container
        images.forEach((imgUrl, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url(${imgUrl})`;
            sliderContainer.appendChild(slide);
        });

        // 3. Carousel logic: Slide visually over time (every 4 seconds)
        let currentSlide = 0;
        const slides = sliderContainer.querySelectorAll('.slide');

        setInterval(() => {
            // Fade out current
            slides[currentSlide].classList.remove('active');
            // Calculate next
            currentSlide = (currentSlide + 1) % slides.length;
            // Fade in next
            slides[currentSlide].classList.add('active');
        }, 4000);
    }
});
