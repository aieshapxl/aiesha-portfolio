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
      className="relative bg-bg-primary overflow-hidden px-2 sm:px-8 py-10 sm:py-12"
    >
      {/* <div className="absolute inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[90px_90px] mask-[linear-gradient(to_bottom,black,transparent)]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="footer-reveal tracking-[0.7em] uppercase text-xs text-text-muted mb-3">
          thanks for scrolling
        </p>

        <h3 className="footer-reveal relative font-garamond text-5xl sm:text-7xl lg:text-8xl leading-none text-text-primary capitalize">
          aiesha ganguly
          {/* <span className="absolute -top-1 -right-6 sm:-right-8 text-2xl sm:text-3xl font-snell text-accent-sky">
            ✦
          </span> */}
        </h3>

        <div className="footer-reveal mt-5 h-px w-32 bg-gradient-accent opacity-70" />

        {/* bottom bar */}
        <div className="footer-reveal mt-8 flex flex-col gap-2 border-t border-border-light pt-6 text-xs uppercase tracking-[0.3em] text-text-muted sm:flex-row sm:justify-between sm:items-center">
          <p>© 2026 all rights reserved.</p>
          <p>crafted with care.</p>

          <button
            onClick={scrollToTop}
            className="group relative w-fit text-text-muted hover:text-text-primary transition-colors duration-300"
          >
            back to top
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-accent-pink transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
