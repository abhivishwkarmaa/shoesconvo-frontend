import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard.jsx';
import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { allProducts, filterOptions } from '../data/siteData.js';

export function ProductListingPage() {
  const { categorySlug } = useParams();
  const [sortBy, setSortBy] = useState('Recommended');
  const [openFilters, setOpenFilters] = useState({ category: true, typeOfShoes: true, gender: false, size: false, colour: false, price: false });
  const [selectedFilters, setSelectedFilters] = useState({ category: [], typeOfShoes: [], gender: [], size: [], colour: [] });
  const [priceRange, setPriceRange] = useState({ min: 100, max: 5000 });

  const title = categorySlug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || "Men's Sports Shoes";
  const products = [...allProducts, ...allProducts, ...allProducts].map((p, i) => ({ ...p, id: `listing-${i}`, name: `Men's Sports Shoes - ONG97${String(i).padStart(2, '0')}8`, sku: `ONG97${String(i).padStart(2, '0')}8` }));

  const toggleFilter = (group, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [group]: prev[group].includes(value) ? prev[group].filter(v => v !== value) : [...prev[group], value]
    }));
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[120px] overflow-hidden bg-[#2a2a2a] md:h-[160px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="konvo-container relative flex h-full items-center">
          <h1 className="text-[28px] font-extrabold uppercase tracking-wider text-white md:text-[40px]" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
            Explore More Products
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="konvo-container py-3 text-[12px] text-brand-muted">
        <Link to="/" className="hover:text-brand-red">Home</Link> / <Link to="/category/men" className="hover:text-brand-red">Men</Link> / <span>Sports Shoes</span> / <span className="font-semibold text-brand-text">{title}</span>
      </div>

      <div className="konvo-container pb-12">
        <div className="mb-6">
          <h2 className="text-[24px] font-bold text-brand-text">{title}</h2>
          <p className="text-[13px] text-brand-muted">11 Categories, 1500+ Products Ready for Bulk Supply</p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-brand-line pb-4">
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-bold text-brand-red">FILTERS</span>
            <div className="flex gap-2">
              <button className="flex size-8 items-center justify-center rounded border border-brand-line bg-brand-red text-white">
                <svg viewBox="0 0 16 16" className="size-4" fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
              </button>
              <button className="flex size-8 items-center justify-center rounded border border-brand-line text-brand-muted">
                <svg viewBox="0 0 16 16" className="size-4" fill="currentColor"><rect x="1" y="1" width="14" height="3" rx="1"/><rect x="1" y="6.5" width="14" height="3" rx="1"/><rect x="1" y="12" width="14" height="3" rx="1"/></svg>
              </button>
            </div>
            <span className="text-[13px] text-brand-muted">{title} - 2,055 Items</span>
          </div>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-brand-muted">Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded border border-brand-line bg-white px-3 py-1.5 text-[13px] font-semibold text-brand-text outline-none">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          {/* Filters Sidebar */}
          <aside className="space-y-4">
            {Object.entries(filterOptions).map(([key, values]) => (
              <FilterGroup key={key} title={key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())} isOpen={openFilters[key]} onToggle={() => setOpenFilters(p => ({ ...p, [key]: !p[key] }))}>
                {values.map(v => (
                  <label key={v} className="flex items-center gap-2 py-1 text-[13px] text-brand-text">
                    <input type="checkbox" checked={selectedFilters[key]?.includes(v)} onChange={() => toggleFilter(key, v)} className="size-3.5 accent-brand-red" />
                    {v}
                  </label>
                ))}
              </FilterGroup>
            ))}
            <FilterGroup title="Price" isOpen={openFilters.price} onToggle={() => setOpenFilters(p => ({ ...p, price: !p.price }))}>
              <div className="flex items-center gap-2 text-[13px]">
                <span>Min:</span>
                <input type="number" value={priceRange.min} onChange={e => setPriceRange(p => ({ ...p, min: +e.target.value }))} className="w-20 rounded border border-brand-line px-2 py-1 text-[12px]" />
                <span>to</span>
                <span>Max:</span>
                <input type="number" value={priceRange.max} onChange={e => setPriceRange(p => ({ ...p, max: +e.target.value }))} className="w-20 rounded border border-brand-line px-2 py-1 text-[12px]" />
              </div>
            </FilterGroup>
          </aside>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 9).map((product) => (
              <ProductCard key={product.id} product={product} showMOQ showSizes showPrice />
            ))}
          </div>
        </div>
      </div>
      <BenefitsBar />
    </div>
  );
}

function FilterGroup({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-brand-line pb-3">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-2 text-[13px] font-bold uppercase text-brand-text">
        {title}
        <svg viewBox="0 0 24 24" className={`size-4 transition ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {isOpen && <div className="mt-1 space-y-0.5">{children}</div>}
    </div>
  );
}
