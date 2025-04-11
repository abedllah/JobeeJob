import { useState } from 'react';
import InternshipDetailsModal from './InternshipDetailsModal';
import { BsBookmark } from 'react-icons/bs';

const InternshipList = () => {

  const [selectedInternship, setSelectedInternship] = useState(null);

  const Internships = [
    {
      id: 1,
      title: "Software Development Activity",
      company: "Netheart Technology",
      location: "Remote",
      type: "Temporary, Internship",
      salary: "Up to $1.00 per year",
      schedule: "Choose your own hours",
      videoUrl: "https://youtu.be/s2skans2dP4?si=ejFBmkq5EvBG_f0w", // add video URL if available
      posted: "2 days ago",
      description: `About GoMode

GoMode helps users achieve big goals by breaking them into benchmarks, then tasks, and assigning those tasks to AI agents that either complete or guide the user through them. It's a goal execution platform powered by AI—part productivity system, part agent marketplace, and all user-driven.

We already have a functioning base-layer Angular web dashboard and are building out core features for launch. You'll help bring that dashboard to life with better functionality, tighter UI integration, and new interactive views.

About the Role

We’re looking for a contract Angular developer who can help expand and polish our existing web platform. This role is ideal for someone who thrives in early-stage projects, is comfortable building UI components from Figma, and can work closely with UX designers and product leadership.

What You'll Do

Expand functionality on our existing Angular-based dashboard
Build reusable UI components and integrate them with our Figma design system
Implement responsive views and cross-platform behaviors
Collaborate with the UX designer to match visual designs accurately
Help with performance tuning, bug fixing, and user flow optimization
Work in sprints, delivering clean, modular code that scales with product growth
What We're Looking For

3+ years experience in Angular (v12+) and TypeScript
Ability to take Figma designs and implement pixel-perfect, responsive components
Solid understanding of modern frontend principles (state management, modularity)
Experience integrating web apps with APIs and user session flows
Startup mentality: fast, independent, accountable
Bonus Points

Experience with Firebase or Node.js
Background working in productivity tools or AI-powered apps
Familiarity with component testing frameworks and CI/CD flows
Why Join Us

Remote-first culture and async flexibility
Contribute to a real product with real users
Opportunity to shape a clean, powerful dashboard from the ground up
Contract-based compensation with long-term opportunity if it's a great fit
Job Types: Full-time, Part-time, Contract

Pay: $30.00 - $45.00 per hour

Expected hours: 10 – 60 per week

Compensation Package:`,
      companyInfo: {
        size: "1 to 50 Employees",
        founded: "2021",
        type: "Company - Private",
        industry: "Investment & Asset Management",
        sector: "Financial Services",
        revenue: "Unknown / Non-Applicable"
      }
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "CodeCraft Co.",
      location: "Hybrid (Casablanca, MA)",
      type: "Internship",
      salary: "$300/month",
      schedule: "Flexible - 20hrs/week",
      videoUrl: "",
      posted: "1 week ago",
      description: `We're looking for a frontend intern passionate about React and modern UI frameworks. 
  You'll work on our core dashboard product, build reusable components, and learn from a senior dev team.`,
      companyInfo: {
        size: "51 to 200 Employees",
        founded: "2018",
        type: "Startup",
        industry: "SaaS",
        sector: "Technology",
        revenue: "$1M to $5M (USD)"
      }
    },
    {
      id: 3,
      title: "Backend Node.js Developer",
      company: "DevWorks Inc.",
      location: "Remote",
      type: "Full-Time",
      salary: "$40,000 - $55,000/year",
      schedule: "Mon–Fri, 9am–5pm EST",
      videoUrl: "",
      posted: "3 days ago",
      description: `Join our remote team as a Node.js backend developer. 
  We're building high-performance APIs for our mobile-first platform. 
  Applicants should be comfortable with PostgreSQL, Redis, and unit testing.`,
      companyInfo: {
        size: "201 to 500 Employees",
        founded: "2015",
        type: "Company - Public",
        industry: "E-Commerce",
        sector: "Retail & Wholesale",
        revenue: "$10M to $50M (USD)"
      }
    }
  ];  

  return (
    <div className="bg-white rounded-xl border-2 border-gray-300 shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Internships</h2>
  
      <div className="space-y-0">
        {Internships.map((internship, index) => (
          <div
            key={internship.id}
            className={`py-6 min-h-[200px] ${index !== 0 ? 'border-t-2 border-gray-300' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
                <p className="text-gray-600">{internship.company}</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 text-xl">
                <BsBookmark />
              </button>
            </div>
  
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span>📍 {internship.location}</span>
              <span>•</span>
              <span>💰 {internship.salary}</span>
              <span>•</span>
              <span>⏱️ {internship.type}</span>
            </div>
  
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-400">{internship.posted}</span>
              <button
                className="text-sm text-indigo-500 hover:underline flex items-center gap-1"
                onClick={() => setSelectedInternship(internship)}
              >
                Show More ↓
              </button>
            </div>
          </div>
        ))}
      </div>
  
      {selectedInternship && (
        <InternshipDetailsModal
        internship={selectedInternship}
          onClose={() => setSelectedInternship(null)}
        />
      )}
    </div>
  );
};

export default InternshipList;
