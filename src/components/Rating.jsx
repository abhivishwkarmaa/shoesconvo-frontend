import { StarIcon } from './Icons.jsx';

export function Rating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-[#f5a400]" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="size-[14px] sm:size-4" />
        ))}
      </div>
      <span className="text-[12px] font-medium leading-[19px] text-black/50">
        {rating} | {reviews} Reviews
      </span>
    </div>
  );
}
