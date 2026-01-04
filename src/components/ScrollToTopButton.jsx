import { useEffect, useState } from "react";

export default function ScrollToTopButton({
  showAfter = 300, // px de scroll antes de mostrarse
  right = "1.5rem",
  bottom = "1.5rem",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // estado inicial
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      style={{ right, bottom }}
      className={`
        fixed z-50
        h-12 w-12 rounded-full
        flex items-center justify-center
        shadow-lg
        transition duration-300
        bg-[var(--background-color-text)]
        text-[var(--text-color)]
        hover:bg-[var(--acento-color-hover)]
        hover:text-[var(--background-color)]
        cursor-pointer
        bg-[var(--button-color)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
      `}
    >
      {/* Flecha simple */}
      <span className="text-xl leading-none">↑</span>
    </button>
  );
}
