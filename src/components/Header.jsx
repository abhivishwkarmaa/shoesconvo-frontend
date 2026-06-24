import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCommerce } from '../context/CommerceContext.jsx';
import { navigationItems } from '../data/siteData.js';
import { BagIcon, ChevronDownIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from './Icons.jsx';

const logoPath = '/assets/konvo-logo.svg';

function NavigationLink({ item, onClick }) {
  const [showDrop, setShowDrop] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => { clearTimeout(timeoutRef.current); setShowDrop(true); };
  const handleLeave = () => { timeoutRef.current = setTimeout(() => setShowDrop(false), 200); };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <NavLink to={item.to} onClick={onClick}
        className={({ isActive }) =>
          `focus-ring flex items-center gap-1 whitespace-nowrap text-[12px] font-bold uppercase leading-[21px] text-white transition hover:text-white/80 xl:text-[13px] 2xl:text-[14px] ${isActive && !item.to.includes('#') ? 'text-white/80' : ''}`
        }>
        {item.label}
        {item.hasDropdown ? <ChevronDownIcon className="size-4" /> : null}
      </NavLink>

      {/* Dropdown */}
      {item.dropdown && showDrop && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[400px] rounded-lg border border-black/10 bg-white p-6 shadow-2xl">
          <div className="grid grid-cols-2 gap-6">
            {item.dropdown.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[14px] font-bold text-brand-text">{col.title}</h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link to={`/products/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-[13px] text-brand-muted transition hover:text-brand-red">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HeaderAction({ label, icon, count, to }) {
  const className = 'focus-ring relative flex flex-col items-center gap-1 text-white';
  const content = (
    <>
      <span className="flex size-[27px] items-center justify-center">{icon}</span>
      <span className="text-[10px] font-medium leading-[18px]">{label}</span>
      {typeof count === 'number' && count > 0 ? (
        <span className="absolute -right-2 -top-1 flex size-5 items-center justify-center rounded-full bg-black text-[12px] font-medium tracking-[-0.04em]">
          {count}
        </span>
      ) : null}
    </>
  );

  return to ? (
    <Link to={to} className={className}>{content}</Link>
  ) : (
    <button type="button" className={className}>{content}</button>
  );
}

export function Header() {
  const {
    cartCount, wishlistCount, searchQuery, setSearchQuery,
    isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, authUser,
  } = useCommerce();
  const [showProfileDrop, setShowProfileDrop] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfileDrop(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="relative z-50 bg-brand-red">
      <div className="konvo-container flex h-[86px] items-center justify-between gap-3 lg:h-[100px] lg:gap-4">
        {/* Left: Mobile Menu & Desktop Nav */}
        <div className="flex flex-1 items-center justify-start min-w-0">
          <button type="button" aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen} onClick={toggleMobileMenu}
            className="focus-ring flex text-white lg:hidden">
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <nav className="hidden flex-wrap items-center gap-3 lg:flex xl:gap-5" aria-label="Main navigation">
            {navigationItems.map((item) => <NavigationLink key={item.label} item={item} />)}
          </nav>
        </div>

        {/* Center: Logo */}
        <div className="flex shrink-0 items-center justify-center">
          <Link to="/" className="focus-ring" aria-label="Konvo home">
            <img src={logoPath} alt="Konvo" className="h-11 w-auto lg:h-[50px] xl:h-[60px]" />
          </Link>
        </div>

        {/* Right: Search & Actions */}
        <div className="flex flex-1 items-center justify-end gap-3 min-w-0 xl:gap-6">
          <label className="hidden h-[38px] w-full max-w-[200px] items-center gap-2 rounded bg-[#f5f5f5] px-3 lg:flex xl:max-w-[300px] 2xl:max-w-[350px]">
            <SearchIcon className="size-5 shrink-0 text-black/70" />
            <span className="sr-only">Search products</span>
            <input type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="What are you looking for?" className="w-full min-w-0 bg-transparent font-poppins text-[12px] text-black outline-none placeholder:text-black/50" />
          </label>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {/* Profile with dropdown */}
            <div className="relative" ref={profileRef}>
              <button onClick={() => setShowProfileDrop(!showProfileDrop)} className="focus-ring relative flex flex-col items-center gap-1 text-white">
                <span className="flex size-[27px] items-center justify-center"><UserIcon className="size-[27px]" /></span>
                <span className="text-[10px] font-medium leading-[18px]">Profile</span>
              </button>
              {showProfileDrop && (
                <div className="absolute right-0 top-full z-50 mt-2 w-[200px] rounded-lg border border-black/10 bg-white p-4 shadow-2xl">
                  {authUser ? (
                    <>
                      <p className="text-[14px] font-bold text-brand-text">{authUser.name}</p>
                      <p className="text-[12px] text-brand-muted">{authUser.email}</p>
                      <div className="mt-3 space-y-2">
                        <Link to="/account" onClick={() => setShowProfileDrop(false)} className="block text-[13px] text-brand-muted hover:text-brand-red">My Account</Link>
                        <Link to="/wishlist" onClick={() => setShowProfileDrop(false)} className="block text-[13px] text-brand-muted hover:text-brand-red">My Wishlist</Link>
                        <Link to="/cart" onClick={() => setShowProfileDrop(false)} className="block text-[13px] text-brand-muted hover:text-brand-red">My Orders</Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-[14px] font-bold text-brand-text">Welcome</p>
                      <p className="text-[12px] text-brand-muted">To access account and manage orders</p>
                      <Link to="/login" onClick={() => setShowProfileDrop(false)}
                        className="mt-3 block rounded border border-brand-red py-2 text-center text-[13px] font-bold text-brand-red transition hover:bg-brand-red hover:text-white">
                        Login / Signup
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <HeaderAction label="Wishlist" to="/wishlist" icon={<HeartIcon className="size-[27px]" isFilled={wishlistCount > 0} />} count={wishlistCount} />
            <HeaderAction label="My Cart" to="/cart" icon={<BagIcon className="size-[27px]" />} count={cartCount} />
          </div>

          <div className="flex items-center gap-3 text-white lg:hidden">
            <HeaderAction label="Wishlist" to="/wishlist" icon={<HeartIcon className="size-6" />} count={wishlistCount} />
            <HeaderAction label="Cart" to="/cart" icon={<BagIcon className="size-6" />} count={cartCount} />
          </div>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/20 bg-brand-red px-4 pb-5 lg:hidden">
          <label className="mb-4 flex h-[42px] items-center gap-3 rounded bg-[#f5f5f5] px-3">
            <SearchIcon className="size-5 text-black/70" />
            <span className="sr-only">Search products</span>
            <input type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="What are you looking for?" className="w-full bg-transparent font-poppins text-[12px] text-black outline-none placeholder:text-black/50" />
          </label>
          <nav className="grid gap-3" aria-label="Mobile navigation">
            {navigationItems.map((item) => <NavigationLink key={item.label} item={item} onClick={closeMobileMenu} />)}
          </nav>
          <div className="mt-4">
            {authUser ? (
              <Link to="/account" onClick={closeMobileMenu} className="block text-[13px] font-bold text-white">My Account</Link>
            ) : (
              <Link to="/login" onClick={closeMobileMenu} className="block text-[13px] font-bold text-white">Login / Register</Link>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
