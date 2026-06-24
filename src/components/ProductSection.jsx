import { useCarousel } from '../hooks/useCarousel.js';
import { ProductCard } from './ProductCard.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function ProductSection({ id, title, subtitle, products }) {
  const carousel = useCarousel(products);

  return (
    <section id={id} className="konvo-container py-12 md:py-16 2xl:py-[50px]">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        onPrevious={carousel.previous}
        onNext={carousel.next}
      />

      {carousel.orderedItems.length ? (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:mt-[50px]">
          {carousel.orderedItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-dashed border-black/15 px-6 py-10 text-center text-brand-muted">
          No products matched your search.
        </div>
      )}
    </section>
  );
}
