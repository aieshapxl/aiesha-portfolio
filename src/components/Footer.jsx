import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-bg-primary px-2 sm:px-8 py-6 lg:py-4"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="footer-reveal mb-1 text-xs uppercase tracking-[0.7em] text-text-muted">
          thanks for scrolling
        </p>

        <h3 className="footer-reveal font-garamond text-5xl sm:text-7xl lg:text-6xl xl:text-7xl leading-none text-text-primary capitalize">
          aiesha ganguly
        </h3>

        <div className="footer-reveal mt-3 h-px w-24 bg-gradient-accent opacity-70" />

        <div className="footer-reveal mt-5 flex flex-col gap-2 border-t border-border-light pt-3 text-xs uppercase tracking-[0.3em] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 all rights reserved.</p>

          <p>crafted pixel by pixel.</p>

          <button
            onClick={scrollToTop}
            className="group relative w-fit transition-colors duration-300 hover:text-text-primary"
          >
            back to top
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent-pink transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
