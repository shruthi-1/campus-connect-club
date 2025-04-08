
import React from "react";
import { type Club } from "@/data/clubs";
import { Mail } from "lucide-react";

interface ClubCoordinatorsProps {
  club: Club;
}

const ClubCoordinators: React.FC<ClubCoordinatorsProps> = ({ club }) => {
  return (
    <section className="py-16 bg-campus-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-campus-primary mb-4 text-center">
          Meet Our Coordinators
        </h2>
        <p className="text-lg text-campus-gray max-w-3xl mx-auto text-center mb-12">
          Our dedicated team of faculty and student coordinators work together to
          organize events, guide activities, and ensure the club's success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {club.coordinators.map((coordinator) => (
            <div key={coordinator.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="h-60 overflow-hidden">
                <img 
                  src={coordinator.photo} 
                  alt={coordinator.name} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                  coordinator.isStudent 
                    ? "bg-campus-secondary/10 text-campus-secondary" 
                    : "bg-campus-primary/10 text-campus-primary"
                }`}>
                  {coordinator.isStudent ? "Student Leader" : "Faculty Mentor"}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {coordinator.name}
                </h3>
                <p className="text-campus-gray mb-3">{coordinator.role}</p>
                <p className="text-sm text-campus-gray mb-4">
                  {coordinator.department}
                </p>
                <a 
                  href={`mailto:${coordinator.email}`} 
                  className="flex items-center text-sm font-medium text-campus-secondary hover:text-campus-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact via Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubCoordinators;
