import React from "react";

const Connect = () => {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/aieshapxl",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aiesha-ganguly/",
    },
    {
      name: "Email",
      href: "mailto:aieshaganguly@gmail.com",
    },
  ];

  return (
    <main className="relative bg-bg-primary">
      <div className="absolute inset-0 grid-overlay" />

      <section className="relative z-10 overflow-hidden px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.6em] text-text-secondary">
            let's connect
          </p>

          <h1 className="mt-6 font-garamond text-6xl sm:text-8xl leading-none capitalize">
            build something
            <br />
            meaningful
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm sm:text-base tracking-wide leading-relaxed text-text-secondary">
            Currently looking for opportunities where i can build thoughtful
            digital experiences, collaborate with great teams, and continue
            growing as a Full-Stack Developer.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="/Aiesha_Ganguly_Resume.pdf"
              download
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-accent-pink/30
                bg-accent-pink/10
                px-7
                py-3
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-text-primary
                transition-all
                duration-300
                hover:border-accent-pink
                hover:bg-accent-pink
                hover:text-bg-primary
              "
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>

              <span>download resume</span>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  relative
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-text-secondary
                  transition-colors
                  duration-300
                  hover:text-highlight-pink
                "
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Connect;
