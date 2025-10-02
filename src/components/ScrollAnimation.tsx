"use client";
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
  className = '',
  style = {}
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
    delay
  });

  const getAnimationClass = () => {
    if (!isVisible) {
      return 'opacity-0 translate-y-8';
    }

    switch (animation) {
      case 'fadeInUp':
        return 'opacity-100 translate-y-0';
      case 'fadeInLeft':
        return 'opacity-100 translate-x-0';
      case 'fadeInRight':
        return 'opacity-100 translate-x-0';
      case 'fadeInScale':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fadeInLeft':
        return 'opacity-0 -translate-x-8';
      case 'fadeInRight':
        return 'opacity-0 translate-x-8';
      case 'fadeInScale':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${getInitialClass()} ${isVisible ? getAnimationClass() : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
