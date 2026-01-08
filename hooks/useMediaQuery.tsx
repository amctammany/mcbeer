"use client";
import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window.matchMedia is available (for SSR compatibility)
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event: any) => setMatches(event.matches);

      // Initial check
      //setMatches(mediaQueryList.matches);

      // Listen for changes
      mediaQueryList.addEventListener("change", listener);

      // Cleanup function to remove the listener
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, [query]); // Re-run effect if the query changes

  return matches;
};

export default useMediaQuery;
