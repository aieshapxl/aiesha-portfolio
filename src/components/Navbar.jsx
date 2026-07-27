import { useState } from "react";
import { Link } from "react-router-dom";
// import ThemeSwitch from "../context/ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.18)] supports-backdrop-filter:bg-white/5">
      {/* Top Bar */}
      <div className="mx-auto flex h-16 items-center justify-between px-5 md:px-10 lg:px-12">
        {/* Logo */}
        <Link to="/" className="leading-none flex flex-col" onClick={closeMenu}>
          <p className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-text-muted sm:text-sm sm:tracking-[0.5em]">
            edition
          </p>

          <h1 className="font-garamond text-5xl text-text-secondary">01</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12">
          <Link className="nav-link" to="/projects">
            Works
          </Link>

          <Link className="nav-link" to="/laboratory">
            Laboratory
          </Link>

          <Link className="nav-link" to="/archive">
            Archive
          </Link>

          <Link
            className="font-satoshi rounded-full border border-border-dark px-4 py-2 text-sm uppercase tracking-[0.18em] text-text-secondary transition hover:bg-bg-secondary"
            to="/contact"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-dark text-text-secondary transition hover:bg-bg-secondary md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-5 py-6">
          <Link className="nav-link" to="/projects" onClick={closeMenu}>
            Works
          </Link>

          <Link className="nav-link" to="/laboratory" onClick={closeMenu}>
            Laboratory
          </Link>

          <Link className="nav-link" to="/archive" onClick={closeMenu}>
            Archive
          </Link>

          <Link
            className="font-satoshi rounded-full border border-border-dark px-5 py-2 text-sm uppercase tracking-[0.18em] text-text-secondary transition hover:bg-bg-secondary"
            to="/contact"
            onClick={closeMenu}
          >
            Connect
          </Link>
        </div>
      </div>

      {/* <ThemeSwitch /> */}
    </nav>
  );
};

export default Navbar;
