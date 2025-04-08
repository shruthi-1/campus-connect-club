
import React from "react";
import { competitionResults } from "@/data/results";
import { Calendar, Medal } from "lucide-react";

const CompetitionResults = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-campus-primary mb-12 text-center">
          Recent Competition Results
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {competitionResults.map((result) => (
            <div key={result.id} className="bg-campus-light rounded-xl overflow-hidden shadow">
              <div className="bg-campus-primary text-white p-6">
                <h3 className="text-xl md:text-2xl font-bold">{result.title}</h3>
                <div className="flex items-center mt-2 text-white/80">
                  <span className="font-medium mr-4">{result.club}</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{result.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold text-campus-primary mb-4">Winners</h4>
                <div className="space-y-4">
                  {result.winners.map((winner, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${
                        winner.position === "1st" 
                          ? "bg-yellow-100 text-yellow-600" 
                          : winner.position === "2nd" 
                            ? "bg-gray-100 text-gray-600" 
                            : "bg-amber-100 text-amber-600"
                      }`}>
                        <Medal className="h-5 w-5" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-bold text-gray-900">{winner.name}</span>
                            <p className="text-sm text-campus-gray">{winner.department}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-campus-primary">{winner.position}</span>
                            <p className="text-sm text-campus-gray">{winner.points} points</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionResults;
