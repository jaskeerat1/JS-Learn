import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Vision from '@/components/sections/vision';
import Timeline from '@/components/sections/timeline';
import WhySponsor from '@/components/sections/why-sponsor';
import SponsorshipTiers from '@/components/sections/sponsorship-tiers';
import Mentors from '@/components/sections/mentors';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Vision />
        <Timeline />
        <section id="sponsors" className="py-12 md:py-24 lg:py-32 space-y-12 md:space-y-24 lg:space-y-32">
          <WhySponsor />
          <SponsorshipTiers />
        </section>
        <Mentors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
