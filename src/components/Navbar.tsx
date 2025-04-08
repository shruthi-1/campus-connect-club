
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, User, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = (role: string) => {
    // This is a placeholder for actual login logic
    toast({
      title: `${role} Login`,
      description: `${role} login functionality will be implemented with backend.`,
      duration: 3000,
    });
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
          <Link to="/clubs" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Clubs
          </Link>
          <Link to="/results" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Results
          </Link>
          <Link to="/achievements" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Achievements
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-campus-secondary transition-colors">
            Contact
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline" className="gap-1">
                <User size={16} />
                <span>Login</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Login Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleLogin("Super Admin")}>
                Super Admin Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLogin("Staff")}>
                Staff Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLogin("Student")}>
                Student Login
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            to="/clubs" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Clubs
          </Link>
          <Link 
            to="/results" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Results
          </Link>
          <Link 
            to="/achievements" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Achievements
          </Link>
          <Link 
            to="/contact" 
            className="text-base font-medium p-2 hover:bg-campus-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="border-t pt-4 mt-2">
            <div className="text-base font-medium p-2">Login as:</div>
            <Button 
              variant="outline" 
              className="w-full justify-start mb-2"
              onClick={() => {
                handleLogin("Super Admin");
                setIsMenuOpen(false);
              }}
            >
              Super Admin Login
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start mb-2"
              onClick={() => {
                handleLogin("Staff");
                setIsMenuOpen(false);
              }}
            >
              Staff Login
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => {
                handleLogin("Student");
                setIsMenuOpen(false);
              }}
            >
              Student Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
