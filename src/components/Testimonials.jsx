import { testimonials } from '../data/siteData.js';
import { useCarousel } from '../hooks/useCarousel.js';
import { Rating } from './Rating.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function Testimonials() {
  const carousel = useCarousel(testimonials);

  return (
    <section className="konvo-container py-12 md:py-16 2xl:py-[50px]">
      <SectionHeader
        title="Trusted by Wholesalers & Retailers"
        subtitle="Our clients trust our products, and we are committed to consistently delivering quality and satisfaction."
        onPrevious={carousel.previous}
        onNext={carousel.next}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:mt-[50px] 2xl:gap-8">
        {carousel.orderedItems.map((testimonial) => (
          <article
            key={testimonial.id}
            className="flex min-h-[480px] flex-col border border-black/15 bg-white px-8 py-12 md:min-h-[526px] md:px-12 md:py-[60px]"
          >
            <Rating rating={4.8} reviews={66} />
            <h3 className="mt-8 text-[22px] font-bold leading-normal text-black md:text-[24px]">
              {testimonial.quote}
            </h3>
            <p className="mt-6 text-[16px] leading-[26px] text-black/70">{testimonial.body}</p>
            <div className="mt-9 flex flex-wrap items-end gap-x-3 gap-y-2">
              <strong className="text-[21px] font-normal leading-none text-black">{testimonial.reviewer}</strong>
              <span className="text-[14px] leading-[26px] text-black/60">{testimonial.location}</span>
            </div>
            <div className="mt-auto border-t border-black/15 pt-9">
              <div className="flex items-center gap-6">
                <div className="flex h-[129px] w-[107px] shrink-0 items-center justify-center bg-[#c1c1c1] text-[16px] text-white">
                  Shop Photo
                </div>
                <div>
                  <p className="text-[20px] font-semibold leading-normal text-black">{testimonial.shop}</p>
                  <p className="mt-3 text-[16px] leading-normal text-black/30">{testimonial.shopLocation}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
