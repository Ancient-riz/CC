import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { 
  BookOpen, 
  Target, 
  Users, 
  Award, 
  Brain, 
  Compass,
  FileText,
  Building,
  DollarSign,
  LogOut,
  Sparkles,
  GraduationCap,
  Search,
  TrendingUp,
  Calendar,
  Settings,
  Zap,
  Globe,
  Lightbulb
} from 'lucide-react';

const Dashboard = () => {
  const { user, logout, updateUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Quick access buttons for header
  const quickActions = [
    { icon: Search, label: 'Search', link: '/institutions', color: 'hover:bg-blue-500/20 hover:text-blue-300' },
    { icon: BookOpen, label: 'Exams', link: '/exams', color: 'hover:bg-green-500/20 hover:text-green-300' },
    { icon: Building, label: 'Colleges', link: '/institutions', color: 'hover:bg-purple-500/20 hover:text-purple-300' },
    { icon: DollarSign, label: 'Scholarships', link: '/scholarships', color: 'hover:bg-yellow-500/20 hover:text-yellow-300' },
    { icon: Brain, label: 'AI Chat', link: '/ai-assistant', color: 'hover:bg-pink-500/20 hover:text-pink-300' }
  ];

  // Level-specific features
  const getLevelFeatures = () => {
    switch (user?.level) {
      case 'school':
        return [
          {
            icon: Compass,
            title: 'Stream Discovery',
            description: 'Find your perfect academic stream with AI-powered assessment',
            link: '/aptitude-test',
            color: 'from-emerald-500 to-teal-600',
            bgColor: 'bg-emerald-500/10',
            badge: 'Essential'
          },
          {
            icon: Target,
            title: 'Career Preview',
            description: 'Explore future career possibilities in each stream',
            link: '/careers',
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'bg-blue-500/10',
            badge: 'Popular'
          },
          {
            icon: BookOpen,
            title: 'Entrance Exams',
            description: 'Discover JEE, NEET, CUET and other entrance exams',
            link: '/exams',
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-500/10',
            badge: 'Important'
          },
          {
            icon: Lightbulb,
            title: 'Subject Planner',
            description: 'Plan your Class 11-12 subjects strategically',
            link: '/stream-selector',
            color: 'from-orange-500 to-red-600',
            bgColor: 'bg-orange-500/10',
            badge: 'New'
          }
        ];
      case 'ug':
        return [
          {
            icon: GraduationCap,
            title: 'Degree Explorer',
            description: 'Explore UG courses and specializations',
            link: '/courses',
            color: 'from-blue-500 to-cyan-600',
            bgColor: 'bg-blue-500/10',
            badge: 'Essential'
          },
          {
            icon: Building,
            title: 'College Finder',
            description: 'Find top institutions for your field',
            link: '/institutions',
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-500/10',
            badge: 'Popular'
          },
          {
            icon: FileText,
            title: 'Resume Builder',
            description: 'Build professional resume for internships',
            link: '/resume-builder',
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-500/10',
            badge: 'Trending'
          },
          {
            icon: TrendingUp,
            title: 'PG Roadmap',
            description: 'Plan your postgraduate journey',
            link: '/pg-dashboard',
            color: 'from-indigo-500 to-purple-600',
            bgColor: 'bg-indigo-500/10',
            badge: 'Future'
          }
        ];
      case 'pg':
        return [
          {
            icon: Award,
            title: 'Specializations',
            description: 'Explore advanced PG programs and research',
            link: '/pg-dashboard',
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-500/10',
            badge: 'Advanced'
          },
          {
            icon: Globe,
            title: 'Global Studies',
            description: 'International universities and programs',
            link: '/institutions',
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'bg-blue-500/10',
            badge: 'Global'
          },
          {
            icon: Zap,
            title: 'Research Hub',
            description: 'PhD opportunities and fellowships',
            link: '/scholarships',
            color: 'from-yellow-500 to-orange-600',
            bgColor: 'bg-yellow-500/10',
            badge: 'Research'
          },
          {
            icon: Users,
            title: 'Industry Connect',
            description: 'Network with professionals and mentors',
            link: '/careers',
            color: 'from-green-500 to-teal-600',
            bgColor: 'bg-green-500/10',
            badge: 'Network'
          }
        ];
      default:
        return [];
    }
  };

  const commonFeatures = [
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Get personalized career guidance 24/7',
      link: '/ai-assistant',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-500/10'
    },
    {
      icon: Award,
      title: 'Skills Hub',
      description: 'Develop essential skills for your career',
      link: '/skills',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: DollarSign,
      title: 'Scholarships',
      description: 'Discover funding opportunities',
      link: '/scholarships',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Target,
      title: 'Roadmap Generator',
      description: 'Create your personalized career path',
      link: '/roadmap',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  const levelFeatures = getLevelFeatures();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Header with Quick Actions */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Career Canvas
              </h1>
              <div className="ml-4 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                {user?.level === 'school' ? 'School Zone' : user?.level === 'ug' ? 'UG Zone' : 'PG Zone'}
              </div>
            </div>
            
            {/* Quick Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className={`flex items-center px-3 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 ${action.color}`}
                  title={action.label}
                >
                  <action.icon className="w-4 h-4 mr-1" />
                  <span className="text-sm">{action.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold text-white">
              Welcome to Your {user?.level === 'school' ? 'School' : user?.level === 'ug' ? 'UG' : 'PG'} Zone
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {user?.level === 'school' && 'Discover your interests, explore streams, and build a foundation for your future career journey'}
            {user?.level === 'ug' && 'Navigate your undergraduate journey with specialized courses, internships, and career preparation'}
            {user?.level === 'pg' && 'Advanced specialization with research opportunities, global studies, and leadership career paths'}
          </p>
        </div>

        {/* Level-specific Features */}
        {levelFeatures.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              🎯 {user?.level === 'school' ? 'School Zone' : user?.level === 'ug' ? 'UG Zone' : 'PG Zone'} Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {levelFeatures.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="group relative bg-slate-800/50 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden transform hover:scale-105"
                >
                  <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-6">
                    {/* Badge */}
                    {feature.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          {feature.badge}
                        </span>
                      </div>
                    )}

                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Common Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">🌟 Universal Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonFeatures.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-slate-800/50 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Zone Navigation */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🗺️ Explore Other Zones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/level-selector"
              className="group p-6 bg-slate-800/30 rounded-lg border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white">School Zone</h4>
              </div>
              <p className="text-gray-300 text-sm">Stream discovery and career awareness</p>
            </Link>
            
            <Link
              to="/level-selector"
              className="group p-6 bg-slate-800/30 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white">UG Zone</h4>
              </div>
              <p className="text-gray-300 text-sm">Undergraduate courses and career prep</p>
            </Link>
            
            <Link
              to="/pg-dashboard"
              className="group p-6 bg-slate-800/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white">PG Zone</h4>
              </div>
              <p className="text-gray-300 text-sm">Advanced specialization and research</p>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 Platform Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45,000+</div>
              <div className="text-gray-300">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1,500+</div>
              <div className="text-gray-300">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1,000+</div>
              <div className="text-gray-300">Scholarships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Entrance Exams</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;