import React from 'react';
import { Home, Search, PlusSquare, Heart, User, Instagram } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Instagram className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">Instagram</span>
          </div>
          
          <div className="hidden md:block flex-1 max-w-xs mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Home className="h-6 w-6 cursor-pointer" />
            <PlusSquare className="h-6 w-6 cursor-pointer" />
            <Heart className="h-6 w-6 cursor-pointer" />
            <User className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}