import { Link } from 'react-router-dom';
import { BenefitsBar } from '../components/BenefitsBar.jsx';

export function OrderSuccessPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[100px] overflow-hidden bg-[#2a2a2a] md:h-[130px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="konvo-container relative flex h-full items-center">
          <h1 className="text-[24px] font-extrabold uppercase tracking-wider text-white md:text-[36px]" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
            Explore More Products
          </h1>
        </div>
      </div>

      <div className="konvo-container flex min-h-[500px] flex-col items-center justify-center py-20 text-center">
        <div className="flex size-[80px] items-center justify-center rounded-full bg-green-500">
          <svg viewBox="0 0 24 24" className="size-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-8 text-[28px] font-bold text-brand-text">Your order is successfully.</h2>
        <p className="mt-3 text-[14px] text-brand-muted">You can track the delivery in the "Orders" Section.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="flex h-[48px] items-center justify-center rounded-lg bg-brand-red px-8 text-[14px] font-bold uppercase text-white transition hover:bg-red-700">
            Continue Shopping
          </Link>
          <Link to="/account" className="flex h-[48px] items-center justify-center rounded-lg border border-brand-line px-8 text-[14px] font-bold uppercase text-brand-text transition hover:bg-gray-50">
            Go to Orders
          </Link>
        </div>
      </div>
      <BenefitsBar />
    </div>
  );
}
