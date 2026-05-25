import { ButtonLink } from '@/components/ButtonLink';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/lib/site';

const testerNotes = [
  'Try vetted apps before they launch',
  'Share short written feedback with founders',
  'Get matched by interests, country, and device',
];

export function TesterSignup() {
  return (
    <section id="become-a-tester" className="relative overflow-hidden bg-panel px-5 py-24 lg:px-8">
      <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-success/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <SectionHeader
          eyebrow="For early adopters"
          title="Love trying new apps before anyone else?"
          description="Join the Seedlift tester network and get early access to promising B2C products launching soon. No spam, no junk surveys — just new apps that need real feedback."
        />

        <div className="rounded-[2rem] border border-line bg-ink/80 p-7 shadow-card sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Tester network</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Get matched with apps to test.</h3>
          <div className="mt-7 space-y-3">
            {testerNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
                {note}
              </div>
            ))}
          </div>
          <ButtonLink href={site.testerSignupLink} variant="primary" className="mt-8 w-full">
            Join as a Beta Tester
          </ButtonLink>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            You’ll be taken to a short Typeform signup form. It takes less than two minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
