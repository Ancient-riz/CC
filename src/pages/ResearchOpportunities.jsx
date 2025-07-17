import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Lightbulb, GraduationCap, Globe, Award, DollarSign, Calendar, ExternalLink, Users } from 'lucide-react';

const ResearchOpportunities = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const opportunities = [
    // PhD in India
    {
      id: 1,
      title: 'PhD in Computer Science',
      institution: 'IIT Delhi',
      type: 'phd-india',
      country: 'india',
      duration: '3-5 years',
      funding: 'Full funding + ₹31,000/month',
      deadline: 'May 2024',
      description: 'Research in AI, Machine Learning, Computer Vision, and related areas.',
      eligibility: 'M.Tech/M.Sc with GATE/NET qualification',
      applicationProcess: 'Online application + Interview'
    },
    {
      id: 2,
      title: 'Integrated PhD in Life Sciences',
      institution: 'IISc Bangalore',
      type: 'integrated-phd',
      country: 'india',
      duration: '5 years',
      funding: 'Fellowship + Contingency',
      deadline: 'April 2024',
      description: 'Direct PhD after B.Sc in Biological Sciences.',
      eligibility: 'B.Sc with 60% marks + Entrance exam',
      applicationProcess: 'IISc entrance exam + Interview'
    },
    // PhD Abroad
    {
      id: 3,
      title: 'PhD in Data Science',
      institution: 'Stanford University',
      type: 'phd-abroad',
      country: 'usa',
      duration: '4-6 years',
      funding: 'Full funding + Stipend',
      deadline: 'December 2024',
      description: 'Research in machine learning, statistics, and computational methods.',
      eligibility: 'Master\'s degree + GRE + TOEFL',
      applicationProcess: 'Online application + SOP + LORs'
    },
    {
      id: 4,
      title: 'PhD in Engineering',
      institution: 'University of Cambridge',
      type: 'phd-abroad',
      country: 'uk',
      duration: '3-4 years',
      funding: 'Scholarship available',
      deadline: 'January 2025',
      description: 'Research in various engineering disciplines.',
      eligibility: 'Master\'s degree + IELTS',
      applicationProcess: 'Online application + Research proposal'
    },
    // Fellowships
    {
      id: 5,
      title: 'Prime Minister Research Fellowship (PMRF)',
      institution: 'IITs/IISc/NITs',
      type: 'fellowship',
      country: 'india',
      duration: '4 years',
      funding: '₹70,000-80,000/month',
      deadline: 'March 2024',
      description: 'Premier fellowship for PhD in science and technology.',
      eligibility: 'B.Tech/M.Sc with excellent academic record',
      applicationProcess: 'Online application + Interview'
    },
    {
      id: 6,
      title: 'CSIR-JRF Fellowship',
      institution: 'CSIR Labs',
      type: 'fellowship',
      country: 'india',
      duration: '5 years',
      funding: '₹31,000/month + HRA',
      deadline: 'Based on NET exam',
      description: 'Research fellowship in science and technology.',
      eligibility: 'CSIR-NET qualified',
      applicationProcess: 'CSIR-NET exam + Lab allocation'
    },
    {
      id: 7,
      title: 'Fulbright Fellowship',
      institution: 'US Universities',
      type: 'fellowship',
      country: 'usa',
      duration: '1-2 years',
      funding: 'Full funding',
      deadline: 'May 2024',
      description: 'Research and study opportunities in the US.',
      eligibility: 'Master\'s degree + Research proposal',
      applicationProcess: 'Fulbright application + Interview'
    },
    {
      id: 8,
      title: 'DAAD Scholarship',
      institution: 'German Universities',
      type: 'fellowship',
      country: 'germany',
      duration: '1-4 years',
      funding: '€850-1,200/month',
      deadline: 'October 2024',
      description: 'Study and research opportunities in Germany.',
      eligibility: 'Bachelor\'s/Master\'s degree',
      applicationProcess: 'DAAD portal application'
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesType = selectedType === 'all' || opp.type === selectedType;
    const matchesCountry = selectedCountry === 'all' || opp.country === selectedCountry;
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.institution.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesCountry && matchesSearch;
  });

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'phd-india', label: 'PhD in India' },
    { value: 'phd-abroad', label: 'PhD Abroad' },
    { value: 'integrated-phd', label: 'Integrated PhD' },
    { value: 'fellowship', label: 'Fellowships' }
  ];

  const countryOptions = [
    { value: 'all', label: 'All Countries' },
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'germany', label: 'Germany' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'phd-india': return 'bg-blue-100 text-blue-800';
      case 'phd-abroad': return 'bg-green-100 text-green-800';
      case 'integrated-phd': return 'bg-purple-100 text-purple-800';
      case 'fellowship': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
            Research & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">PhD Opportunities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore advanced academic, research, and doctoral opportunities in India and abroad. 
            Find PhD programs, fellowships, and research positions that match your interests.
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
                  placeholder="Search research opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="md:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {typeOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div className="md:w-48">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {countryOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{opportunity.title}</h3>
                  <p className="text-purple-300 text-sm font-medium">{opportunity.institution}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(opportunity.type)}`}>
                  {typeOptions.find(t => t.value === opportunity.type)?.label}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-4">{opportunity.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{opportunity.duration}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>{opportunity.funding}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Globe className="w-4 h-4 mr-1" />
                  <span className="capitalize">{opportunity.country}</span>
                </div>
                <div className="flex items-center text-red-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{opportunity.deadline}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Eligibility</h4>
                <p className="text-gray-300 text-sm">{opportunity.eligibility}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Application Process</h4>
                <p className="text-gray-300 text-sm">{opportunity.applicationProcess}</p>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/ai-assistant"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                >
                  Get Guidance
                </Link>
                <Link
                  to="/roadmap"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                >
                  Plan Path
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Research Tools */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-8 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🛠️ Research Tools & Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Lightbulb className="w-8 h-8 text-orange-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">SOP Writer</h4>
              <p className="text-gray-300 text-center text-sm">Get AI help for Statement of Purpose writing</p>
            </Link>
            
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Users className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Proposal Tips</h4>
              <p className="text-gray-300 text-center text-sm">Research proposal writing guidance</p>
            </Link>
            
            <Link
              to="/roadmap"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Award className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Research Timeline</h4>
              <p className="text-gray-300 text-center text-sm">Plan your research journey timeline</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchOpportunities;