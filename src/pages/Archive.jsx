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
      title: "GenAI Medical Report Assistant",
      type: "Internship Project — TATA Steel / SNTI",
      stack: "HTML • CSS • JavaScript • Python API • GenAI",
      description:
        "A chat-style medical report assistant interface built during internship, connecting an interactive frontend experience with a Python backend API.",
    },

    {
      title: "Real Time Sign Language Translation",
      type: "Academic Research Project",
      stack: "Computer Vision • YOLO Models • Deep Learning",
      description:
        "Explored real-time sign language translation concepts through research, documentation, model analysis, and technical presentations focused on YOLO-based object detection approaches.",
    },

    {
      title: "Employee Management System",
      type: "Frontend Application",
      stack: "React • JavaScript • Tailwind CSS",
      description:
        "A responsive employee management interface built with reusable React components and modern UI practices.",
    },
  ];

  const experience = [
    {
      year: "2026",
      role: "Software Developer Intern",
      company: "TATA Steel / SNTI",
      description:
        "Worked on a GenAI medical report assistant project, building frontend interfaces and integrating backend services.",
    },
  ];

  return (
    <main className="relative bg-bg-primary py-20 px-6">
      <div className="absolute inset-0 z-5 grid-overlay" />
      <section className="relative z-10">
        <p className="uppercase tracking-[0.6em] text-sm">archive</p>

        <h1 className="font-garamond text-6xl sm:text-8xl">selected works</h1>

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
          <h2 className="font-garamond text-5xl">experience</h2>

          <div className="mt-10 space-y-8">
            {experience.map((item) => (
              <div
                key={item.role}
                className="
              border-l
              border-border-dark
              pl-6
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
