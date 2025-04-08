
import React from "react";
import { studentLeaderboard } from "@/data/results";
import { Medal, Award } from "lucide-react";

const StudentLeaderboard = () => {
  // Sort students by points (highest first)
  const sortedStudents = [...studentLeaderboard].sort((a, b) => b.points - a.points);
  
  return (
    <section className="py-16 bg-campus-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Award className="text-campus-primary h-8 w-8 mr-3" />
          <h2 className="text-3xl font-bold text-campus-primary">
            Student Leaderboard
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-campus-primary text-white">
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">Student</th>
                  <th className="py-4 px-6 text-left">Department</th>
                  <th className="py-4 px-6 text-left">Points</th>
                  <th className="py-4 px-6 text-left">Key Achievements</th>
                </tr>
              </thead>
              <tbody>
                {sortedStudents.map((student, index) => (
                  <tr 
                    key={student.id} 
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-campus-light/50 transition-colors`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {index < 3 ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                            index === 0 
                              ? "bg-yellow-100 text-yellow-600" 
                              : index === 1 
                                ? "bg-gray-100 text-gray-600" 
                                : "bg-amber-100 text-amber-600"
                          }`}>
                            <Medal className="h-4 w-4" />
                          </div>
                        ) : (
                          <span className="font-medium text-gray-700 w-8 text-center mr-2">
                            {index + 1}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img 
                          src={student.photo} 
                          alt={student.name}
                          className="w-10 h-10 rounded-full mr-3 object-cover" 
                        />
                        <span className="font-semibold text-gray-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-campus-gray">
                      {student.department}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-campus-primary">{student.points}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-2">
                        {student.achievements.slice(0, 2).map((achievement, i) => (
                          <span 
                            key={i}
                            className="inline-block px-2 py-1 text-xs font-medium bg-campus-primary/10 text-campus-primary rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                        {student.achievements.length > 2 && (
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                            +{student.achievements.length - 2} more
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLeaderboard;
