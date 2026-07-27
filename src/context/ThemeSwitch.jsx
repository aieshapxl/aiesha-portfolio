import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const ThemeSwitch = ({className = ""}) => {

  const buttonRef = useRef(null)

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
      return;
    }

    document.startViewTransition(() => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    });
  };

  useEffect(() => {
    gsap.to(buttonRef.current, {
      y: -4,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="toggle theme"
      className={`${className} relative flex h-10 w-25 items-center rounded-full p-1 transition-colors duration-500 ${
        theme === "light" ? "bg-[#d6bcfa]" : "bg-[#290b53]"
      }`}
    >
      <span
        className={`absolute h-8 w-8 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] ${
          theme === "light" ? "translate-x-15" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeSwitch;
