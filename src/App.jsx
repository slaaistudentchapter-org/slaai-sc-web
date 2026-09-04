import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Pillars from '@/components/Pillars';
import LatestActivity from '@/components/LatestActivity';
import Team from '@/components/Team';
import Subcommittees from '@/components/Subcommittees';
import Contact from '@/components/Contact';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import '@/styles/index.css';

export default function App() {
  const mainRef = useReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" ref={mainRef}>
        <Hero />
        <About />
        <Pillars />
        <LatestActivity />
        <Team />
        <Subcommittees />
        <Contact />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
