import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SetPasswordPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ newPassword: '', confirmPassword: '', showNew: false, showConfirm: false });

  const handleSubmit = (e) => { e.preventDefault(); navigate('/login'); };

  const EyeBtn = ({ show, toggle }) => (
    <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted">
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    </button>
  );

  return (
    <section className="bg-[#fafafa] py-12 md:py-16">
      <div className="konvo-container">
        <div className="mx-auto flex max-w-[960px] overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="hidden w-[45%] items-center justify-center bg-[#f0f4ff] p-8 lg:flex">
            <svg viewBox="0 0 300 350" className="h-[350px] w-auto">
              <rect x="60" y="50" width="180" height="120" rx="12" fill="#dbeafe" stroke="#93c5fd" strokeWidth="2"/>
              <rect x="90" y="100" width="120" height="30" rx="6" fill="#e2e8f0"/>
              <text x="100" y="120" fontSize="14" fill="#64748b">* * * * * * *</text>
              <circle cx="250" cy="80" r="25" fill="none" stroke="#94a3b8" strokeWidth="2"/>
              <circle cx="250" cy="80" r="8" fill="#94a3b8"/>
              <rect x="242" y="80" width="16" height="12" rx="2" fill="#94a3b8"/>
              <path d="M200 200 l20 20 l40-50" stroke="#22c55e" strokeWidth="5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-[32px] font-bold text-brand-text">Set a Password</h1>
            <p className="mt-2 text-[14px] text-brand-muted">Your previous password has been reseted. Please set a new password for your account.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-brand-muted">Set New Password</label>
                <div className="relative mt-1">
                  <input type={form.showNew ? 'text' : 'password'} value={form.newPassword} onChange={(e) => setForm({ ...form, newPassword: e.target.value })} placeholder="7T89BMdX@dIH6SK_"
                    className="h-[48px] w-full rounded border border-brand-line px-4 pr-12 text-[14px] text-brand-text outline-none focus:border-brand-red" />
                  <EyeBtn show={form.showNew} toggle={() => setForm({ ...form, showNew: !form.showNew })} />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-brand-muted">Re-enter New Password</label>
                <div className="relative mt-1">
                  <input type={form.showConfirm ? 'text' : 'password'} value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} placeholder="7T89BMdX@dIH6SK_"
                    className="h-[48px] w-full rounded border border-brand-line px-4 pr-12 text-[14px] text-brand-text outline-none focus:border-brand-red" />
                  <EyeBtn show={form.showConfirm} toggle={() => setForm({ ...form, showConfirm: !form.showConfirm })} />
                </div>
              </div>
              <button type="submit" className="h-[52px] w-full rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                Set Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
