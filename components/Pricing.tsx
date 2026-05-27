import { ArrowRight, Check } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/lib/site';

const included = [
 '100 real installs, signups, waitlist joins, or tester actions',
 '14-day acquisition sprint',
 'Seeding across TikTok, Instagram, YouTube, Reddit, Discord, Product Hunt, X/Twitter, and niche communities',
 'Access to Seedlift’s early adopter network',
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
     title="Start with one focused sprint."
     description="Get early users into the product, see where they came from, and learn what they say after trying it."
     align="center"
    />

    <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
     <div className="rounded-[2rem] border border-blue-400/30 bg-gradient-to-b from-blue-500/14 to-panel p-2 shadow-glow">
      <div className="h-full rounded-[1.55rem] border border-white/10 bg-ink/92 p-8 sm:p-10">
       <div>
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-accent">
         First sprint
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
         First 100 Users Package
        </h3>
        <p className="mt-3 text-slate-400">
         A 14-day push for founders who need real people trying the product, not another empty launch.
        </p>
       </div>

       <div className="mt-8 flex items-end gap-2">
        <span className="text-7xl font-semibold tracking-[-0.08em] text-white">
         $299
        </span>
        <span className="pb-3 text-slate-400">
         one-time
        </span>
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
        Get Started, $299
       </ButtonLink>

       <p className="mt-4 text-sm leading-6 text-slate-400">
        After checkout, you’ll fill out a short intake with your app link, target user,
        tester requirements, and launch goals.
       </p>

       <p className="mt-3 text-xs leading-5 text-slate-500">
        If the product is not a fit for this sprint, we’ll refund you before starting.
       </p>
      </div>
     </div>

     <div className="rounded-[2rem] border border-line bg-white/[0.035] p-8 shadow-card sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500">
       Larger campaign
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
       Need more than 100 users?
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-400">
       Some launches need a bigger push, more specific sourcing, or help around a launch date.
       Send the basics and we’ll scope the right sprint.
      </p>

      <div className="mt-7 space-y-4">
       {[
        '250+ user targets',
        'Launch-week support',
        'Category-specific tester sourcing',
        'UGC or micro-creator testing when it fits',
        'Ongoing community seeding',
       ].map((item) => (
        <div key={item} className="flex gap-3 text-sm text-slate-300">
         <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
         <span>{item}</span>
        </div>
       ))}
      </div>

      <a
       href={site.customSprintLink}
       className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-accent/10"
      >
       Request a custom sprint
       <ArrowRight className="h-4 w-4" />
      </a>

      <p className="mt-4 text-xs leading-5 text-slate-500">
       Best for founders who need more volume, tighter targeting, or launch support beyond the starter sprint.
      </p>
     </div>
    </div>

    <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-line bg-white/[0.03] px-5 py-4 text-sm leading-6 text-slate-400">
     Optional after the sprint:{' '}
     <span className="font-semibold text-white">$99/week ongoing community seeding</span>{' '}
     for founders who want us to keep testing channels active.
    </div>
   </div>
  </section>
 );
}
