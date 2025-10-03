import { Rocket, Shield, Users } from "lucide-react";
import { FeatureCard, SLIDE_PURPLE, WHITE_STROKE_SHADOW } from "./Utils";

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
