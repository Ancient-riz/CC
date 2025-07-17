import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, BookOpen, Calendar, ExternalLink, Award, Globe, Users, Target } from 'lucide-react';

const PGExams = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const exams = [
    // Academic/Research Exams
    {
      id: 1,
      name: 'UGC NET',
      category: 'academic',
      type: 'Teaching/Research Eligibility',
      eligibility: 'Master\'s degree with 55% marks',
      dates: 'June & December',
      syllabus: ['Teaching & Research Aptitude', 'Subject-specific syllabus'],
      description: 'For Assistant Professor eligibility and JRF in humanities and social sciences.',
      website: 'https://ugcnet.nta.nic.in',
      benefits: ['Assistant Professor eligibility', 'JRF fellowship', 'PhD admission']
    },
    {
      id: 2,
      name: 'CSIR NET',
      category: 'academic',
      type: 'Research Fellowship',
      eligibility: 'M.Sc in relevant subject',
      dates: 'June & December',
      syllabus: ['Life Sciences', 'Physical Sciences', 'Chemical Sciences', 'Mathematical Sciences'],
      description: 'For JRF and eligibility for Assistant Professor in Science subjects.',
      website: 'https://csirnet.nta.nic.in',
      benefits: ['JRF fellowship ₹31,000/month', 'Assistant Professor eligibility', 'PhD admission']
    },
    {
      id: 3,
      name: 'GATE',
      category: 'academic',
      type: 'Engineering/Science',
      eligibility: 'BE/BTech or equivalent',
      dates: 'February',
      syllabus: ['Subject-specific technical syllabus'],
      description: 'Graduate Aptitude Test in Engineering for MTech/MS admissions and PSU jobs.',
      website: 'https://gate.iitm.ac.in',
      benefits: ['MTech admission', 'PSU jobs', 'Fellowship for research']
    },
    // Government/Competitive Exams
    {
      id: 4,
      name: 'UPSC CSE',
      category: 'government',
      type: 'Civil Services',
      eligibility: 'Bachelor\'s degree',
      dates: 'June (Prelims)',
      syllabus: ['General Studies', 'CSAT', 'Optional Subject'],
      description: 'Civil Services Examination for IAS, IPS, IFS and other services.',
      website: 'https://www.upsc.gov.in',
      benefits: ['IAS/IPS/IFS positions', 'High prestige', 'Social impact']
    },
    {
      id: 5,
      name: 'RBI Grade B',
      category: 'government',
      type: 'Banking',
      eligibility: 'Master\'s degree with 50% marks',
      dates: 'June',
      syllabus: ['Economic & Social Issues', 'English', 'Finance & Management'],
      description: 'Reserve Bank of India Grade B Officer recruitment.',
      website: 'https://www.rbi.org.in',
      benefits: ['Officer position in RBI', 'High salary', 'Job security']
    },
    {
      id: 6,
      name: 'SSC CGL',
      category: 'government',
      type: 'Central Government',
      eligibility: 'Bachelor\'s degree',
      dates: 'Multiple times a year',
      syllabus: ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English'],
      description: 'Combined Graduate Level Examination for various central government posts.',
      website: 'https://ssc.nic.in',
      benefits: ['Central government jobs', 'Job security', 'Good salary']
    },
    // Study Abroad Exams
    {
      id: 7,
      name: 'GRE',
      category: 'abroad',
      type: 'Graduate Study',
      eligibility: 'Bachelor\'s degree',
      dates: 'Year-round',
      syllabus: ['Verbal Reasoning', 'Quantitative Reasoning', 'Analytical Writing'],
      description: 'Graduate Record Examination for admission to graduate programs abroad.',
      website: 'https://www.ets.org/gre',
      benefits: ['MS/PhD admission abroad', 'Global opportunities', 'Research exposure']
    },
    {
      id: 8,
      name: 'IELTS',
      category: 'abroad',
      type: 'English Proficiency',
      eligibility: 'No specific eligibility',
      dates: 'Multiple dates available',
      syllabus: ['Listening', 'Reading', 'Writing', 'Speaking'],
      description: 'International English Language Testing System for study abroad.',
      website: 'https://www.ielts.org',
      benefits: ['Study abroad eligibility', 'Immigration', 'Global recognition']
    },
    {
      id: 9,
      name: 'GMAT',
      category: 'abroad',
      type: 'Business School',
      eligibility: 'Bachelor\'s degree',
      dates: 'Year-round',
      syllabus: ['Analytical Writing', 'Integrated Reasoning', 'Quantitative', 'Verbal'],
      description: 'Graduate Management Admission Test for MBA programs abroad.',
      website: 'https://www.mba.com',
      benefits: ['MBA admission abroad', 'Business career', 'High ROI']
    },
    // Fellowship Exams
    {
      id: 10,
      name: 'PMRF',
      category: 'fellowship',
      type: 'Research Fellowship',
      eligibility: 'B.Tech/M.Sc with excellent academic record',
      dates: 'March',
      syllabus: ['Subject-specific + Interview'],
      description: 'Prime Minister Research Fellowship for PhD in science and technology.',
      website: 'https://pmrf.in',
      benefits: ['₹70,000-80,000/month', 'Premier research opportunity', 'IIT/IISc PhD']
    },
    {
      id: 11,
      name: 'Inspire Fellowship',
      category: 'fellowship',
      type: 'Research Fellowship',
      eligibility: 'M.Sc/M.Tech with 60% marks',
      dates: 'November',
      syllabus: ['Subject-specific test + Interview'],
      description: 'DST Inspire Fellowship for PhD in science and technology.',
      website: 'https://online-inspire.gov.in',
      benefits: ['₹25,000/month', 'Research support', 'PhD funding']
    },
    {
      id: 12,
      name: 'Chevening Scholarship',
      category: 'fellowship',
      type: 'International Scholarship',
      eligibility: 'Bachelor\'s degree + work experience',
      dates: 'November',
      syllabus: ['Application + Interview'],
      description: 'UK government scholarship for Master\'s study in the UK.',
      website: 'https://www.chevening.org',
      benefits: ['Full funding for UK Master\'s', 'Global network', 'Leadership development']
    }
  ];

  const filteredExams = exams.filter(exam => {
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory;
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic', label: 'Academic/Research' },
    { value: 'government', label: 'Government/Competitive' },
    { value: 'abroad', label: 'Study Abroad' },
    { value: 'fellowship', label: 'Fellowships' }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'government': return 'bg-green-100 text-green-800';
      case 'abroad': return 'bg-purple-100 text-purple-800';
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
            Exams & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Fellowships</span> After PG
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track and prepare for relevant post-PG exams and scholarship-linked tests. 
            Find opportunities in academics, government, research, and international study.
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
                  placeholder="Search exams and fellowships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
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

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredExams.map((exam) => (
            <div key={exam.id} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{exam.name}</h3>
                  <p className="text-purple-300 text-sm font-medium">{exam.type}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(exam.category)}`}>
                  {categoryOptions.find(c => c.value === exam.category)?.label}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-4">{exam.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-400">Eligibility:</span>
                  <p className="text-white">{exam.eligibility}</p>
                </div>
                <div>
                  <span className="text-gray-400">Exam Dates:</span>
                  <p className="text-white">{exam.dates}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Syllabus</h4>
                <div className="flex flex-wrap gap-2">
                  {exam.syllabus.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {exam.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={exam.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Official Website
                </a>
                <Link
                  to="/roadmap"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-gray-300 font-medium rounded-lg hover:bg-slate-600/50 transition-colors"
                >
                  Add to Roadmap
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Exam Calendar */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📅 Exam Calendar & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Calendar className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Exam Calendar</h4>
              <p className="text-gray-300 text-center text-sm">Track important exam dates and deadlines</p>
            </Link>
            
            <Link
              to="/ai-assistant"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Users className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Eligibility Checker</h4>
              <p className="text-gray-300 text-center text-sm">Check if you meet exam requirements</p>
            </Link>
            
            <Link
              to="/roadmap"
              className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <Target className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Preparation Roadmap</h4>
              <p className="text-gray-300 text-center text-sm">Create exam preparation timeline</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGExams;