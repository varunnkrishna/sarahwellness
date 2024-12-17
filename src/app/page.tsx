import { BentoHero } from '@/components/hero/BentoHero';
import { Container } from '@/components/layout/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { PainPoints } from '@/components/sections/PainPoints';
import { JourneySteps } from '@/components/sections/JourneySteps';
import { JourneyStepsMotion } from '@/components/sections/JourneyStepsMotion';
import { WellnessProgramsSection } from '@/components/sections/WellnessProgramsSection';
import { AboutCoach } from '@/components/sections/AboutCoach';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        <BentoHero />
        <Testimonials />
        <PainPoints />
        <JourneyStepsMotion />
        <AboutCoach />
        <NewsletterCTA variant="default" />
        <WellnessProgramsSection />

        {/* <NewsletterCTA variant="minimal" /> */}

      </main>
      <Footer />
    </>
  );
}
