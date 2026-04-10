import { useState, useEffect } from "react";

export const useTOC = (activeItem) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Small delay to ensure content is fully rendered in the DOM
    const timer = setTimeout(() => {
      const contentRoot = document.querySelector(".doc-content");
      if (!contentRoot) return;

      const items = Array.from(contentRoot.querySelectorAll("h2, h3")).map(
        (heading) => {
          // Ensure every heading has a unique ID
          if (!heading.id) {
            heading.id = heading.innerText
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "");
          }
          return {
            id: heading.id,
            text: heading.innerText,
            level: heading.tagName.toLowerCase(), // h2 or h3
          };
        },
      );
      setHeadings(items);

      // Setup Intersection Observer for scroll tracking
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0% 0% -80% 0%", threshold: 0 },
      );

      contentRoot
        .querySelectorAll("h2, h3")
        .forEach((h) => observer.observe(h));

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [activeItem]);

  return { headings, activeId };
};
