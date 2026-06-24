import { useCommerce } from '../context/CommerceContext.jsx';

export function MoveModal() {
  const { activeModal, modalProduct, closeModal, removeFromWishlist, moveWishlistToCart, addToCart } = useCommerce();

  if (!activeModal || !modalProduct) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50" onClick={closeModal}>
      <div className="mx-4 w-full max-w-[400px] rounded-lg bg-white p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-brand-text">Move from Wishlist</h3>
          <button onClick={closeModal} className="text-brand-muted hover:text-brand-red">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <p className="mt-2 text-[14px] text-brand-muted">Are you sure you want to move or remove this item?</p>
        <div className="mt-4 flex items-center gap-4 rounded-lg border border-brand-line p-3">
          <img src={modalProduct.image} alt="" className="size-16 rounded object-contain" />
          <div>
            <p className="text-[14px] font-semibold text-brand-text">{modalProduct.name}</p>
            <p className="text-[13px] text-brand-muted">Rs. {modalProduct.price?.toLocaleString('en-IN')}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button onClick={() => { removeFromWishlist(modalProduct.id); closeModal(); }}
            className="h-[42px] rounded-lg border border-brand-line text-[13px] font-bold text-brand-text transition hover:bg-gray-50">
            Remove
          </button>
          <button onClick={() => { moveWishlistToCart(modalProduct); closeModal(); }}
            className="h-[42px] rounded-lg bg-brand-red text-[13px] font-bold text-white transition hover:bg-red-700">
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
