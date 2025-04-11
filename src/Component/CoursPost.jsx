import VideoPlayer from './VideoPlayer';
import { HeartIcon, ShareIcon, BookmarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const CoursPost = () => {
  const courses = [
    {
      id: 1,
      title: "PHP Full Course for non-haters 🐘",
      instructor: {
        name: "Bro Code",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        specialty: "Développeuse Fullstack"
      },
      description: "Apprenez à maîtriser les hooks React (useState, useEffect, useContext, etc.) à travers des exemples concrets.",
      duration: "2h 15min",
      level: "Intermédiaire",
      posted: "5 jours ago",
      videoUrl: "https://youtu.be/zZ6vybT1HQs?si=GyUZwL9JokKyx8js",
      likes: 124,
      comments: 23,
      saved: false
    },
    {
      id: 2,
      title: "100+ JavaScript Concepts you Need to Know",
      instructor: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        specialty: "Backend Engineer"
      },
      description: "Développez une API complète avec Node.js, Express et MongoDB avec les bonnes pratiques.",
      duration: "3h 30min",
      level: "Débutant",
      posted: "1 semaine ago",
      videoUrl: "https://youtu.be/lkIFF4maKMU?si=4O-RGhsW6mk6s_m0",
      likes: 89,
      comments: 15,
      saved: true
    },
    {
      id: 3,
      title: "Getting started with AWS Transfer Family Web App | Amazon Web Services",
      instructor: {
        name: "Amazon Web Services",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        specialty: "UI/UX Designer"
      },
      description: "Getting started with AWS Transfer Family Web App | Amazon Web Services",
      duration: "1h 45min",
      level: "Tous niveaux",
      posted: "2 jours ago",
      videoUrl: "https://youtu.be/Ie9M0qBGrCE?si=-UjKZrMMoqlwvs6m",
      likes: 215,
      comments: 42,
      saved: false
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Cours Recommandés</h2>
      
      <div className="space-y-8">
        {courses.map((course) => (
          <div key={course.id} className="border-b border-gray-200 pb-8 last:border-0">
            {/* En-tête avec profil du formateur */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{course.instructor.name}</h3>
                <p className="text-xs text-gray-500">{course.instructor.specialty}</p>
              </div>
            </div>

            {/* Titre et description */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>

            {/* Métadonnées */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span>⏱️ {course.duration}</span>
              <span>•</span>
              <span>📊 Niveau: {course.level}</span>
            </div>

            {/* Lecteur vidéo */}
            <div className="mt-4 rounded-lg overflow-hidden">
              <VideoPlayer 
                url={course.videoUrl} 
                title={course.title}
                height="400px"
              />
            </div>

            {/* Interactions sociales */}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                  <HeartIcon className="h-5 w-5" />
                  <span>{course.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span>{course.comments}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                  <ShareIcon className="h-5 w-5" />
                </button>
              </div>
              
              <button className={`flex items-center space-x-1 ${course.saved ? 'text-indigo-600' : 'text-gray-500'}`}>
                <BookmarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-2 text-xs text-gray-400">
              Publié {course.posted}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursPost;