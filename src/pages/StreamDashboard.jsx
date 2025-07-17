import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { streams, entranceExams, courses, institutions } from '../data/careerData';
import { ArrowLeft, BookOpen, GraduationCap, Building, Target, Users, Award } from 'lucide-react';

const StreamDashboard = () => {
  const { streamId } = useParams();
  const stream = streams[streamId];

  if (!stream) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stream not found</h2>
          <Link to="/stream-selector" className="text-blue-600 hover:text-blue-700">
            Back to Stream Selector
          </Link>
        </div>
      </div>
    );
  }

  const streamExams = entranceExams[streamId] || [];
  const streamCourses = courses[streamId] || [];
  const streamInstitutions = institutions[streamId] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/stream-selector"
              className="flex items-center text-blue-600 hover:text-blue-700 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Streams
            </Link>
            <h1 className="text-2xl font-bold text-blue-600">Career Canvas</h1>
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
          <div className="flex flex-wrap gap-3 mt-6">
            {stream.branches.map((branch, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
              >
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900">Entrance Exams</div>
            <div className="text-sm text-gray-600">{streamExams.length} exams</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900">Courses</div>
            <div className="text-sm text-gray-600">{streamCourses.length} courses</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <Building className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900">Institutions</div>
            <div className="text-sm text-gray-600">{streamInstitutions.length} colleges</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900">Career Paths</div>
            <div className="text-sm text-gray-600">Multiple options</div>
          </div>
        </div>

        {/* Entrance Exams Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Entrance Exams</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streamExams.map((exam, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{exam.name}</h4>
                    <p className="text-sm text-gray-600">{exam.type} • {exam.level}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {exam.dates}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{exam.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Eligibility:</div>
                  <div className="text-sm text-gray-600">{exam.eligibility}</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Syllabus:</div>
                  <div className="flex flex-wrap gap-2">
                    {exam.syllabus.map((subject, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={exam.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Visit Official Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Courses</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {streamCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{course.name}</h4>
                    <p className="text-sm text-gray-600">{course.duration} • {course.type}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {course.averageFees}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Specializations:</div>
                  <div className="flex flex-wrap gap-2">
                    {course.specializations.map((spec, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Top Colleges:</div>
                  <div className="text-sm text-gray-600">
                    {course.topColleges.slice(0, 3).join(', ')}
                    {course.topColleges.length > 3 && '...'}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Career Options:</div>
                  <div className="flex flex-wrap gap-2">
                    {course.careerOptions.map((career, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Institutions Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Institutions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {streamInstitutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{institution.name}</h4>
                    <p className="text-sm text-gray-600">{institution.location}</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                    Rank #{institution.ranking}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{institution.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Fees:</span>
                    <span className="font-medium">{institution.fees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Placement Rate:</span>
                    <span className="font-medium text-green-600">{institution.placementRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Package:</span>
                    <span className="font-medium">{institution.averagePackage}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Admission:</div>
                  <div className="text-sm text-gray-600">{institution.admissionProcess}</div>
                </div>

                <a
                  href={institution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Target className="w-4 h-4 mr-2" />
            Generate Career Roadmap
          </Link>
          <Link
            to="/ai-assistant"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Users className="w-4 h-4 mr-2" />
            Ask AI Assistant
          </Link>
          <Link
            to="/aptitude-test"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <Award className="w-4 h-4 mr-2" />
            Take Aptitude Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StreamDashboard;