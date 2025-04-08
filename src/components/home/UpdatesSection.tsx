
import React from "react";
import { collegeInfo } from "@/data/college";
import { Link } from "react-router-dom";

const UpdatesSection = () => {
  const { updates } = collegeInfo;
  
  return (
    <section className="py-10 bg-white border-y border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center overflow-hidden">
          <div className="bg-campus-primary text-white py-3 px-6 font-bold whitespace-nowrap flex-shrink-0 mr-6">
            LIVE UPDATES
          </div>
          <div className="overflow-hidden relative flex-1">
            <div className="whitespace-nowrap flex gap-10 animate-marquee">
              {updates.map((update, index) => (
                <Link 
                  key={index} 
                  to={`/news/${index + 1}`} 
                  className="text-gray-700 font-medium hover:text-campus-primary transition-colors cursor-pointer"
                >
                  {update}
                </Link>
              ))}
            </div>
            <div className="whitespace-nowrap flex gap-10 absolute top-0 animate-marquee2">
              {updates.map((update, index) => (
                <Link 
                  key={`clone-${index}`} 
                  to={`/news/${index + 1}`}
                  className="text-gray-700 font-medium hover:text-campus-primary transition-colors cursor-pointer"
                >
                  {update}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
