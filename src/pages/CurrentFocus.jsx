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

          <h2 className="mt-6 font-garamond text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05]">
            building thoughtful
            <br className="hidden sm:block" />
            digital experiences.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 gap-x-12 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              creating
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              full-stack applications
              <br />
              with clean architecture
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              exploring
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              better systems,
              <br />
              animations & design
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              beyond code
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              curiosity ✦ creativity
              <br />
              continuous growth
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">
              journey
            </p>

            <p className="mt-4 leading-7 text-text-primary">
              full-stack developer
              <br />
              in evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
