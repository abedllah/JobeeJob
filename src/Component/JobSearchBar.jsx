import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

export default function JobSearchBar() {
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', jobQuery, 'in', location);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative flex-grow flex bg-gray-100 rounded-full overflow-hidden">
          {/* Job search input */}
          <div className="flex-grow flex items-center">
            <div className="absolute left-3 flex items-center pointer-events-none text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Find your perfect job"
              className="w-full py-3 pl-10 pr-2 bg-transparent focus:outline-none"
              value={jobQuery}
              onChange={(e) => setJobQuery(e.target.value)}
            />
          </div>
          
          {/* Divider */}
          <div className="w-px h-6 self-center bg-gray-300 mx-2"></div>
          
          {/* Location input */}
          <div className="flex items-center">
            <div className="flex items-center pointer-events-none text-gray-400 pl-2">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              placeholder="Location"
              className="py-3 pl-2 pr-4 bg-transparent focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}