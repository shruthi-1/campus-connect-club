
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { collegeInfo } from "@/data/college";
import { Award, Trophy, Medal, Star } from "lucide-react";

const achievementsIcons = [Award, Trophy, Medal, Star];

const Achievements = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-campus-light to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-campus-primary mb-6">
              Our Achievements
            </h1>
            <p className="text-xl text-campus-gray max-w-3xl mx-auto">
              A showcase of our college's accomplishments, awards, and recognitions that 
              highlight our commitment to excellence in education and innovation.
            </p>
          </div>
        </div>
        
        {/* Main Achievements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {collegeInfo.achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-campus-accent flex items-start"
                >
                  <div className="bg-campus-light rounded-full p-4 mr-6 flex-shrink-0">
                    {React.createElement(achievementsIcons[index % achievementsIcons.length], { 
                      className: "h-10 w-10 text-campus-primary" 
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-campus-primary mb-3">
                      {achievement}
                    </h3>
                    <p className="text-campus-gray">
                      Our institution was recognized for outstanding performance and contribution 
                      in this area, demonstrating our commitment to excellence.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Achievements Section */}
            <h2 className="text-3xl font-bold text-campus-primary mb-10 text-center">
              Other Notable Recognitions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collegeInfo.rankings.map((ranking, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border hover:border-campus-accent transition-colors"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="rounded-full bg-campus-light w-12 h-12 flex items-center justify-center">
                      <span className="text-campus-primary font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                    {ranking}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-campus-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-campus-primary mb-6">
              Join Our Award-Winning Community
            </h2>
            <p className="text-lg text-campus-gray max-w-2xl mx-auto mb-8">
              Be part of our journey of excellence and innovation. Explore our clubs and activities 
              to discover how you can contribute to our growing list of achievements.
            </p>
            <Link to="/clubs" className="bg-campus-primary hover:bg-campus-primary/90 text-white px-8 py-3 rounded-md font-medium inline-block">
              Explore Opportunities
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
