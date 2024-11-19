import React from 'react';

const stories = [
  { id: 1, username: 'your_story', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop' },
  { id: 2, username: 'john_doe', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
  { id: 3, username: 'jane_smith', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop' },
  { id: 4, username: 'alex_wilson', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
  { id: 5, username: 'sarah_parker', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop' },
];

export default function Stories() {
  return (
    <div className="flex space-x-4 p-4 bg-white border border-gray-200 rounded-lg overflow-x-auto">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
          <div className="w-16 h-16 rounded-full ring-2 ring-pink-500 p-1">
            <img
              src={story.image}
              alt={story.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-gray-600">{story.username}</span>
        </div>
      ))}
    </div>
  );
}