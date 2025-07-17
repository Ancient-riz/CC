import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Award, Calendar, DollarSign, Users, ExternalLink, GraduationCap } from 'lucide-react';

const ScholarshipFinder = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const scholarships = [
    // School Level Scholarships
    {
      id: 1,
      name: 'National Talent Search Examination (NTSE)',
      provider: 'NCERT',
      level: 'school',
      stream: 'all',
      type: 'merit',
      amount: '₹1,250/month (Class 11-12), ₹2,000/month (UG/PG)',
      eligibility: 'Class 10 students with 60% marks',
      deadline: 'November 2024',
      description: 'National level scholarship for talented students to pursue higher studies.',
      benefits: ['Monthly stipend', 'Book allowance', 'Tuition fee support'],
      applicationProcess: 'Online application through state education boards',
      website: 'https://ncert.nic.in/national-talent-search-examination.php'
    },
    {
      id: 2,
      name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
      provider: 'Indian Institute of Science',
      level: 'school',
      stream: 'science',
      type: 'merit',
      amount: '₹5,000/month + ₹20,000 annual contingency',
      eligibility: 'Class 11, 12 and 1st year UG students in Science',
      deadline: 'July 2024',
      description: 'Fellowship program to encourage students to pursue research careers in Science.',
      benefits: ['Monthly fellowship', 'Contingency grant', 'Summer programs'],
      applicationProcess: 'Online application and aptitude test',
      website: 'https://kvpy.iisc.ac.in'
    },
    // UG Level Scholarships
    {
      id: 3,
      name: 'Central Sector Scholarship Scheme',
      provider: 'Ministry of Education',
      level: 'ug',
      stream: 'all',
      type: 'merit',
      amount: '₹12,000/year',
      eligibility: 'Top 20% in Class 12 board exams',
      deadline: 'October 2024',
      description: 'Merit-based scholarship for undergraduate studies.',
      benefits: ['Annual scholarship', 'Renewable for course duration'],
      applicationProcess: 'Online application through National Scholarship Portal',
      website: 'https://scholarships.gov.in'
    },
    {
      id: 4,
      name: 'JEE Main Scholarship',
      provider: 'NTA',
      level: 'ug',
      stream: 'science',
      type: 'merit',
      amount: 'Full tuition fee waiver',
      eligibility: 'JEE Main rank within top 10,000',
      deadline: 'Based on JEE Main results',
      description: 'Merit scholarship for engineering aspirants.',
      benefits: ['Tuition fee waiver', 'Hostel fee support'],
      applicationProcess: 'Automatic based on JEE Main rank',
      website: 'https://jeemain.nta.nic.in'
    },
    {
      id: 5,
      name: 'Commerce Merit Scholarship',
      provider: 'Various State Governments',
      level: 'ug',
      stream: 'commerce',
      type: 'merit',
      amount: '₹10,000-25,000/year',
      eligibility: 'Top 5% in Commerce stream Class 12',
      deadline: 'September 2024',
      description: 'State-wise merit scholarships for Commerce students.',
      benefits: ['Annual scholarship', 'Book allowance'],
      applicationProcess: 'State education department portals',
      website: 'https://scholarships.gov.in'
    },
    // PG Level Scholarships
    {
      id: 6,
      name: 'UGC NET-JRF Fellowship',
      provider: 'University Grants Commission',
      level: 'pg',
      stream: 'all',
      type: 'research',
      amount: '₹31,000/month + HRA',
      eligibility: 'UGC NET qualified with JRF',
      deadline: 'Based on NET exam schedule',
      description: 'Fellowship for pursuing PhD and research work.',
      benefits: ['Monthly fellowship', 'HRA', 'Contingency grant'],
      applicationProcess: 'UGC NET examination',
      website: 'https://ugcnet.nta.nic.in'
    },
    {
      id: 7,
      name: 'GATE Fellowship',
      provider: 'MHRD',
      level: 'pg',
      stream: 'science',
      type: 'merit',
      amount: '₹12,400/month (MTech), ₹25,000/month (PhD)',
      eligibility: 'GATE qualified candidates',
      deadline: 'Based on GATE results',
      description: 'Fellowship for MTech and PhD in engineering and science.',
      benefits: ['Monthly stipend', 'Tuition fee waiver'],
      applicationProcess: 'GATE examination and institute admission',
      website: 'https://gate.iitm.ac.in'
    },
    {
      id: 8,
      name: 'Rajiv Gandhi National Fellowship',
      provider: 'UGC',
      level: 'pg',
      stream: 'all',
      type: 'social',
      amount: '₹25,000/month + contingency',
      eligibility: 'SC/ST candidates for PhD',
      deadline: 'March 2024',
      description: 'Fellowship for SC/ST students pursuing PhD.',
      benefits: ['Monthly fellowship', 'HRA', 'Contingency'],
      applicationProcess: 'Online application through UGC portal',
      website: 'https://www.ugc.ac.in'
    },
    // Need-based Scholarships
    {
      id: 9,
      name: 'Post Matric Scholarship',
      provider: 'State Governments',
      level: 'all',
      stream: 'all',
      type: 'need',
      amount: '₹1,200-10,000/year',
      eligibility: 'Students from economically weaker sections',
      deadline: 'November 2024',
      description: 'Financial assistance for students from disadvantaged backgrounds.',
      benefits: ['Tuition fee support', 'Maintenance allowance'],
      applicationProcess: 'State scholarship portals',
      website: 'https://scholarships.gov.in'
    },
    {
      id: 10,
      name: 'Minority Scholarship Scheme',
      provider: 'Ministry of Minority Affairs',
      level: 'all',
      stream: 'all',
      type: 'social',
      amount: '₹1,000-5,000/year',
      eligibility: 'Students from minority communities',
      deadline: 'December 2024',
      description: 'Scholarship for students from minority communities.',
      benefits: ['Annual scholarship', 'Book allowance'],
      applicationProcess: 'National Scholarship Portal',
      website: 'https://scholarships.gov.in'
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesLevel = selectedLevel === 'all' || scholarship.level === selectedLevel;
    const matchesStream = selectedStream === 'all' || scholarship.stream === selectedStream || scholarship.stream === 'all';
    const matchesType = selectedType === 'all' || scholarship.type === selectedType;
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesStream && matchesType && matchesSearch;
  });

  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'school', label: 'School (Class 6-12)' },
    { value: 'ug', label: 'Undergraduate' },
    { value: 'pg', label: 'Postgraduate' }
  ];

  const streamOptions = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'arts', label: 'Arts' }
  ];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'merit', label: 'Merit-based' },
    { value: 'need', label: 'Need-based' },
    { value: 'social', label: 'Social Category' },
    { value: 'research', label: 'Research' }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'merit': return 'bg-blue-100 text-blue-800';
      case 'need': return 'bg-green-100 text-green-800';
      case 'social': return 'bg-purple-100 text-purple-800';
      case 'research': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApplyNow = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
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
            Scholarship <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Finder</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover scholarships and financial aid opportunities for your education journey. 
            Find merit-based, need-based, and category-specific scholarships.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {levelOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Stream Filter */}
            <div>
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

            {/* Type Filter */}
            <div>
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
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {filteredScholarships.length} scholarship{filteredScholarships.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 overflow-hidden hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              {/* Scholarship Header */}
              <div className="p-6 border-b border-purple-500/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{scholarship.name}</h3>
                    <p className="text-purple-300 text-sm font-medium mb-2">{scholarship.provider}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(scholarship.type)}`}>
                        {scholarship.type.charAt(0).toUpperCase() + scholarship.type.slice(1)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium capitalize">
                        {scholarship.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Funded</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{scholarship.description}</p>
              </div>

              {/* Scholarship Details */}
              <div className="p-6 space-y-4">
                {/* Amount */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-400" />
                    Scholarship Amount
                  </h4>
                  <p className="text-green-400 font-medium">{scholarship.amount}</p>
                </div>

                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-400" />
                    Eligibility
                  </h4>
                  <p className="text-gray-300 text-sm">{scholarship.eligibility}</p>
                </div>

                {/* Deadline */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-red-400" />
                    Application Deadline
                  </h4>
                  <p className="text-red-300 font-medium">{scholarship.deadline}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Application Process */}
                <div>
                  <h4 className="font-semibold text-white mb-2">Application Process</h4>
                  <p className="text-gray-300 text-sm">{scholarship.applicationProcess}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button 
                    onClick={() => handleApplyNow(scholarship.website)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply Now
                  </button>
                  <Link
                    to="/ai-assistant"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    Ask AI About This
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Award className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No scholarships found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your filters to find relevant scholarships.
            </p>
            <button
              onClick={() => {
                setSelectedLevel('all');
                setSelectedStream('all');
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Quick Tips */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-8 border border-yellow-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Scholarship Application Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Apply Early</h4>
              <p className="text-gray-300 text-sm">Submit applications well before deadlines to avoid last-minute issues.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Meet Requirements</h4>
              <p className="text-gray-300 text-sm">Ensure you meet all eligibility criteria before applying.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Multiple Applications</h4>
              <p className="text-gray-300 text-sm">Apply to multiple scholarships to increase your chances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipFinder;