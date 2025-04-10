import { UsersIcon, HashtagIcon, FireIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const MyBowls = () => {
  const suggestions = [
    { name: "Tech", icon: <HashtagIcon className="h-5 w-5" />, members: "12.5k" },
    { name: "Startups", icon: <FireIcon className="h-5 w-5" />, members: "8.2k" },
    { name: "Design", icon: <UsersIcon className="h-5 w-5" />, members: "15.3k" },
    { name: "Education", icon: <AcademicCapIcon className="h-5 w-5" />, members: "5.7k" },
    { name: "Careers", icon: <BriefcaseIcon className="h-5 w-5" />, members: "22.1k" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow sticky top-4">
      <h2 className="font-semibold text-lg mb-4 flex items-center">
        <UsersIcon className="h-6 w-6 mr-2 text-green-600" />
        Suggested Bowls
      </h2>
      
      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
            <span className="text-xs text-gray-500">{item.members} members</span>
          </li>
        ))}
      </ul>
      
      <button className="mt-4 w-full text-green-600 hover:text-green-800 text-sm font-medium flex items-center justify-center">
        See all bowls
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default MyBowls;