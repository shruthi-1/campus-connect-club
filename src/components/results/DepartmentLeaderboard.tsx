
import React from "react";
import { departmentLeaderboard } from "@/data/results";
import { Building, Users, Trophy } from "lucide-react";

const DepartmentLeaderboard = () => {
  // Sort departments by points (highest first)
  const sortedDepartments = [...departmentLeaderboard].sort((a, b) => b.points - a.points);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Building className="text-campus-primary h-8 w-8 mr-3" />
          <h2 className="text-3xl font-bold text-campus-primary">
            Department Leaderboard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedDepartments.slice(0, 4).map((department, index) => (
            <div 
              key={department.id}
              className={`rounded-xl p-6 shadow-md ${
                index === 0 
                  ? "bg-yellow-50 border border-yellow-200" 
                  : index === 1 
                    ? "bg-gray-50 border border-gray-200" 
                    : index === 2 
                      ? "bg-amber-50 border border-amber-200"
                      : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-4xl font-bold ${
                  index === 0 
                    ? "text-yellow-600" 
                    : index === 1 
                      ? "text-gray-600" 
                      : index === 2 
                        ? "text-amber-600"
                        : "text-campus-gray"
                }`}>
                  #{index + 1}
                </span>
                <Trophy className={`h-6 w-6 ${
                  index === 0 
                    ? "text-yellow-600" 
                    : index === 1 
                      ? "text-gray-600" 
                      : index === 2 
                        ? "text-amber-600"
                        : "text-campus-gray"
                }`} />
              </div>
              <h3 className="text-xl font-bold text-campus-primary mb-2">{department.name}</h3>
              <div className="flex items-center text-campus-gray mb-4">
                <Users className="h-4 w-4 mr-2" />
                <span>{department.studentCount} Students</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-campus-gray">Total Points</span>
                  <span className="text-sm font-bold text-campus-primary">{department.points}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 
                        ? "bg-yellow-500" 
                        : index === 1 
                          ? "bg-gray-500" 
                          : index === 2 
                            ? "bg-amber-500"
                            : "bg-campus-primary"
                    }`}
                    style={{ width: `${(department.points / sortedDepartments[0].points) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-campus-gray mb-2">Top Achievements</h4>
                <ul className="space-y-1">
                  {department.topAchievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-campus-gray flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-campus-primary mt-1.5 mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-campus-primary text-white">
                <th className="py-3 px-6 text-left">Rank</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Students</th>
                <th className="py-3 px-6 text-left">Points</th>
                <th className="py-3 px-6 text-left">Top Achievement</th>
              </tr>
            </thead>
            <tbody>
              {sortedDepartments.map((department, index) => (
                <tr 
                  key={department.id} 
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-campus-light/50 transition-colors`}
                >
                  <td className="py-3 px-6 font-medium">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 font-semibold text-gray-900">
                    {department.name}
                  </td>
                  <td className="py-3 px-6 text-campus-gray">
                    {department.studentCount}
                  </td>
                  <td className="py-3 px-6 font-bold text-campus-primary">
                    {department.points}
                  </td>
                  <td className="py-3 px-6 text-campus-gray">
                    {department.topAchievements[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DepartmentLeaderboard;
