
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { clubs } from "@/data/clubs";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    club: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleClubChange = (value: string) => {
    setFormData(prev => ({ ...prev, club: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        club: "",
        subject: "",
        message: ""
      });
      
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-campus-primary mb-6">
        Send Us a Message
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
              Select Club *
            </label>
            <Select
              value={formData.club}
              onValueChange={handleClubChange}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select club" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                {clubs.map(club => (
                  <SelectItem key={club.id} value={club.slug}>
                    {club.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Enter message subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full min-h-[120px]"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-campus-primary hover:bg-campus-primary/90"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
