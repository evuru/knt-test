// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import React from 'react';
import { Menu, X, Rocket, Zap, Users, Shield, ArrowRight, MessageSquare, Heart, Video, Search, Apple } from 'lucide-react';
import { CtaBanner, Navbar, StickyCtaBar } from './components/landing/Navbar';
import { HeroSection } from './components/landing/HeroSection';
import { DownloadAndAuthButtonsSection } from './components/landing/Utils';
// Define the custom green color codes and new theme colors
const NEON_GREEN = '#00ff26';
const NEON_GREEN_DARK = '#00cc1f';
const NEON_SHADOW = '0 10px 15px -3px rgba(0, 255, 38, 0.4), 0 4px 6px -4px rgba(0, 255, 38, 0.4)';

// High-contrast colors based on the Yubo screenshot
const SLIDE_YELLOW = '#f7d300';
const SLIDE_PURPLE = '#9400ff';

// UPDATED: New constant for the requested text stroke effect using text-shadow.
// Now set to white (#ffffff) to create a white border/glow.
const WHITE_STROKE_SHADOW = `
  -1px -1px 2px #ffffff, 
  1px -1px 2px #ffffff, 
  -1px 1px 2px #ffffff, 
  1px 1px 2px #ffffff,
  0 0 10px rgba(255, 255, 255, 0.02) /* Inner glow */
`;

// --- Visual Components for Slideshow Content ---

const SlideVisuals = {
  // 1. Make New Friends (Yellow/Black) - Focus on Profiles/Discovery
  Users: ({ fgColor }: { fgColor: string }) => (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-16 h-16 rounded-full bg-black/30 absolute top-10 left-10 border-2" style={{ borderColor: fgColor }}></div>
      <div className="w-24 h-24 rounded-full bg-black/50 absolute bottom-12 right-12 border-2" style={{ borderColor: fgColor }}></div>
      <div className="w-32 h-32 rounded-full absolute" style={{ backgroundColor: fgColor, opacity: 0.1 }}></div>
      <Users size={64} style={{ color: fgColor, filter: `drop-shadow(0 0 5px ${fgColor})` }} className="animate-pulse" />
    </div>
  ),
  // 2. Find Like-Minded (Dark/Neon Green) - Focus on Live Stream Preview
  LiveStream: ({ fgColor }: { fgColor: string }) => (
    <div className="absolute inset-0 p-2">
      {/* Live Video placeholder */}
      <div className="h-1/2 w-full bg-gray-700 rounded-lg shadow-inner flex items-center justify-center">
        <Video size={48} style={{ color: fgColor }} />
      </div>
      {/* Chat preview lines */}
      <div className="absolute bottom-2 left-2 right-2 flex flex-col space-y-1">
        <div className="h-3 w-3/4 rounded-full bg-gray-500"></div>
        <div className="h-3 w-1/2 rounded-full" style={{ backgroundColor: fgColor }}></div>
        <div className="h-3 w-5/6 rounded-full bg-gray-500"></div>
      </div>
    </div>
  ),
  // 3. Skip the Small-Talk (Yellow/Black) - Focus on Messaging/Chat Bubbles
  Chat: ({ fgColor }: { fgColor: string }) => (
    <div className="absolute inset-0 p-4 flex flex-col justify-end space-y-3">
      <div className="self-end max-w-[70%] p-3 rounded-t-xl rounded-bl-xl font-medium shadow-md" style={{ backgroundColor: fgColor, color: 'black' }}>
        Hey, let's start a stream!
      </div>
      <div className="self-start max-w-[70%] p-3 rounded-t-xl rounded-br-xl bg-gray-700 text-white shadow-md">
        I'm down, what's the topic?
      </div>
      {/* Input field visualization */}
      <div className="p-2 bg-gray-100 rounded-full flex items-center mt-4 border border-gray-300">
        <span className="text-gray-500 text-sm ps-1">Send a message...</span>
      </div>
    </div>
  ),
  // 4. Chill Out and Vibe (Purple/White) - Focus on Abstract Vibe/Mood
  Vibe: ({ fgColor }: { fgColor: string }) => (
    <div className="absolute inset-0 flex items-center justify-center opacity-70">
      <div className="w-16 h-16 rounded-full border-4 absolute top-10 left-10 animate-spin-slow" style={{ borderColor: fgColor }}></div>
      <div className="w-24 h-24 rounded-lg border-4 absolute bottom-12 right-12 animate-pulse" style={{ borderColor: fgColor }}></div>
      <Search size={40} style={{ color: fgColor, filter: `drop-shadow(0 0 5px ${fgColor})` }} className="absolute -top-4 right-10" />
    </div>
  )
};

// Slide Data for the Phone Mockup
const SLIDE_DATA = [
  { title: "Make New Friends", description: "Start live video calls instantly.", bgColor: SLIDE_YELLOW, fgColor: 'black', icon: Users, visual: SlideVisuals.Users },
  { title: "Find Like-Minded", description: "Discover groups streaming right now.", bgColor: '#18181b', fgColor: NEON_GREEN, icon: Zap, visual: SlideVisuals.LiveStream },
  { title: "Skip the Small-Talk", description: "Real group chats are easy.", bgColor: SLIDE_YELLOW, fgColor: 'black', icon: MessageSquare, visual: SlideVisuals.Chat },
  { title: "Chill Out and Vibe", description: "Meet your forever community.", bgColor: SLIDE_PURPLE, fgColor: 'white', icon: Heart, visual: SlideVisuals.Vibe },
];

// --- Utility Components ---


// --- Main Components ---



/**
 * HeroSection: Main promotional area with feature slideshow.
 */

/**
 * FeaturesSection: Highlights key app capabilities.
 */


/**
 * CtaBanner: Large, desktop-friendly CTA prompt placed in the middle of the flow.
 */

/**
 * StickyCtaBar: Constantly visible sign-up prompt (mobile focus).
 */



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
