
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { collegeInfo } from "@/data/college";
import ContactForm from "@/components/contact/ContactForm";
import ContactCoordinators from "@/components/contact/ContactCoordinators";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-16 bg-campus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-campus-primary mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-campus-gray max-w-3xl mx-auto">
                We'd love to hear from you! Reach out with any questions, suggestions, or inquiries
                about our clubs and activities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-campus-primary mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-campus-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-campus-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                        <p className="text-campus-gray">{collegeInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-campus-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-campus-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                        <p className="text-campus-gray">{collegeInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-campus-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-campus-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                        <p className="text-campus-gray">{collegeInfo.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">Office Hours</h4>
                    <ul className="space-y-2 text-campus-gray">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContactCoordinators />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-campus-primary rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
              <p className="text-white/80 mb-2">We welcome you to visit our campus and experience our vibrant community firsthand.</p>
              <p className="text-white/80">Schedule a tour by contacting our office.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
