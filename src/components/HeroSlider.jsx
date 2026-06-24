import { heroSlides } from '../data/siteData.js';
import { useCarousel } from '../hooks/useCarousel.js';
import { ArrowIcon } from './Icons.jsx';

export function HeroSlider() {
  const carousel = useCarousel(heroSlides, { autoPlay: true, interval: 6500 });

  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="relative h-[360px] md:h-[560px] xl:h-[650px] 2xl:h-[750px]">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
              index === carousel.activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          type="button"
          aria-label="Previous hero slide"
          onClick={carousel.previous}
          className="focus-ring absolute left-4 top-1/2 flex size-12 -translate-y-1/2 rotate-180 items-center justify-center text-white transition hover:bg-black/10 md:left-[5%] md:size-20"
        >
          <ArrowIcon className="size-6 md:size-8" />
        </button>
        <button
          type="button"
          aria-label="Next hero slide"
          onClick={carousel.next}
          className="focus-ring absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center text-white transition hover:bg-black/10 md:right-[5%] md:size-20"
        >
          <ArrowIcon className="size-6 md:size-8" />
        </button>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to hero slide ${index + 1}`}
              onClick={() => carousel.goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === carousel.activeIndex ? 'w-10 bg-brand-red' : 'w-2 bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
