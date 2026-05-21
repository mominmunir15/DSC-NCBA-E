import { useCallback, useEffect, useRef, useState } from 'react';

const HERO_IMAGES = [
  '/assets/images/hero/hero.jpg',
  '/assets/images/hero/carousal 1.jpg',
  '/assets/images/hero/carousal 2.jpg',
  '/assets/images/hero/carousal 3.jpg',
  '/assets/images/hero/carousal 4.jpeg',
  '/assets/images/hero/carousal 5.jpg',
  '/assets/images/hero/carousal 6.jpg',
  '/assets/images/hero/carousal 7.jpg',
];

const INTERVAL_MS = 2500;

export default function HeroCarousel() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const currentSlideRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const autoplayIdRef = useRef(null);
  const touchStartXRef = useRef(0);

  const [dotIndex, setDotIndex] = useState(0);
  const slideCount = HERO_IMAGES.length;
  const slides = slideCount > 1 ? [...HERO_IMAGES, HERO_IMAGES[0]] : HERO_IMAGES;

  const moveTo = useCallback((index, animate = true) => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;

    const offset = slider.clientWidth * index;
    track.style.transition = animate ? 'transform 0.65s ease-in-out' : 'none';
    track.style.transform = `translateX(-${offset}px)`;

    if (!animate) {
      void track.offsetHeight;
    }
  }, []);

  const layoutSlides = useCallback(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;

    const width = slider.clientWidth;
    track.querySelectorAll('.hero-slide').forEach((slide) => {
      slide.style.width = `${width}px`;
    });

    moveTo(currentSlideRef.current, false);
  }, [moveTo]);

  const finishLoopReset = useCallback(() => {
    currentSlideRef.current = 0;
    moveTo(0, false);
    setDotIndex(0);
    isAnimatingRef.current = false;
  }, [moveTo]);

  const goToSlide = useCallback((index) => {
    if (isAnimatingRef.current || index < 0 || index >= slideCount) return;

    isAnimatingRef.current = true;
    currentSlideRef.current = index;
    moveTo(index, true);
    setDotIndex(index);
  }, [moveTo, slideCount]);

  const nextSlide = useCallback(() => {
    if (isAnimatingRef.current || slideCount <= 1) return;

    isAnimatingRef.current = true;

    if (currentSlideRef.current < slideCount - 1) {
      const next = currentSlideRef.current + 1;
      currentSlideRef.current = next;
      moveTo(next, true);
      setDotIndex(next);
      return;
    }

    currentSlideRef.current = slideCount;
    moveTo(slideCount, true);
    setDotIndex(0);
  }, [moveTo, slideCount]);

  const prevSlide = useCallback(() => {
    if (isAnimatingRef.current || currentSlideRef.current <= 0) return;
    goToSlide(currentSlideRef.current - 1);
  }, [goToSlide]);

  const stopAutoplay = useCallback(() => {
    if (autoplayIdRef.current) {
      clearInterval(autoplayIdRef.current);
      autoplayIdRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (slideCount > 1) {
      autoplayIdRef.current = setInterval(nextSlide, INTERVAL_MS);
    }
  }, [nextSlide, slideCount, stopAutoplay]);

  const resetAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTrackTransitionEnd = (event) => {
      if (event.propertyName !== 'transform' || event.target !== track) return;

      if (currentSlideRef.current === slideCount) {
        finishLoopReset();
      } else {
        isAnimatingRef.current = false;
      }
    };

    track.addEventListener('transitionend', onTrackTransitionEnd);
    layoutSlides();
    startAutoplay();

    window.addEventListener('resize', layoutSlides);

    return () => {
      track.removeEventListener('transitionend', onTrackTransitionEnd);
      window.removeEventListener('resize', layoutSlides);
      stopAutoplay();
    };
  }, [finishLoopReset, layoutSlides, slideCount, startAutoplay, stopAutoplay]);

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
    stopAutoplay();
  };

  const handleTouchEnd = (event) => {
    const swipeDistance = event.changedTouches[0].clientX - touchStartXRef.current;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    startAutoplay();
  };

  return (
    <div className="hero-carousel">
      <section
        className="hero-slider max-lg:h-[50vh] max-lg:min-h-[280px] max-lg:rounded-2xl"
        id="hero-slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-slider-track" ref={trackRef}>
          {slides.map((imgUrl, index) => (
            <div
              key={`${imgUrl}-${index}`}
              className="hero-slide"
              style={{ backgroundImage: `url('${imgUrl}')` }}
              aria-hidden={index === slides.length - 1 && slideCount > 1 ? true : undefined}
            />
          ))}
        </div>
        <div className="hero-dots" id="hero-dots" aria-label="Carousel pagination">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot${dotIndex === index ? ' active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                goToSlide(index);
                resetAutoplay();
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
