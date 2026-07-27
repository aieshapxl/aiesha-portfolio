import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import  { useEffect, useRef } from "react";
import { FaReact, FaJs, FaNodeJs, FaPython, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiGreensock, SiTypescript } from "react-icons/si";
import ThemeSwitch from "../context/ThemeSwitch";
import CurrentFocus from "./CurrentFocus";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const detailRef = useRef(null);
  const tagRef = useRef(null);
  const iconRef = useRef(null);

  const skills = [
    {
      name: "React",
      note: "Component architecture, hooks, state management",
      tag: "Frontend",
      Icon: FaReact,
    },
    {
      name: "JavaScript",
      note: "ES6+, async patterns, DOM APIs",
      tag: "Language",
      Icon: FaJs,
    },
    {
      name: "TypeScript",
      note: "Type safety, interfaces, scalable applications",
      tag: "Language",
      Icon: SiTypescript,
    },
    {
      name: "Tailwind CSS",
      note: "Utility-first, responsive design systems",
      tag: "Styling",
      Icon: SiTailwindcss,
    },
    {
      name: "Node.js",
      note: "REST APIs, server-side logic",
      tag: "Backend",
      Icon: FaNodeJs,
    },
    {
      name: "Python",
      note: "Scripting & automation",
      tag: "Backend",
      Icon: FaPython,
    },
    {
      name: "Java",
      note: "Object-oriented programming & fundamentals",
      tag: "Learning",
      Icon: FaJava,
    },
    {
      name: "GSAP",
      note: "Scroll-driven, timeline-based animation",
      tag: "Animation",
      Icon: SiGreensock,
    },
    {
      name: "Git",
      note: "Version control & collaboration",
      tag: "Tooling",
      Icon: FaGitAlt,
    },
  ];

  useGSAP(
    () => {
      const track = trackRef.current;
      const items = gsap.utils.toArray(".rail-item");
      const detail = detailRef.current;
      const tagEl = tagRef.current;
      const iconEl = iconRef.current;

      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (!isDesktop) return;

      const getDistance = () => {
        const lastItem = items[items.length - 1];

        if (!lastItem) return 0;

        const trackRect = track.getBoundingClientRect();
        const itemRect = lastItem.getBoundingClientRect();

        return (
          itemRect.left -
          trackRect.left +
          itemRect.width / 2 -
          window.innerWidth / 2
        );
      };

      const scrollTween = gsap.to(track, {
        x: () => -getDistance() - 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      const renderIcon = (skill) => {
        iconEl.innerHTML = "";
        const wrapper = document.createElement("div");
        wrapper.style.fontSize = "28px";
        wrapper.style.color = "var(--text-primary)";
        iconEl.appendChild(wrapper);
        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(wrapper);
          root.render(<skill.Icon />);
        });
      };

      const updateFocus = () => {
        const centerX = window.innerWidth / 2;
        let active = items[0];
        let minDist = Infinity;

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const dist = Math.abs(itemCenter - centerX);

          const focus = gsap.utils.clamp(0, 1, 1 - dist / 260);
          gsap.set(item, {
            opacity: gsap.utils.interpolate(0.25, 1, focus),
            scale: gsap.utils.interpolate(0.85, 1, focus),
          });

          if (dist < minDist) {
            minDist = dist;
            active = item;
          }
        });

        const activeName = active.dataset.name;
        if (detail.dataset.current !== activeName) {
          detail.dataset.current = activeName;
          const match = skills.find((s) => s.name === activeName);

          const tl = gsap.timeline();
          tl.to([detail, tagEl, iconEl], { autoAlpha: 0, y: 6, duration: 0.15 })
            .call(() => {
              detail.textContent = match.note;
              tagEl.textContent = match.tag;
              renderIcon(match);
            })
            .to([detail, tagEl, iconEl], {
              autoAlpha: 1,
              y: 0,
              duration: 0.25,
            });
        }
      };

      scrollTween.eventCallback("onUpdate", updateFocus);
      ScrollTrigger.addEventListener("refresh", updateFocus);
      updateFocus();
    },
    { scope: sectionRef },
  );

  const wave1 = useRef(null);
  const wave2 = useRef(null);

  useEffect(() => {
    [wave1, wave2].forEach((ref, i) => {
      const wave = ref.current;
      const length = wave.getTotalLength();

      gsap.set(wave, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline();

      tl.to(wave, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });

      gsap.to(wave, {
        y: 15,
        duration: 8 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <main className="relative bg-bg-primary">
      {/* skills */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        <div ref={pinRef} className="relative h-screen overflow-hidden">
          {/* waves */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="waveGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              ref={wave1}
              d="M0,520 C250,300 450,700 700,480 S1150,300 1440,500"
              fill="none"
              stroke="var(--wave-color)"
              strokeWidth="2"
              opacity="0.95"
              filter="url(#waveGlow)"
            />

            <path
              ref={wave2}
              d="M0,420 C180,650 480,300 760,420 S1180,680 1440,380"
              fill="none"
              stroke="var(--wave-color)"
              strokeWidth="2"
              opacity="0.4"
              filter="url(#waveGlow)"
            />
          </svg>

          <div className="absolute inset-0 z-0 grid-overlay" />

          <div className="relative z-20 flex h-full flex-col justify-center px-5 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.7em] text-text-muted">
                  stellar stack
                </p>

                <h1 className="relative bg-gradient-accent bg-clip-text font-garamond text-[clamp(4rem,14vw,8rem)] leading-none   dark:drop-shadow-[0_0_25px_rgba(255,170,200,0.25)] dark:[text-shadow:0_0_30px_rgba(255,170,200,0.35)]">
                  skills
                  <span className="absolute -top-2 right-0 font-snell text-3xl text-accent-sky">
                    ✦
                  </span>
                  <div className="mt-6 h-px w-40 bg-gradient-accent opacity-70" />
                </h1>
              </div>

              <div className="mt-8 flex justify-start sm:mt-10">
                <ThemeSwitch />
              </div>

              <div className="relative mt-16 flex flex-col justify-center sm:mt-20">
                <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-accent-pink/40" />

                {/* Desktop */}
                <div className="hidden md:block">
                  <div className="overflow-hidden">
                    <div
                      ref={trackRef}
                      className="flex items-center gap-16 pl-[50vw] will-change-transform lg:gap-24"
                    >
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          data-name={skill.name}
                          className="rail-item shrink-0 whitespace-nowrap font-garamond text-[clamp(3rem,8vw,6rem)] text-text-primary"
                        >
                          {skill.name}
                        </div>
                      ))}

                      <div className="w-[50vw] shrink-0" />
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col items-center gap-3">
                    <div
                      ref={iconRef}
                      className="flex h-8 items-center justify-center"
                    />

                    <p
                      ref={tagRef}
                      className="text-[10px] uppercase tracking-[0.3em] text-accent-pink"
                    >
                      Frontend
                    </p>

                    <p
                      ref={detailRef}
                      data-current=""
                      className="max-w-md text-center text-base tracking-wide text-text-muted"
                    >
                      Component architecture, hooks, state management
                    </p>
                  </div>

                  <p className="mt-8 text-center text-[10px] uppercase tracking-[0.4em] text-text-muted">
                    scroll
                  </p>
                </div>

                {/* Mobile */}
                <div className="flex flex-wrap justify-center gap-3 md:hidden">
                  {skills.map(({ name }) => (
                    <button
                      key={name}
                      className="rounded-full border border-border-dark bg-bg-white/5 px-5 py-3 text-sm tracking-wide text-text-primary backdrop-blur-md transition-all duration-300 hover:border-accent-pink hover:bg-accent-pink hover:text-white"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurrentFocus />
    </main>
  );
};

export default Skills;
