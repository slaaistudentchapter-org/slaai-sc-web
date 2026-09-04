import { useEffect, useRef } from 'react';

/**
 * Attach this ref to a container element.
 * All `.reveal` children inside will animate in when they enter the viewport.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return undefined;

    if (!('IntersectionObserver' in window)) {
      container.querySelectorAll('.reveal').forEach(element => element.classList.add('active'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const elements = container.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
