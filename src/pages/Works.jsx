import imageOne from "../assets/images/maison-lune-shots/imageOne.png";
import imageTwo from "../assets/images/maison-lune-shots/imageTwo.png";
import imageThree from "../assets/images/maison-lune-shots/imageThree.png";

import medioraFront from "../assets/images/mediora-shots/mediora_front.png"
import loginPage from "../assets/images/mediora-shots/login_page.png"
import chatExchange from "../assets/images/mediora-shots/chat_exchange.png"

const Works = () => {
  const works = [
    {
      title: "Maison Lune",
      category: "Frontend Experience",
      images: [imageOne, imageTwo, imageThree],
      description:
        "A luxury fashion interface focused on visual storytelling, smooth motion, and responsive design.",
      live: "https://maison-lune-chi.vercel.app/",
      github: "https://github.com/deeflowdev/maison-lune",
    },

    {
      title: "Mediora",
      category: "GenAI Medical Assistant Interface",
      images: [medioraFront, loginPage, chatExchange],
      description:
        "A conversational UI created for a GenAI-powered medical workflow.",
      live: "https://mediora-chat-ui.vercel.app/",
      github: "https://github.com/deeflowdev/mediora-chat-ui",
    },
  ];

  return (
    <section className="relative bg-bg-primary py-24 px-6">
      <div className="absolute inset-0 z-5 grid-overlay" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.6em] text-sm text-text-secondary">
          selected works
        </p>

        <h1 className="font-garamond text-6xl sm:text-8xl mt-4">works</h1>

        <div className="mt-20 space-y-20">
          {works.map((work) => (
            <div
              key={work.title}
              className="
          group
          grid
          lg:grid-cols-[1.3fr_1fr]
          gap-10
          items-center
          "
            >
              {/* image gallery */}

              <div
                className="
            relative
            rounded-[2rem]
            overflow-hidden
            bg-bg-card
            border border-border-light
            p-3
            "
              >
                <div className="grid grid-cols-2 gap-3">
                  {work.images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${work.title} preview ${index + 1}`}
                      className={`
                  object-cover
                  rounded-[1.5rem]
                  transition-all
                  duration-700
                  group-hover:scale-[1.03]

                  ${index === 0 ? "col-span-2 h-[22rem]" : "h-32 sm:h-40"}
                  `}
                    />
                  ))}
                </div>
              </div>

              {/* text */}

              <div className="lg:pl-8">
                <p
                  className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-highlight-pink
            "
                >
                  {work.category}
                </p>

                <h2
                  className="
            font-garamond
            text-5xl
            sm:text-6xl
            mt-4
            "
                >
                  {work.title}
                </h2>

                <p
                  className="
            mt-6
            leading-relaxed
            tracking-wide
            text-text-secondary
            "
                >
                  {work.description}
                </p>

                <div
                  className="
            mt-8
            flex
            gap-8
            uppercase
            tracking-[0.25em]
            text-xs
            "
                >
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                text-highlight-pink
                hover:underline
                "
                  >
                    live ↗
                  </a>

                  <a
                    href={work.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                hover:text-highlight-pink
                transition-colors
                "
                  >
                    github ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
