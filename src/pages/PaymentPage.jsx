import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { BenefitsBar } from '../components/BenefitsBar.jsx';
import { paymentMethods, bankOptions } from '../data/siteData.js';

export function PaymentPage() {
  const { totalMRP, discount, platformFee, courierCharges, totalAmount, cartItems, placeOrder } = useCommerce();
  const navigate = useNavigate();
  const [activeMethod, setActiveMethod] = useState('recommended');
  const [cardForm, setCardForm] = useState({ number: '', expiry: '', cvv: '', name: '', save: false });
  const [selectedBank, setSelectedBank] = useState('');

  const handlePay = () => { placeOrder(); navigate('/order-success'); };

  const paymentLogos = ['256-bit SSL', 'VISA', 'MasterCard', 'American Express', 'Diners Club', 'Net Banking', 'Cash on Delivery', 'RuPay', 'PayPal', 'BHIM'];

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

      <div className="konvo-container py-10 md:py-14">
        <h2 className="text-[28px] font-bold text-brand-text">Choose Payment Mode</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[200px_1fr_340px]">
          {/* Payment Method Sidebar */}
          <div className="space-y-1">
            {paymentMethods.map((m) => (
              <button key={m.id} onClick={() => setActiveMethod(m.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-[14px] transition ${activeMethod === m.id ? 'bg-brand-red/5 font-bold text-brand-red' : 'text-brand-text hover:bg-gray-50'}`}>
                <span className="text-[18px]">{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>

          {/* Payment Form */}
          <div className="min-h-[400px]">
            {activeMethod === 'recommended' && (
              <div>
                <h3 className="text-[18px] font-bold text-brand-text">Recommended Payment Options</h3>
                <div className="mt-4 space-y-3">
                  <label className="flex items-center gap-3 rounded-lg border border-brand-line p-4 transition hover:border-brand-red">
                    <input type="radio" name="recommended" defaultChecked className="accent-brand-red" />
                    <span className="flex items-center gap-2">
                      <span className="text-[13px]">⭐</span> HDFC Credit Card
                      <span className="text-[12px] text-brand-muted">•••• •••• •••• 0621</span>
                    </span>
                    <span className="ml-auto text-[14px] font-bold text-blue-600">VISA</span>
                  </label>
                  <p className="text-[12px] text-brand-muted">As Per RBI guidelines, CVV is not required for this transaction.</p>
                </div>
                <button onClick={handlePay} className="mt-6 h-[48px] w-full max-w-[300px] rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                  Pay Now
                </button>
              </div>
            )}

            {activeMethod === 'card' && (
              <div>
                <h3 className="text-[18px] font-bold text-brand-text">Credit/ Debit Card</h3>
                <p className="mt-1 text-[13px] text-brand-muted">
                  Please Ensure your card can be used for online transactions. <a href="#" className="font-semibold text-brand-red">Know More</a>
                </p>
                <div className="mt-6 max-w-md space-y-4">
                  <div className="relative">
                    <input type="text" placeholder="Enter Card Number" value={cardForm.number} onChange={e => setCardForm({ ...cardForm, number: e.target.value })}
                      className="h-[46px] w-full rounded border border-brand-line px-4 pr-16 text-[14px] outline-none focus:border-brand-red" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <span className="text-[12px] font-bold text-blue-600">💳</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Valid Thru (MM/YY)" value={cardForm.expiry} onChange={e => setCardForm({ ...cardForm, expiry: e.target.value })}
                      className="h-[46px] rounded border border-brand-line px-4 text-[14px] outline-none focus:border-brand-red" />
                    <input type="text" placeholder="CVV" value={cardForm.cvv} onChange={e => setCardForm({ ...cardForm, cvv: e.target.value })}
                      className="h-[46px] rounded border border-brand-line px-4 text-[14px] outline-none focus:border-brand-red" />
                  </div>
                  <input type="text" placeholder="Name on the Card" value={cardForm.name} onChange={e => setCardForm({ ...cardForm, name: e.target.value })}
                    className="h-[46px] w-full rounded border border-brand-line px-4 text-[14px] outline-none focus:border-brand-red" />
                  <label className="flex items-center gap-2 text-[13px] text-brand-muted">
                    <input type="checkbox" checked={cardForm.save} onChange={e => setCardForm({ ...cardForm, save: e.target.checked })} className="size-4 accent-brand-red" />
                    Save card as per RBI guidelines
                  </label>
                  <button onClick={handlePay} className="h-[48px] w-full rounded-lg bg-brand-red text-[16px] font-bold text-white transition hover:bg-red-700">
                    Pay Now
                  </button>
                </div>
              </div>
            )}

            {activeMethod === 'netbanking' && (
              <div>
                <h3 className="text-[18px] font-bold text-brand-text">Net Banking</h3>
                <p className="mt-1 text-[13px] text-brand-muted">
                  Please Ensure your card can be used for online transactions. <a href="#" className="font-semibold text-brand-red">Know More</a>
                </p>
                <div className="mt-6 space-y-3">
                  {bankOptions.map(bank => (
                    <label key={bank.id} className="flex items-center gap-3 rounded-lg border border-brand-line p-4 transition hover:border-brand-red">
                      <input type="radio" name="bank" value={bank.id} checked={selectedBank === bank.id} onChange={() => setSelectedBank(bank.id)} className="accent-brand-red" />
                      <span className="flex items-center gap-2">
                        <span className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-[12px]">🏦</span>
                        {bank.name}
                      </span>
                    </label>
                  ))}
                  <select className="h-[46px] w-full rounded border border-brand-line bg-white px-4 text-[14px] outline-none focus:border-brand-red">
                    <option>Other Bank</option>
                  </select>
                </div>
              </div>
            )}

            {['upi', 'cod', 'wallets', 'paylater', 'emi'].includes(activeMethod) && (
              <div className="flex min-h-[300px] items-center justify-center">
                <p className="text-[16px] text-brand-muted">
                  {activeMethod.toUpperCase()} payment option coming soon.
                </p>
              </div>
            )}
          </div>

          {/* Subtotal Sidebar */}
          <div className="h-fit rounded-lg border border-brand-line bg-[#fafafa] p-6">
            <h3 className="text-[18px] font-bold text-brand-text">Subtotal Details ({cartItems.length} Items)</h3>
            <p className="text-[12px] text-brand-muted">Tax included and shipping calculated at checkout</p>
            <div className="mt-5 space-y-3 text-[14px]">
              <div className="flex justify-between"><span className="text-brand-muted">Total MRP</span><span className="font-semibold">Rs. {totalMRP.toLocaleString('en-IN')}</span></div>
              <div className="flex justify-between"><span className="text-brand-muted">Discount on MRP</span><span className="font-semibold text-brand-red">Rs. - {discount.toLocaleString('en-IN')}</span></div>
              <div className="flex justify-between"><span className="text-brand-muted">Platform Fee</span><span className="font-semibold">Rs. {platformFee.toLocaleString('en-IN')}</span></div>
              <div className="flex justify-between"><span className="text-brand-muted">Courier Charges</span><span className="font-semibold">Rs. {courierCharges.toLocaleString('en-IN')}</span></div>
              <div className="border-t border-brand-line pt-3">
                <div className="flex justify-between text-[16px] font-bold"><span>Total Amount</span><span>Rs. {totalAmount.toLocaleString('en-IN')}</span></div>
              </div>
            </div>
            <p className="mt-4 text-[12px] text-brand-muted">
              By placing the order, you agree to Konvo <a href="#" className="text-blue-600">Terms of Use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="size-4 text-brand-muted" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {['f', 'y', '◎', 'in'].map(s => <span key={s} className="flex size-6 items-center justify-center rounded bg-gray-100 text-[10px] text-brand-muted">{s}</span>)}
            </div>
          </div>
        </div>

        {/* Payment logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-brand-line pt-8">
          {paymentLogos.map(logo => (
            <div key={logo} className="flex h-[36px] items-center justify-center rounded border border-brand-line bg-white px-3 text-[11px] font-semibold text-brand-muted">{logo}</div>
          ))}
        </div>
      </div>
      <BenefitsBar />
    </div>
  );
}
