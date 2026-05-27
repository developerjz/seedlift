const items = [
 '200+ vetted early adopters',
 '14-day sprint delivery',
 'B2C apps across 10+ categories',
 'Community seeding, not paid bot traffic',
 'Feedback report included',
];

export function SocialProofBar() {
 return (
  <section className="relative overflow-hidden border-b border-line bg-panel/40 py-4">
   <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
   <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
   <div className="marquee-track flex w-max gap-4 whitespace-nowrap">
    {[...items, ...items].map((item, index) => (
     <div key={`${item}-${index}`} className="inline-flex items-center gap-4 rounded-full border border-line bg-white/[0.035] px-5 py-3 text-sm text-slate-300">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {item}
     </div>
    ))}
   </div>
  </section>
 );
}
