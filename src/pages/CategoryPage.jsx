import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard.jsx';
import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { allProducts, menFootwearCategories, womenFootwearCategories, kidsFootwearCategories } from '../data/siteData.js';

const categoryData = {
  men: {
    heroTitle: 'Premium', heroSubtitle: 'Picks for Every Step', heroImage: '/assets/hero-slide-1.jpg',
    sectionTitle: "Men's Footwear", subtitle: "Explore Men's Collection by MOQ & Bulk Supply",
    categories: menFootwearCategories,
    bannerText: 'Comfort Crafted\nFor Every Step',
    bestSellers: allProducts.slice(0, 4),
    sportsTitle: 'Sports Shoes',
    tabLabels: ['Shoes', 'Sandals', 'New & Trending'],
  },
  women: {
    heroTitle: 'Introducing', heroSubtitle: 'Classico', heroImage: '/assets/collection-women.jpg',
    sectionTitle: "Women's Footwear", subtitle: "Explore Women's Collection by MOQ & Bulk Supply",
    categories: womenFootwearCategories,
    bannerText: 'Comfort\nMade for Everyday Moments',
    bestSellers: allProducts.slice(0, 4),
    sportsTitle: 'Sports Shoes',
    tabLabels: ['Shoes', 'Sandals', 'New & Trending'],
  },
  kids: {
    heroTitle: 'Big Smiles', heroSubtitle: 'Bigger Adventures', heroImage: '/assets/collection-trending.jpg',
    sectionTitle: "Kid's Footwear", subtitle: "Explore Kids' Footwear for Bulk School Supply",
    categories: kidsFootwearCategories,
    bannerText: 'Made for Little\nSchool Days.',
    bestSellers: allProducts.slice(0, 4),
    sportsTitle: 'School Essentials',
    tabLabels: ['Shoes', 'Sandals', 'New & Trending'],
  },
};

export function CategoryPage() {
  const { categorySlug } = useParams();
  const data = categoryData[categorySlug] || categoryData.men;

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[250px] overflow-hidden bg-[#2a2a2a] md:h-[350px]">
        <img src={data.heroImage} alt="" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <p className="text-[18px] font-light uppercase tracking-widest md:text-[24px]">{data.heroTitle}</p>
            <p className="mt-2 text-[40px] font-bold italic md:text-[60px]" style={{ fontFamily: "'Georgia', serif" }}>{data.heroSubtitle}</p>
          </div>
        </div>
      </div>

      <div className="konvo-container py-10 md:py-14">
        {/* Footwear Categories */}
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[24px] font-bold text-brand-text">{data.sectionTitle}</h2>
              <p className="text-[13px] text-brand-muted">{data.subtitle}</p>
            </div>
            <Link to={`/products/${categorySlug}-all`} className="flex size-8 items-center justify-center rounded-full border border-brand-red text-brand-red">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.categories.map((cat) => (
              <Link key={cat.name} to={`/products/${categorySlug}-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group overflow-hidden rounded-lg">
                <div className="aspect-square overflow-hidden bg-[#f5f5f5]">
                  <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <p className="mt-2 text-[14px] font-semibold text-brand-text">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Comfort Banner */}
        <div className="my-12 flex h-[200px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#f5ebe0] to-[#e8d5c4] md:h-[280px]">
          <div className="text-center">
            <h3 className="whitespace-pre-line text-[28px] font-extrabold uppercase leading-tight text-brand-text md:text-[42px]">
              {data.bannerText}
            </h3>
          </div>
        </div>

        {/* Best Sellers */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold text-brand-text">Best Sellers</h2>
            <Link to={`/products/${categorySlug}-bestsellers`} className="flex size-8 items-center justify-center rounded-full border border-brand-red text-brand-red">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {data.bestSellers.map((p, i) => <ProductCard key={`best-${i}`} product={{ ...p, id: `best-${categorySlug}-${i}` }} showPrice showMOQ />)}
          </div>
        </div>

        {/* Explore Banner */}
        <div className="my-12 flex h-[120px] items-center justify-center overflow-hidden rounded-2xl bg-[#2a2a2a] md:h-[160px]">
          <h3 className="text-[24px] font-extrabold uppercase tracking-wider text-white md:text-[36px]" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
            Explore More Products
          </h3>
        </div>

        {/* Sports/School Section */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold text-brand-text">{data.sportsTitle}</h2>
            <Link to={`/products/${categorySlug}-sports`} className="flex size-8 items-center justify-center rounded-full border border-brand-red text-brand-red">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {allProducts.slice(0, 4).map((p, i) => <ProductCard key={`sports-${i}`} product={{ ...p, id: `sports-${categorySlug}-${i}` }} showPrice showMOQ />)}
          </div>
        </div>

        {/* New Launches with Tabs */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-[24px] font-bold text-brand-text">New Launches</h2>
            <div className="flex gap-2">
              {data.tabLabels.map((label, i) => (
                <button key={label} className={`rounded-full px-5 py-1.5 text-[13px] font-semibold transition ${i === 0 ? 'bg-brand-red text-white' : 'border border-brand-line text-brand-text hover:bg-gray-50'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[...allProducts, ...allProducts].slice(0, 8).map((p, i) => <ProductCard key={`new-${i}`} product={{ ...p, id: `newlaunch-${categorySlug}-${i}` }} showPrice showMOQ />)}
          </div>
        </div>
      </div>
      <BenefitsBar />
    </div>
  );
}
