import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  isInView: boolean;
}

/**
 * Custom hook for scroll-based animations
 * Returns a ref to attach to elements and whether the element is in view
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If triggerOnce is true, only set to true, never back to false
        if (triggerOnce) {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        } else {
          setIsInView(entry.isIntersecting);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, isInView]);

  return { ref, isInView };
};

export default useScrollAnimation;
