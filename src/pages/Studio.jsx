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
            <p className="studio-eyebrow tracking-[0.7em] uppercase text-xs text-text-muted mb-4">
              the person behind the code
            </p>

            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 lg:top-8 lg:left-10 z-10">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-garamond mb-6 sm:mb-10 whitespace-nowrap">
                {title.map((word, index) => {
                  return (
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
                      className="inline-block mr-4 transition-all duration-300 hover:text-(--hover-color) hover:-translate-y-1"
                    >
                      {word}
                    </span>
                  );
                })}
              </h1>
            </div>

            <div className="hidden sm:block absolute top-6 right-6 lg:top-8 lg:right-10 z-10 sparkle">
              <h1 className="text-5xl font-snell mb-10 whitespace-normal lg:whitespace-nowrap font-light text-transparent bg-gradient-accent bg-clip-text drop-shadow-[0_0_18px_rgba(255,170,200,0.6)] opacity-70 sparkle-icon">
                ˚˖𐦍˖˚
              </h1>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col lg:flex-row pt-16 sm:pt-20 lg:pt-32">
            <div className="w-full lg:w-[40%] flex items-center justify-center relative py-10 sm:py-12 lg:py-0 max-w-md mx-auto lg:max-w-none">
              <Game />
            </div>

            <div className="studio-text w-full lg:w-[60%] px-5 py-10 sm:px-8 md:px-10 lg:p-12 flex flex-col justify-center">
              <div className="relative">
                <span className="font-snell text-4xl sm:text-5xl lg:text-6xl text-highlight-pink  lg:absolute lg:-left-10 lg:-top-18 capitalize block mb-6 lg:mb-0">
                  hello!
                </span>
              </div>

              {/* paragraphs */}

              <div className="space-y-6 max-w-2xl capitalize">
                <p className="text-sm sm:text-base lg:text-sm lg:tracking-widest tracking-wide leading-relaxed max-w-2xl">
                  i'm aiesha ganguly — a{" "}
                  <span className="text-highlight-pink font-bold">
                    full-stack developer
                  </span>{" "}
                  who brings ideas to life through{" "}
                  <span className="text-highlight-sage font-bold">code</span>,
                  creativity, and{" "}
                  <span className="text-highlight-sky font-bold">
                    interactive digital experiences
                  </span>
                  . i create modern web applications that combine clean
                  development with thoughtful design, smooth animations, and
                  intuitive user experiences.
                </p>

                <p className="text-sm lg:tracking-widest tracking-wide leading-relaxed ml-0 lg:ml-12 max-w-xl">
                  my journey started with{" "}
                  <span className="text-highlight-lavender font-bold">
                    curiosity
                  </span>{" "}
                  about how{" "}
                  <span className="text-highlight-butter font-bold">
                    digital products
                  </span>{" "}
                  are built and how ideas transform into real experiences on the
                  web. with a background in computer applications, i enjoy
                  turning concepts into{" "}
                  <span className="text-highlight-pink font-bold">
                    responsive interfaces
                  </span>
                  .
                </p>

                <p className="text-sm lg:tracking-widest tracking-wide leading-relaxed ml-0 lg:ml-6 max-w-2xl">
                  i work with modern web technologies like{" "}
                  <span className="text-highlight-sky font-bold">
                    javascript, react, node.js
                  </span>
                  , express, and databases to build{" "}
                  <span className="text-highlight-sage font-bold">
                    scalable full-stack applications
                  </span>
                  . i believe great development is a balance between logic,
                  creativity, and attention to detail.
                </p>

                <p className="text-sm lg:tracking-widest tracking-wide leading-relaxed">
                  currently, i'm focused on{" "}
                  <span className="text-highlight-terracotta font-bold">
                    improving my craft
                  </span>
                  , building{" "}
                  <span className="text-highlight-pink font-bold">
                    meaningful projects
                  </span>
                  , and continuously exploring new technologies.
                </p>
              </div>

              {/* resume link */}
              <a
                href="/Aiesha_Ganguly_Resume.pdf"
                download
                className="mt-6 lg:mt-10 group cursor-pointer block"
              >
                <p className="text-sm lg:tracking-widest tracking-wide flex items-center gap-3 justify-center lg:justify-end">
                  <span className="text-highlight-pink">ˋ°•*⁀➷</span>

                  <span className="relative text-link-colour hover:text-link-hover uppercase">
                    download my resume
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                  </span>
                </p>
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
