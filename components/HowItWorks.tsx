import { SectionHeader } from '@/components/SectionHeader';

const steps = [
 {
  number: '01',
  eyebrow: 'Intake',
  title: 'Map the target user and conversion action.',
  body: 'You send the app link, target user, positioning, constraints, and what counts as a qualified install, signup, or waitlist join.',
 },
 {
  number: '02',
  eyebrow: 'Seeding',
  title: 'Build the community distribution plan.',
  body: 'We identify relevant communities, tailor the angle for each channel, and avoid the spammy “try my app” posts that get ignored.',
 },
 {
  number: '03',
  eyebrow: 'Recruiting',
  title: 'Manually bring real people into the product.',
  body: 'We seed, DM, recruit, and route testers through your funnel while tracking which channels produce real user actions.',
 },
 {
  number: '04',
  eyebrow: 'Reporting',
  title: 'Package the signal into a founder-ready report.',
  body: 'You receive the channel breakdown, tester feedback themes, strongest user segments, and the most obvious next distribution move.',
 },
];

export function HowItWorks() {
 return (
  <section id="process" className="relative overflow-hidden bg-panel/45 px-5 py-24 lg:px-8">
   <div className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
   <div className="absolute inset-0 grid-fade opacity-40" />
   <div className="relative mx-auto max-w-7xl">
    <SectionHeader
     eyebrow="Our process"
     title="A repeatable sprint for the messy part founders usually avoid."
     description="The work is manual, but the system is structured: define the target, seed the right surfaces, recruit real testers, and translate the response into clear next steps."
    />

    <div className="mt-16 grid gap-6 lg:grid-cols-[0.42fr_1fr] lg:gap-12">
     <div className="rounded-[2rem] border border-line bg-ink/70 p-7 shadow-card lg:sticky lg:top-28 lg:h-fit">
      <p className="text-xs font-semibold uppercase tracking-[0.42em] text-accent">14-day sprint</p>
      <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">From silent launch to first-user signal.</h3>
      <p className="mt-5 leading-7 text-slate-400">
       We manually find early users, track where they came from, and summarize what they said after trying your product.
      </p>
     </div>

     <div className="relative space-y-5">
      <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-accent via-line to-transparent md:block" />
      {steps.map((step) => (
       <div key={step.number} className="relative grid gap-5 rounded-[2rem] border border-line bg-ink/80 p-6 shadow-card backdrop-blur md:grid-cols-[4rem_1fr] md:p-7">
        <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-blue-300/25 bg-accentSoft text-sm font-semibold tracking-[0.25em] text-blue-200">
         {step.number}
        </div>
        <div>
         <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-500">{step.eyebrow}</p>
         <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
         <p className="mt-4 leading-7 text-slate-400">{step.body}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}
