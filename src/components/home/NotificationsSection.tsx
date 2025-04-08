
import React from "react";
import { collegeInfo } from "@/data/college";
import { Bell, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const NotificationsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-campus-primary flex items-center">
            <Bell className="mr-3 h-6 w-6" />
            Recent Notifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collegeInfo.notifications.map((notification) => {
            const notificationDate = new Date(notification.date);
            const formattedDate = notificationDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });
            
            return (
              <div 
                key={notification.id}
                className={cn(
                  "p-6 rounded-lg border-l-4 shadow-sm",
                  notification.urgent 
                    ? "border-red-500 bg-red-50" 
                    : "border-campus-secondary bg-blue-50"
                )}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={cn(
                    "font-bold text-lg",
                    notification.urgent ? "text-red-700" : "text-campus-primary"
                  )}>
                    {notification.title}
                    {notification.urgent && (
                      <span className="ml-3 text-xs font-medium text-white bg-red-500 px-2 py-0.5 rounded-full">
                        URGENT
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formattedDate}
                  </div>
                </div>
                <p className="text-gray-700">{notification.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
