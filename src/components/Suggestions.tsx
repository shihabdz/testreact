import React from 'react';

const suggestions = [
  { id: 1, username: 'tech_enthusiast', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
  { id: 2, username: 'travel_adventures', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop' },
  { id: 3, username: 'food_lover', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop' },
];

export default function Suggestions() {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-semibold">Suggestions For You</span>
        <button className="text-sm font-semibold">See All</button>
      </div>

      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3">
            <img
              src={suggestion.image}
              alt={suggestion.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-sm">{suggestion.username}</div>
              <div className="text-xs text-gray-500">Suggested for you</div>
            </div>
          </div>
          <button className="text-sm font-semibold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}