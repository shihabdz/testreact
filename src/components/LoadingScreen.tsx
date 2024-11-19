import React from 'react';
import { Instagram } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <div className="animate-pulse">
        <Instagram className="w-16 h-16 text-gray-900" />
      </div>
      <div className="mt-8 h-1 w-48 bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-gray-900 animate-loading-bar" />
      </div>
    </div>
  );
}