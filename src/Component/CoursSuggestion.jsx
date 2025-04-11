import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const CoursSuggestion = () => {
  const suggestedCourses = [
    {
      id: 1,
      title: "JavaScript Moderne",
      instructor: "Alex Dupont",
      thumbnail: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
      duration: "2h 30min",
      level: "Débutant"
    },
    {
      id: 2,
      title: "React Native Fondamentaux",
      instructor: "Sophie Martin",
      thumbnail: "https://i.ytimg.com/vi/obH0Po_RdWk/maxresdefault.jpg",
      duration: "3h 15min",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "Node.js Avancé",
      instructor: "Thomas Leroy",
      thumbnail: "https://i.ytimg.com/vi/RLtyhwFtXQA/maxresdefault.jpg",
      duration: "4h 10min",
      level: "Avancé"
    },
    {
      id: 4,
      title: "UI/UX Design",
      instructor: "Emma Wilson",
      thumbnail: "https://i.ytimg.com/vi/XYIh7qj5mK8/maxresdefault.jpg",
      duration: "2h 45min",
      level: "Tous niveaux"
    },
    {
      id: 5,
      title: "Python pour Data Science",
      instructor: "Mohamed Ali",
      thumbnail: "https://i.ytimg.com/vi/LhazK3a1X2s/maxresdefault.jpg",
      duration: "5h 20min",
      level: "Intermédiaire"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Suggestions pour vous</h2>
      
      <div className="relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-4">
            {suggestedCourses.map((course) => (
              <div key={course.id} className="flex-shrink-0 w-64">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                      <span>⏱️ {course.duration}</span>
                      <span>📊 {course.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="mt-4">
        <button className="w-full py-2 bg-[#14a970] hover:bg-[#11875f] text-white rounded-md font-medium transition-colors">
          Voir tous les cours
        </button>
      </div>
    </div>
  );
}

export default CoursSuggestion;