document.addEventListener("DOMContentLoaded", () => {
    const heroImages = [
        'assets/images/hero/hero.jpg',
        'assets/images/hero/carousal 1.jpg',
        'assets/images/hero/carousal 2.jpg',
        'assets/images/hero/carousal 3.jpg',
        'assets/images/hero/carousal 4.jpeg',
        'assets/images/hero/carousal 5.jpg',
        'assets/images/hero/carousal 6.jpg',
        'assets/images/hero/carousal 7.jpg'
    ];

    initHeroCarousel('hero-slider', 'hero-dots', heroImages, 2500);
});

function initHeroCarousel(sliderId, dotsId, images, intervalMs) {
    const slider = document.getElementById(sliderId);
    const dotsContainer = document.getElementById(dotsId);

    if (!slider || !dotsContainer || images.length === 0) return;

    const track = document.createElement('div');
    track.className = 'hero-slider-track';

    images.forEach((imgUrl) => {
        track.appendChild(createSlide(imgUrl));
    });

    if (images.length > 1) {
        const firstClone = createSlide(images[0]);
        firstClone.setAttribute('aria-hidden', 'true');
        firstClone.dataset.clone = 'true';
        track.appendChild(firstClone);
    }

    slider.insertBefore(track, dotsContainer);

    images.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `hero-dot${index === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.hero-dot');
    const slideCount = images.length;
    let currentSlide = 0;
    let autoplayId = null;
    let touchStartX = 0;
    let isAnimating = false;

    function createSlide(imgUrl) {
        const slide = document.createElement('div');
        slide.className = 'hero-slide';
        slide.style.backgroundImage = `url('${imgUrl}')`;
        return slide;
    }

    function layoutSlides() {
        const width = slider.clientWidth;

        track.querySelectorAll('.hero-slide').forEach((slide) => {
            slide.style.width = `${width}px`;
        });

        moveTo(currentSlide, false);
    }

    function updateDots(index) {
        const dotIndex = index >= slideCount ? 0 : index;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === dotIndex);
        });
    }

    function moveTo(index, animate = true) {
        const offset = slider.clientWidth * index;

        track.style.transition = animate ? 'transform 0.65s ease-in-out' : 'none';
        track.style.transform = `translateX(-${offset}px)`;

        if (!animate) {
            void track.offsetHeight;
        }
    }

    function goToSlide(index) {
        if (isAnimating || index < 0 || index >= slideCount) return;

        isAnimating = true;
        currentSlide = index;
        moveTo(index, true);
        updateDots(index);
    }

    function finishLoopReset() {
        currentSlide = 0;
        moveTo(0, false);
        updateDots(0);
        isAnimating = false;
    }

    function onTrackTransitionEnd(event) {
        if (event.propertyName !== 'transform' || event.target !== track) return;

        if (currentSlide === slideCount) {
            finishLoopReset();
        } else {
            isAnimating = false;
        }
    }

    track.addEventListener('transitionend', onTrackTransitionEnd);

    function nextSlide() {
        if (isAnimating || slideCount <= 1) return;

        isAnimating = true;

        if (currentSlide < slideCount - 1) {
            currentSlide++;
            moveTo(currentSlide, true);
            updateDots(currentSlide);
            return;
        }

        currentSlide = slideCount;
        moveTo(slideCount, true);
        updateDots(0);
    }

    function prevSlide() {
        if (isAnimating || currentSlide <= 0) return;
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        if (slideCount > 1) {
            autoplayId = setInterval(nextSlide, intervalMs);
        }
    }

    function stopAutoplay() {
        if (autoplayId) {
            clearInterval(autoplayId);
            autoplayId = null;
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    slider.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    slider.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        startAutoplay();
    }, { passive: true });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoplay();
        });
    });

    layoutSlides();
    window.addEventListener('resize', layoutSlides);
    startAutoplay();
}
