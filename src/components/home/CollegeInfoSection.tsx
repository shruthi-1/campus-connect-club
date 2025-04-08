
import React from "react";
import { collegeInfo } from "@/data/college";
import { Award, BookOpen, Users, Clock } from "lucide-react";

const CollegeInfoSection = () => {
  return (
    <section className="py-20 bg-campus-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            About {collegeInfo.name}
          </h2>
          <p className="text-lg text-campus-gray max-w-3xl mx-auto">
            {collegeInfo.motto}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-campus-primary mb-4">Our Journey</h3>
            <p className="text-campus-gray mb-6">
              {collegeInfo.description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-campus-primary mb-2">Our Mission</h4>
              <p className="text-campus-gray">
                {collegeInfo.mission}
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-campus-primary mb-2">Our Vision</h4>
              <p className="text-campus-gray">
                {collegeInfo.vision}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-campus-accent mr-3" />
                <h3 className="text-xl font-bold">Established</h3>
              </div>
              <p className="text-3xl font-bold text-campus-primary">{collegeInfo.established}</p>
              <p className="text-campus-gray mt-2">Years of Excellence</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-campus-accent mr-3" />
                <h3 className="text-xl font-bold">Students</h3>
              </div>
              <p className="text-3xl font-bold text-campus-primary">{collegeInfo.studentCount.toLocaleString()}</p>
              <p className="text-campus-gray mt-2">Bright Minds</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-campus-accent mr-3" />
                <h3 className="text-xl font-bold">Faculty</h3>
              </div>
              <p className="text-3xl font-bold text-campus-primary">{collegeInfo.facultyCount.toLocaleString()}</p>
              <p className="text-campus-gray mt-2">Expert Educators</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-campus-accent mr-3" />
                <h3 className="text-xl font-bold">Departments</h3>
              </div>
              <p className="text-3xl font-bold text-campus-primary">{collegeInfo.departments}</p>
              <p className="text-campus-gray mt-2">Diverse Disciplines</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-campus-primary mb-6 text-center">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collegeInfo.achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border-t-4 border-campus-accent">
                <p className="font-medium text-campus-gray">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeInfoSection;
