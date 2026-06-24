import { Link } from 'react-router-dom';

export function RegistrationCompletePage() {
  return (
    <section className="bg-[#fafafa] py-12 md:py-16">
      <div className="konvo-container">
        <div className="mx-auto flex max-w-[960px] overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="hidden w-[45%] items-center justify-center bg-[#f0f4ff] p-8 lg:flex">
            <svg viewBox="0 0 300 500" className="h-[480px] w-auto">
              <defs><linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c084fc"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
              <rect x="95" y="80" width="110" height="200" rx="18" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
              <rect x="105" y="100" width="90" height="160" rx="6" fill="white"/>
              <circle cx="150" cy="140" r="18" fill="#fed7aa"/>
              <rect x="115" y="170" width="70" height="8" rx="4" fill="#fbbf24" opacity="0.4"/>
              <rect x="115" y="185" width="70" height="8" rx="4" fill="#fbbf24" opacity="0.3"/>
              <text x="118" y="215" fontSize="10" fill="#f59e0b">★★★★★</text>
              <path d="M80 320 Q60 280 70 220 Q80 180 95 200 L95 300 Q80 340 100 380 L200 380 Q220 340 205 300 L205 200 Q220 180 230 220 Q240 280 220 320 L220 400 Q200 450 150 460 Q100 450 80 400 Z" fill="url(#hg2)" opacity="0.8"/>
            </svg>
          </div>
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-[32px] font-bold text-brand-text">Registration Completed</h1>
            <p className="mt-2 text-[14px] text-brand-muted">
              Your company details, as registered. We'll verify identity in the next step using your GST and PAN.
            </p>
            <div className="mt-16 flex flex-col items-center text-center">
              <div className="flex size-[100px] items-center justify-center rounded-full bg-brand-red/10">
                <svg viewBox="0 0 24 24" className="size-14 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="mt-6 text-[24px] font-bold text-brand-red">Application Received</h2>
              <p className="mt-3 text-[20px] font-bold text-brand-text">Your trade account is now under review.</p>
              <p className="mt-4 max-w-md text-[14px] leading-6 text-brand-muted">
                Our team will review your documents and activate your desk upon successful verification. You'll receive confirmation via email and SMS within 1–3 business days.
              </p>
              <Link to="/" className="mt-10 inline-block rounded-lg bg-brand-red px-8 py-3 text-[14px] font-bold text-white transition hover:bg-red-700">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
