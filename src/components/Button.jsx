import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cat from "../assets/images/cat.png"

const cards = [
  {
    title: "secret found",
    subtitle: "thanks for clicking around",
  },
];

const Button = ({ text }) => {
  const btnRef = useRef(null);
  const cardRef = useRef(null);
  const floatTween = useRef(null);

  const [card, setCard] = useState(null);

  useEffect(() => {
    floatTween.current = gsap.to(btnRef.current, {
      y: -30,
      scale: 1.08,
      rotation: 2,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => floatTween.current?.kill();
  }, []);

  useEffect(() => {
    if (!card) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 15,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.7)",
      },
    );
  }, [card]);

  const handleClick = () => {
    const random = cards[Math.floor(Math.random() * cards.length)];
    setCard(random);

    floatTween.current.pause();

    gsap
      .timeline({
        onComplete: () => floatTween.current.resume(),
      })
      .to(btnRef.current, {
        scale: 0.88,
        rotation: -4,
        y: -18,
        duration: 0.08,
        ease: "power2.out",
      })
      .to(btnRef.current, {
        scale: 1.15,
        rotation: 4,
        y: -34,
        duration: 0.3,
        ease: "elastic.out(1, 0.45)",
      });

    setTimeout(() => {
      if (!cardRef.current) return;

      gsap.to(cardRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        onComplete: () => setCard(null),
      });
    }, 3500);
  };

  return (
    <div className="relative inline-flex">
      {card && (
        <div
          ref={cardRef}
          className="absolute left-1/2 top-[-18rem] z-50 w-[20rem] max-w-[90vw] -translate-x-1/2 overflow-hidden rounded-3xl border border-border-light/60 bg-bg-primary/85 p-5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.28)] md:left-[115%] md:top-1/2 md:w-[23rem] md:-translate-x-0 md:-translate-y-1/2"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 via-transparent to-accent-sky/10 pointer-events-none" />

          {/* header */}
          <div className="relative flex items-center justify-between">
            <div>
              <p className="font-galmuri text-[10px] uppercase tracking-[0.35em] text-text-muted">
                easter egg
              </p>

              <h3 className="mt-2 capitalize font-garamond text-3xl leading-none text-text-primary">
                secret found
              </h3>
            </div>

            <span className="h-2.5 w-2.5 rounded-full bg-accent-pink animate-pulse" />
          </div>

          {/* cat */}
          <div className="relative mt-6 flex justify-center">
            <div className="absolute inset-0 blur-3xl bg-accent-pink/15 rounded-full" />

            <img
              src={cat}
              alt="secret cat"
              className="relative h-36 w-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* divider */}
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

          {/* content */}
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-text-muted">
              Congratulations. You discovered one of the hidden details tucked
              away inside this portfolio.
            </p>

            <div className="rounded-2xl border border-border-light/50 bg-bg-secondary/40 px-4 py-3 backdrop-blur-lg">
              <p className="text-[10px] uppercase tracking-[0.35em] text-text-muted">
                current status
              </p>

              <p className="mt-2 text-sm text-text-primary capitalize">
                building projects, refining animations, and collecting tiny
                easter eggs like this one.
              </p>
            </div>

            <p className="text-center font-galmuri text-[10px] uppercase tracking-[0.3em] text-accent-pink">
              thanks for being curious ✦
            </p>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        onClick={handleClick}
        className="group relative flex h-11 items-center gap-3 overflow-hidden rounded-full border border-text-primary/20 bg-transparent px-7 font-galmuri text-[16px] font-bold uppercase tracking-[0.35em] text-text-primary transition-transform duration-150 hover:border-accent-sky hover:text-bg-primary active:scale-90 active:translate-y-1"
      >
        <span className="absolute inset-0 translate-y-full bg-accent-sky transition-transform duration-500 group-hover:translate-y-0" />

        <span className="relative z-10">{text}</span>

        <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-accent-sky transition-all duration-500 group-hover:bg-bg-primary" />
      </button>
    </div>
  );
};

export default Button;
