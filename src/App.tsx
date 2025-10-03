// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import appstoreLogo from "./assets/images/apple-store.svg"
import googleplayLogo from "./assets/images/android-store.svg"

import React from 'react';
import { Menu, X, Rocket, Zap, Users, Shield, ArrowRight, MessageSquare, Heart, Video, Search, Apple } from 'lucide-react';
import type { FeatureCardProps, NeonButtonType } from './types';

// Destructure necessary hooks from the imported React object to ensure environment compatibility
const { useState, useEffect } = React;

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

/**
 * NeonButton: A vibrant, rounded button component.
 */

const NeonButton = ({ children, primary = true, className = '', style = {}, onClick }: NeonButtonType) => {
  const baseClasses = "font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-[1.03] text-sm md:text-base";

  const [isHovered, setIsHovered] = useState(false);

  // Primary Button Styles (Neon Green BG)
  const primaryStyles = {
    backgroundColor: NEON_GREEN,
    boxShadow: NEON_SHADOW,
    color: 'black',
    ...style
  };
  const primaryHoverStyles = {
    backgroundColor: NEON_GREEN_DARK,
  };

  // Secondary Button Styles (Neon Green Border/Text)
  const secondaryStyles = {
    borderColor: NEON_GREEN,
    color: NEON_GREEN,
    ...style
  };
  const secondaryHoverStyles = {
    backgroundColor: NEON_GREEN,
    color: 'black'
  };

  const currentStyles = primary
    ? { ...primaryStyles, ...(isHovered ? primaryHoverStyles : {}) }
    : { ...secondaryStyles, ...(isHovered ? secondaryHoverStyles : {}) };

  return (
    <button
      className={`${baseClasses} ${className} ${primary ? 'border-none' : 'border-2 bg-transparent'}`}
      style={currentStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * FeatureCard: A card component for the features section.
 */
const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => (
  <div
    className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl transition duration-500 hover:bg-gray-700/50 border border-gray-700/50"
    style={{ animation: `fadeInUp 0.5s ease-out ${delay}s forwards`, opacity: 0 }}
  >
    <div className="mb-4" style={{ color: NEON_GREEN }}>
      <Icon size={32} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// --- New Components for Button Section ---

/**
 * AuthToggle: A beautifully merged sign-up/sign-in button toggle.
 */
const AuthToggle = () => {
  // Simulates state of the toggle, defaulting to Sign Up
  const [isSigningUp, setIsSigningUp] = useState(true);

  const baseClasses = "py-3 px-6 text-sm font-bold transition-all duration-300 rounded-full cursor-pointer text-center flex-1";

  return (
    <div className="flex bg-gray-700/50 rounded-full p-1 border-2 border-gray-700 max-w-xs w-full md:w-auto mx-auto shadow-xl">
      <div
        className={baseClasses}
        style={{
          color: isSigningUp ? 'black' : NEON_GREEN,
          backgroundColor: isSigningUp ? NEON_GREEN : 'transparent',
          boxShadow: isSigningUp ? NEON_SHADOW : 'none',
        }}
        onClick={() => setIsSigningUp(true)}
      >
        Sign Up
      </div>
      <div
        className={baseClasses}
        style={{
          color: isSigningUp ? NEON_GREEN : 'white',
          backgroundColor: isSigningUp ? 'transparent' : 'black',
        }}
        onClick={() => setIsSigningUp(false)}
      >
        Sign In
      </div>
    </div>
  );
};

/**
 * DownloadAndAuthButtonsSection: New section containing store downloads and the auth toggle.
 */
const DownloadAndAuthButtonsSection = () => (
  <section className="py-12 md:py-16 bg-black border-b border-gray-800">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">

        {/* 1. App Store Button (Download on the App Store) - Updated Style */}
        <button
          className="hidden flex items-center space-x-3 p-3 px-6 bg-gray-900 border border-gray-700 rounded-xl text-white transition duration-300 hover:bg-gray-800 hover:shadow-lg max-w-[320px] w-full md:w-auto min-w-[200px]"
        >
          <Apple size={30} fill="white" stroke="white" /> {/* Apple icon, filled white */}
          <div className="text-left leading-none">
            <p className="text-[10px] text-gray-300">Download on the</p>
            <p className="text-lg font-bold">App Store</p>
          </div>
        </button>
        <a href="https://apps.apple.com/us/"
          className="">
          <img alt="Download on AppStore" loading="lazy" width="186" height="62" decoding="async" data-nimg="1"
            // style={{ color: "transparent" }}
            src={appstoreLogo} />

        </a>
        <a href="https://play.google.com/store/apps/details?id=''"
          className="">
          <img alt="GET IT ON" loading="lazy" width="186" height="64" decoding="async" data-nimg="1"
            // style={{ color: "transparent" }}
            src={googleplayLogo} />

        </a>

        {/* 2. Google Play Button (Get it on Google Play) - Updated Style with Inline SVG */}
        <button
          className="hidden flex items-center space-x-3 p-3 px-6 bg-gray-900 border border-gray-700 rounded-xl text-white transition duration-300 hover:bg-gray-800 hover:shadow-lg max-w-[320px] w-full md:w-auto min-w-[200px]"
        >
          {/* Google Play Icon (Simplified Inline SVG) */}
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M2.618 2.016 19.382 11.001 2.618 19.986z" />
          </svg>
          <div className="text-left leading-none">
            <p className="text-[10px] text-gray-300">GET IT ON</p>
            <p className="text-lg font-bold">Google Play</p>
          </div>
        </button>

        {/* 3. Auth Toggle Button (Creative Sign-up/Sign-in) */}
        <AuthToggle />
      </div>
    </div>
  </section>
);


// --- Main Components ---

/**
 * Navbar: Top navigation bar.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#" className="text-2xl font-black text-white">
            <span style={{ color: NEON_GREEN }}>App</span>Connect
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-300 hover:text-green-400 transition">Features</a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition">Safety</a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition">Community</a>
            <NeonButton primary={false} className="ms-4">Login</NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden p-2 rounded-lg hover:bg-gray-700 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 py-2">
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">Features</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">Safety</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">Community</a>
          <div className="p-4">
            <NeonButton primary={false} className="w-full">Login</NeonButton>
          </div>
        </div>
      )}
    </nav>
  );
};

/**
 * HeroSection: Main promotional area with feature slideshow.
 */
const HeroSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = SLIDE_DATA[currentSlideIndex];

  // Cycle through slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % SLIDE_DATA.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Component to render the current visual
  const VisualComponent = currentSlide.visual;

  return (
    <section className="pt-24 pb-16 md:py-32 bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="z-10 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              Go <span style={{ color: NEON_GREEN }}>Live,</span> Meet <span style={{ color: NEON_GREEN }}>People.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              The fastest way to discover and join authentic communities streaming right now.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <NeonButton>Start Streaming</NeonButton>
              <NeonButton primary={false}>Watch Now <ArrowRight size={20} className="inline-block ms-1" /></NeonButton>
            </div>
            {/* Added a prompt under the buttons */}
            <p className="mt-8 text-sm text-gray-500">Already a member? <a href="#" style={{ color: NEON_GREEN }} className="font-semibold hover:text-white transition">Log in now</a></p>
          </div>

          {/* Right Visual (Phone Mockup with Slideshow) */}
          <div className="flex justify-center md:justify-end z-10">
            <div
              className="w-64 h-[400px] md:w-72 md:h-[500px] rounded-[3rem] bg-gray-900 border-8 border-gray-700 relative overflow-hidden transition-shadow duration-500"
              style={{ boxShadow: `0 0 50px rgba(0, 255, 38, 0.5)` }} // Neon green glow
            >

              {/* Phone Screen Content - Dynamic Slideshow */}
              <div
                className={`w-full h-full p-6 flex flex-col justify-between transition-colors duration-1000 ease-in-out relative`}
                style={{ backgroundColor: currentSlide.bgColor, color: currentSlide.fgColor }}
              >

                {/* Visual Content Layer */}
                <div className="absolute inset-0">
                  <VisualComponent fgColor={currentSlide.fgColor} />
                </div>

                {/* Text Overlay Layer */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="text-sm font-semibold text-right">
                    {/* Render the Lucide Icon for the current slide */}
                    <currentSlide.icon size={32} strokeWidth={2.5} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-1">{currentSlide.title}</h4>
                    <p className="text-sm opacity-90">{currentSlide.description}</p>
                    <button
                      className="text-xs mt-3 px-3 py-1 rounded-full border font-bold hover:opacity-100 transition"
                      style={{
                        borderColor: currentSlide.fgColor,
                        color: currentSlide.fgColor,
                        opacity: 0.8,
                        backgroundColor: currentSlide.bgColor === SLIDE_YELLOW ? 'black' : 'transparent' // Contrast adjustment
                      }}
                    >
                      VIEW FEATURE
                    </button>
                  </div>

                  {/* Pagination dots */}
                  <div className="flex justify-center space-x-1.5 absolute bottom-4 left-0 right-0">
                    {SLIDE_DATA.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'w-4' : 'w-2'}`}
                        style={{
                          backgroundColor: currentSlide.fgColor,
                          opacity: index === currentSlideIndex ? 1 : 0.4
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animated Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-0 -left-1/4 w-96 h-96 bg-indigo-900 opacity-20 rounded-full filter blur-[150px]"
          style={{ backgroundColor: NEON_GREEN, opacity: 0.15 }}
        ></div>
        <div className="absolute bottom-0 -right-1/4 w-80 h-80 bg-indigo-900 opacity-20 rounded-full filter blur-[150px]"></div>
      </div>
    </section>
  );
};

/**
 * FeaturesSection: Highlights key app capabilities.
 */
const FeaturesSection = () => (
  <section className="py-16 md:py-24 bg-gray-900">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        {/* UPDATED: Text color is now text-black (dark) and the textShadow uses 
          the new WHITE_STROKE_SHADOW constant for the white border/glow.
        */}
        <h2
          className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
          style={{ textShadow: WHITE_STROKE_SHADOW }}
        >
          Forget Boring Social Media.
          <span style={{ color: SLIDE_PURPLE, textShadow: '0 0 10px rgba(148, 0, 255, 0.7)' }}> Let's Vibe.</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
          Real connections start here. Drop the filters and join the fun.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Users}
          title="Insta-Live Group Video"
          description="Jump into public streams or kick off private hangouts. It’s all about meeting real people and finding your crew."
          delay={0.1}
        />
        <FeatureCard
          icon={Rocket}
          title="Find Your Crew Fast"
          description="Our swipe feature makes it ridiculously easy to find new friends based on shared interests. Your next bestie is waiting!"
          delay={0.2}
        />
        <FeatureCard
          icon={Shield}
          title="Good Vibes Only"
          description="We keep the community safe and positive with zero tolerance for bad vibes. Chill, connect, and enjoy the party."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

/**
 * CtaBanner: Large, desktop-friendly CTA prompt placed in the middle of the flow.
 */
const CtaBanner = () => (
  <section className="py-16 bg-black text-center border-t border-gray-800">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl font-extrabold text-white mb-3">Don't Miss Out on the Fun.</h2>
      <p className="text-lg text-gray-400 mb-6">Your new community is waiting for you to go live.</p>
      <div className="space-x-4">
        <NeonButton className="shadow-2xl">Create Account - It's Free</NeonButton>
        <NeonButton primary={false} style={{ borderColor: 'white', color: 'white' }}>
          Explore Streams
        </NeonButton>
      </div>
    </div>
  </section>
);

/**
 * StickyCtaBar: Constantly visible sign-up prompt (mobile focus).
 */
const StickyCtaBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-3 z-40 md:hidden shadow-[0_0_20px_rgba(0,0,0,0.8)]">
      <div className="flex justify-between items-center space-x-3">
        <div className="text-white">
          <p className="text-sm font-bold">Ready to connect?</p>
          <p className="text-xs text-gray-400">Join millions of streamers.</p>
        </div>
        {/* Use the primary neon button for maximum attention */}
        <NeonButton className="py-2 px-4 text-sm whitespace-nowrap">Sign Up Now</NeonButton>
      </div>
    </div>
  );
};


/**
 * Footer: Standard copyright and legal links.
 */
const Footer = () => (
  <footer className="bg-black py-8 border-t border-gray-800">
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
        <Navbar />
        <main>
          <HeroSection />
          {/* UPDATED SECTION: Download and Auth Buttons */}
          <DownloadAndAuthButtonsSection />
          <FeaturesSection />
          <CtaBanner /> {/* High-visibility CTA */}
        </main>
        <Footer />
        <StickyCtaBar /> {/* Always visible on small screens */}
      </div>
    </>
  );
};

export default App;
