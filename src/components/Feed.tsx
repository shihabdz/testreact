import React from 'react';
import Navbar from './Navbar';
import Stories from './Stories';
import Post from './Post';
import Suggestions from './Suggestions';

const posts = [
  {
    id: 1,
    username: 'photography_art',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=800&fit=crop',
    caption: 'Beautiful sunset at the beach 🌅 #photography #nature',
    likes: 1234,
  },
  {
    id: 2,
    username: 'foodie_adventures',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=1200&h=800&fit=crop',
    caption: 'Delicious homemade pasta 🍝 #foodie #cooking',
    likes: 856,
  },
];

export default function Feed() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-5xl mx-auto pt-20 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Stories />
          
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
                alt="Your profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">your_username</div>
                <div className="text-gray-500 text-sm">Your Name</div>
              </div>
            </div>
            
            <Suggestions />
          </div>
        </div>
      </main>
    </div>
  );
}