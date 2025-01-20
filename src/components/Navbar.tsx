import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/10 dark:bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/*<Car className="h-8 w-8 text-primary" />*/}
              <img
                  src={logo} // Replace with the actual path to your logo
                  alt="F.CHAR Logo"
                  className="h-10 w-10 object-contain" // Adjust size using Tailwind
              />
              <span className="text-xl font-bold text-gray-800 dark:text-white">F.CHAR RENT CAR</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/cars" className="nav-link">Nos véhicules</Link>
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 dark:bg-black/10 backdrop-blur-lg">
            <Link to="/" className="nav-link block">Home</Link>
            <Link to="/cars" className="nav-link block">Nos véhicules</Link>
          </div>
        </div>
      )}
    </nav>
  );
}