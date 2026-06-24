const baseIconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function ChevronDownIcon({ className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="2">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function SearchIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function UserIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function HeartIcon({ className = 'size-6', isFilled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...baseIconProps}
      fill={isFilled ? 'currentColor' : 'none'}
      strokeWidth="1.8"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

export function BagIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="1.8">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function MenuIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="2">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="2">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function ArrowIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className = 'size-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.86L18.18 21 12 17.75 5.82 21 7 14.13l-5-4.86 6.91-1.01L12 2Z" />
    </svg>
  );
}

export function PackageIcon({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="1.6">
      <path d="m3 7 9 5 9-5-9-5-9 5Z" />
      <path d="M3 7v10l9 5 9-5V7" />
      <path d="M12 12v10" />
    </svg>
  );
}

export function ReturnsIcon({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="1.6">
      <path d="M4 7h11a5 5 0 0 1 0 10H8" />
      <path d="m8 3-4 4 4 4" />
      <path d="M9 17h-.01" />
    </svg>
  );
}

export function PaymentIcon({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
      <path d="M17 15h.01" />
    </svg>
  );
}

export function SupportIcon({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseIconProps} strokeWidth="1.6">
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v4a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" />
      <path d="M20 12v4a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
      <path d="M14 20h-4" />
    </svg>
  );
}
