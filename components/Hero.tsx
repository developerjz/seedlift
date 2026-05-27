import { ArrowDownRight, CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { site } from '@/lib/site';

const proof = [
 { number: '01', value: '100', label: 'real users recruited', sublabel: 'per sprint goal' },
 { number: '02', value: '14', label: 'days to delivery', sublabel: 'flat timeline' },
 { number: '03', value: '15+', label: 'communities seeded', sublabel: 'matched to your ICP' },
];

const channels = ['TikTok', 'Instagram', 'YouTube', 'Reddit', 'Discord', 'Product Hunt', 'X/Twitter', 'Early adopter network'];

export function Hero() {
 return (
  <section id="top" className="relative overflow-hidden border-b border-line">
   <div className="absolute inset-0 grid-fade opacity-90" />
   <div className="absolute left-1/2 top-14 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
   <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-success/10 blur-3xl" />

   <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:pt-24 lg:px-8 lg:pb-24">
    <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-center">
     <div>
      <div className="reveal mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-300 shadow-card backdrop-blur">
       <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_18px_rgba(16,185,129,0.9)]" />
       Early user acquisition, engineered by humans
      </div>

      <p className="reveal reveal-delay-1 mb-4 text-xs font-semibold uppercase tracking-[0.55em] text-blue-300/90">
       First users lab
      </p>
      <h1 className="reveal reveal-delay-1 max-w-4xl text-6xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
       Acquisition, engineered.
      </h1>
      <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
       {site.name} recruits your first 100 real users through community seeding, targeted outreach, and a curated early-adopter network, then turns the results into a feedback report founders can act on.
      </p>

      <div className="reveal reveal-delay-2 mt-9 flex flex-col gap-4 sm:flex-row">
       <ButtonLink href={site.stripePaymentLink} className="w-full sm:w-auto">
        Get Your First 100 Users, $299
       </ButtonLink>
       <ButtonLink href={site.testerSignupLink} variant="secondary" className="w-full sm:w-auto">
        Join as a Beta Tester (Free)
       </ButtonLink>
      </div>

      <div className="reveal reveal-delay-2 mt-7 flex flex-wrap gap-3 text-sm text-slate-400">
       {channels.map((channel) => (
        <span key={channel} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-2">
         <CheckCircle2 className="h-4 w-4 text-accent" />
         {channel}
        </span>
       ))}
      </div>
     </div>

     <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-6 rounded-[3rem] bg-blue-500/10 blur-3xl" />
      <div className="float-slow relative rounded-[2rem] border border-white/10 bg-panel/70 p-5 shadow-card backdrop-blur-xl">
       <div className="mb-5 flex items-center justify-between rounded-2xl border border-line bg-ink/80 px-4 py-3">
        <div>
         <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Sprint monitor</p>
         <p className="mt-1 text-sm font-medium text-white">Founder-ready distribution plan</p>
        </div>
        <ArrowDownRight className="h-5 w-5 text-accent" />
       </div>

       <div className="space-y-3">
        {proof.map((item) => (
         <div key={item.number} className="group relative overflow-hidden rounded-2xl border border-line bg-white/[0.04] p-5 transition hover:border-blue-300/30 hover:bg-white/[0.07]">
          <div className="absolute left-0 top-0 h-full w-1 bg-accent/70 opacity-0 transition group-hover:opacity-100" />
          <div className="flex items-start justify-between gap-4">
           <span className="text-xs font-semibold tracking-[0.35em] text-blue-300">{item.number}</span>
           <span className="text-5xl font-semibold tracking-[-0.06em] text-white">{item.value}</span>
          </div>
          <p className="mt-3 text-base font-semibold text-white">{item.label}</p>
          <p className="mt-1 text-sm text-slate-400">{item.sublabel}</p>
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
