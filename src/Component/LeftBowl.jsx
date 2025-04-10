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

export default LeftBowl;