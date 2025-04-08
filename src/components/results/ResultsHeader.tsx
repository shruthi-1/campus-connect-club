
import React from "react";
import { Trophy } from "lucide-react";

const ResultsHeader = () => {
  return (
    <div className="bg-campus-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Club Results & Leaderboards
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Celebrating achievements and recognizing the outstanding performances of our students
          and departments across various club activities and competitions.
        </p>
      </div>
    </div>
  );
};

export default ResultsHeader;
