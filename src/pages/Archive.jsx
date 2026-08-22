import React from "react";

const Archive = () => {
  const projects = [
    {
      title: "Maison Lune",
      type: "Luxury Fashion E-commerce",
      stack: "React • Tailwind CSS",
      description:
        "An editorial-inspired fashion e-commerce platform focused on elegant interfaces, smooth animations, and responsive user experiences.",
    },

    {
      title: "Mimsy!",
      type: "Digital Photobooth",
      stack: "React • Vite • Tailwind CSS",
      description:
        "A whimsical digital photobooth experience featuring camera capture, custom filters, photo templates, and downloadable photostrips.",
    },

    {
      title: "Real Time Sign Language Translation",
      type: "Academic Research Project",
      stack: "Computer Vision • YOLO Models • Deep Learning",
      description:
        "Explored real-time sign language translation concepts through research, documentation, model analysis, and technical presentations focused on YOLO-based object detection approaches.",
    },

    {
      title: "Taskflow",
      type: "Task Management Application",
      stack: "HTML • CSS • Vanilla JavaScript",
      description:
        "A responsive task management application featuring dynamic DOM manipulation, task creation, editing, filtering, search, theme switching, and local storage.",
    },
  ];

  const experience = [
    {
      year: "2026",
      role: "IT vocational trainee",
      company: "tata steel ltd. / snti",
      description:
        "completed a vocational training programme in the it department at tata steel ltd., jamshedpur, from january to february 2026.",
    },
  ];

  return (
    <main className="relative bg-bg-primary py-20 px-6">
      <div className="absolute inset-0 z-5 grid-overlay" />
      <section className="relative z-10">
        <p className="uppercase tracking-[0.6em] text-sm">archive</p>

        <h1 className="font-garamond text-6xl sm:text-8xl">Selected Works</h1>

        {/* projects */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
            p-8
            rounded-3xl
            bg-bg-card
            border border-border-light
            transition-all
            hover:-translate-y-2
            "
            >
              <h2 className="font-garamond text-4xl">{project.title}</h2>

              <p className="mt-3 uppercase tracking-widest text-sm">
                {project.type}
              </p>

              <p className="mt-5 text-sm leading-relaxed">
                {project.description}
              </p>

              <p className="mt-5 text-highlight-pink">{project.stack}</p>
            </div>
          ))}
        </div>

        {/* experience */}
        <div className="mt-24">
          <h2 className="font-garamond text-5xl capitalize">experience</h2>

          <div className="mt-10 space-y-8">
            {experience.map((item) => (
              <div
                key={item.role}
                className="
              border-l
              border-border-dark
              pl-6 capitalize
              "
              >
                <p className="text-sm tracking-widest uppercase">{item.year}</p>

                <h3 className="font-garamond text-3xl mt-2">{item.role}</h3>

                <p className="text-highlight-pink">{item.company}</p>

                <p className="mt-3 text-sm max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Archive;
