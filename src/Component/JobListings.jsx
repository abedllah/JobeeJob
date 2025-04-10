import VideoPlayer from './VideoPlayer';

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      description: "We are looking for an experienced Software Engineer to join our team...",
      location: "San Francisco, CA",
      salary: "$120K - $160K",
      type: "Full-time",
      posted: "3 days ago",
      videoUrl: "https://youtu.be/s2skans2dP4?si=ejFBmkq5EvBG_f0w",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      description: "Seeking a Product Manager to lead our product development initiatives...",
      location: "New York, NY",
      salary: "$110K - $140K",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Creative Works",
      description: "Join our team to create beautiful and functional user interfaces.",
      location: "Remote",
      salary: "$90K - $120K",
      type: "Full-time",
      posted: "2 days ago",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Jobs</h2>
      
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                Save
              </button>
            </div>

            <p className="mt-2 text-gray-700">{job.description}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span>📍 {job.location}</span>
              <span>•</span>
              <span>💰 {job.salary}</span>
              <span>•</span>
              <span>⏱️ {job.type}</span>
            </div>

            {job.videoUrl && (
              <div className="mt-4">
                <VideoPlayer 
                  url={job.videoUrl} 
                  title={`${job.title} at ${job.company}`}
                  height="320px"
                />
              </div>
            )}

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-400">{job.posted}</span>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
