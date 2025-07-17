import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pgStreams } from '../data/pgData';
import { ArrowLeft, Search, Filter, GraduationCap, Clock, MapPin, DollarSign, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';

const PGPrograms = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPrograms, setExpandedPrograms] = useState({});

  // Flatten all programs from all streams
  const allPrograms = Object.values(pgStreams).flatMap(stream =>
    stream.categories.flatMap(category =>
      category.programs.map(program => ({
        ...program,
        stream: stream.id,
        streamName: stream.name,
        category: category.name
      }))
    )
  );

  // Filter programs based on selected criteria
  const filteredPrograms = allPrograms.filter(program => {
    const matchesStream = selectedStream === 'all' || program.stream === selectedStream;
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesStream && matchesCategory && matchesSearch;
  });

  const streamOptions = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science & Technology' },
    { value: 'medical', label: 'Medical & Health Sciences' },
    { value: 'commerce', label: 'Commerce & Management' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'law', label: 'Law' },
    { value: 'design', label: 'Design & Architecture' }
  ];

  // Get unique categories for filter
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...Array.from(new Set(allPrograms.map(p => p.category))).map(cat => ({
      value: cat,
      label: cat
    }))
  ];

  const toggleProgramExpansion = (programName) => {
    setExpandedPrograms(prev => ({
      ...prev,
      [programName]: !prev[programName]
    }));
  };

  const getStreamColor = (streamId) => {
    switch (streamId) {
      case 'science': return 'from-green-400 to-blue-500';
      case 'medical': return 'from-red-400 to-pink-500';
      case 'commerce': return 'from-yellow-400 to-orange-500';
      case 'arts': return 'from-purple-400 to-pink-500';
      case 'law': return 'from-indigo-400 to-purple-500';
      case 'design': return 'from-pink-400 to-rose-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/pg-dashboard"
              className="flex items-center text-purple-400 hover:text-purple-300 mr-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to PG Dashboard
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
            PG Programs & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Specializations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore comprehensive postgraduate degree programs across all streams. 
            Find detailed information about specializations, duration, fees, top colleges, and career prospects.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search PG programs and specializations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Stream Filter */}
            <div className="md:w-48">
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {streamOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categoryOptions.map(option => (
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
            Showing {filteredPrograms.length} PG program{filteredPrograms.length !== 1 ? 's' : ''}
            {selectedStream !== 'all' && ` in ${streamOptions.find(s => s.value === selectedStream)?.label}`}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrograms.map((program, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 overflow-hidden hover:border-purple-400/40 transition-all duration-300">
              {/* Program Header */}
              <div className="p-6 border-b border-purple-500/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{program.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStreamColor(program.stream)} text-white`}>
                        {program.streamName}
                      </span>
                      <span className="px-2 py-1 bg-gray-600/50 text-gray-300 rounded-full text-xs font-medium">
                        {program.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{program.averageFees}</span>
                  </div>
                </div>
              </div>

              {/* Program Details */}
              <div className="p-6 space-y-4">
                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Eligibility</h4>
                  <p className="text-gray-300 text-sm">{program.eligibility}</p>
                </div>

                {/* Specializations */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">Specializations</h4>
                    <button
                      onClick={() => toggleProgramExpansion(program.name)}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {expandedPrograms[program.name] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(expandedPrograms[program.name] ? program.specializations : program.specializations.slice(0, 4)).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                    {!expandedPrograms[program.name] && program.specializations.length > 4 && (
                      <span className="px-3 py-1 bg-gray-600/50 text-gray-400 rounded-full text-xs font-medium">
                        +{program.specializations.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Colleges */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Top Colleges</h4>
                  <div className="text-sm text-gray-300">
                    {program.topColleges.slice(0, 3).join(', ')}
                    {program.topColleges.length > 3 && '...'}
                  </div>
                </div>

                {/* Career Options */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Career Options</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.careerOptions.map((career, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link
                    to="/institutions"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Find Colleges
                  </Link>
                  <Link
                    to="/roadmap"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    Create Roadmap
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <GraduationCap className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No PG programs found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your filters or search terms to find relevant programs.
            </p>
            <button
              onClick={() => {
                setSelectedStream('all');
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Stream Overview */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎓 PG Programs by Stream
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(pgStreams).map((stream) => (
              <div key={stream.id} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${stream.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{stream.icon}</span>
                </div>
                <h4 className="font-semibold text-white mb-2">{stream.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{stream.description}</p>
                <div className="text-2xl font-bold text-cyan-400">
                  {stream.categories.reduce((total, cat) => total + cat.programs.length, 0)}
                </div>
                <div className="text-gray-400 text-sm">Programs</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGPrograms;