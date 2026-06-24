import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { CategoryGrid } from '../components/CategoryGrid.jsx';
import { HeroSlider } from '../components/HeroSlider.jsx';
import { ProductSection } from '../components/ProductSection.jsx';
import { PromoCollections } from '../components/PromoCollections.jsx';
import { Testimonials } from '../components/Testimonials.jsx';
import { useCommerce } from '../context/CommerceContext.jsx';
import { heroProducts, newLaunches } from '../data/siteData.js';
import { useProductSearch } from '../hooks/useProductSearch.js';

export function HomePage() {
  const { searchQuery } = useCommerce();
  const visibleHeroProducts = useProductSearch(heroProducts, searchQuery);
  const visibleLaunches = useProductSearch(newLaunches, searchQuery);

  return (
    <>
      <HeroSlider />
      <ProductSection
        id="hero-collection"
        title="Hero Collection"
        subtitle="10 Categories. 5500+ Products Ready for Bulk Supply"
        products={visibleHeroProducts}
      />
      <CategoryGrid />
      <ProductSection
        id="new-launches"
        title="New Launches"
        subtitle="Newly Launched Styles for Retail & Wholesale Supply"
        products={visibleLaunches}
      />
      <PromoCollections />
      <Testimonials />
      <BenefitsBar />
    </>
  );
}
