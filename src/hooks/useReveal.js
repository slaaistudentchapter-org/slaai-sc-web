import { useEffect, useRef } from 'react';

/**
 * Attach this ref to a container element.
 * All `.reveal` children inside will animate in when they enter the viewport.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
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

    // Observe all .reveal elements in the document (global scope)
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
