
import React from "react";
import { collegeInfo } from "@/data/college";

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
            <div className="animate-marquee whitespace-nowrap flex gap-10">
              {updates.map((update, index) => (
                <span key={index} className="text-gray-700 font-medium">
                  {update}
                </span>
              ))}
            </div>
            <div className="animate-marquee whitespace-nowrap flex gap-10 absolute top-0">
              {updates.map((update, index) => (
                <span key={`clone-${index}`} className="text-gray-700 font-medium">
                  {update}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
