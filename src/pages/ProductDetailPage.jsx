import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { allProducts } from '../data/siteData.js';

export function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCommerce();
  const product = allProducts.find(p => p.id === productId) || allProducts[0];
  const images = [product.image, product.image, product.image, product.image, product.image, product.image, product.image];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(8);
  const [quantity, setQuantity] = useState('');
  const [showGallery, setShowGallery] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');
  const sizes = [6, 7, 8, 9, 10, 11, 12];
  const colors = [
    { name: 'Black', hex: '#1a1a1a', selected: true }, { name: 'Grey', hex: '#9ca3af' },
    { name: 'Brown', hex: '#92400e' }, { name: 'Navy', hex: '#1e3a5f' },
  ];

  const handleAddToCart = () => { addToCart(product, selectedSize, parseInt(quantity) || 1); };
  const handleBuyNow = () => { addToCart(product, selectedSize, parseInt(quantity) || 1); };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[100px] overflow-hidden bg-[#2a2a2a] md:h-[130px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="konvo-container relative flex h-full items-center">
          <h1 className="text-[24px] font-extrabold uppercase tracking-wider text-white md:text-[36px]" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
            Explore More Products
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="konvo-container py-3 text-[12px] text-brand-muted">
        <Link to="/" className="hover:text-brand-red">Home</Link> / <Link to="/category/men" className="hover:text-brand-red">Men</Link> / <Link to="/products/sports-shoes" className="hover:text-brand-red">Sports Shoes</Link> / <span className="font-semibold text-brand-text">Men's Sports Shoes</span>
      </div>

      <div className="konvo-container pb-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="flex gap-4">
            <div className="hidden flex-col gap-2 md:flex">
              {images.slice(0, 6).map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)}
                  className={`h-[70px] w-[70px] overflow-hidden rounded border-2 transition ${selectedImage === i ? 'border-brand-red' : 'border-brand-line'}`}>
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="relative flex-1 cursor-pointer overflow-hidden rounded-lg bg-[#f5f5f5]" onClick={() => setShowGallery(true)}>
              <img src={images[selectedImage]} alt={product.name} className="h-auto w-full object-contain" />
              <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-[13px] text-brand-muted">Relaxo Sparx</p>
            <h2 className="mt-1 text-[22px] font-bold text-brand-text">Men's Sports Shoe -ONG97009</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 rounded bg-green-600 px-2 py-0.5 text-[12px] font-bold text-white">
                4.4 <svg viewBox="0 0 12 12" className="size-3" fill="currentColor"><path d="m6 1 1.5 3.1L11 4.5 8.5 7l.6 3.5L6 8.8 2.9 10.5l.6-3.5L1 4.5l3.5-.4z"/></svg>
              </div>
              <span className="text-[13px] text-brand-muted">4 Ratings</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-[28px] font-bold text-brand-red">Rs. {product.price?.toLocaleString('en-IN')}</span>
              <span className="text-[16px] text-brand-muted line-through">Rs. {product.mrp?.toLocaleString('en-IN')}</span>
              <span className="rounded bg-green-100 px-2 py-0.5 text-[13px] font-bold text-green-700">{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF</span>
            </div>

            {/* Colors */}
            <div className="mt-5">
              <div className="flex items-center gap-3">
                {colors.map(c => (
                  <button key={c.name} className={`size-8 rounded-full border-2 ${c.selected ? 'border-brand-red' : 'border-transparent'}`} style={{ backgroundColor: c.hex }} title={c.name} />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-brand-text">Select a Size (UK Size)</span>
                <a href="#" className="text-[13px] font-semibold text-brand-red">Find Size Chart</a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {sizes.map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)}
                    className={`flex size-10 items-center justify-center rounded-full border text-[13px] font-semibold transition ${selectedSize === s ? 'border-brand-red bg-brand-red text-white' : 'border-brand-line text-brand-text hover:border-brand-red'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-green-600">
              <svg viewBox="0 0 16 16" className="size-4" fill="currentColor"><circle cx="8" cy="8" r="6"/></svg>
              In stock, ready to ship
            </p>

            {/* Quantity */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-[13px] font-medium text-brand-muted">Select a Order Quantity</label>
                <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Select Minimum Order Quantity"
                  className="mt-1 h-[44px] w-full rounded border border-brand-line px-4 text-[13px] outline-none focus:border-brand-red" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <button onClick={handleAddToCart} className="h-[48px] rounded-lg border-2 border-brand-red bg-white text-[14px] font-bold uppercase text-brand-red transition hover:bg-brand-red hover:text-white">
                Add to Cart
              </button>
              <Link to="/cart" onClick={handleBuyNow} className="flex h-[48px] items-center justify-center rounded-lg bg-brand-red text-[14px] font-bold uppercase text-white transition hover:bg-red-700">
                Buy Now
              </Link>
            </div>

            {/* Delivery */}
            <div className="mt-5 flex items-center gap-3 text-[13px] text-brand-muted">
              <span className="font-semibold text-brand-text">Delivery address:</span>
              <span>🚚</span>
              <span>Nitesh Kumar 110058 (Transit Packages): 0</span>
              <button className="font-semibold text-brand-red">Change</button>
            </div>
            <p className="mt-2 text-[13px] text-brand-muted">📅 Sent by: May 30, 2026</p>
          </div>
        </div>

        {/* Product Description Accordion */}
        <div className="mt-12 border-t border-brand-line">
          <h3 className="py-4 text-[18px] font-bold text-brand-text">About The Men's Sports Shoe -ONG97009</h3>

          <Accordion title="Product Description" isOpen={openAccordion === 'description'} onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}>
            <p className="text-[14px] leading-7 text-brand-muted">
              Explore your everyday performance with the Konvo Sports Shoes ONG97009. A clean and versatile look from top to bottom, crafted for comfort, durability, and modern style.
            </p>
            <div className="mt-4">
              <h4 className="font-bold text-brand-text">Key Features</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] text-brand-muted">
                <li><strong>Upper:</strong> Breathable mesh upper combined with sporty synthetic overlays for protection.</li>
                <li><strong>Midsole:</strong> Phylon duo provides best cushioning experience for walks and runs.</li>
                <li><strong>Cushioned Footbed:</strong> Soft extra-cushioned insole for all-day comfort.</li>
                <li><strong>Outsole:</strong> Durable, slip-resistant rubber compound for improved grip.</li>
                <li><strong>Pull-tab:</strong> Heel pull tab for easy slide-on.</li>
                <li><strong>Style:</strong> Lace-up</li>
                <li><strong>Heel:</strong> Lightweight, flexible, and supportive — perfect for daily activity.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-brand-text">Why You'll Love It</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] text-brand-muted">
                <li>All-day comfort without sacrificing style</li>
                <li>Smooth sports look: clean silhouette, refined finish</li>
                <li>Robust build for extended product lifecycle</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-brand-text">Best For</h4>
              <p className="mt-1 text-[14px] text-brand-muted">Walking, gym sessions, light running, travel, and commute, casual wear, and casual streetwear styling.</p>
            </div>
          </Accordion>

          <Accordion title="Additional Information" isOpen={openAccordion === 'additional'} onToggle={() => setOpenAccordion(openAccordion === 'additional' ? '' : 'additional')} />
          <Accordion title="Shipping and Returns" isOpen={openAccordion === 'shipping'} onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')} />
          <Accordion title="Reviews & Ratings" isOpen={openAccordion === 'reviews'} onToggle={() => setOpenAccordion(openAccordion === 'reviews' ? '' : 'reviews')} />
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h3 className="text-[22px] font-bold text-brand-text">Similar Products / You may also like</h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {allProducts.slice(0, 4).map((p, i) => <ProductCard key={`similar-${i}`} product={{ ...p, id: `similar-${i}` }} showPrice showMOQ />)}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-12">
          <h3 className="text-[22px] font-bold text-brand-text">Recently Viewed</h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {allProducts.slice(0, 4).map((p, i) => <ProductCard key={`recent-${i}`} product={{ ...p, id: `recent-${i}` }} showPrice showMOQ />)}
          </div>
        </div>
      </div>

      <BenefitsBar />

      {/* Full-screen Image Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" onClick={() => setShowGallery(false)}>
          <div className="relative flex max-h-[90vh] max-w-[90vw] gap-4" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col gap-2 overflow-y-auto">
              {images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)}
                  className={`h-[60px] w-[60px] shrink-0 overflow-hidden rounded border-2 ${selectedImage === i ? 'border-brand-red' : 'border-white/30'}`}>
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <button onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))} className="mr-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <img src={images[selectedImage]} alt="" className="max-h-[80vh] rounded-lg object-contain" />
              <button onClick={() => setSelectedImage(Math.min(images.length - 1, selectedImage + 1))} className="ml-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            <button onClick={() => setShowGallery(false)} className="absolute -right-4 -top-4 flex size-8 items-center justify-center rounded-full bg-white text-black">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <div className="absolute left-20 top-4 text-[14px] font-semibold text-white">{selectedImage + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-brand-line">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-4 text-[16px] font-semibold text-brand-text">
        {title}
        <svg viewBox="0 0 24 24" className={`size-5 transition ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {isOpen && children && <div className="pb-6">{children}</div>}
    </div>
  );
}
