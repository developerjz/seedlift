import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const services = [
  {
    number: '01',
    title: 'Community seeding',
    body: 'We package your app for the right subreddits, Discords, launch groups, niche communities, and founder-safe distribution surfaces.',
    tags: ['Reddit', 'Discord', 'Product Hunt'],
  },
  {
    number: '02',
    title: 'Early adopter recruitment',
    body: 'We route your product to people who like testing new consumer apps and match the user profile you define before the sprint starts.',
    tags: ['Testers', 'Outreach', 'Matching'],
  },
  {
    number: '03',
    title: 'Signal report',
    body: 'You get a channel breakdown and qualitative feedback summary so the sprint leaves you with learning, not just a temporary traffic spike.',
    tags: ['Feedback', 'Channels', 'Next steps'],
  },
];

const deliverables = [
  '100 real installs, signups, or waitlist joins from people who match the agreed target user',
  'Channel-by-channel acquisition breakdown so you know what actually worked',
  'Qualitative tester feedback summary grouped by recurring objections, praise, and feature requests',
];

export function WhatYouGet() {
  return (
    <section id="what-we-do" className="relative overflow-hidden border-b border-line bg-ink px-5 py-24 lg:px-8">
      <div className="absolute inset-0 noise opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="What we do"
          description="Seedlift is not a marketplace or a dashboard. It is a done-for-you acquisition sprint for founders who need real people in the product now."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.number} className="card-glow relative rounded-[2rem] border border-line bg-panel/80 p-7 shadow-card transition duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold tracking-[0.4em] text-accent">{service.number}</span>
                <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-white" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.body}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {deliverables.map((item) => (
            <div key={item} className="flex gap-4 rounded-2xl border border-line bg-white/[0.035] p-5">
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-accent" />
              <p className="text-base leading-7 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
