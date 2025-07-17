import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { careerProfiles } from '../data/careerData';
import { ArrowLeft, Search, Filter, Briefcase, DollarSign, TrendingUp, Users, Star, ChevronRight } from 'lucide-react';

const CareerExplorer = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedDemand, setSelectedDemand] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter careers based on selected criteria
  const filteredCareers = careerProfiles.filter(career => {
    const matchesStream = selectedStream === 'all' || career.stream === selectedStream;
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDemand = selectedDemand === 'all' || career.demandLevel === selectedDemand;
    
    return matchesStream && matchesSearch && matchesDemand;
  });

  const streamOptions = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'arts', label: 'Arts' }
  ];

  const demandOptions = [
    { value: 'all', label: 'All Demand Levels' },
    { value: 'Very High', label: 'Very High' },
    { value: 'High', label: 'High' },
    { value: 'Moderate', label: 'Moderate' }
  ];

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'Very High': return 'text-green-600 bg-green-50';
      case 'High': return 'text-blue-600 bg-blue-50';
      case 'Moderate': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

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
            Career Explorer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting career opportunities across all streams. Explore job roles, 
            salary ranges, required skills, and growth prospects to find your perfect career match.
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
                  placeholder="Search careers..."
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

            {/* Demand Filter */}
            <div className="md:w-48">
              <select
                value={selectedDemand}
                onChange={(e) => setSelectedDemand(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {demandOptions.map(option => (
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
            Showing {filteredCareers.length} career{filteredCareers.length !== 1 ? 's' : ''}
            {selectedStream !== 'all' && ` in ${streamOptions.find(s => s.value === selectedStream)?.label}`}
          </p>
        </div>

        {/* Careers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCareers.map((career, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Career Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {career.stream}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(career.demandLevel)}`}>
                        {career.demandLevel} Demand
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{career.salaryRange}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </div>

              {/* Career Details */}
              <div className="p-6 space-y-4">
                {/* Required Degrees */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Required Education</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.requiredDegrees.map((degree, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {degree}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Required */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skillsRequired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Employers */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Top Employers</h4>
                  <div className="text-sm text-gray-600">
                    {career.topEmployers.slice(0, 3).join(', ')}
                    {career.topEmployers.length > 3 && '...'}
                  </div>
                </div>

                {/* Personality Fit */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personality Fit</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.personalityFit.map((trait, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Path */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Career Progression</h4>
                  <div className="text-sm text-gray-600">
                    {career.careerPath.join(' → ')}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link
                    to="/roadmap"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Create Roadmap
                  </Link>
                  <Link
                    to="/skills"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Learn Skills
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Briefcase className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No careers found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find relevant careers.
            </p>
            <button
              onClick={() => {
                setSelectedStream('all');
                setSelectedDemand('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Career Quiz CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Career Suits You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our comprehensive aptitude and personality assessment to discover careers 
              that match your interests, skills, and personality traits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/aptitude-test"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Take Career Assessment
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/ai-assistant"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 border border-gray-300 transition-colors"
              >
                Ask AI Career Counselor
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExplorer;