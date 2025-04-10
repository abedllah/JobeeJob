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

export default RightBowl;