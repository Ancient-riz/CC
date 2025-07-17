import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pgCareerPaths } from '../data/pgData';
import { ArrowLeft, Search, Target, TrendingUp, Users, Building, Award, DollarSign, Briefcase } from 'lucide-react';

const PGCareers = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all career paths from all streams
  const allCareerPaths = Object.entries(pgCareerPaths).flatMap(([stream, paths]) =>
    paths.map(path => ({ ...path, stream }))
  );

  const filteredPaths = allCareerPaths.filter(path => {
    const matchesStream = selectedStream === 'all' || path.stream === selectedStream;
    const matchesSearch = path.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.roles.some(role => role.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesStream && matchesSearch;
  });

  const streamOptions = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science & Technology' },
    { value: 'commerce', label: 'Commerce & Management' },
    { value: 'arts', label: 'Arts & Humanities' }
  ];

  const getStreamColor = (stream) => {
    switch (stream) {
      case 'science': return 'from-green-400 to-blue-500';
      case 'commerce': return 'from-yellow-400 to-orange-500';
      case 'arts': return 'from-purple-400 to-pink-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const careerGoals = [
    {
      goal: 'Policy Analyst',
      description: 'Analyze government policies and their impact on society',
      suggestedPGs: ['MA Public Policy', 'MA Political Science', 'MBA Public Administration'],
      skills: ['Policy Research', 'Data Analysis', 'Report Writing', 'Government Processes'],
      sectors: ['Government', 'Think Tanks', 'NGOs', 'International Organizations']
    },
    {
      goal: 'Data Scientist',
      description: 'Extract insights from complex datasets using advanced analytics',
      suggestedPGs: ['M.Sc Data Science', 'M.Tech AI/ML', 'MBA Analytics'],
      skills: ['Python/R', 'Machine Learning', 'Statistics', 'Business Understanding'],
      sectors: ['Tech Companies', 'Consulting', 'Finance', 'Healthcare']
    },
    {
      goal: 'Research Scientist',
      description: 'Conduct advanced research in specialized scientific fields',
      suggestedPGs: ['M.Sc + PhD', 'M.Tech + PhD', 'Integrated PhD'],
      skills: ['Research Methodology', 'Technical Writing', 'Lab Skills', 'Innovation'],
      sectors: ['Universities', 'Research Institutes', 'R&D Labs', 'Government Labs']
    },
    {
      goal: 'Investment Banker',
      description: 'Provide financial advisory services and manage investments',
      suggestedPGs: ['MBA Finance', 'M.Com Finance', 'CFA'],
      skills: ['Financial Modeling', 'Valuation', 'Market Analysis', 'Client Management'],
      sectors: ['Investment Banks', 'Private Equity', 'Hedge Funds', 'Corporate Finance']
    }
  ];

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
            Career Paths After <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">PG</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover professional paths that open up after your postgraduate specialization. 
            Explore opportunities across academic, research, government, and private sectors.
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
                  placeholder="Search career paths..."
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
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">🎯 Field-wise Career Mapping</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPaths.map((path, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{path.path}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStreamColor(path.stream)} text-white`}>
                      {streamOptions.find(s => s.value === path.stream)?.label || path.stream}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{path.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-2">Key Roles</h5>
                  <div className="flex flex-wrap gap-2">
                    {path.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-2">Organizations</h5>
                  <div className="text-sm text-gray-300">
                    {path.organizations.join(', ')}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/roadmap"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Create Roadmap
                  </Link>
                  <Link
                    to="/ai-assistant"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    Ask AI
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goal-based Suggestions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">🎯 "I want to be a..." Navigator</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {careerGoals.map((goal, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
                <h4 className="text-lg font-bold text-white mb-2">{goal.goal}</h4>
                <p className="text-gray-300 text-sm mb-4">{goal.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-2">Suggested PG Programs</h5>
                  <div className="flex flex-wrap gap-2">
                    {goal.suggestedPGs.map((pg, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                      >
                        {pg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-2">Required Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {goal.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-2">Target Sectors</h5>
                  <div className="text-sm text-gray-300">
                    {goal.sectors.join(', ')}
                  </div>
                </div>

                <Link
                  to="/roadmap"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Plan My Path
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Insights */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-8 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            💰 PG Career Salary Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">₹8-25L</div>
              <div className="text-gray-300">Corporate Roles</div>
              <div className="text-sm text-gray-400">MBA, M.Tech graduates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">₹6-15L</div>
              <div className="text-gray-300">Academic Positions</div>
              <div className="text-sm text-gray-400">Assistant Professor level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">₹7-20L</div>
              <div className="text-gray-300">Government Jobs</div>
              <div className="text-sm text-gray-400">Scientific Officer, Policy roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">₹5-30L</div>
              <div className="text-gray-300">Research Roles</div>
              <div className="text-sm text-gray-400">Industry R&D, Labs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGCareers;