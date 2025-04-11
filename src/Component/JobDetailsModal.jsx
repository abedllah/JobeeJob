import React from 'react';
import VideoPlayer from './VideoPlayer';
import { BookmarkIcon } from '@heroicons/react/24/outline'; // <-- Heroicons

const JobDetailsModal = ({ job, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
    >
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{job.company}</h3>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">{job.title}</h2>
            <p className="text-gray-500 mt-1">{job.location}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            {/* Save Button with Icon */}
            <button className="flex items-center mt-3 gap-1 text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-sm">
              <BookmarkIcon className="h-5 w-5" />
              Save
            </button>
            {/* Easy Apply Button */}
            <button className="bg-green-100 mr-4 mt-3 text-green-700 font-medium px-4 py-2 rounded-md text-sm">
              ⚡ Easy Apply
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 text-gray-700 text-sm whitespace-pre-line">
          {job.description}
        </div>

        {/* Job Info Section */}
        <div className="mt-6 text-sm text-gray-700">
          <p><strong>Job Types:</strong> {job.type}</p>
          <p><strong>Pay:</strong> {job.salary}</p>
          <p><strong>Schedule:</strong> {job.schedule}</p>
          <p><strong>Work Location:</strong> {job.location}</p>
        </div>

        {/* Company Overview */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Company Overview</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Size:</strong> {job.companyInfo.size}</li>
            <li><strong>Founded:</strong> {job.companyInfo.founded}</li>
            <li><strong>Type:</strong> {job.companyInfo.type}</li>
            <li><strong>Industry:</strong> {job.companyInfo.industry}</li>
            <li><strong>Sector:</strong> {job.companyInfo.sector}</li>
            <li><strong>Revenue:</strong> {job.companyInfo.revenue}</li>
          </ul>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
