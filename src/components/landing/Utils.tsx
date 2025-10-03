// --- Utility Components ---

import { useState } from "react";
import type { FeatureCardProps, NeonButtonType } from "../../types";
import { Apple, Heart, MessageSquare, Search, Users, Video, Zap } from "lucide-react";
import appstoreLogo from "../../assets/images/apple-store.svg"
import googleplayLogo from "../../assets/images/android-store.svg"
// Define the custom green color codes and new theme colors
export const NEON_GREEN = '#00ff26';
export const NEON_GREEN_DARK = '#00cc1f';
export const NEON_SHADOW = '0 10px 15px -3px rgba(0, 255, 38, 0.4), 0 4px 6px -4px rgba(0, 255, 38, 0.4)';

// High-contrast colors based on the Yubo screenshot
export const SLIDE_YELLOW = '#f7d300';
export const SLIDE_PURPLE = '#9400ff';

// UPDATED: New constant for the requested text stroke effect using text-shadow.
// Now set to white (#ffffff) to create a white border/glow.
export const WHITE_STROKE_SHADOW = `
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
            {/* <div className="w-16 h-16 rounded-full bg-black/30 absolute top-10 left-10 border-2" style={{ borderColor: fgColor }}></div> */}
            {/* <div className="w-24 h-24 rounded-full bg-black/50 absolute bottom-12 right-12 border-2" style={{ borderColor: fgColor }}></div> */}
            <div className="w-32 h-32 rounded-full absolute" style={{ backgroundColor: fgColor, opacity: 0.1 }}></div>
            <Users size={64} style={{ color: fgColor, filter: `drop-shadow(0 0 5px ${fgColor})` }} className="animate-pulse" />
        </div>
    ),
    // 2. Find Like-Minded (Dark/Neon Green) - Focus on Live Stream Preview
    LiveStream: ({ fgColor }: { fgColor: string }) => (
        <div className="absolute inset-0 p-2">
            {/* Live Video placeholder */}
            <div className="h-1/2 w-full bg-gray-700 rounded-xl rounded-t-4xl shadow-inner flex items-center justify-center">
                <Video size={48} style={{ color: fgColor }} />
            </div>
            {/* Chat preview lines */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-col space-y-1">
                <div className="h-3 w-3/4 rounded-full bg-gray-500"></div>
                <div className="h-3 w-1/2 rounded-full" style={{ backgroundColor: fgColor,opacity:0.1 }}></div>
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
export const SLIDE_DATA = [
    { title: "Make New Friends", description: "Start live video calls instantly.", bgColor: SLIDE_YELLOW, fgColor: 'black', icon: Users, visual: SlideVisuals.Users },
    { title: "Find Like-Minded", description: "Discover groups streaming right now.", bgColor: '#18181b', fgColor: NEON_GREEN, icon: Zap, visual: SlideVisuals.LiveStream },
    { title: "Skip the Small-Talk", description: "Real group chats are easy.", bgColor: SLIDE_YELLOW, fgColor: 'black', icon: MessageSquare, visual: SlideVisuals.Chat },
    { title: "Chill Out and Vibe", description: "Meet your forever community.", bgColor: SLIDE_PURPLE, fgColor: 'white', icon: Heart, visual: SlideVisuals.Vibe },
];




/**
 * NeonButton: A vibrant, rounded button component.
 */

export const NeonButton = ({ children, primary = true, className = '', style = {}, onClick }: NeonButtonType) => {
    const baseClasses = "font-bold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-[1.03] text-sm md:text-base";

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
export const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => (
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
export const AuthToggle = () => {
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
export const DownloadAndAuthButtonsSection = () => (
    <section className=" bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-1">
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
                {/* <AuthToggle /> */}
            </div>
        </div>
    </section>
);
