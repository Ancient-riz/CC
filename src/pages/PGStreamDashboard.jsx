import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { pgStreams, pgEntranceExams, pgInstitutions } from '../data/pgData';
import { ArrowLeft, BookOpen, GraduationCap, Building, Target, Users, Award, ExternalLink, Clock, MapPin, DollarSign } from 'lucide-react';

const PGStreamDashboard = () => {
  const { streamId } = useParams();
  const stream = pgStreams[streamId];

  if (!stream) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stream not found</h2>
          <Link to="/pg-dashboard" className="text-purple-400 hover:text-purple-300">
            Back to PG Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const streamExams = pgEntranceExams[streamId] || [];
  const streamInstitutions = pgInstitutions[streamId] || [];

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
        {/* Stream Header */}
        <div className={`bg-gradient-to-br ${stream.color} rounded-2xl p-8 text-white mb-8`}>
          <div className="flex items-center mb-4">
            <div className="text-5xl mr-6">{stream.icon}</div>
            <div>
              <h2 className="text-4xl font-bold mb-2">{stream.name}</h2>
              <p className="text-xl opacity-90">{stream.description}</p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-lg p-4 rounded-lg border border-purple-500/20 text-center">
            <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="font-semibold text-white">Degree Programs</div>
            <div className="text-sm text-gray-300">{stream.degrees.length} programs</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg p-4 rounded-lg border border-purple-500/20 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="font-semibold text-white">Career Paths</div>
            <div className="text-sm text-gray-300">{stream.careerPaths.length} paths</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg p-4 rounded-lg border border-purple-500/20 text-center">
            <Building className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="font-semibold text-white">Top Institutions</div>
            <div className="text-sm text-gray-300">{streamInstitutions.length} colleges</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg p-4 rounded-lg border border-purple-500/20 text-center">
            <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="font-semibold text-white">Entrance Exams</div>
            <div className="text-sm text-gray-300">{streamExams.length} exams</div>
          </div>
        </div>

        {/* Degree Programs Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">🎓 Postgraduate Degree Programs</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {stream.degrees.map((degree, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{degree.name}</h4>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {degree.duration}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                    {degree.averageFees}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Eligibility:</div>
                  <div className="text-sm text-gray-400">{degree.eligibility}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Top Colleges:</div>
                  <div className="text-sm text-gray-400">
                    {degree.topColleges.slice(0, 3).join(', ')}
                    {degree.topColleges.length > 3 && '...'}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Career Options:</div>
                  <div className="flex flex-wrap gap-2">
                    {degree.careerOptions.map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">🎯 Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stream.careerPaths.map((path, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{path.path}</h4>
                <p className="text-gray-300 text-sm mb-4">{path.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Key Roles:</div>
                  <div className="flex flex-wrap gap-2">
                    {path.roles.map((role, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-300 mb-2">Organizations:</div>
                  <div className="text-sm text-gray-400">
                    {path.organizations.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entrance Exams Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">📝 Entrance Exams</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {streamExams.map((exam, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{exam.name}</h4>
                    <p className="text-sm text-gray-400">{exam.type} • {exam.level}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    {exam.dates}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{exam.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Eligibility:</div>
                  <div className="text-sm text-gray-400">{exam.eligibility}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Syllabus:</div>
                  <div className="flex flex-wrap gap-2">
                    {exam.syllabus.map((subject, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-600/50 text-gray-300 rounded text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={exam.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Visit Official Website
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Top Institutions Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">🏛️ Top Institutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {streamInstitutions.slice(0, 12).map((institution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-4">
                <h4 className="font-semibold text-white text-sm mb-2">{institution}</h4>
                <div className="flex items-center text-xs text-gray-400">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>India</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/institutions"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              View All Institutions
              <Building className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/scholarships"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Find Scholarships
          </Link>
          <Link
            to="/roadmap"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Target className="w-4 h-4 mr-2" />
            Generate Roadmap
          </Link>
          <Link
            to="/ai-assistant"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Users className="w-4 h-4 mr-2" />
            Ask AI Assistant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PGStreamDashboard;