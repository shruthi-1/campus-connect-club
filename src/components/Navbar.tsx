
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-campus-primary flex items-center justify-center">
              <span className="text-white font-bold">CC</span>
            </div>
            <span className="font-bold text-lg text-campus-primary">Campus Connect</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Home
          </Link>
          <Link to="/clubs/technical" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Technical Club
          </Link>
          <Link to="/clubs/sports" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Sports Club
          </Link>
          <Link to="/clubs/hobby" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Hobby Club
          </Link>
          <Link to="/clubs/cultural" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Cultural Club
          </Link>
          <Link to="/results" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Results
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Contact
          </Link>
          <Button size="sm" variant="outline" className="gap-1">
            <User size={16} />
            <span>Login</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-campus-primary" />
          ) : (
            <AlignJustify className="h-6 w-6 text-campus-primary" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] transform overflow-y-auto bg-white px-6 pb-6 transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <nav className="flex flex-col gap-4 mt-6">
          <Link 
            to="/" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/clubs/technical" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Technical Club
          </Link>
          <Link 
            to="/clubs/sports" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Sports Club
          </Link>
          <Link 
            to="/clubs/hobby" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Hobby Club
          </Link>
          <Link 
            to="/clubs/cultural" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Cultural Club
          </Link>
          <Link 
            to="/results" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Results
          </Link>
          <Link 
            to="/contact" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="mt-2">
            <User size={16} className="mr-2" />
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
