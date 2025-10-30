import { User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'Marketplace', key: 'marketplace' },
    { name: 'Sponsor', key: 'sponsor' },
    { name: 'Planter', key: 'planter' },
    { name: 'About', key: 'about' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow transition-shadow duration-300 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black group">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="inline-block animate-bounce-slow group-hover:animate-shimmer">
                <rect width="12" height="32" fill="black" rx="2"/>
                <rect x="16" y="0" width="12" height="16" fill="black" rx="2"/>
                <rect x="16" y="20" width="12" height="12" fill="black" rx="2"/>
              </svg>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`relative text-sm font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:scale-x-0 after:bg-teal-500 after:transition-transform after:origin-left hover:after:scale-x-100 hover:after:origin-left hover:after:h-1 after:rounded-full ${
                  currentPage === item.key
                    ? 'text-teal-600 after:scale-x-100 after:bg-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200 border border-gray-300 rounded-full hover:shadow hover:-translate-y-0.5 active:scale-95">
              Login
            </button>
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200 rounded-full hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Sign Up
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 transition-colors border border-gray-300 rounded-full hover:shadow focus:scale-110 animate-ring-pulse">
              <User className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-2 group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`w-6 h-5 flex flex-col justify-between transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-200 ${mobileMenuOpen ? 'bg-teal-600' : ''}`}></span>
                <span className="w-full h-0.5 bg-gray-700"></span>
                <span className="w-full h-0.5 bg-gray-700"></span>
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`relative text-left text-sm font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:scale-x-0 after:bg-teal-500 after:transition-transform after:origin-left hover:after:scale-x-100 hover:after:origin-left hover:after:h-1 after:rounded-full ${
                    currentPage === item.key
                      ? 'text-teal-600 after:scale-x-100 after:bg-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full text-left hover:border-teal-600 hover:bg-teal-50 transition-colors">Login</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full text-left hover:bg-teal-700 transition-colors">Sign Up</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
