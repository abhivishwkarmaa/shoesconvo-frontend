import { Link } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { StarIcon } from './Icons.jsx';

export function ProductCard({ product, showPrice, showMOQ, showSizes }) {
  const { toggleWishlist, wishlistIds, addToCart } = useCommerce();
  const isFavorited = wishlistIds.includes(product.id);

  return (
    <article className="group relative border border-transparent bg-white transition hover:border-brand-line hover:shadow-lg">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
          <img src={product.image} alt={product.name} loading="lazy"
            className="h-full w-full object-contain p-4 transition group-hover:scale-105" />
          {/* Hover overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product, 8, 1); }}
              className="flex h-[40px] w-full items-center justify-center gap-2 bg-brand-red text-[13px] font-bold uppercase text-white transition hover:bg-red-700">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>
              Quick Buy
            </button>
          </div>
          {/* Wishlist button */}
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
            className="absolute right-2 top-2 z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110">
            <svg viewBox="0 0 24 24" className={`size-5 ${isFavorited ? 'fill-brand-red text-brand-red' : 'fill-none text-brand-muted'}`} stroke="currentColor" strokeWidth="1.8">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-3">
        <p className="text-[12px] text-brand-muted">{product.category}</p>
        <h3 className="mt-0.5 text-[14px] font-semibold text-brand-text line-clamp-1">
          {product.name}{product.sku ? ` - ${product.sku}` : ''}
        </h3>

        {showPrice && product.price && (
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[14px] font-bold text-brand-red">Rs. {product.price.toLocaleString('en-IN')}</span>
            {product.mrp && <span className="text-[12px] text-brand-muted line-through">Rs. {product.mrp.toLocaleString('en-IN')}</span>}
            {product.mrp && product.price && (
              <span className="text-[11px] font-bold text-green-600">{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF</span>
            )}
          </div>
        )}

        {showSizes && product.sizes && (
          <div className="mt-2 flex flex-wrap gap-1">
            {product.sizes.slice(0, 7).map(s => (
              <span key={s} className="flex size-6 items-center justify-center rounded-full border border-brand-line text-[10px]">{s}</span>
            ))}
          </div>
        )}

        {showMOQ && (
          <p className="mt-2 text-[11px] text-brand-muted">
            Minimum Order Quantity (MOQ): <span className="font-bold text-brand-red">{product.moq || 10} Pack</span>
          </p>
        )}

        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-3" />)}
          </div>
          <span className="text-[12px] font-medium text-brand-text">{product.rating}</span>
          <span className="text-[12px] text-brand-muted">({product.reviews} Reviews)</span>
        </div>
      </div>
    </article>
  );
}
