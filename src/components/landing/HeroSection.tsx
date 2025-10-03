import { useEffect, useState } from "react";
import { NEON_GREEN, NeonButton, SLIDE_DATA, SLIDE_YELLOW } from "./Utils";
import { ArrowRight } from "lucide-react";

/**
 * HeroSection: Main promotional area with feature slideshow.
 */
export const HeroSection = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const currentSlide = SLIDE_DATA[currentSlideIndex];

    // Cycle through slides every 3 seconds
    useEffect(() => {
            setCurrentSlideIndex(1);
        const interval = setInterval(() => {
            // setCurrentSlideIndex(prev => (prev + 1) % SLIDE_DATA.length);
            setCurrentSlideIndex(1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Component to render the current visual
    const VisualComponent = currentSlide.visual;

    return (
        <section className=" py-14 md:py-32 pb:0 md:pb-22 bg-black text-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="z-10 text-center md:text-left">
                       <div className="mb-3">
                         <a href="#" className="text-4xl font-black text-white ">
                            <span style={{ color: NEON_GREEN, fontFamily:"Knewave"}} className="text-8xl">K</span>ornekt
                        </a>
                       </div>
                        <h1 className="text-3xl md:text-6xl font-extrabold mb-3 leading-tight">
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
                            className="w-64 h-[480px] md:w-72 md:h-[520px] rounded-[3rem] bg-gray-900 border-8 border-gray-700 relative overflow-hidden transition-shadow duration-500"
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
                                                opacity: 0.05,
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