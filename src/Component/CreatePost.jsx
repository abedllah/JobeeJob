import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const CreatePost = () => {
  return (
    <div className="bg-white rounded-lg shadow w-full">
      {/* Barre de recherche */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Rechercher des posts..."
          />
        </div>
      </div>
      
      {/* Contenu existant */}
      <div className="p-4">
        <h2 className="font-semibold mb-2">Post anonymously as</h2>
        <p className="text-sm text-gray-600 mb-4">attends Stanford Graduate School of Business</p>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200">
          Create post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;