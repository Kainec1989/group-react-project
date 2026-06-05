import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll(ready = true) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash || !ready) return;

    const scrollToHash = () => {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.hash === "#mars-weather") {
      setTimeout(scrollToHash, 100);
    } else {
      scrollToHash();
    }
  }, [location, ready]);
}
