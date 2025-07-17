import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { GraduationCap, BookOpen, Award, ArrowLeft, ArrowRight, Users, Target, Brain, Sparkles } from 'lucide-react';

const LevelSelector = () => {
  const { updateUser } = useUser();

  const levels = [
    {
      id: 'school',
      title: 'School Zone',
      subtitle: 'Class 6-12 Students',
      description: 'Discover your interests, explore streams, and build a foundation for your future career journey.',
      icon: BookOpen,
      color: 'from-emerald-400 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      features: [
        '🧠 Stream Discovery & Aptitude Tests',
        '🎯 Career Awareness Programs', 
        '📚 Subject Explorer & Study Tools',
        '🏆 Entrance Exam Information',
        '🎨 Skills & Hobby Development',
        '🗺️ Early Career Roadmaps'
      ],
      highlights: [
        'Find Your Perfect Stream',
        'Explore 500+ Career Options',
        'Plan Your Academic Journey',
        'Build Essential Skills Early'
      ]
    },
    {
      id: 'ug',
      title: 'UG Zone',
      subtitle: 'Undergraduate Students',
      description: 'Navigate your undergraduate journey with specialized courses, internships, and career preparation.',
      icon: GraduationCap,
      color: 'from-blue-400 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      features: [
        '🎓 UG Courses & Specializations',
        '📝 Entrance Exams (JEE, NEET, CUET)',
        '💼 Career Explorer by Stream',
        '🏛️ Institution Finder & Rankings',
        '💻 Internships & Resume Builder',
        '🔮 PG Options Preview'
      ],
      highlights: [
        'Choose Right Specialization',
        'Find Top Institutions',
        'Build Professional Profile',
        'Plan Postgraduate Path'
      ]
    },
    {
      id: 'pg',
      title: 'PG Zone',
      subtitle: 'Postgraduate Students',
      description: 'Advanced specialization with research opportunities, global studies, and leadership career paths.',
      icon: Award,
      color: 'from-purple-400 via-pink-500 to-rose-600',
      bgGradient: 'from-purple-50 to-pink-50',
      features: [
        '🔬 Advanced Specializations',
        '📊 Research & PhD Opportunities',
        '🌍 Global Study Programs',
        '🚀 Industry Leadership Roles',
        '💡 Entrepreneurship Support',
        '🎯 Academia vs Industry Guidance'
      ],
      highlights: [
        'Master Advanced Skills',
        'Lead Research Projects',
        'Global Career Opportunities',
        'Shape Your Industry'
      ]
    }
  ];

  const handleLevelSelect = (levelId) => {
    updateUser({ level: levelId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <Link
          to="/login"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zone</span>
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Select your academic level to unlock personalized guidance, resources, and career pathways designed specifically for your journey
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>100,000+ Students Guided</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>1,500+ Career Paths</span>
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              <span>AI-Powered Guidance</span>
            </div>
          </div>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {levels.map((level) => {
            const Icon = level.icon;
            return (
              <Link
                key={level.id}
                to="/dashboard"
                onClick={() => handleLevelSelect(level.id)}
                className="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${level.color} text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{level.title}</h3>
                    <p className="text-purple-300 text-sm font-medium">{level.subtitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">{level.description}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-center">🎯 Key Features</h4>
                    <div className="space-y-2">
                      {level.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-center">✨ Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {level.highlights.map((highlight, index) => (
                        <div key={index} className="text-center">
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enter Button */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                      <span>Enter {level.title}</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${level.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </Link>
            );
          })}
        </div>

        {/* Universal Features */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20 mb-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            🌟 Universal Features Available Across All Zones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">AI Career Assistant</h4>
              <p className="text-gray-300 text-sm">24/7 personalized guidance</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Career Library</h4>
              <p className="text-gray-300 text-sm">1,500+ career profiles</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Institution Explorer</h4>
              <p className="text-gray-300 text-sm">45,000+ colleges & universities</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Opportunity Hub</h4>
              <p className="text-gray-300 text-sm">Scholarships & competitions</p>
            </div>
          </div>
        </div>

        {/* Journey Flow */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">🗺️ Your Journey Flow</h3>
          <div className="flex items-center justify-center space-x-4 text-gray-300">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="ml-2 text-sm">School Zone</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">U</div>
              <span className="ml-2 text-sm">UG Zone</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">P</div>
              <span className="ml-2 text-sm">PG Zone</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">🚀</div>
              <span className="ml-2 text-sm">Career Success</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Seamlessly transition between levels as you grow. Explore any zone anytime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;