import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import Studio from "./Studio";
import ThemeSwitch from "../context/ThemeSwitch";
import Button from "../components/Button";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Home = () => {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const circleRef = useRef(null);
  const waveRef = useRef(null);

  const newTitle = "i'm aiesha ganguly";

  useLayoutEffect(() => {
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars",
    });

    const splitPara = new SplitText(paraRef.current, {
      type: "lines",
    });

    let newSplit;

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      const wave = waveRef.current;
      const length = wave.getTotalLength();

      gsap.set(wave, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      t1.to(
        wave,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
        },
        "-=0.5",
      );

      gsap.to(wave, {
        y: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      t1.from(introRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
      });

      t1.from(splitTitle.chars, {
        y: 100,
        stagger: 0.05,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });


      t1.from(
        splitPara.lines,
        {
          opacity: 0,
          y: 30,
          stagger: 0.03,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.2",
      );

      t1.to({}, {
        duration: 0.5
      })

      t1.add(() => {
        if (!titleRef.current) return;
        splitTitle.revert();

        titleRef.current.classList.remove("text-[clamp(3.5rem,16vw,10rem)]");
        titleRef.current.classList.add(
          "text-[clamp(3.5rem,8vw,8.5rem)]",
          "whitespace-nowrap",
        );
        titleRef.current.textContent = newTitle;

        newSplit = new SplitText(titleRef.current, {
          type: "chars",
        });

        gsap.from(newSplit.chars, {
          rotateX: -90,
          opacity: 0,
          y: 30,
          stagger: 0.05,
          duration: 0.7,
          ease: "back.out(1.7)",
        });
      })


      // title disappears while scrolling
      gsap.to(titleRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });

      // curve moves
      gsap.to(circleRef.current, {
        scale: 0.85,
        y: 120,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      
    });

    return () => {
      ctx.revert();
      splitTitle.revert();
      splitPara.revert();
      newSplit?.revert()
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="relative overflow-hidden bg-bg-primary flex-1 min-h-[calc(100vh-4.5rem)]">
          <div
            ref={circleRef}
            className="absolute -bottom-40 left-1/2 h-[20rem] w-[50rem] sm:h-[24rem] sm:w-[70rem] lg:h-[30rem] lg:w-[120rem] -translate-x-1/2 rounded-[50%] bg-gradient-accent blur-[160px] opacity-30"
          />

          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="waveGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* wave 1 */}
            <path
              ref={waveRef}
              d="M0,450
       C250,250 450,650 700,450
       S1150,250 1440,450"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.18"
              filter="url(#waveGlow)"
            />

            {/* wave 2 */}
            <path
              d="M0,450
       C180,620 480,260 760,450
       S1180,620 1440,450"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              opacity="0.12"
              filter="url(#waveGlow)"
            />
          </svg>

          <div className="absolute inset-0 grid-overlay" />

          <div className="mx-auto w-full max-w-7xl">
            <div className="relative z-10 min-h-[calc(100vh-4.5rem)] flex flex-col justify-center items-center lg:items-start px-6 sm:px-10 lg:px-24 sm:pt-20 pt-16">
              <div className="absolute top-6 right-6 sm:right-10 lg:right-24">
                <ThemeSwitch />
              </div>
              <p
                ref={introRef}
                id="para2"
                className="tracking-[0.45em] sm:tracking-[0.8em] text-[9px] sm:text-xs lg:text-sm mb-8 text-text-primary text-center uppercase"
              >
                software • web • creative
              </p>

              <Button text="hi" />

              <div className="relative w-full lg:w-fit">
                <h1
                  ref={titleRef}
                  className="font-garamond capitalize text-[clamp(3.5rem,16vw,10rem)] leading-[0.85] tracking-[-0.04em] text-center lg:text-left wrap-break-word"
                >
                  Portfolio
                </h1>

                <p className="absolute -right-2 bottom-3 rotate-90 hidden lg:block text-[10px] tracking-[0.6em] text-text-muted uppercase">
                  digital studio
                </p>
              </div>

              <p
                ref={paraRef}
                id="para1"
                className="mt-10 sm:mt-12 lg:mt-14 max-w-sm sm:max-w-xl text-sm sm:text-base text-text-muted capitalize tracking-relaxed leading-relaxed sm:text-md text-center lg:text-left"
              >
                transforming ideas into elegant digital spaces.
              </p>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 text-[9px] sm:text-[10px] tracking-[0.5em] text-text-muted uppercase whitespace-nowrap">
              scroll to explore
            </div>
          </div>
        </main>
      </div>
      <Studio />
    </>
  );
};

export default Home;
