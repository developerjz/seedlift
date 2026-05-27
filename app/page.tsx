import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Nav } from '@/components/Nav';
import { Pricing } from '@/components/Pricing';
import { SocialProofBar } from '@/components/SocialProofBar';
import { TesterSignup } from '@/components/TesterSignup';
import { WhatYouGet } from '@/components/WhatYouGet';
import { StatsPanel } from '@/components/StatsPanel';

export default function Home() {
 return (
  <main className="min-h-screen overflow-hidden bg-ink text-white">
   <Nav />
   <Hero />
   <SocialProofBar />
   <WhatYouGet />
   <HowItWorks />
   <StatsPanel />
   <Pricing />
   <TesterSignup />
   <FAQ />
   <Footer />
  </main>
 );
}
