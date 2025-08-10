import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedBySection } from './components/TrustedBySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen font-light bg-white text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>;
}