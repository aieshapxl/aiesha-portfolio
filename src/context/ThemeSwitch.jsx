import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitch = () => {
  const buttonRef = useRef(null);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    gsap.to(buttonRef.current, {
      y: -30,
      scale: 1.08,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="toggle theme"
      className={`relative flex h-10 w-20 items-center rounded-full p-1 overflow-hidden transition-all duration-500 ${
        theme === "light" ? "bg-[#B8D8F0]" : "bg-[#252235]"
      }`}
    >
      <span
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          theme === "light"
            ? "bg-gradient-to-r from-[#DFF3FF] to-[#A8C7E8]"
            : "bg-gradient-to-r from-[#302B45] to-[#171421]"
        }`}
      />

      <span
        className={`relative z-10 h-8 w-8 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] ${
          theme === "light"
            ? "translate-x-10 bg-[#FFF8E7]"
            : "translate-x-0 bg-[#F5E9FF]"
        }`}
      />
    </button>
  );
};

export default ThemeSwitch;
