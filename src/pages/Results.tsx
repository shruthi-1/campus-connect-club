
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultsHeader from "@/components/results/ResultsHeader";
import CompetitionResults from "@/components/results/CompetitionResults";
import StudentLeaderboard from "@/components/results/StudentLeaderboard";
import DepartmentLeaderboard from "@/components/results/DepartmentLeaderboard";

const Results = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ResultsHeader />
        <CompetitionResults />
        <StudentLeaderboard />
        <DepartmentLeaderboard />
      </main>
      <Footer />
    </div>
  );
};

export default Results;
