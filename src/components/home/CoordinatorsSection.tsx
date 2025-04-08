
import React from "react";
import { clubs } from "@/data/clubs";
import { Mail } from "lucide-react";

const CoordinatorsSection = () => {
  // Get all faculty coordinators from each club
  const facultyCoordinators = clubs.flatMap(club => 
    club.coordinators.filter(coord => !coord.isStudent)
      .map(coord => ({
        ...coord,
        clubName: club.name,
        clubSlug: club.slug
      }))
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            Meet Our Faculty Coordinators
          </h2>
          <p className="text-lg text-campus-gray max-w-3xl mx-auto">
            Our dedicated faculty members bring their expertise and passion to guide students
            in various club activities and help them achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyCoordinators.map((coordinator) => (
            <div key={coordinator.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={coordinator.photo} 
                  alt={coordinator.name} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-campus-light text-campus-primary rounded-full mb-3">
                  {coordinator.clubName}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{coordinator.name}</h3>
                <p className="text-campus-gray mb-3">{coordinator.role}</p>
                <p className="text-sm text-campus-gray mb-4">
                  {coordinator.department}
                </p>
                <a 
                  href={`mailto:${coordinator.email}`} 
                  className="flex items-center text-sm font-medium text-campus-secondary hover:text-campus-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
