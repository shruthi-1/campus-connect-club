
import React from "react";
import { Button } from "@/components/ui/button";
import { type Club } from "@/data/clubs";

interface ClubRegistrationProps {
  club: Club;
}

const ClubRegistration: React.FC<ClubRegistrationProps> = ({ club }) => {
  return (
    <section className="py-20 bg-campus-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the {club.name}
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Become a part of our vibrant community and explore your interests, develop new skills,
          and make lasting connections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-campus-primary hover:bg-gray-100 border-2 border-white">
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClubRegistration;
