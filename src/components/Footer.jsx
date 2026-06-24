import { useCommerce } from '../context/CommerceContext.jsx';
import { footerColumns, popularSearches } from '../data/siteData.js';

const socialLinks = ['f', '▶', '◎', 'in'];

export function Footer() {
  const {
    newsletterEmail,
    setNewsletterEmail,
    subscribeNewsletter,
    isNewsletterSubscribed,
  } = useCommerce();

  const handleSubmit = (event) => {
    event.preventDefault();
    subscribeNewsletter();
  };

  return (
    <footer className="bg-brand-blush">
      <div className="konvo-container py-10 md:py-12">
        <div className="grid gap-10 xl:grid-cols-[1.7fr_1fr_1.35fr_1.65fr_2.2fr]">
          <div>
            <h2 className="text-[18px] font-bold leading-normal text-brand-text">Get In Touch</h2>
            <div className="mt-4 space-y-5 text-[14px] leading-[1.55] text-[#676869]">
              <div>
                <p>Online Order</p>
                <p className="mt-3">Inquiry/Complaint: Monday to Friday</p>
                <p className="mt-3">9910045408</p>
                <p>10.00AM - 7:00PM</p>
              </div>
              <div>
                <p>Any Other Queries: Monday to Friday</p>
                <p className="mt-3">9910045408</p>
                <p>10.00AM - 7:00PM</p>
              </div>
              <p>Email: customercare@konvoshoes.com</p>
              <p>
                For Bulk/B2B/Institutional/School Orders and Queries please share your details -
                <span className="font-semibold text-brand-text"> INSTITUTIONAL </span>
                or write to us at instt@konvoshoes.com
              </p>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-[18px] font-bold leading-normal text-brand-text">{column.title}</h2>
              <ul className="mt-4 space-y-2 text-[14px] leading-[30px] text-[#676869]">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link}`}>
                    <a href="#top" className="transition hover:text-brand-red">
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-[18px] font-bold leading-normal text-brand-text">Newsletter</h2>
            <p className="mt-4 max-w-[360px] text-[14px] leading-[22px] text-brand-muted">
              Sign up for exclusive offers, original stories, upcoming events and more.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 max-w-[400px]">
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                placeholder="Your email address"
                className="h-[50px] w-full rounded-[3px] border border-brand-line bg-white px-4 text-[14px] text-brand-text outline-none placeholder:text-brand-muted focus:border-brand-red"
              />
              <p className="mt-3 text-[14px] leading-[18px] text-brand-muted">
                I would like to receive news and special offer
              </p>
              <button
                type="submit"
                className="focus-ring mt-4 h-[46px] w-[200px] rounded-[3px] bg-brand-red text-[16px] font-bold uppercase text-white transition hover:bg-black"
              >
                Subscribe
              </button>
              {isNewsletterSubscribed ? (
                <p className="mt-3 text-[13px] font-medium text-brand-red">Thank you for subscribing.</p>
              ) : null}
            </form>

            <div className="mt-7 flex items-center gap-[9px]" aria-label="Social media links">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#top"
                  className="focus-ring flex size-[46px] items-center justify-center rounded-full bg-black text-[15px] font-bold text-white transition hover:bg-brand-red"
                  aria-label={`Konvo social ${label}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-[14px] leading-[28px] text-[#676869]">
          <h2 className="mb-2 text-[16px] font-bold text-brand-text">Popular Searches</h2>
          {popularSearches.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-8 border-t border-black/10 pt-7 text-[14px] text-[#676869]">
          Copyright © 2026 Konvo Shoes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
