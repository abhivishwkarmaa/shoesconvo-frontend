import { categories } from '../data/siteData.js';
import { useCarousel } from '../hooks/useCarousel.js';
import { ArrowIcon } from './Icons.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function CategoryGrid() {
  const carousel = useCarousel(categories);

  return (
    <section id="shop-by-category" className="konvo-container py-12 md:py-16 2xl:py-[50px]">
      <SectionHeader
        title="Shop by Category"
        subtitle="Explore High-Demand Styles for Bulk Orders"
        onPrevious={carousel.previous}
        onNext={carousel.next}
      />

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:mt-[50px]">
        {carousel.orderedItems.map((category) => (
          <article
            key={category.id}
            className="group overflow-hidden border border-[#e8e8e8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="h-[330px] overflow-hidden bg-[#fafafa] md:h-[420px] 2xl:h-[470px]">
              <img
                src={category.image}
                alt={category.name}
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className={`flex h-20 items-center justify-between px-5 ${category.isHighlighted ? 'bg-brand-red text-white' : 'bg-white text-black'}`}>
              <h3 className="text-[20px] font-medium leading-[34px] md:text-[22px] 2xl:text-[24px]">
                {category.name}
              </h3>
              <a
                href="#hero-collection"
                aria-label={`Shop ${category.name}`}
                className={`focus-ring flex size-[30px] items-center justify-center rounded-full ${
                  category.isHighlighted ? 'bg-white text-brand-red' : 'bg-brand-red text-white'
                }`}
              >
                <ArrowIcon className="size-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
