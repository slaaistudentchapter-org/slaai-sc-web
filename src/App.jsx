import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Team from './components/Team';
import Subcommittees from './components/Subcommittees';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Team />
        <Subcommittees />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
