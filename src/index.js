import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Component/Navbar';
import CreatePost from './Component/CreatePost';
import JobListings from './Component/JobListings';

// Bowl de gauche (Suggestions)
const LeftBowl = () => {
  const suggestions = [
    { name: "Tech Community", icon: "💻", members: "12.5k" },
    { name: "Design Hub", icon: "🎨", members: "8.7k" },
    { name: "Startup Founders", icon: "🚀", members: "5.3k" },
    { name: "Remote Jobs", icon: "🌍", members: "22.1k" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow sticky top-4 h-fit">
      <h2 className="font-semibold text-lg mb-4 flex items-center">
        <span className="mr-2">🏷️</span> Suggested Bowls
      </h2>
      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </div>
            <span className="text-xs text-gray-500">{item.members}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Bowl de droite (Publicités + Autre contenu)
const RightBowl = () => {
  const ads = [
    { title: "Premium Tools", content: "Boost your productivity", cta: "Try now" },
    { title: "Tech Conference", content: "Early bird tickets 50% off", cta: "Register" },
  ];

  const trending = [
    { tag: "#webdev", posts: "15.2k" },
    { tag: "#career", posts: "8.7k" },
    { tag: "#reactjs", posts: "12.1k" },
  ];

  return (
    <div className="space-y-4 sticky top-4 h-fit">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-4">Sponsored</h2>
        <div className="space-y-3">
          {ads.map((ad, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <h3 className="font-medium">{ad.title}</h3>
              <p className="text-sm text-gray-600 my-1">{ad.content}</p>
              <button className="text-sm text-green-600 hover:text-green-800">
                {ad.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-4">Trending Now</h2>
        <ul className="space-y-2">
          {trending.map((item, index) => (
            <li key={index} className="hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <div className="font-medium">{item.tag}</div>
              <div className="text-xs text-gray-500">{item.posts} posts</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Rendu principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="flex gap-4 p-4 max-w-7xl mx-auto">
      {/* Colonne gauche - Bowl des suggestions (20%) */}
      <div className="w-1/5">
        <LeftBowl />
      </div>
      
      {/* Colonne centrale - Contenu principal (60%) */}
      <div className="w-3/5 space-y-4">
        <CreatePost />
        <JobListings />
      </div>
      
      {/* Colonne droite - Bowl des pubs/trends (20%) */}
      <div className="w-1/5">
        <RightBowl />
      </div>
    </div>
  </React.StrictMode>
);