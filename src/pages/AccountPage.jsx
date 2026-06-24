import { Link } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';

export function AccountPage() {
  const { authUser, cartCount, wishlistCount, logoutUser } = useCommerce();

  if (!authUser) {
    return (
      <section className="konvo-container py-16 md:py-24">
        <div className="mx-auto max-w-2xl border border-black/10 bg-white p-8 text-center shadow-card">
          <h1 className="text-[34px] font-bold text-brand-text">Login required</h1>
          <p className="mt-3 text-brand-muted">Please login or create a buyer account to access your profile.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/login" className="rounded bg-brand-red px-7 py-3 text-[14px] font-bold uppercase text-white">Login</Link>
            <Link to="/register" className="rounded border border-black/10 px-7 py-3 text-[14px] font-bold uppercase">Register</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="konvo-container py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <aside className="bg-brand-red p-8 text-white">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em]">Account</p>
          <h1 className="mt-4 text-[36px] font-extrabold leading-tight">{authUser.name}</h1>
          <p className="mt-2 text-white/80">{authUser.business}</p>
          <button type="button" onClick={logoutUser} className="mt-8 rounded bg-white px-6 py-3 text-[14px] font-bold uppercase text-brand-red">Logout</button>
        </aside>
        <div className="grid gap-6 md:grid-cols-3">
          {[['Email', authUser.email], ['Wishlist Items', wishlistCount], ['Cart Items', cartCount]].map(([label, value]) => (
            <div key={label} className="border border-black/10 bg-white p-6 shadow-card">
              <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{label}</p>
              <p className="mt-4 text-[24px] font-bold text-brand-text">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
