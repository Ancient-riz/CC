import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Briefcase, MapPin, DollarSign, Clock, Users, Building, TrendingUp, ExternalLink } from 'lucide-react';

const PGJobs = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedDegree, setSelectedDegree] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobRoles = [
    // Corporate Sector
    {
      id: 1,
      title: 'Product Manager',
      company: 'Tech Companies',
      sector: 'corporate',
      degree: 'MBA',
      experience: '2-5 years',
      salary: '₹15-35 LPA',
      location: 'Bangalore, Mumbai, Delhi',
      description: 'Lead product strategy, roadmap planning, and cross-functional team coordination.',
      skills: ['Product Strategy', 'Data Analysis', 'Leadership', 'Market Research'],
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Analytics Companies',
      sector: 'corporate',
      degree: 'M.Sc Data Science',
      experience: '1-3 years',
      salary: '₹8-25 LPA',
      location: 'Bangalore, Hyderabad, Pune',
      description: 'Analyze complex datasets, build ML models, and derive business insights.',
      skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Investment Analyst',
      company: 'Investment Banks',
      sector: 'corporate',
      degree: 'MBA Finance',
      experience: '1-4 years',
      salary: '₹12-30 LPA',
      location: 'Mumbai, Delhi, Bangalore',
      description: 'Analyze investment opportunities, prepare financial models, and research markets.',
      skills: ['Financial Modeling', 'Valuation', 'Research', 'Excel'],
      type: 'Full-time'
    },
    // Academic Sector
    {
      id: 4,
      title: 'Assistant Professor',
      company: 'Universities',
      sector: 'academic',
      degree: 'PhD',
      experience: '0-2 years',
      salary: '₹6-15 LPA',
      location: 'Pan India',
      description: 'Teach undergraduate/postgraduate courses, conduct research, and publish papers.',
      skills: ['Teaching', 'Research', 'Academic Writing', 'Subject Expertise'],
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Research Associate',
      company: 'Research Institutes',
      sector: 'academic',
      degree: 'M.Sc/M.Tech',
      experience: '0-3 years',
      salary: '₹4-12 LPA',
      location: 'Bangalore, Delhi, Mumbai',
      description: 'Conduct research projects, assist in experiments, and support senior researchers.',
      skills: ['Research Methodology', 'Data Analysis', 'Technical Writing', 'Lab Skills'],
      type: 'Full-time'
    },
    // Government Sector
    {
      id: 6,
      title: 'Policy Analyst',
      company: 'Government Departments',
      sector: 'government',
      degree: 'MA Public Policy',
      experience: '1-5 years',
      salary: '₹5-18 LPA',
      location: 'Delhi, State Capitals',
      description: 'Analyze policies, prepare reports, and support policy formulation.',
      skills: ['Policy Analysis', 'Research', 'Writing', 'Government Processes'],
      type: 'Full-time'
    },
    {
      id: 7,
      title: 'Scientific Officer',
      company: 'DRDO/ISRO/CSIR',
      sector: 'government',
      degree: 'M.Tech/M.Sc',
      experience: '0-2 years',
      salary: '₹7-20 LPA',
      location: 'Bangalore, Hyderabad, Delhi',
      description: 'Work on advanced research projects in defense, space, or scientific research.',
      skills: ['Technical Expertise', 'Research', 'Problem Solving', 'Innovation'],
      type: 'Full-time'
    },
    // Research Sector
    {
      id: 8,
      title: 'Clinical Research Associate',
      company: 'Pharmaceutical Companies',
      sector: 'research',
      degree: 'M.Pharm/Life Sciences',
      experience: '1-3 years',
      salary: '₹4-12 LPA',
      location: 'Mumbai, Bangalore, Hyderabad',
      description: 'Monitor clinical trials, ensure compliance, and collect research data.',
      skills: ['Clinical Research', 'GCP', 'Data Management', 'Regulatory Knowledge'],
      type: 'Full-time'
    },
    {
      id: 9,
      title: 'Research Scientist',
      company: 'R&D Labs',
      sector: 'research',
      degree: 'PhD',
      experience: '2-8 years',
      salary: '₹8-25 LPA',
      location: 'Bangalore, Pune, Hyderabad',
      description: 'Lead research projects, develop new technologies, and publish findings.',
      skills: ['Research Leadership', 'Innovation', 'Technical Expertise', 'Project Management'],
      type: 'Full-time'
    },
    // NGO Sector
    {
      id: 10,
      title: 'Program Manager',
      company: 'NGOs',
      sector: 'ngo',
      degree: 'MSW/MA Development',
      experience: '2-6 years',
      salary: '₹3-10 LPA',
      location: 'Pan India',
      description: 'Manage development programs, coordinate with stakeholders, and monitor impact.',
      skills: ['Program Management', 'Community Engagement', 'Project Planning', 'Impact Assessment'],
      type: 'Full-time'
    }
  ];

  const internships = [
    {
      id: 1,
      title: 'Research Internship',
      company: 'IITs/IISc',
      type: 'Research',
      duration: '2-6 months',
      stipend: '₹15,000-30,000/month',
      description: 'Work with faculty on cutting-edge research projects.',
      eligibility: 'M.Sc/M.Tech students'
    },
    {
      id: 2,
      title: 'Teaching Assistantship',
      company: 'Universities',
      type: 'Academic',
      duration: '1 semester',
      stipend: '₹10,000-20,000/month',
      description: 'Assist professors in teaching and grading.',
      eligibility: 'PG students with good academic record'
    },
    {
      id: 3,
      title: 'Industry Research Intern',
      company: 'Tech Companies',
      type: 'Industry',
      duration: '3-6 months',
      stipend: '₹25,000-50,000/month',
      description: 'Work on real-world problems with industry mentors.',
      eligibility: 'M.Tech/M.Sc final year students'
    }
  ];

  const filteredJobs = jobRoles.filter(job => {
    const matchesSector = selectedSector === 'all' || job.sector === selectedSector;
    const matchesDegree = selectedDegree === 'all' || job.degree.toLowerCase().includes(selectedDegree.toLowerCase());
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSector && matchesDegree && matchesSearch;
  });

  const sectorOptions = [
    { value: 'all', label: 'All Sectors' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'academic', label: 'Academic' },
    { value: 'research', label: 'Research' },
    { value: 'government', label: 'Government' },
    { value: 'ngo', label: 'NGO' }
  ];

  const degreeOptions = [
    { value: 'all', label: 'All Degrees' },
    { value: 'mba', label: 'MBA' },
    { value: 'msc', label: 'M.Sc' },
    { value: 'mtech', label: 'M.Tech' },
    { value: 'ma', label: 'M.A' },
    { value: 'mcom', label: 'M.Com' },
    { value: 'phd', label: 'PhD' }
  ];

  const getSectorColor = (sector) => {
    switch (sector) {
      case 'corporate': return 'bg-blue-100 text-blue-800';
      case 'academic': return 'bg-green-100 text-green-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      case 'government': return 'bg-orange-100 text-orange-800';
      case 'ngo': return 'bg-pink-100 text-pink-800';
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
            PG-Level Jobs & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Internships</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover job opportunities and internships based on your postgraduate specialization. 
            Explore roles across corporate, academic, research, government, and NGO sectors.
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
                  placeholder="Search jobs and companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Sector Filter */}
            <div className="md:w-48">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {sectorOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Degree Filter */}
            <div className="md:w-48">
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {degreeOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">💼 Job Opportunities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{job.title}</h4>
                    <p className="text-purple-300 text-sm font-medium">{job.company}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(job.sector)}`}>
                    {job.sector.charAt(0).toUpperCase() + job.sector.slice(1)}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4">{job.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{job.degree}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-2">Required Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/resume-builder"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Build Resume
                  </Link>
                  <Link
                    to="/ai-assistant"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    Get Guidance
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internships Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">🎓 Post-PG Internships</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship) => (
              <div key={internship.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
                <h4 className="text-lg font-bold text-white mb-2">{internship.title}</h4>
                <p className="text-purple-300 text-sm font-medium mb-3">{internship.company}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white">{internship.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{internship.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stipend:</span>
                    <span className="text-green-400">{internship.stipend}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{internship.description}</p>
                
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-400">Eligibility: </span>
                  <span className="text-xs text-white">{internship.eligibility}</span>
                </div>

                <Link
                  to="/ai-assistant"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🛠️ Career Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/resume-builder"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Briefcase className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Resume Builder</h4>
              <p className="text-gray-300 text-center text-sm">Create professional resumes for PG-level positions</p>
            </Link>
            
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Users className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Interview Prep</h4>
              <p className="text-gray-300 text-center text-sm">Get AI-powered interview preparation guidance</p>
            </Link>
            
            <Link
              to="/roadmap"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Career Roadmap</h4>
              <p className="text-gray-300 text-center text-sm">Plan your career progression path</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGJobs;