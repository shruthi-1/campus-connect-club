
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { type Club } from "@/data/clubs";

interface ClubHeaderProps {
  club: Club;
}

const ClubHeader: React.FC<ClubHeaderProps> = ({ club }) => {
  return (
    <div className="relative">
      <div 
        className="h-[300px] md:h-[400px] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${club.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center text-white/80 mb-4">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link to="/clubs" className="hover:text-white transition-colors">Clubs</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-white">{club.name}</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
                  <club.icon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {club.name}
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl">
                {club.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHeader;
