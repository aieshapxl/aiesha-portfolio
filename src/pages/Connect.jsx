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
      <div className="absolute inset-0 z-5 grid-overlay" />
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.6em] text-sm text-text-secondary">
            let's connect
          </p>

          <h1 className="font-garamond text-6xl sm:text-8xl mt-6">
            build something
            <br />
            meaningful
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-sm sm:text-base tracking-wide leading-relaxed">
            currently looking for opportunities where i can create thoughtful
            digital experiences and grow as a full-stack developer.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
              uppercase
              tracking-[0.3em]
              text-sm
              border-b
              border-border-dark
              pb-2
              hover:text-highlight-pink
              transition-colors
              "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Connect;
