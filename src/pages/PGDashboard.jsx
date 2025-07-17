import React from 'react';
import { Link } from 'react-router-dom';
import { pgStreams } from '../data/pgData';
import { ArrowLeft, BookOpen, GraduationCap, Building, Target, Users, Award, DollarSign, Search, TrendingUp, Globe, Lightbulb, Briefcase } from 'lucide-react';

const PGDashboard = () => {
  const modules = [
    {
      id: 'programs',
      title: 'PG Programs & Specializations',
      description: 'Explore all available postgraduate degrees by stream, specialization, and goal',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-600',
      link: '/pg-programs',
      features: [
        'Stream-wise Listing: Science, Commerce, Management, Law, Arts, Design',
        'Degree Types: M.Sc, M.A, M.Com, MBA, M.Tech, LLM, M.Des, MPH',
        'Filters: Duration, Mode, Country, Career Goal',
        'Program Cards with Overview, Eligibility, Top Institutes'
      ],
      badge: 'Core Module'
    },
    {
      id: 'jobs',
      title: 'PG-Level Jobs & Internships',
      description: 'Find jobs, roles, and internships based on your PG program or field',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      link: '/pg-jobs',
      features: [
        'Job Roles per Degree (MBA → Product Manager, M.Sc → Data Analyst)',
        'Sector Categories: Corporate, Academic, Research, Govt, NGO',
        'Post-PG Internships: Research, Teaching, Industry Assistantships',
        'Tools: Resume Builder, Job Platforms, Interview Prep'
      ],
      badge: 'Core Module'
    },
    {
      id: 'careers',
      title: 'Career Paths After PG',
      description: 'Discover what professional paths open up after your specialization',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      link: '/pg-careers',
      features: [
        'Field-wise Career Mapping: Academic, Research, Govt, Private',
        'Role Overview, Salary Insight, Required Skills',
        '"Which PG leads to which career" navigator',
        'Goal-based suggestions for Policy Analyst, etc.'
      ],
      badge: 'Core Module'
    },
    {
      id: 'research',
      title: 'Research & PhD Opportunities',
      description: 'Explore advanced academic, research, and doctoral options',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-600',
      link: '/research-opportunities',
      features: [
        'PhD in India (IITs, NITs, Central Univ, Research Institutes)',
        'PhD Abroad (USA, UK, Germany, Canada, Australia)',
        'Integrated PhD and Direct PhD Options',
        'Fellowships: PMRF, CSIR, UGC-JRF, DAAD, Fulbright'
      ],
      badge: 'Supportive Module'
    },
    {
      id: 'exams',
      title: 'Exams & Fellowships After PG',
      description: 'Track and prepare for relevant post-PG exams and scholarship-linked tests',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600',
      link: '/pg-exams',
      features: [
        'Academic/Research Exams: UGC-NET, GATE, CSIR-NET',
        'Government/Competitive: UPSC, RBI, SSC, IBPS, State PSCs',
        'Study Abroad: GRE, IELTS, TOEFL, GMAT',
        'Fellowship Exams: PMRF, Inspire, Chevening, Erasmus+'
      ],
      badge: 'Supportive Module'
    },
    {
      id: 'institutions',
      title: 'Top Institutions & Application Hub',
      description: 'Discover where you can study further or apply next based on your PG journey',
      icon: Building,
      color: 'from-teal-500 to-blue-600',
      link: '/pg-institutions',
      features: [
        'Institute Explorer: Filter by country, ranking, domain, fees',
        'PG & PhD Programs grouped by institution',
        'Post-PG Diplomas & Executive Courses',
        'Application Tools: Deadlines Tracker, Document Checklist'
      ],
      badge: 'Supportive Module'
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            PG Zone – <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Structured Modules</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive postgraduate guidance with specialized modules for advanced education, research opportunities, and career development
          </p>
        </div>

        {/* Core Modules */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 Core Modules
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modules.filter(module => module.badge === 'Core Module').map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.id}
                  to={module.link}
                  className="group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="absolute top-0 right-0">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                        {module.badge}
                      </span>
                    </div>

                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {module.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors">
                      {module.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      {module.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Supportive Modules */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🛠️ Supportive Modules
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modules.filter(module => module.badge === 'Supportive Module').map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.id}
                  to={module.link}
                  className="group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="absolute top-0 right-0">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-xs font-bold rounded-full">
                        {module.badge}
                      </span>
                    </div>

                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {module.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors">
                      {module.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      {module.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Stream Quick Access */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎓 Explore PG Programs by Stream
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'science', name: 'Science & Technology', icon: '🔬', description: 'Advanced research and technology-focused postgraduate programs' },
              { id: 'medical', name: 'Medical & Health Sciences', icon: '🧠', description: 'Healthcare, medical sciences, and allied health professions' },
              { id: 'commerce', name: 'Commerce & Management', icon: '📊', description: 'Business, finance, economics, and management studies' },
              { id: 'arts', name: 'Arts & Humanities', icon: '🧑‍🎨', description: 'Literature, social sciences, and creative arts programs' }
            ].map((stream) => (
              <Link
                key={stream.id}
                to="/courses"
                className="group bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{stream.icon}</div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {stream.name}
                </h4>
                <p className="text-gray-400 text-sm">{stream.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📊 PG Zone Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">PG Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-gray-300">Research Opportunities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-300">Fellowships</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDashboard;