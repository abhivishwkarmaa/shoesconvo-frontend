import { Link } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { allProducts } from '../data/siteData.js';

export function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity, updateCartSize, updateCartColor, moveCartToWishlist, totalMRP, discount, platformFee, courierCharges, totalAmount } = useCommerce();

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

      <div className="konvo-container py-10 md:py-14">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="mx-auto max-w-md py-16 text-center">
            <div className="mx-auto flex size-[100px] items-center justify-center">
              <svg viewBox="0 0 64 64" className="size-24 text-brand-muted/30">
                <rect x="12" y="20" width="40" height="32" rx="4" fill="currentColor"/>
                <path d="M20 20V14a12 12 0 0 1 24 0v6" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="36" r="2" fill="white"/><circle cx="32" cy="36" r="2" fill="white"/><circle cx="40" cy="36" r="2" fill="white"/>
              </svg>
            </div>
            <h2 className="mt-6 text-[26px] font-bold text-brand-text">Your Cart Is Empty</h2>
            <p className="mt-3 text-[14px] text-brand-muted">Hey, it feels so light!<br/>There is nothing in your bag. Let's add some items.</p>
            <Link to="/" className="mt-8 inline-block rounded-lg bg-brand-red px-8 py-3 text-[14px] font-bold uppercase text-white transition hover:bg-red-700">
              Add Items from Cart
            </Link>
          </div>
        ) : (
          /* Cart with items */
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-[28px] font-bold text-brand-text">Your Cart</h2>
              <div className="flex items-center gap-3 text-[13px] text-brand-muted">
                <span>Deliver to: <strong className="text-brand-text">Nitesh Kumar, 110058 (Transit Packages) </strong></span>
                <button className="rounded border border-brand-red px-3 py-1 text-[12px] font-bold text-brand-red transition hover:bg-brand-red hover:text-white">
                  Change Address
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-4 text-[13px] text-brand-muted">
              <span className="font-semibold text-brand-red">{cartItems.length} ITEMS SELECTED</span>
              <button className="font-semibold text-brand-text hover:text-brand-red">REMOVE</button>
              <button className="font-semibold text-brand-text hover:text-brand-red">MOVE TO WISHLIST</button>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.cartKey} className="relative grid gap-4 border-b border-brand-line pb-6 sm:grid-cols-[120px_1fr_auto]">
                    <button onClick={() => removeFromCart(item.cartKey)} className="absolute right-0 top-0 text-brand-muted hover:text-brand-red">
                      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                    <Link to={`/product/${item.id}`} className="overflow-hidden rounded bg-[#f5f5f5]">
                      <img src={item.image} alt={item.name} className="h-[120px] w-full object-contain p-2" />
                    </Link>
                    <div>
                      <h3 className="pr-8 text-[15px] font-semibold text-brand-text">{item.name} - {item.sku || 'ONG97008'}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[13px]">
                        <label className="flex items-center gap-1">
                          Size: <select value={item.size} onChange={e => updateCartSize(item.cartKey, +e.target.value)} className="rounded border border-brand-line bg-white px-2 py-0.5 text-[12px]">
                            {[6,7,8,9,10,11,12].map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </label>
                        <label className="flex items-center gap-1">
                          Qty: <select value={item.quantity} onChange={e => updateCartQuantity(item.cartKey, +e.target.value)} className="rounded border border-brand-line bg-white px-2 py-0.5 text-[12px]">
                            {[1,2,3,5,10,15,20].map(q => <option key={q} value={q}>{q}</option>)}
                          </select>
                        </label>
                      </div>
                      <p className="mt-2 text-[12px] text-brand-muted">📅 Delivery by: 30 May 2026</p>
                    </div>
                    <div className="text-right pr-8">
                      <p className="text-[18px] font-bold text-brand-text">Rs. {(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal Sidebar */}
              <div className="h-fit rounded-lg border border-brand-line bg-[#fafafa] p-6">
                <h3 className="text-[18px] font-bold text-brand-text">Subtotal Details ({cartItems.length} Items)</h3>
                <p className="text-[12px] text-brand-muted">Tax included and shipping calculated at checkout</p>
                <div className="mt-5 space-y-3 text-[14px]">
                  <div className="flex justify-between"><span className="text-brand-muted">Total MRP</span><span className="font-semibold">Rs. {totalMRP.toLocaleString('en-IN')}</span></div>
                  <div className="flex justify-between"><span className="text-brand-muted">Discount on MRP</span><span className="font-semibold text-brand-red">Rs. - {discount.toLocaleString('en-IN')}</span></div>
                  <div className="flex justify-between"><span className="text-brand-muted">Platform Fee</span><span className="font-semibold">Rs. {platformFee.toLocaleString('en-IN')}</span></div>
                  <div className="flex justify-between"><span className="text-brand-muted">Courier Charges</span><span className="font-semibold">Rs. {courierCharges.toLocaleString('en-IN')}</span></div>
                  <div className="border-t border-brand-line pt-3">
                    <div className="flex justify-between text-[16px] font-bold"><span>Total Amount</span><span>Rs. {totalAmount.toLocaleString('en-IN')}</span></div>
                  </div>
                </div>
                <p className="mt-4 text-[12px] text-brand-muted">
                  By placing the order, you agree to Konvo <a href="#" className="text-blue-600">Terms of Use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                </p>
                <Link to="/payment" className="mt-4 flex h-[48px] w-full items-center justify-center rounded-lg bg-brand-red text-[14px] font-bold uppercase text-white transition hover:bg-red-700">
                  Place Order
                </Link>
                <Link to="/" className="mt-3 flex h-[42px] w-full items-center justify-center rounded-lg border border-brand-line text-[14px] font-semibold text-brand-text transition hover:bg-gray-50">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Similar Products */}
            <div className="mt-12">
              <h3 className="text-[22px] font-bold text-brand-text">Similar Products / You may also like</h3>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {allProducts.slice(0, 4).map((p, i) => <ProductCard key={`cart-similar-${i}`} product={{ ...p, id: `cart-sim-${i}` }} showPrice showMOQ />)}
              </div>
            </div>

            {/* Recently Viewed */}
            <div className="mt-12">
              <h3 className="text-[22px] font-bold text-brand-text">Recently Viewed</h3>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {allProducts.slice(0, 4).map((p, i) => <ProductCard key={`cart-recent-${i}`} product={{ ...p, id: `cart-rec-${i}` }} showPrice showMOQ />)}
              </div>
            </div>
          </div>
        )}
      </div>
      <BenefitsBar />
    </div>
  );
}
