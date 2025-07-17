import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { ArrowLeft, ChevronRight, BookOpen, Calculator, Palette, Brain } from 'lucide-react';

const StreamSelector = () => {
  const { user } = useUser();

  const streams = [
    {
      id: 'science',
      title: 'Science & Technology',
      subtitle: 'PCM/PCB Stream',
      description: 'Explore the world of scientific discovery, research, and technological innovation.',
      icon: '🔬',
      color: 'from-emerald-400 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'],
      careerPaths: ['Research Scientist', 'Doctor', 'Data Scientist', 'Biotechnologist', 'Environmental Scientist'],
      entranceExams: ['JEE Main/Advanced', 'NEET', 'BITSAT', 'KVPY', 'NTSE'],
      highlights: [
        'High-demand technical careers',
        'Research opportunities',
        'Innovation-driven fields',
        'Global career prospects'
      ]
    },
    {
      id: 'commerce',
      title: 'Commerce & Business',
      subtitle: 'Business & Economics Stream',
      description: 'Master the world of business, finance, economics, and entrepreneurship.',
      icon: '💼',
      color: 'from-blue-400 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'Statistics'],
      careerPaths: ['Chartered Accountant', 'Investment Banker', 'Business Analyst', 'Entrepreneur', 'Financial Advisor'],
      entranceExams: ['CA Foundation', 'CLAT', 'CUET', 'IPMAT', 'SET'],
      highlights: [
        'Entrepreneurship opportunities',
        'High earning potential',
        'Leadership roles',
        'Global business exposure'
      ]
    },
    {
      id: 'arts',
      title: 'Arts & Humanities',
      subtitle: 'Liberal Arts Stream',
      description: 'Explore human culture, society, languages, and creative expression.',
      icon: '🎨',
      color: 'from-purple-400 via-pink-500 to-rose-600',
      bgGradient: 'from-purple-50 to-pink-50',
      subjects: ['History', 'Political Science', 'Psychology', 'Sociology', 'English Literature', 'Geography'],
      careerPaths: ['Civil Servant', 'Lawyer', 'Journalist', 'Psychologist', 'Social Worker', 'Teacher'],
      entranceExams: ['CLAT', 'CUET', 'JNU Entrance', 'BHU UET', 'UPSC CSE'],
      highlights: [
        'Social impact careers',
        'Creative expression',
        'Critical thinking skills',
        'Public service opportunities'
      ]
    }
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Subject <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Planner</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your academic stream for Class 11-12. Each stream opens unique career paths and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {streams.map((stream) => (
            <Link
              key={stream.id}
              to={`/stream/${stream.id}`}
              className="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{stream.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stream.title}</h3>
                  <p className="text-purple-300 text-sm font-medium">{stream.subtitle}</p>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-center text-sm">{stream.description}</p>

                {/* Core Subjects */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-center">📚 Core Subjects</h4>
                  <div className="space-y-2">
                    {stream.subjects.map((subject, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Paths Preview */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-center">🎯 Career Paths</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {stream.careerPaths.slice(0, 3).map((career, index) => (
                      <div key={index} className="text-center">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-center">✨ Key Highlights</h4>
                  <div className="space-y-1">
                    {stream.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enter Button */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                    <span>Explore {stream.title}</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </Link>
          ))}
        </div>

        {/* Undecided Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border border-yellow-500/20 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🤔</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Stream to Choose?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Take our comprehensive aptitude and interest assessment to discover which academic stream 
              aligns best with your natural abilities and career aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/aptitude-test"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors duration-300"
              >
                <Brain className="w-4 h-4 mr-2" />
                Take Aptitude Test
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/ai-assistant"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 border border-gray-300 transition-colors duration-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Chat with AI Counselor
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stream Comparison */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📊 Quick Stream Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Science Stream</h4>
              <p className="text-gray-300 text-sm">High analytical skills, research-oriented, technical careers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Commerce Stream</h4>
              <p className="text-gray-300 text-sm">Business acumen, financial literacy, entrepreneurial mindset</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Arts Stream</h4>
              <p className="text-gray-300 text-sm">Creative thinking, social awareness, communication skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamSelector;