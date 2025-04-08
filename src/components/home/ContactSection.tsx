
import React from "react";
import { collegeInfo } from "@/data/college";
import { MapPin, Phone, Mail, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-20 bg-campus-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-campus-gray max-w-3xl mx-auto">
            Have questions about our clubs or activities? We're here to help.
            Reach out to us using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-campus-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-campus-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-campus-primary mb-2">Our Address</h3>
                <p className="text-campus-gray">{collegeInfo.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-campus-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-campus-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-campus-primary mb-2">Phone</h3>
                <p className="text-campus-gray">{collegeInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-campus-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-campus-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-campus-primary mb-2">Email</h3>
                <p className="text-campus-gray">{collegeInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-campus-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-campus-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-campus-primary mb-2">Website</h3>
                <p className="text-campus-gray">
                  <a 
                    href={`https://${collegeInfo.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-campus-secondary transition-colors"
                  >
                    {collegeInfo.website}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-campus-primary mb-6 text-center">
              Need More Information?
            </h3>
            <p className="text-campus-gray text-center mb-8">
              Contact our coordinators directly using our contact form.
              We'll get back to you as soon as possible.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-campus-primary hover:bg-campus-primary/90">
                <Link to="/contact">
                  Contact Us <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
