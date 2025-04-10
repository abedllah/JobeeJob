import React from 'react'
import Navbar from '../Component/Navbar';
import CreatePost from '../Component/CreatePost';
import JobListings from '../Component/JobListings';
import RightBowl from '../Component/RightBowl'
import LeftBowl from '../Component/LeftBowl'

export default function CommunityPage() {
    return (
        <div className="App">
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
        </div>
      );
}
