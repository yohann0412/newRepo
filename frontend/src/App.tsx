import React, { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedBySection } from './components/TrustedBySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Footer } from './components/Footer';
import { AuthCard } from './components/AuthCard';
import { Dashboard } from './components/Dashboard';

export function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    setShowAuth(false);
  };

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show auth card if user wants to authenticate
  if (showAuth && !user) {
    return <AuthCard onAuthSuccess={handleAuthSuccess} />;
  }

  // Show dashboard if user is authenticated
  if (user) {
    return <Dashboard user={user} />;
  }

  // Show landing page if not authenticated
  return (
    <div className="w-full min-h-screen font-light bg-white text-gray-800">
      <Navbar onGetStarted={handleGetStarted} />
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <TrustedBySection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}