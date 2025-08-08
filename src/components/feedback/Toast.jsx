import { useEffect, useState } from 'react';

export default function Toast({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, []);

  return (
    <div className={`d-toast z-[999] ${!isVisible && 'hidden'} ${className}`}>
      {children}
    </div>
  );
}
