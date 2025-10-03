import { useState } from "react";
import { NEON_GREEN, NeonButton } from "./Utils";
import { Menu, X } from "lucide-react";

/**
 * Navbar: Top navigation bar.
 */
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="#" className="text-2xl font-black text-white">
                        <span style={{ color: NEON_GREEN, }}>K</span>ornekt
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
 * CtaBanner: Large, desktop-friendly CTA prompt placed in the middle of the flow.
 */
export const CtaBanner = () => (
    <section className="hidden md:block relative py-16 bg-black text-center border-t-8 border-gray-800  border-green-400 border-none">
        <div className="hidden py-16 absolute -top-6 bg-gradient-to-b from-transparent to-black text-center border-t-8 border-gray-800  border-green-400 border-none">
            <h1 className="text-7xl">
                hello
            </h1>
        </div>
        <section className="absolute left-0 right-0  -top-29 py-16 bg-gradient-to-b from-transparent to-black text-center border-t-8 border-gray-800  border-green-400 border-none">
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
    </section>
);

/**
 * StickyCtaBar: Constantly visible sign-up prompt (mobile focus).
 */
export const StickyCtaBar = () => {
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