import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import Studio from "./Studio";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Home = () => {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars",
    });

    const splitPara = new SplitText(paraRef.current, {
      type: "lines",
    });

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

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
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="relative overflow-hidden bg-bg-primary flex-1 min-h-[calc(100vh-4.5rem)]">
          {/* ambient studio glow */}
          <div
            ref={circleRef}
            className="absolute right-[-25%] bottom-[-10%] w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] rounded-full bg-gradient-primary blur-3xl opacity-50"
          />

          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[80px_80px]" />

          <div className="relative z-10 min-h-[calc(100vh-4.5rem)] flex flex-col justify-center items-center lg:items-start px-6 sm:px-10 lg:px-24 sm:pt-20 pt-16 uppercase">
            <p
              ref={introRef}
              id="para2"
              className="tracking-[0.45em] sm:tracking-[0.8em] text-[10px] sm:text-sm mb-8 text-text-primary text-center"
            >
              software • web • creative
            </p>

            <div className="relative w-fit">
              <h1
                ref={titleRef}
                className="font-garamond capitalize text-[clamp(4rem,18vw,12rem)] leading-[0.85] tracking-[-0.04em] text-center lg:text-left"
              >
                Portfolio
              </h1>

              <p className="absolute -right-2 bottom-3 rotate-90 hidden lg:block text-[10px] tracking-[0.6em] text-black/40">
                digital studio
              </p>
            </div>

            <p
              ref={paraRef}
              id="para1"
              className="mt-14 max-w-sm sm:max-w-xl text-sm text-black/60 capitalize tracking-relaxed leading-relaxed sm:text-md text-center"
            >
              transforming ideas into elegant digital spaces.
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 text-[10px] tracking-[0.6em] text-black/40 uppercase whitespace-nowrap">
            scroll to explore
          </div>
        </main>
      </div>
      <Studio />
    </>
  );
};

export default Home;
