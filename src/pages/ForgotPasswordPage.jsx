import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-[#fafafa] py-12 md:py-16">
      <div className="konvo-container">
        <div className="mx-auto flex max-w-[960px] overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="hidden w-[45%] items-center justify-center bg-[#f0f4ff] p-8 lg:flex">
            <svg viewBox="0 0 300 400" className="h-[400px] w-auto">
              <rect x="80" y="80" width="140" height="200" rx="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
              <rect x="100" y="140" width="100" height="60" rx="8" fill="#dbeafe"/>
              <circle cx="150" cy="155" r="15" fill="none" stroke="#3b82f6" strokeWidth="2"/>
              <rect x="142" y="165" width="16" height="12" rx="3" fill="#3b82f6"/>
              <path d="M105 210 h90" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>
              <text x="115" y="230" fontSize="8" fill="#64748b">Enter your email</text>
            </svg>
          </div>
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-[32px] font-bold text-brand-text">Forgot Password</h1>
            <p className="mt-2 text-[14px] text-brand-muted">Enter your email address and we'll send you instructions to reset your password.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-brand-muted">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="niteshams@gmail.com"
                  className="mt-1 h-[48px] w-full rounded border border-brand-line px-4 text-[14px] text-brand-text outline-none focus:border-brand-red" />
              </div>
              <button type="submit" className="h-[52px] w-full rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                Send Reset Link
              </button>
              {sent && <p className="text-center text-[14px] font-medium text-green-600">Reset link sent to {email}</p>}
              <p className="text-center text-[14px] text-brand-muted">
                Remember your password? <Link to="/login" className="font-semibold text-brand-red hover:underline">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
