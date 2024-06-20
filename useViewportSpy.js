import { useState, useEffect, useRef } from "react";

const defaultOptions = {
  root: undefined,
  rootMargin: "0px",
  threshold: 0,
};

export const useViewportSpy = (options = defaultOptions) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return { isVisible, elementRef };
};
