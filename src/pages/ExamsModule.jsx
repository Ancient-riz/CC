import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { entranceExams } from '../data/careerData';
import { ArrowLeft, Search, Filter, Calendar, ExternalLink, BookOpen, Users, Clock } from 'lucide-react';

const ExamsModule = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all exams from all streams
  const allExams = Object.entries(entranceExams).flatMap(([stream, exams]) =>
    exams.map(exam => ({ ...exam, stream }))
  );

  // Filter exams based on selected criteria
  const filteredExams = allExams.filter(exam => {
    const matchesStream = selectedStream === 'all' || exam.stream === selectedStream;
    const matchesLevel = selectedLevel === 'all' || exam.level === selectedLevel;
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStream && matchesLevel && matchesSearch;
  });

  const streamOptions = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'arts', label: 'Arts' }
  ];

  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'UG', label: 'Undergraduate' },
    { value: 'PG', label: 'Postgraduate' },
    { value: 'After Class 12', label: 'After Class 12' },
    { value: 'Any Graduate', label: 'Any Graduate' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/dashboard"
              className="flex items-center text-blue-600 hover:text-blue-700 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-blue-600">Career Canvas</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entrance Exams Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive information about entrance exams across all streams and levels. 
            Find exam dates, eligibility, syllabus, and application links.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search exams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Stream Filter */}
            <div className="md:w-48">
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {streamOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="md:w-48">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {levelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredExams.length} exam{filteredExams.length !== 1 ? 's' : ''}
            {selectedStream !== 'all' && ` in ${streamOptions.find(s => s.value === selectedStream)?.label}`}
            {selectedLevel !== 'all' && ` for ${levelOptions.find(l => l.value === selectedLevel)?.label}`}
          </p>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExams.map((exam, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Exam Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {exam.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {exam.level}
                      </span>
                      <span className="capitalize px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {exam.stream}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{exam.dates}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{exam.description}</p>
              </div>

              {/* Exam Details */}
              <div className="p-6 space-y-4">
                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eligibility Criteria</h4>
                  <p className="text-sm text-gray-600">{exam.eligibility}</p>
                </div>

                {/* Syllabus */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Syllabus</h4>
                  <div className="flex flex-wrap gap-2">
                    {exam.syllabus.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={exam.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Official Website
                  </a>
                  <Link
                    to="/ai-assistant"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Ask AI About This Exam
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No exams found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find relevant exams.
            </p>
            <button
              onClick={() => {
                setSelectedStream('all');
                setSelectedLevel('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Need More Help?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/ai-assistant"
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:shadow-md transition-shadow"
            >
              <Users className="w-4 h-4 mr-2" />
              Ask AI Assistant
            </Link>
            <Link
              to="/roadmap"
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:shadow-md transition-shadow"
            >
              <Clock className="w-4 h-4 mr-2" />
              Create Study Roadmap
            </Link>
            <Link
              to="/institutions"
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Find Institutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsModule;