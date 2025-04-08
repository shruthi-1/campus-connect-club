
import React from "react";
import { collegeInfo } from "@/data/college";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-campus-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Student Experiences
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Hear directly from our students about how our clubs have enhanced their college journey
            and contributed to their personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collegeInfo.reviews.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-white/20" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={review.photo} 
                  alt={review.student} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{review.student}</h3>
                  <p className="text-white/80 text-sm">{review.program}, {review.year}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i + review.rating} className="h-5 w-5 text-white/30" />
                ))}
              </div>
              
              <p className="text-white/90">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
