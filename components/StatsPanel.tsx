'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    target: 4,
    suffix: 'M+',
    label: 'Views Generated',
    description:
      'Campaign reach across social posts, community drops, and launch surfaces. Actual reach varies by product and audience.',
  },
  {
    target: 5,
    suffix: 'k+',
    label: 'Users Acquired',
    description:
      'Installs, signups, waitlist joins, or tester actions depending on the product funnel.',
  },
  {
    target: 300,
    suffix: '+',
    label: 'Early Adopters',
    description:
      'A growing tester network of people who like trying new B2C products before they launch.',
  },
];

function useCountUp(target: number, hasStarted: boolean, duration = 1300) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [target, hasStarted, duration]);

  return value;
}

function StatCard({
  stat,
  index,
  hasStarted,
}: {
  stat: (typeof stats)[number];
  index: number;
  hasStarted: boolean;
}) {
  const value = useCountUp(stat.target, hasStarted);

  return (
    <div className="group relative min-h-[245px] border-b border-line p-7 transition duration-300 hover:bg-white/[0.045] md:border-b-0 md:border-r md:last:border-r-0">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs text-slate-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-2 w-2 rounded-full bg-accent/70 shadow-[0_0_18px_rgba(59,130,246,0.8)]" />
      </div>

      <div className="text-5xl font-black tracking-tight text-white sm:text-6xl">
        {value}
        {stat.suffix}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{stat.label}</h3>

      <p className="mt-4 text-sm leading-6 text-slate-400">{stat.description}</p>

      <div className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
    </div>
  );
}

export function StatsPanel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-5 py-20 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Traction snapshot
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for focused early traction.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            Seedlift focuses on reach, user actions, tester feedback, and the patterns that tell you where to push next.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white/[0.035] shadow-card backdrop-blur md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} hasStarted={hasStarted} />
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Results depend on product category, onboarding friction, target user, and offer quality.
        </p>
      </div>
    </section>
  );
}
