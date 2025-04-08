
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-campus-primary text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-campus-primary font-bold">CC</span>
              </div>
              <span className="font-bold text-lg">Campus Connect</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Connecting students through vibrant clubs and activities to foster talent, creativity, and leadership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-300 hover:text-white transition">Results</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Our Clubs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/clubs/technical" className="text-gray-300 hover:text-white transition">Technical Club</Link>
              </li>
              <li>
                <Link to="/clubs/sports" className="text-gray-300 hover:text-white transition">Sports Club</Link>
              </li>
              <li>
                <Link to="/clubs/hobby" className="text-gray-300 hover:text-white transition">Hobby Club</Link>
              </li>
              <li>
                <Link to="/clubs/cultural" className="text-gray-300 hover:text-white transition">Cultural Club</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-gray-300">123 College Avenue, Education City, State - 123456</span>
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-gray-300">info@campusconnect.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} Campus Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
