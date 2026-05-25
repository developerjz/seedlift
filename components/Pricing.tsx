import { Check } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/lib/site';

const included = [
  'First 100 Users Package',
  '14-day acquisition sprint',
  'Community seeding across 15+ relevant channels',
  'Access to curated early adopter network',
  'Channel-by-channel acquisition breakdown',
  'Qualitative tester feedback summary',
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-y border-line bg-ink px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-radial-blue opacity-70" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pricing"
          title="One package. One sprint. No growth retainer required."
          description="Early distribution should be measurable and affordable enough to try before you hire growth, spend on ads, or become a full-time community manager yourself."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-2xl rounded-[2rem] border border-blue-400/30 bg-gradient-to-b from-blue-500/14 to-panel p-2 shadow-glow">
          <div className="rounded-[1.55rem] border border-white/10 bg-ink/92 p-8 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-accent">First sprint</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">First 100 Users Package</h3>
                <p className="mt-3 text-slate-400">A complete 14-day grassroots acquisition sprint.</p>
              </div>
              <span className="w-fit rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-emerald-300">Flat fee</span>
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="text-7xl font-semibold tracking-[-0.08em] text-white">$299</span>
              <span className="pb-3 text-slate-400">one-time</span>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href={site.stripePaymentLink} className="mt-9 w-full">
              Get Started — $299
            </ButtonLink>
            <div className="mt-5 rounded-2xl border border-line bg-white/5 p-4 text-sm leading-6 text-slate-400">
              Optional after the sprint: <span className="font-semibold text-white">$99/week ongoing community seeding</span> for founders who want the same channels kept warm.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
