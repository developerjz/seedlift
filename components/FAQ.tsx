import { SectionHeader } from '@/components/SectionHeader';

const faqs = [
 {
  question: 'What counts as a “real user”?',
  answer:
   'A real user is a human who matches the target profile we agree on and completes the core action for your sprint, usually an install, signup, waitlist join, account creation, or first product interaction.',
 },
 {
  question: 'What if you do not hit 100?',
  answer:
   'We keep working until we reach the agreed target, or we refund the gap proportionally. The goal is accountable acquisition, not vague awareness.',
 },
 {
  question: 'What types of apps do you work with?',
  answer:
   'We are best for B2C apps and consumer products in productivity, finance, health and fitness, social, gaming, education, creator tools, and lifestyle. We do not take products that rely on deceptive claims, spam, or unsafe user behavior.',
 },
 {
  question: 'How do you recruit testers?',
  answer:
   'We combine manual community seeding in relevant Reddit, Discord, X/Twitter, Product Hunt, and niche groups with outreach to our curated early adopter network. Every sprint is tailored to the product and target user.',
 },
 {
  question: 'What do I need to provide to get started?',
  answer:
   'You provide your app link, target user, positioning, any promo code or test instructions, and what counts as a qualified user. We handle the distribution plan, outreach, tracking, and feedback summary.',
 },
];

export function FAQ() {
 return (
  <section className="bg-ink px-5 py-24 lg:px-8">
   <div className="mx-auto max-w-4xl">
    <SectionHeader
     eyebrow="FAQ"
     title="The practical stuff founders ask before buying."
     align="center"
    />
    <div className="mt-12 divide-y divide-line rounded-[2rem] border border-line bg-panel/70">
     {faqs.map((faq) => (
      <details key={faq.question} className="group p-6 open:bg-white/[0.02] first:rounded-t-[2rem] last:rounded-b-[2rem]">
       <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-white">
        {faq.question}
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-line text-slate-400 transition group-open:rotate-45 group-open:text-white">+</span>
       </summary>
       <p className="mt-4 max-w-3xl leading-7 text-slate-400">{faq.answer}</p>
      </details>
     ))}
    </div>
   </div>
  </section>
 );
}
