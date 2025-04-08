
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-campus-light to-white">
      <div className="hero-pattern absolute inset-0 opacity-50"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-campus-primary mb-6">
            Discover Your Passion at Campus Connect
          </h1>
          <p className="text-xl text-campus-gray mb-10">
            Join our vibrant community of clubs and activities to enhance your college experience,
            develop new skills, and create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-campus-primary hover:bg-campus-primary/90">
              <Link to="/clubs/technical">
                Explore Clubs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-campus-primary text-campus-primary hover:bg-campus-light">
              <Link to="/results">
                View Results
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
