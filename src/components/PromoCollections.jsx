import { collectionTiles } from '../data/siteData.js';

export function PromoCollections() {
  return (
    <section className="grid grid-cols-1 gap-4 py-12 md:grid-cols-3 md:gap-[15px] md:py-[50px]">
      {collectionTiles.map((tile) => (
        <article
          id={tile.id}
          key={tile.id}
          className="group relative min-h-[460px] overflow-hidden bg-black md:min-h-[560px] 2xl:min-h-[650px]"
        >
          <img
            src={tile.image}
            alt={tile.title}
            className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-x-8 bottom-8 flex flex-col items-center gap-3 text-center text-white md:bottom-16">
            <h2 className="text-[30px] font-extrabold capitalize leading-[1.2] md:text-[34px] 2xl:text-[40px]">
              {tile.title}
            </h2>
            <p className="text-[15px] font-medium leading-[26px] md:text-[16px]">{tile.subtitle}</p>
            <a
              href="#shop-by-category"
              className="focus-ring border-b-2 border-white pb-1 text-[16px] font-semibold capitalize leading-[26px] transition hover:text-brand-red"
            >
              Shop Now
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
