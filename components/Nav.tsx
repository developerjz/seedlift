import { ButtonLink } from '@/components/ButtonLink';
import { site } from '@/lib/site';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/65 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-blue-300/20 bg-accent text-sm font-black text-white shadow-glow">
            <span className="absolute inset-0 scanline" />
            <span className="relative">S</span>
          </span>
          <span className="text-lg font-semibold tracking-tight text-white transition group-hover:text-blue-100">{site.name}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-slate-300 transition hover:text-white" href="#what-we-do">
            What We Do
          </a>
          <a className="text-sm font-medium text-slate-300 transition hover:text-white" href="#process">
            Our Process
          </a>
          <a className="text-sm font-medium text-slate-300 transition hover:text-white" href="#become-a-tester">
            Become a Tester
          </a>
        </div>
        <ButtonLink href={site.stripePaymentLink} className="hidden sm:inline-flex">
          Get Started — $299
        </ButtonLink>
      </nav>
    </header>
  );
}
