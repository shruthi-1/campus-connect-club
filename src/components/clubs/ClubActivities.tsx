
import React from "react";
import { type Club } from "@/data/clubs";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ClubActivitiesProps {
  club: Club;
}

const ClubActivities: React.FC<ClubActivitiesProps> = ({ club }) => {
  const { toast } = useToast();

  const handleRegister = (activityTitle: string) => {
    toast({
      title: "Registration Successful",
      description: `You've registered for ${activityTitle}!`,
      duration: 3000,
    });
  };

  // Default image if club activity image is missing
  const getImageUrl = (image?: string) => {
    return image || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-campus-primary mb-4 text-center">
          Upcoming Activities
        </h2>
        <p className="text-lg text-campus-gray max-w-3xl mx-auto text-center mb-12">
          Join us for these exciting events and activities happening soon. 
          Register early to secure your spot!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {club.activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow border hover:shadow-lg transition-shadow">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${getImageUrl(activity.image)})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-campus-gray mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{activity.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-campus-gray mb-5">
                  {activity.description}
                </p>
                <Button 
                  className="w-full"
                  onClick={() => handleRegister(activity.title)}
                >
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubActivities;
