import { BellIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Partie gauche - Logo */}
          <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <span className="text-[#14a970]">Jobee</span>
            <span className="text-[#ffc108]">Jobs</span>
          </h1>          
          </div>
          
        {/* Partie centrale - Liens de navigation */}
        <div className="flex items-center space-x-6">
          <a href="/" className="text-base font-medium text-[#14a970] cursor-pointer relative group">
            Community
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc108] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="internships" className="text-base font-medium text-[#14a970] cursor-pointer relative group">
           Internships
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc108] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/jobs" className="text-base font-medium text-[#14a970] cursor-pointer relative group">
            Jobs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc108] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/courses" className="text-base font-medium text-[#14a970] cursor-pointer relative group">
          Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc108] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-base font-medium text-[#14a970] cursor-pointer relative group">
          Videos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc108] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
          
          {/* Partie droite - Icônes */}
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-[#14a970] transition-colors duration-200">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-[#14a970] transition-colors duration-200">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-[#14a970] transition-colors duration-200">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-[#14a970] transition-colors duration-200">
              <UserCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;