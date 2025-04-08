
import React from "react";
import { Link } from "react-router-dom";
import { clubs } from "@/data/clubs";
import { ArrowRight } from "lucide-react";

const ClubsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            Our Vibrant Clubs
          </h2>
          <p className="text-lg text-campus-gray max-w-3xl mx-auto">
            Explore our diverse range of clubs designed to nurture your talents,
            expand your horizons, and help you connect with like-minded peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubs.map((club) => (
            <Link
              key={club.id}
              to={`/clubs/${club.slug}`}
              className="club-card group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div 
                className="h-52 bg-cover bg-center" 
                style={{ backgroundImage: `url(${club.coverImage})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-3">
                  <club.icon className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-bold">{club.name}</h3>
                </div>
                <p className="mb-4 text-white/80">{club.shortDescription}</p>
                <div className="flex items-center text-sm font-medium text-white">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="club-card-overlay absolute inset-0 bg-campus-primary/10 opacity-0 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
