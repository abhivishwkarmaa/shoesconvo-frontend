import { ArrowIcon } from './Icons.jsx';

export function SectionHeader({ title, subtitle, onPrevious, onNext, className = '' }) {
  return (
    <div className={`flex items-end justify-between gap-6 ${className}`}>
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>

      {onPrevious && onNext ? (
        <div className="hidden shrink-0 items-center gap-4 sm:flex">
          <button
            type="button"
            aria-label={`Previous ${title}`}
            onClick={onPrevious}
            className="focus-ring flex size-11 rotate-180 items-center justify-center rounded-full border border-black/10 bg-white text-brand-red shadow-sm hover:border-brand-red"
          >
            <ArrowIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label={`Next ${title}`}
            onClick={onNext}
            className="focus-ring flex size-11 items-center justify-center rounded-full bg-brand-red text-white shadow-sm hover:bg-black"
          >
            <ArrowIcon className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
