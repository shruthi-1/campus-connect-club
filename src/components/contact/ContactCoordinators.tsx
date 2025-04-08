
import React from "react";
import { clubs } from "@/data/clubs";
import { Mail, Phone } from "lucide-react";

const ContactCoordinators = () => {
  // Get all club coordinators with club information
  const allCoordinators = clubs.flatMap(club => 
    club.coordinators.map(coord => ({
      ...coord,
      clubName: club.name,
      clubSlug: club.slug
    }))
  );
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-campus-primary mb-6 text-center">
          Contact Our Coordinators
        </h2>
        <p className="text-lg text-campus-gray max-w-3xl mx-auto text-center mb-12">
          Reach out directly to our faculty and student coordinators for specific inquiries
          about clubs, events, or activities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCoordinators.map((coordinator) => (
            <div key={coordinator.id} className="bg-campus-light rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <img 
                  src={coordinator.photo} 
                  alt={coordinator.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-1 ${
                    coordinator.isStudent 
                      ? "bg-campus-secondary/10 text-campus-secondary" 
                      : "bg-campus-primary/10 text-campus-primary"
                  }`}>
                    {coordinator.clubName}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900">{coordinator.name}</h3>
                  <p className="text-sm text-campus-gray mb-2">{coordinator.role}</p>
                  
                  <div className="flex items-center text-sm text-campus-gray mt-3">
                    <Mail className="h-4 w-4 mr-2" />
                    <a 
                      href={`mailto:${coordinator.email}`} 
                      className="text-campus-secondary hover:underline"
                    >
                      {coordinator.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm text-campus-gray mt-1">
                    <Phone className="h-4 w-4 mr-2" />
                    <a 
                      href="tel:+1234567890" 
                      className="text-campus-secondary hover:underline"
                    >
                      Contact by Phone
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCoordinators;
