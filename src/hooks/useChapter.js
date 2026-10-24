import { useEffect, useState } from "react";

export function useChapter() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    let pending = false;
    const update = () => {
      let index = 0;
      document.querySelectorAll("[data-chapter]").forEach((section) => {
        if (section.getBoundingClientRect().top <= 190)
          index = Number(section.dataset.chapter);
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 5)
        index = 7;
      setActive(index);
      pending = false;
    };
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(update);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    update();
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}
