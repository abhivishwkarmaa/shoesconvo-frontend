import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';

export function LoginPage() {
  const { loginUser } = useCommerce();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: 'niteshams@gmail.com', password: '••••••••••••••••', showPassword: false, terms: true, subscribe: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email: form.email });
    navigate('/account');
  };

  return (
    <section className="bg-[#fafafa] py-12 md:py-16">
      <div className="konvo-container">
        <div className="mx-auto flex max-w-[960px] overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Left illustration */}
          <div className="hidden w-[45%] items-center justify-center bg-[#f0f4ff] p-8 lg:flex">
            <div className="relative">
              <svg viewBox="0 0 300 400" className="h-[400px] w-auto">
                <defs>
                  <linearGradient id="hand" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c9a0dc"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
                </defs>
                {/* Simplified hand with phone illustration */}
                <rect x="80" y="60" width="140" height="240" rx="20" fill="#e8edf5" stroke="#c5cee0" strokeWidth="2"/>
                <rect x="95" y="80" width="110" height="200" rx="8" fill="white"/>
                {/* Phone screen content */}
                <rect x="105" y="100" width="90" height="30" rx="4" fill="#4ade80" opacity="0.3"/>
                <circle cx="150" cy="115" r="12" fill="#22c55e" opacity="0.6"/>
                <path d="M145 115 l4 4 l8-8" stroke="white" strokeWidth="2" fill="none"/>
                {/* Lock icon */}
                <rect x="120" y="180" width="60" height="50" rx="8" fill="#3b82f6" opacity="0.15"/>
                <rect x="138" y="195" width="24" height="20" rx="4" fill="#fbbf24"/>
                <path d="M143 195 v-8 a7 7 0 0 1 14 0 v8" stroke="#fbbf24" strokeWidth="3" fill="none"/>
                {/* Shield */}
                <path d="M100 40 l50-25 l50 25 v30 c0 30-20 50-50 65 c-30-15-50-35-50-65z" fill="#22c55e" opacity="0.7"/>
                <path d="M135 65 l8 8 l18-18" stroke="white" strokeWidth="4" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Right form */}
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-[32px] font-bold text-brand-text">Login</h1>
            <p className="mt-2 text-[14px] text-brand-muted">
              Get access to your Orders, Wishlist and Recommendations
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-brand-muted">Email</label>
                <input
                  type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 h-[48px] w-full rounded border border-brand-line px-4 text-[14px] text-brand-text outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-brand-muted">Password</label>
                <div className="relative mt-1">
                  <input
                    type={form.showPassword ? 'text' : 'password'} value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="h-[48px] w-full rounded border border-brand-line px-4 pr-12 text-[14px] text-brand-text outline-none focus:border-brand-red"
                  />
                  <button type="button" onClick={() => setForm({ ...form, showPassword: !form.showPassword })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {form.showPassword ? (
                        <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>
                      ) : (
                        <><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></>
                      )}
                    </svg>
                  </button>
                </div>
                <Link to="/forgot-password" className="mt-2 block text-right text-[13px] font-semibold text-brand-text hover:text-brand-red">
                  Forgot Password
                </Link>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-2 text-[13px] text-brand-muted">
                  <input type="checkbox" checked={form.terms} onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="mt-0.5 size-4 accent-brand-red"/>
                  <span>By continuing, you agree to Konvo Shoes <a href="#" className="text-blue-600 underline">Terms of Use</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.</span>
                </label>
                <label className="flex items-start gap-2 text-[13px] text-brand-muted">
                  <input type="checkbox" checked={form.subscribe} onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                    className="mt-0.5 size-4 accent-brand-red"/>
                  <span>Subscribe to stay updated with new products and offers!</span>
                </label>
              </div>

              <button type="submit" className="focus-ring h-[52px] w-full rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                Login
              </button>

              <div className="relative flex items-center justify-center py-2">
                <div className="absolute inset-x-0 top-1/2 h-px bg-brand-line"></div>
                <span className="relative bg-white px-4 text-[13px] text-brand-muted">Or Continue with</span>
              </div>

              <button type="button" className="flex h-[48px] w-full items-center justify-center gap-3 rounded-lg border border-brand-line text-[14px] font-semibold text-brand-text transition hover:bg-gray-50">
                <svg viewBox="0 0 24 24" className="size-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>

              <p className="text-center text-[14px] text-brand-text">
                New to Konvo Shoes?{' '}
                <Link to="/register" className="font-semibold text-brand-red hover:underline">Create an Account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
