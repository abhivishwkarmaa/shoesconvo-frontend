import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { stateOptions, districtOptions } from '../data/siteData.js';

const initialBusiness = { ownerName: '', companyName: '', email: '', phone: '', password: '', confirmPassword: '', businessLocation: '', businessArea: '', gstNumber: '', gstDocument: null, panNumber: '', panDocument: null };
const initialBilling = { billingAddress: '', area: '', landmark: '', state: '', district: '', city: '', sameAsShipping: false };
const initialShipping = { billingAddress: '', area: '', landmark: '', state: '', district: '', city: '' };

export function RegisterPage() {
  const { registerUser } = useCommerce();
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0: business, 1: billing, 2: shipping
  const [openSection, setOpenSection] = useState(0);
  const [business, setBusiness] = useState(initialBusiness);
  const [billing, setBilling] = useState(initialBilling);
  const [shipping, setShipping] = useState(initialShipping);
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);

  const sections = ['Business Details', 'Billing Address', 'Shipping Address'];

  const handleSubmit = () => {
    registerUser({ ownerName: business.ownerName, companyName: business.companyName, email: business.email, phone: business.phone });
    navigate('/registration-complete');
  };

  return (
    <section className="bg-[#fafafa] py-12 md:py-16">
      <div className="konvo-container">
        <div className="mx-auto flex max-w-[1100px] overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Left illustration */}
          <div className="hidden w-[42%] items-center justify-center bg-[#f0f4ff] p-8 lg:flex">
            <div className="relative">
              <svg viewBox="0 0 300 500" className="h-[480px] w-auto">
                <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c084fc"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
                {/* Hand holding phone */}
                <ellipse cx="150" cy="440" rx="100" ry="30" fill="#e9d5ff" opacity="0.3"/>
                <rect x="95" y="80" width="110" height="200" rx="18" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
                <rect x="105" y="100" width="90" height="160" rx="6" fill="white"/>
                {/* Screen content */}
                <circle cx="150" cy="130" r="18" fill="#fed7aa"/>
                <rect x="140" y="125" width="20" height="12" rx="2" fill="#f97316" opacity="0.5"/>
                <rect x="115" y="160" width="70" height="8" rx="4" fill="#fbbf24" opacity="0.4"/>
                <rect x="115" y="175" width="70" height="8" rx="4" fill="#fbbf24" opacity="0.3"/>
                <rect x="115" y="195" width="70" height="5" rx="2.5" fill="#fbbf24" opacity="0.5"/>
                {/* Stars */}
                <text x="118" y="220" fontSize="10" fill="#f59e0b">★★★★★</text>
                {/* Hand */}
                <path d="M80 320 Q60 280 70 220 Q80 180 95 200 L95 300 Q80 340 100 380 L200 380 Q220 340 205 300 L205 200 Q220 180 230 220 Q240 280 220 320 L220 400 Q200 450 150 460 Q100 450 80 400 Z" fill="url(#hg)" opacity="0.8"/>
                <circle cx="130" cy="350" r="8" fill="white" opacity="0.2"/>
              </svg>
            </div>
          </div>

          {/* Right form */}
          <div className="flex-1 p-6 md:p-10">
            <h1 className="text-[32px] font-bold text-brand-text">Register</h1>
            <p className="mt-2 text-[14px] text-brand-muted">
              Storefront partners — sign in to manage purchase orders, returns, and your weekly statement.
            </p>

            <div className="mt-8 space-y-3">
              {sections.map((title, idx) => (
                <div key={title} className="overflow-hidden rounded-lg border border-brand-line">
                  <button type="button"
                    onClick={() => { setOpenSection(idx); setStep(idx); }}
                    className={`flex w-full items-center justify-between p-4 text-left text-[16px] font-bold transition ${openSection === idx ? 'bg-brand-red text-white' : 'bg-[#1a1a1a] text-white'}`}>
                    {title}
                    <svg viewBox="0 0 24 24" className={`size-5 transition ${openSection === idx ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>

                  {openSection === idx && (
                    <div className="p-6">
                      {idx === 0 && (
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Owner Name" placeholder="Owner Name" value={business.ownerName} onChange={(v) => setBusiness({ ...business, ownerName: v })} />
                            <FormField label="Company Name" placeholder="Company Name" value={business.companyName} onChange={(v) => setBusiness({ ...business, companyName: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Email Address" placeholder="Email Address" type="email" value={business.email} onChange={(v) => setBusiness({ ...business, email: v })} />
                            <FormField label="Phone Number" placeholder="Phone Number" type="tel" value={business.phone} onChange={(v) => setBusiness({ ...business, phone: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Password" placeholder="••••••••" type={showPw ? 'text' : 'password'} value={business.password} onChange={(v) => setBusiness({ ...business, password: v })} showToggle toggleFn={() => setShowPw(!showPw)} />
                            <FormField label="Confirm Password" placeholder="••••••••" type={showCpw ? 'text' : 'password'} value={business.confirmPassword} onChange={(v) => setBusiness({ ...business, confirmPassword: v })} showToggle toggleFn={() => setShowCpw(!showCpw)} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <SelectField label="Business Location" placeholder="Select State" options={stateOptions} value={business.businessLocation} onChange={(v) => setBusiness({ ...business, businessLocation: v })} />
                            <SelectField label="Business Area" placeholder="Select District" options={districtOptions} value={business.businessArea} onChange={(v) => setBusiness({ ...business, businessArea: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="GST Number" placeholder="Enter GST Number" value={business.gstNumber} onChange={(v) => setBusiness({ ...business, gstNumber: v })} />
                            <FileField label="Upload GST Document" />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="PAN Number" placeholder="Enter Company PAN Card" value={business.panNumber} onChange={(v) => setBusiness({ ...business, panNumber: v })} />
                            <FileField label="Upload PAN Card Document" />
                          </div>
                          <button type="button" onClick={() => { setStep(1); setOpenSection(1); }}
                            className="h-[50px] w-full rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                            Next
                          </button>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Billing Address" placeholder="Flat, House No., Building, Company, Apartment" value={billing.billingAddress} onChange={(v) => setBilling({ ...billing, billingAddress: v })} />
                            <FormField label="Area, Colony, Street, Sector, Village" placeholder="Area, Colony, Street, Sector, Village" value={billing.area} onChange={(v) => setBilling({ ...billing, area: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Landmark" placeholder="Landmark" value={billing.landmark} onChange={(v) => setBilling({ ...billing, landmark: v })} />
                            <SelectField label="Select State" placeholder="Select State" options={stateOptions} value={billing.state} onChange={(v) => setBilling({ ...billing, state: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <SelectField label="Select District" placeholder="Select District" options={districtOptions} value={billing.district} onChange={(v) => setBilling({ ...billing, district: v })} />
                            <SelectField label="Select City" placeholder="Select City" options={['New Delhi', 'Mumbai', 'Bangalore']} value={billing.city} onChange={(v) => setBilling({ ...billing, city: v })} />
                          </div>
                          <label className="flex items-center gap-2 text-[13px] text-brand-muted">
                            <input type="checkbox" checked={billing.sameAsShipping} onChange={(e) => setBilling({ ...billing, sameAsShipping: e.target.checked })} className="size-4 accent-brand-red" />
                            Billing Address & Shipping Address same as Current Address
                          </label>
                          <div className="flex gap-4">
                            <button type="button" onClick={() => { setStep(0); setOpenSection(0); }}
                              className="h-[50px] flex-1 rounded-lg bg-[#1a1a1a] text-[16px] font-bold text-white transition hover:bg-black">
                              Previous
                            </button>
                            <button type="button" onClick={() => { setStep(2); setOpenSection(2); }}
                              className="h-[50px] flex-1 rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Billing Address" placeholder="Flat, House No., Building, Company, Apartment" value={shipping.billingAddress} onChange={(v) => setShipping({ ...shipping, billingAddress: v })} />
                            <FormField label="Area, Colony, Street, Sector, Village" placeholder="Area, Colony, Street, Sector, Village" value={shipping.area} onChange={(v) => setShipping({ ...shipping, area: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField label="Landmark" placeholder="Landmark" value={shipping.landmark} onChange={(v) => setShipping({ ...shipping, landmark: v })} />
                            <SelectField label="Select State" placeholder="Select State" options={stateOptions} value={shipping.state} onChange={(v) => setShipping({ ...shipping, state: v })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <SelectField label="Select District" placeholder="Select District" options={districtOptions} value={shipping.district} onChange={(v) => setShipping({ ...shipping, district: v })} />
                            <SelectField label="Select City" placeholder="Select City" options={['New Delhi', 'Mumbai', 'Bangalore']} value={shipping.city} onChange={(v) => setShipping({ ...shipping, city: v })} />
                          </div>
                          <div className="flex gap-4">
                            <button type="button" onClick={() => { setStep(1); setOpenSection(1); }}
                              className="h-[50px] flex-1 rounded-lg bg-[#1a1a1a] text-[16px] font-bold text-white transition hover:bg-black">
                              Previous
                            </button>
                            <button type="button" onClick={handleSubmit}
                              className="h-[50px] flex-1 rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                              Submit
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type = 'text', value, onChange, showToggle, toggleFn }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-brand-muted">{label}</label>
      <div className="relative mt-1">
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
          className="h-[46px] w-full rounded border border-brand-line px-4 text-[14px] text-brand-text outline-none placeholder:text-brand-muted focus:border-brand-red" />
        {showToggle && (
          <button type="button" onClick={toggleFn} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function SelectField({ label, placeholder, options, value, onChange }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-brand-muted">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-[46px] w-full appearance-none rounded border border-brand-line bg-white px-4 pr-10 text-[14px] text-brand-text outline-none focus:border-brand-red">
        <option value="">{placeholder}</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function FileField({ label }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-brand-muted">{label}</label>
      <div className="mt-1 flex h-[46px] items-center overflow-hidden rounded border border-brand-line">
        <input type="text" placeholder={label} readOnly className="h-full flex-1 px-4 text-[14px] text-brand-muted outline-none" />
        <button type="button" className="h-full bg-brand-muted/20 px-4 text-[13px] font-semibold text-brand-text transition hover:bg-brand-muted/30">
          Choose File
        </button>
      </div>
    </div>
  );
}
