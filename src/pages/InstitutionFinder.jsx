import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allInstitutions, institutionsDatabase } from '../data/institutionsData';
import { ArrowLeft, Search, Filter, MapPin, Star, Users, GraduationCap, Building } from 'lucide-react';

const InstitutionFinder = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter institutions based on criteria
  const filteredInstitutions = useMemo(() => {
    let institutions = allInstitutions;

    // Filter by stream
    if (selectedStream !== 'all') {
      institutions = institutionsDatabase[selectedStream] || [];
    }

    // Filter by search term
    if (searchTerm) {
      institutions = institutions.filter(institution =>
        institution.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by state (basic implementation)
    if (selectedState !== 'all') {
      institutions = institutions.filter(institution =>
        institution.toLowerCase().includes(selectedState.toLowerCase())
      );
    }

    return institutions;
  }, [selectedStream, selectedState, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredInstitutions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInstitutions = filteredInstitutions.slice(startIndex, startIndex + itemsPerPage);

  const streamOptions = [
    { value: 'all', label: 'All Streams' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'medical', label: 'Medical' },
    { value: 'management', label: 'Management' },
    { value: 'law', label: 'Law' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'commerce', label: 'Commerce' }
  ];

  const stateOptions = [
    { value: 'all', label: 'All States' },
    { value: 'andhra pradesh', label: 'Andhra Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal pradesh', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'madhya pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'tamil nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'uttar pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west bengal', label: 'West Bengal' }
  ];

  const getInstitutionType = (name) => {
    if (name.includes('IIT') || name.includes('Indian Institute of Technology')) return 'Premier Institute';
    if (name.includes('NIT') || name.includes('National Institute of Technology')) return 'National Institute';
    if (name.includes('IIIT') || name.includes('International Institute of Information Technology')) return 'IIIT';
    if (name.includes('IIM') || name.includes('Indian Institute of Management')) return 'IIM';
    if (name.includes('AIIMS') || name.includes('All India Institute of Medical Sciences')) return 'AIIMS';
    if (name.includes('University')) return 'University';
    if (name.includes('College')) return 'College';
    if (name.includes('Institute')) return 'Institute';
    return 'Institution';
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Premier Institute': return 'bg-gold-100 text-gold-800 border-gold-200';
      case 'National Institute': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IIIT': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'IIM': return 'bg-green-100 text-green-800 border-green-200';
      case 'AIIMS': return 'bg-red-100 text-red-800 border-red-200';
      case 'University': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'College': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/dashboard"
              className="flex items-center text-purple-400 hover:text-purple-300 mr-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Career Canvas
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Institution <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Finder</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Discover from 45,000+ colleges and universities across India. Find the perfect institution for your academic journey.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-2" />
              <span>{allInstitutions.length.toLocaleString()} Institutions</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>All Streams Covered</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Pan India Coverage</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search institutions..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Stream Filter */}
            <div>
              <select
                value={selectedStream}
                onChange={(e) => {
                  setSelectedStream(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {streamOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {stateOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredInstitutions.length)} of {filteredInstitutions.length.toLocaleString()} institutions
          </p>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedInstitutions.map((institution, index) => {
            const type = getInstitutionType(institution);
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                {/* Institution Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white leading-tight flex-1 mr-3">
                      {institution}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(type)}`}>
                      {type}
                    </span>
                  </div>
                  
                  {/* Location (extracted from name) */}
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>
                      {institution.includes('Delhi') ? 'Delhi' :
                       institution.includes('Mumbai') ? 'Mumbai' :
                       institution.includes('Bangalore') ? 'Bangalore' :
                       institution.includes('Chennai') ? 'Chennai' :
                       institution.includes('Kolkata') ? 'Kolkata' :
                       institution.includes('Hyderabad') ? 'Hyderabad' :
                       institution.includes('Pune') ? 'Pune' :
                       institution.includes('Ahmedabad') ? 'Ahmedabad' :
                       'India'}
                    </span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                    <div className="flex items-center justify-center text-blue-400 mb-1">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Ranking</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {type === 'Premier Institute' ? 'Top 10' :
                       type === 'National Institute' ? 'Top 50' :
                       type === 'IIM' ? 'Top 20' :
                       type === 'AIIMS' ? 'Top 5' :
                       'Recognized'}
                    </div>
                  </div>
                  <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                    <div className="flex items-center justify-center text-green-400 mb-1">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Status</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {institution.includes('Government') || institution.includes('National') || 
                       institution.includes('IIT') || institution.includes('NIT') || 
                       institution.includes('IIIT') || institution.includes('IIM') || 
                       institution.includes('AIIMS') ? 'Government' : 'Private'}
                    </div>
                  </div>
                </div>

                {/* Stream Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {institution.includes('Engineering') || institution.includes('Technology') || institution.includes('IIT') || institution.includes('NIT') ? (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Engineering</span>
                    ) : null}
                    {institution.includes('Medical') || institution.includes('AIIMS') ? (
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">Medical</span>
                    ) : null}
                    {institution.includes('Management') || institution.includes('IIM') ? (
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Management</span>
                    ) : null}
                    {institution.includes('Law') ? (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Law</span>
                    ) : null}
                    {institution.includes('Arts') || institution.includes('Humanities') ? (
                      <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">Arts</span>
                    ) : null}
                    {institution.includes('Commerce') ? (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Commerce</span>
                    ) : null}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to="/ai-assistant"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/roadmap"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors text-sm"
                  >
                    Plan Path
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredInstitutions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Building className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No institutions found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your filters to find relevant institutions.
            </p>
            <button
              onClick={() => {
                setSelectedStream('all');
                setSelectedState('all');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Institution Database Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {institutionsDatabase.engineering.length.toLocaleString()}
              </div>
              <div className="text-gray-300">Engineering Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">
                {institutionsDatabase.medical.length.toLocaleString()}
              </div>
              <div className="text-gray-300">Medical Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {institutionsDatabase.management.length.toLocaleString()}
              </div>
              <div className="text-gray-300">Management Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {(institutionsDatabase.arts.length + institutionsDatabase.law.length + institutionsDatabase.commerce.length).toLocaleString()}
              </div>
              <div className="text-gray-300">Other Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionFinder;