const CurrentFocus = () => {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-24 sm:py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.6em] text-text-muted">
            currently
          </p>

          <h2 className="mt-6 font-garamond text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05] capitalize">
            building thoughtful
            <br className="hidden sm:block" />
            digital experiences.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 gap-x-12 md:mt-20 md:grid-cols-2 xl:grid-cols-4 capitalize">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              building
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              interactive experiences
              <br />
              with modern technologies
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              learning
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              backend systems,
              <br />
              data structures & logics
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              exploring
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              motion ✦ pixels
              <br />
              and tiny details
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              status
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              open to opportunities
              <br />
              and creative collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
