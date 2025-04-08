
import React from "react";
import { type Club } from "@/data/clubs";

interface ClubCategoriesProps {
  club: Club;
}

const ClubCategories: React.FC<ClubCategoriesProps> = ({ club }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-campus-primary mb-12 text-center">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {club.categories.map((category, index) => (
            <div key={index} className="bg-campus-light rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-campus-primary/10 flex items-center justify-center mb-6">
                <category.icon className="h-8 w-8 text-campus-primary" />
              </div>
              <h3 className="text-xl font-bold text-campus-primary mb-3">
                {category.title}
              </h3>
              <p className="text-campus-gray">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubCategories;
