
import React from "react";
import { collegeInfo } from "@/data/college";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const UpdatesSection = () => {
  const { updates } = collegeInfo;
  const { toast } = useToast();
  
  const handleNewsClick = (index: number) => {
    // This is a placeholder for actual news page navigation
    toast({
      title: "News Update",
      description: `You clicked on: ${updates[index]}`,
      duration: 3000,
    });
  };
  
  return (
    <section className="py-10 bg-white border-y border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center overflow-hidden">
          <div className="bg-campus-primary text-white py-3 px-6 font-bold whitespace-nowrap flex-shrink-0 mr-6">
            LIVE UPDATES
          </div>
          <div className="overflow-hidden relative flex-1">
            <div className="whitespace-nowrap flex gap-10 animate-[marquee_25s_linear_infinite]">
              {updates.map((update, index) => (
                <button 
                  key={index} 
                  onClick={() => handleNewsClick(index)}
                  className="text-gray-700 font-medium hover:text-campus-primary transition-colors cursor-pointer"
                >
                  {update}
                </button>
              ))}
            </div>
            <div className="whitespace-nowrap flex gap-10 absolute top-0 animate-[marquee2_25s_linear_infinite]">
              {updates.map((update, index) => (
                <button 
                  key={`clone-${index}`} 
                  onClick={() => handleNewsClick(index)}
                  className="text-gray-700 font-medium hover:text-campus-primary transition-colors cursor-pointer"
                >
                  {update}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
