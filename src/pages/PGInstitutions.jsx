import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Building, Globe, Star, MapPin, DollarSign, Calendar, Users, Award } from 'lucide-react';

const PGInstitutions = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const institutions = [
    // Indian Institutions
    {
      id: 1,
      name: 'Indian Institute of Science (IISc)',
      location: 'Bangalore, India',
      country: 'india',
      domain: 'science',
      ranking: '1',
      type: 'Research Institute',
      programs: ['M.Sc', 'M.Tech', 'PhD', 'Integrated PhD'],
      fees: '₹50,000-2 lakhs',
      deadline: 'April 2024',
      description: 'Premier research institute for science and engineering.',
      specialties: ['AI/ML', 'Biotechnology', 'Materials Science', 'Physics']
    },
    {
      id: 2,
      name: 'Indian Institute of Management Ahmedabad',
      location: 'Ahmedabad, India',
      country: 'india',
      domain: 'management',
      ranking: '1',
      type: 'Business School',
      programs: ['MBA', 'Executive MBA', 'PhD'],
      fees: '₹25 lakhs (2 years)',
      deadline: 'CAT-based admission',
      description: 'Top business school in India.',
      specialties: ['Finance', 'Marketing', 'Strategy', 'Operations']
    },
    {
      id: 3,
      name: 'Jawaharlal Nehru University',
      location: 'Delhi, India',
      country: 'india',
      domain: 'arts',
      ranking: '2',
      type: 'Central University',
      programs: ['MA', 'M.Phil', 'PhD'],
      fees: '₹50,000-1.5 lakhs',
      deadline: 'May 2024',
      description: 'Leading university for social sciences and humanities.',
      specialties: ['International Relations', 'History', 'Political Science', 'Languages']
    },
    // International Institutions
    {
      id: 4,
      name: 'Stanford University',
      location: 'California, USA',
      country: 'usa',
      domain: 'science',
      ranking: '2',
      type: 'Private University',
      programs: ['MS', 'PhD', 'MBA'],
      fees: '$50,000-70,000/year',
      deadline: 'December 2024',
      description: 'World-renowned university for technology and innovation.',
      specialties: ['Computer Science', 'AI', 'Engineering', 'Business']
    },
    {
      id: 5,
      name: 'University of Cambridge',
      location: 'Cambridge, UK',
      country: 'uk',
      domain: 'science',
      ranking: '3',
      type: 'Public University',
      programs: ['MPhil', 'PhD', 'MBA'],
      fees: '£25,000-45,000/year',
      deadline: 'January 2025',
      description: 'Historic university with excellence in research.',
      specialties: ['Engineering', 'Natural Sciences', 'Medicine', 'Law']
    },
    {
      id: 6,
      name: 'Technical University of Munich',
      location: 'Munich, Germany',
      country: 'germany',
      domain: 'science',
      ranking: '50',
      type: 'Public University',
      programs: ['MS', 'PhD'],
      fees: '€500-3,000/year',
      deadline: 'March 2024',
      description: 'Leading technical university in Germany.',
      specialties: ['Engineering', 'Technology', 'Natural Sciences', 'Medicine']
    },
    {
      id: 7,
      name: 'University of Toronto',
      location: 'Toronto, Canada',
      country: 'canada',
      domain: 'science',
      ranking: '25',
      type: 'Public University',
      programs: ['MS', 'PhD', 'MBA'],
      fees: 'CAD 25,000-50,000/year',
      deadline: 'December 2024',
      description: 'Top Canadian university with strong research programs.',
      specialties: ['Computer Science', 'Engineering', 'Medicine', 'Business']
    },
    {
      id: 8,
      name: 'Australian National University',
      location: 'Canberra, Australia',
      country: 'australia',
      domain: 'science',
      ranking: '30',
      type: 'Public University',
      programs: ['MS', 'PhD'],
      fees: 'AUD 35,000-50,000/year',
      deadline: 'October 2024',
      description: 'Leading research university in Australia.',
      specialties: ['Science', 'Engineering', 'Policy', 'International Relations']
    }
  ];

  const filteredInstitutions = institutions.filter(institution => {
    const matchesCountry = selectedCountry === 'all' || institution.country === selectedCountry;
    const matchesDomain = selectedDomain === 'all' || institution.domain === selectedDomain;
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCountry && matchesDomain && matchesSearch;
  });

  const countryOptions = [
    { value: 'all', label: 'All Countries' },
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'germany', label: 'Germany' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' }
  ];

  const domainOptions = [
    { value: 'all', label: 'All Domains' },
    { value: 'science', label: 'Science & Technology' },
    { value: 'management', label: 'Management' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'law', label: 'Law' },
    { value: 'medicine', label: 'Medicine' }
  ];

  const getCountryFlag = (country) => {
    switch (country) {
      case 'india': return '🇮🇳';
      case 'usa': return '🇺🇸';
      case 'uk': return '🇬🇧';
      case 'germany': return '🇩🇪';
      case 'canada': return '🇨🇦';
      case 'australia': return '🇦🇺';
      default: return '🌍';
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
            Top Institutions & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Application Hub</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover where you can study further or apply next based on your PG journey. 
            Explore institutions worldwide with detailed program information and application guidance.
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
                  placeholder="Search institutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
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

            {/* Domain Filter */}
            <div className="md:w-48">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {domainOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredInstitutions.map((institution) => (
            <div key={institution.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{institution.name}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="text-lg mr-2">{getCountryFlag(institution.country)}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{institution.location}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 font-medium">#{institution.ranking}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{institution.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Type:</span>
                  <p className="text-white">{institution.type}</p>
                </div>
                <div>
                  <span className="text-gray-400">Fees:</span>
                  <p className="text-green-400">{institution.fees}</p>
                </div>
                <div>
                  <span className="text-gray-400">Deadline:</span>
                  <p className="text-red-400">{institution.deadline}</p>
                </div>
                <div>
                  <span className="text-gray-400">Domain:</span>
                  <p className="text-white capitalize">{institution.domain}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Programs Offered</h4>
                <div className="flex flex-wrap gap-2">
                  {institution.programs.map((program, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {institution.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/ai-assistant"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                >
                  Get Application Help
                </Link>
                <Link
                  to="/roadmap"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                >
                  Save & Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Application Tools */}
        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg p-8 border border-teal-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🛠️ Application Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Calendar className="w-8 h-8 text-teal-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Deadlines Tracker</h4>
              <p className="text-gray-300 text-center text-sm">Track application deadlines and requirements</p>
            </Link>
            
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Users className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Document Checklist</h4>
              <p className="text-gray-300 text-center text-sm">Generate application document checklists</p>
            </Link>
            
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Award className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Application Guide</h4>
              <p className="text-gray-300 text-center text-sm">Step-by-step application guidance</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGInstitutions;