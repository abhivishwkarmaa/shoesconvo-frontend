import { Link } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { allProducts } from '../data/siteData.js';

export function WishlistPage() {
  const { wishlistIds, removeFromWishlist, moveWishlistToCart, openModal } = useCommerce();
  const savedProducts = allProducts.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-[200px] overflow-hidden bg-[#2a2a2a] md:h-[280px]">
        <img src="/assets/hero-slide-1.jpg" alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute bottom-8 right-8 text-right text-white md:bottom-12 md:right-16">
          <p className="text-[36px] font-light italic md:text-[52px]" style={{ fontFamily: "'Georgia', serif" }}>Premium</p>
          <p className="text-[18px] font-semibold italic tracking-wider md:text-[24px]" style={{ fontFamily: "'Georgia', serif" }}>Picks for Every Step</p>
        </div>
      </div>

      <div className="konvo-container py-10 md:py-14">
        {savedProducts.length === 0 ? (
          /* Empty State */
          <div className="mx-auto max-w-md py-16 text-center">
            <div className="mx-auto flex size-[100px] items-center justify-center">
              <svg viewBox="0 0 64 64" className="size-24 text-brand-muted/30">
                <path d="M32 56 S8 40 8 22 a12 12 0 0 1 24-2 a12 12 0 0 1 24 2 C56 40 32 56 32 56Z" fill="currentColor"/>
                <rect x="18" y="30" width="28" height="20" rx="3" fill="white" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M22 36h20M22 42h14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h2 className="mt-6 text-[26px] font-bold text-brand-text">Your Wishlist Is Empty</h2>
            <p className="mt-3 text-[14px] text-brand-muted">
              Add items that you like to your wishlist. Review them anytime<br/>and easily move them to the bag.
            </p>
            <Link to="/" className="mt-8 inline-block rounded-lg bg-brand-red px-8 py-3 text-[14px] font-bold uppercase text-white transition hover:bg-red-700">
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* Wishlist with items */
          <div>
            <h2 className="text-[28px] font-bold text-brand-text">My Wishlist</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {savedProducts.map((product) => (
                <div key={product.id} className="group relative border border-brand-line bg-white p-4 transition hover:shadow-lg">
                  <button onClick={() => openModal('moveFromWishlist', product)}
                    className="absolute right-3 top-3 z-10 text-brand-muted transition hover:text-brand-red">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <div className="flex h-[220px] items-center justify-center bg-[#f5f5f5]">
                      <img src={product.image} alt={product.name} className="h-full w-full object-contain p-4" />
                    </div>
                  </Link>
                  <div className="mt-3">
                    <h3 className="text-[14px] font-semibold text-brand-text">{product.name} - {product.sku || 'ONG97008'}</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[14px] font-bold text-brand-red">Rs. {product.price?.toLocaleString('en-IN')}</span>
                      <span className="text-[12px] text-brand-muted line-through">Rs. {product.mrp?.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {(product.sizes || [6,7,8,9,10,11]).slice(0, 6).map(s => (
                        <span key={s} className="flex size-7 items-center justify-center rounded-full border border-brand-line text-[11px]">{s}</span>
                      ))}
                    </div>
                    <p className="mt-2 text-[12px] text-brand-muted">
                      Minimum Order Quantity (MOQ): <span className="font-bold text-brand-red">{product.moq || 10} Pack</span>
                    </p>
                  </div>
                  <button onClick={() => moveWishlistToCart(product)}
                    className="mt-3 h-[38px] w-full rounded bg-brand-red text-[13px] font-bold uppercase text-white transition hover:bg-red-700">
                    Move to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <BenefitsBar />
    </div>
  );
}
