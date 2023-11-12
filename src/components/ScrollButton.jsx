// ScrollButton.js
import React, { useState, useEffect } from 'react';
import '../css/ScrollButton.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default ScrollButton;
