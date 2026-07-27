import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { FaReact, FaJs, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiGreensock } from "react-icons/si";
import ThemeSwitch from "../context/ThemeSwitch";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const detailRef = useRef(null);
  const tagRef = useRef(null);
  const iconRef = useRef(null);
  const waveRef = useRef(null);

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

      const wave = waveRef.current;
      const length = wave.getTotalLength();

      gsap.set(wave, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(
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
          trigger: pinRef.current,
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

  return (
    <main className="relative bg-bg-primary">
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
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
      <section
        ref={sectionRef}
        className="skills-section relative overflow-hidden"
      >
        <div
          ref={pinRef}
          className="relative z-20 h-screen flex flex-col justify-center px-6 sm:px-10"
        >
          <div>
            <p className="tracking-[0.7em] uppercase text-xs text-text-muted mb-4">
              stellar stack
            </p>

            <h1 className="relative font-garamond text-7xl sm:text-9xl leading-none bg-gradient-accent bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,170,200,0.25)]">
              skills
              <span className="absolute -top-2 right-0 text-3xl font-snell text-accent-pink">
                ✦
              </span>
              <div className="mt-6 h-px w-40 bg-gradient-accent opacity-70"></div>
            </h1>
          </div>

          <ThemeSwitch className="absolute top-[1rem] left-[2rem]" />

          <div className="relative mt-16 sm:mt-20 flex flex-col justify-center">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-pink/40 -translate-x-1/2" />

            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex items-center gap-16 sm:gap-24 will-change-transform pl-[50vw]"
              >
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    data-name={skill.name}
                    className="rail-item shrink-0 font-garamond text-6xl sm:text-8xl text-text-primary whitespace-nowrap"
                  >
                    {skill.name}
                  </div>
                ))}
                <div className="shrink-0 w-[50vw]" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <div
                ref={iconRef}
                className="h-8 flex items-center justify-center"
              />
              <p
                ref={tagRef}
                className="uppercase tracking-[0.3em] text-[10px] text-accent-pink"
              >
                Frontend
              </p>
              <p
                ref={detailRef}
                data-current=""
                className="text-sm sm:text-base text-text-muted tracking-wide max-w-md text-center"
              >
                Component architecture, hooks, state management
              </p>
            </div>

            <p className="mt-8 text-center uppercase tracking-[0.4em] text-[10px] text-text-muted">
              scroll
            </p>
          </div>
        </div>

        <div className="mt-16 relative z-20 max-w-5xl px-6 sm:px-10">
          <p className="uppercase tracking-[0.6em] text-xs text-text-muted">
            currently
          </p>

          <h2 className="mt-6 font-garamond text-5xl sm:text-7xl leading-tight">
            building thoughtful
            <br />
            digital experiences.
          </h2>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-sm tracking-wide">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-text-muted">
                creating
              </p>
              <p className="mt-3">
                full-stack applications
                <br />
                with clean architecture
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-text-muted">
                exploring
              </p>
              <p className="mt-3">
                better systems,
                <br />
                animations & design
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-text-muted">
                beyond code
              </p>
              <p className="mt-3">
                curiosity ✦ creativity
                <br />
                continuous growth
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.5em] text-xs text-text-muted">
                full-stack developer in evolution
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
