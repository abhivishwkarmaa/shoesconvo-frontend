import { useCallback, useEffect, useMemo, useState } from 'react';

export function useCarousel(items, options = {}) {
  const { autoPlay = false, interval = 5500 } = options;
  const [activeIndex, setActiveIndex] = useState(0);
  const length = items.length;

  const goTo = useCallback(
    (index) => {
      if (!length) {
        setActiveIndex(0);
        return;
      }

      setActiveIndex(((index % length) + length) % length);
    },
    [length],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const previous = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoPlay || length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, length]);

  const orderedItems = useMemo(() => {
    if (!length) {
      return [];
    }

    return [...items.slice(activeIndex), ...items.slice(0, activeIndex)];
  }, [activeIndex, items, length]);

  return {
    activeIndex,
    activeItem: items[activeIndex],
    orderedItems,
    goTo,
    next,
    previous,
  };
}
