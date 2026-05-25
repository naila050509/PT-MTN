import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', variant = 'fade-up', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getVariantClass = () => {
    switch (variant) {
      case 'fade-up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case 'fade-down':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12';
      case 'fade-left':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case 'fade-right':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
      case 'zoom-out':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getVariantClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
