import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Game from "../components/Game";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);

const Studio = () => {

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const sectionTrigger = gsap.context(() => {
      gsap.from('.studio-card', {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      })

      gsap.from('.studio-text', {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: "play none none reverse"
        }
      })

      gsap.from(".studio-eyebrow, .studio-underline", {
        opacity: 0,
        y: 10,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

    }, sectionRef)

    return () => sectionTrigger.revert()
  }, [])

  const [hoverColours, setHoverColours] = useState({});

  const colours = [
    "var(--accent-pink)",
    "var(--accent-sage)",
    "var(--accent-sky)",
    "var(--accent-lavender)",
    "var(--accent-butter)",
    "var(--accent-terracotta)",

    "var(--highlight-pink)",
    "var(--highlight-sage)",
    "var(--highlight-sky)",
    "var(--highlight-lavender)",
    "var(--highlight-butter)",
    "var(--highlight-terracotta)",
  ];

  const title = "⊹˖. About Me".split(" ");

  return (
    <main className="relative bg-bg-primary">
      <div
        className="
absolute
left-1/2
-bottom-32
-translate-x-1/2

w-[90vw]
max-w-[90rem]

h-[18rem]
sm:h-[22rem]
lg:h-[28rem]

rounded-[50%]
bg-gradient-accent
blur-[140px]
opacity-30
pointer-events-none
"
      />
      <div className="absolute inset-0 grid-overlay" />
      <section
        ref={sectionRef}
        className="px-4 sm:px-8 lg:px-0 overflow-hidden"
      >
        <div className="studio-card relative overflow-hidden pb-8 sm:pb-12 lg:pb-16">
          {/* heading */}
          <div className="relative px-1 sm:px-2 lg:px-10">
            {/* <p className="studio-eyebrow tracking-[0.7em] uppercase text-xs text-text-muted mb-4">
              human. curious. occasionally caffeinated.
            </p> */}

            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 lg:top-8 lg:left-10 z-10">
              <div className="inline-block">
                <h1 className="font-garamond text-4xl sm:text-6xl lg:text-7xl whitespace-nowrap cursor-pointer leading-none">
                  {title.map((word, index) => (
                    <span
                      key={index}
                      style={{
                        "--hover-color": hoverColours[index],
                      }}
                      onMouseEnter={() =>
                        setHoverColours((prev) => ({
                          ...prev,
                          [index]:
                            colours[Math.floor(Math.random() * colours.length)],
                        }))
                      }
                      className="mr-4 inline-block transition-all duration-300 hover:-translate-y-2 hover:text-(--hover-color)"
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                <p className="mt-3 ml-1 font-satoshi text-[10px] uppercase tracking-[0.35em] text-text-muted">
                  hover to reveal colors ✦
                </p>
              </div>
            </div>

            <div className="hidden sm:block absolute top-6 right-6 lg:top-8 lg:right-10 z-10 sparkle">
              <h1 className="text-5xl font-snell mb-10 whitespace-normal lg:whitespace-nowrap font-light text-transparent bg-gradient-accent bg-clip-text drop-shadow-[0_0_18px_rgba(255,170,200,0.6)] opacity-70 sparkle-icon">
                ❋
              </h1>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col lg:flex-row pt-16 sm:pt-20 lg:pt-32">
            <div className="w-full lg:w-[40%] flex items-center justify-center relative py-10 sm:py-12 lg:py-0 max-w-md mx-auto lg:max-w-none">
              <Game />
            </div>

            <div className="studio-text w-full lg:w-[60%] px-5 py-10 sm:px-8 md:px-10 lg:p-12 flex flex-col justify-center">
              {/* <div className="relative">
                <span className="font-snell text-4xl sm:text-5xl lg:text-6xl text-highlight-pink  lg:absolute lg:-left-10 lg:-top-18 capitalize block mb-6 lg:mb-0">
                  hello!
                </span>
              </div> */}

              {/* paragraphs */}

              <div className="space-y-6 max-w-2xl capitalize">
                <p className="text-sm sm:text-base lg:text-sm lg:tracking-widest tracking-wide leading-relaxed max-w-2xl">
                  welcome to my portfolio. i am a{" "}
                  <span className="text-highlight-pink font-bold">
                    web developer
                  </span>{" "}
                  passionate about creating modern digital experiences that
                  combine thoughtful design with clean functionality. through
                  continuous learning and hands-on projects, i explore the
                  intersection of{" "}
                  <span className="text-highlight-sage font-bold">
                    creativity and technology
                  </span>{" "}
                  to build solutions that are engaging, intuitive, and
                  meaningful.
                </p>

                <p className="text-sm lg:tracking-widest tracking-wide leading-relaxed ml-0 lg:ml-12 max-w-xl">
                  with a focus on{" "}
                  <span className="text-highlight-lavender font-bold">
                    modern web development
                  </span>{" "}
                  and interactive interfaces, i enjoy transforming ideas into
                  experiences that feel seamless and purposeful. every project
                  is an opportunity to experiment, learn, and create something
                  valuable.
                </p>

                <p className="text-sm lg:tracking-widest tracking-wide leading-relaxed ml-0 lg:ml-6 max-w-2xl">
                  combining{" "}
                  <span className="text-highlight-sky font-bold">
                    design, development, and animation
                  </span>{" "}
                  to craft digital experiences that are not only visually
                  engaging but also functional and user-focused. attention is
                  given to both the bigger picture and the smallest details.
                </p>

                <p className="text-sm lg:tracking-widest tracking-wide leading-relaxed">
                  this portfolio showcases my journey, experiments, and the
                  approach i bring to every project — a balance of{" "}
                  <span className="text-highlight-pink font-bold">
                    creativity, precision, and continuous growth
                  </span>
                  .
                </p>
              </div>

              {/* resume link */}
              <a
                href="/Aiesha_Ganguly_Resume.pdf"
                download
                className="group mt-6 lg:mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-link-colour transition-colors duration-300 hover:text-link-hover"
              >
                <span className="text-highlight-pink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>

                <span className="relative">
                  download my resume
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </main>
  );
};

export default Studio;
