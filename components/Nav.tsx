import { ButtonLink } from '@/components/ButtonLink';
import { site } from '@/lib/site';

function SeedliftLogo() {
 return (
  <a href="#" className="flex items-center gap-3" aria-label="Seedlift home">
   <span className="flex h-10 w-10 items-center justify-center">
    <svg
     viewBox="0 0 64 64"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     className="h-10 w-10"
     aria-hidden="true"
    >
     <path
      d="M32 5.5C32 5.5 11.5 25.1 11.5 42.1C11.5 53.2 20.6 60.5 32 60.5C43.4 60.5 52.5 53.2 52.5 42.1C52.5 25.1 32 5.5 32 5.5Z"
      stroke="#1D8CFF"
      strokeWidth="6"
      strokeLinejoin="round"
     />
     <path
      d="M24 35V47"
      stroke="#1D8CFF"
      strokeWidth="6"
      strokeLinecap="round"
     />
     <path
      d="M32 28V47"
      stroke="#1D8CFF"
      strokeWidth="6"
      strokeLinecap="round"
     />
     <path
      d="M40 38V47"
      stroke="#1D8CFF"
      strokeWidth="6"
      strokeLinecap="round"
     />
    </svg>
   </span>

   <span className="text-xl font-semibold tracking-tight text-white">
    Seedlift
   </span>
  </a>
 );
}

export function Nav() {
 return (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 px-5 py-4 backdrop-blur-xl lg:px-8">
   <nav className="mx-auto flex max-w-7xl items-center justify-between">
    <SeedliftLogo />

    <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
     <a href="#for-startups" className="transition hover:text-white">
      For Startups
     </a>
     <a href="#become-a-tester" className="transition hover:text-white">
      Become a Tester
     </a>
    </div>

    <ButtonLink href={site.stripePaymentLink} className="hidden sm:inline-flex">
     Get Started, $299
    </ButtonLink>
   </nav>
  </header>
 );
}
