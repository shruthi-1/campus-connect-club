
import React from "react";
import { collegeInfo } from "@/data/college";
import { CheckCircle } from "lucide-react";

const AdvantagesSection = () => {
  return (
    <section className="py-20 bg-campus-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            Why Join Our Clubs
          </h2>
          <p className="text-lg text-campus-gray max-w-3xl mx-auto">
            Discover the many benefits of active participation in our college clubs and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collegeInfo.advantages.map((advantage, index) => (
            <div key={index} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-campus-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-campus-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-campus-primary mb-3">{advantage.title}</h3>
                <p className="text-campus-gray">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
