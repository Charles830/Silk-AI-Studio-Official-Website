import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, noPadding = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`relative w-full ${!noPadding ? 'py-20 md:py-32' : ''} ${className}`}
    >
      <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {children}
      </div>
    </section>
  );
};