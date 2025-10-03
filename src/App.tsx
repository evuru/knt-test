// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// import React from 'react';
// import { Menu, X, Rocket, Zap, Users, Shield, ArrowRight, MessageSquare, Heart, Video, Search, Apple } from 'lucide-react';
import { CtaBanner, /*Navbar,*/ StickyCtaBar } from './components/landing/Navbar';
import { HeroSection } from './components/landing/HeroSection';
// import { DownloadAndAuthButtonsSection } from './components/landing/Utils';
// Define the custom green color codes and new theme colors


/**
 * Footer: Standard copyright and legal links.
 */
const Footer = () => (
  <footer className="bg-black py-8 border-t border-gray-800 border-none">
    <div className="container mx-auto px-4 md:px-8 text-center text-gray-500">
      <div className="flex justify-center space-x-6 mb-4 text-sm">
        <a href="#" className="hover:text-green-400">Privacy Policy</a>
        <a href="#" className="hover:text-green-400">Terms of Use</a>
        <a href="#" className="hover:text-green-400">Press & Media</a>
      </div>
      <p>&copy; {new Date().getFullYear()} AppConnect. All rights reserved.</p>
    </div>
  </footer>
);

/**
 * Main Application Component
 */
const App = () => {
  // Custom CSS for animations (fadeInUp and the new spin-slow utility)
  const cssKeyframes = `
      <style>
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
        }
      </style>
    `;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: cssKeyframes }} />

      <div className="min-h-screen bg-black pb-16 md:pb-0"> {/* Add padding for the sticky bar */}
        {/* <Navbar /> */}
        
        <main>
          <HeroSection />
          {/* UPDATED SECTION: Download and Auth Buttons */}
          {/* <DownloadAndAuthButtonsSection /> */}
          {/* <FeaturesSection /> */}
          <CtaBanner /> {/* High-visibility CTA */}
        </main>
        <Footer />
        <StickyCtaBar /> {/* Always visible on small screens */}
      </div>
    </>
  );
};

export default App;
