import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="konvo-container flex min-h-[500px] flex-col items-center justify-center py-20 text-center">
      <h1 className="text-[80px] font-extrabold text-brand-red">404</h1>
      <p className="mt-4 text-[24px] font-bold text-brand-text">Page Not Found</p>
      <p className="mt-2 text-brand-muted">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 inline-block rounded-lg bg-brand-red px-8 py-3 text-[14px] font-bold uppercase text-white transition hover:bg-red-700">
        Back to Home
      </Link>
    </section>
  );
}
