const stats = [
  {
    value: '100K+',
    label: 'Views Generated',
    description:
      'Expected campaign reach across social posts, community drops, and launch surfaces. Actual reach varies by product and audience.',
  },
  {
    value: '100+',
    label: 'Users Acquired',
    description:
      'Targeted installs, signups, waitlist joins, or tester actions depending on your product funnel.',
  },
  {
    value: '200+',
    label: 'Early Adopters',
    description:
      'A growing tester network of people who like trying new B2C products before they launch.',
  },
  {
    value: '15+',
    label: 'Channels & Communities',
    description:
      'TikTok, Instagram, YouTube, Reddit, Discord, Product Hunt, X/Twitter, niche groups, and more.',
  },
];

export function StatsPanel() {
  return (
    <section className="relative overflow-hidden px-5 py-20 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Traction snapshot
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for focused early traction, not vanity growth.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            Seedlift is designed around measurable sprint outputs: reach, real user actions,
            tester feedback, and channel-level reporting.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white/[0.035] shadow-card backdrop-blur md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative min-h-[245px] border-b border-line p-7 transition duration-300 hover:bg-white/[0.045] md:border-r lg:border-b-0"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent/70 shadow-[0_0_18px_rgba(59,130,246,0.8)]" />
              </div>

              <div className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                {stat.value}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {stat.label}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {stat.description}
              </p>

              <div className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Numbers are realistic sprint targets and network indicators, not guaranteed outcomes.
          Final results depend on product category, onboarding friction, target user, and offer quality.
        </p>
      </div>
    </section>
  );
}
