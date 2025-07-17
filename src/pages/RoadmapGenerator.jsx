import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Calendar, CheckCircle, Circle, Download, Share, Plus, Clock, Star, TrendingUp } from 'lucide-react';

const RoadmapGenerator = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [roadmap, setRoadmap] = useState(null);

  const goals = [
    { id: 'software-engineer', name: 'Software Engineer', stream: 'science', level: 'ug' },
    { id: 'data-scientist', name: 'Data Scientist', stream: 'science', level: 'pg' },
    { id: 'doctor', name: 'Medical Doctor', stream: 'science', level: 'ug' },
    { id: 'research-scientist', name: 'Research Scientist', stream: 'science', level: 'pg' },
    { id: 'chartered-accountant', name: 'Chartered Accountant', stream: 'commerce', level: 'ug' },
    { id: 'investment-banker', name: 'Investment Banker', stream: 'commerce', level: 'pg' },
    { id: 'business-analyst', name: 'Business Analyst', stream: 'commerce', level: 'ug' },
    { id: 'entrepreneur', name: 'Entrepreneur', stream: 'commerce', level: 'any' },
    { id: 'civil-servant', name: 'Civil Servant (IAS/IPS)', stream: 'arts', level: 'any' },
    { id: 'lawyer', name: 'Lawyer', stream: 'arts', level: 'ug' },
    { id: 'psychologist', name: 'Psychologist', stream: 'arts', level: 'pg' },
    { id: 'journalist', name: 'Journalist', stream: 'arts', level: 'ug' },
    { id: 'teacher', name: 'Teacher/Professor', stream: 'any', level: 'any' },
    { id: 'designer', name: 'UI/UX Designer', stream: 'any', level: 'ug' }
  ];

  const streams = [
    { id: 'science', name: 'Science & Technology' },
    { id: 'commerce', name: 'Commerce & Business' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'any', name: 'Any Stream' }
  ];

  const timeframes = [
    { id: '1-year', name: '1 Year' },
    { id: '2-years', name: '2 Years' },
    { id: '3-years', name: '3 Years' },
    { id: '4-years', name: '4 Years' },
    { id: '5-years', name: '5+ Years' }
  ];

  const levels = [
    { id: 'class-10', name: 'Class 10 Student' },
    { id: 'class-12', name: 'Class 12 Student' },
    { id: 'ug-1st', name: '1st Year UG Student' },
    { id: 'ug-2nd', name: '2nd Year UG Student' },
    { id: 'ug-3rd', name: '3rd Year UG Student' },
    { id: 'ug-final', name: 'Final Year UG Student' },
    { id: 'ug-graduate', name: 'UG Graduate' },
    { id: 'pg-student', name: 'PG Student' },
    { id: 'pg-graduate', name: 'PG Graduate' },
    { id: 'working', name: 'Working Professional' }
  ];

  const generateDynamicRoadmap = () => {
    const goal = goals.find(g => g.id === selectedGoal);
    if (!goal) return null;

    // Dynamic roadmap generation based on selections
    const roadmaps = {
      'software-engineer': {
        'class-10': {
          phases: [
            {
              phase: 'Foundation Building',
              duration: '2 years (Class 11-12)',
              milestones: [
                { task: 'Choose Science stream with Mathematics', completed: false },
                { task: 'Learn basic programming (Python/Scratch)', completed: false },
                { task: 'Participate in coding competitions', completed: false },
                { task: 'Build simple projects and portfolio', completed: false }
              ]
            },
            {
              phase: 'Entrance Preparation',
              duration: '1 year',
              milestones: [
                { task: 'Prepare for JEE Main/Advanced', completed: false },
                { task: 'Apply to top engineering colleges', completed: false },
                { task: 'Learn advanced programming concepts', completed: false },
                { task: 'Complete Class 12 with good grades', completed: false }
              ]
            },
            {
              phase: 'Engineering Education',
              duration: '4 years',
              milestones: [
                { task: 'Get admission in Computer Science Engineering', completed: false },
                { task: 'Master programming languages (Java, C++, Python)', completed: false },
                { task: 'Complete internships at tech companies', completed: false },
                { task: 'Build significant projects and contribute to open source', completed: false }
              ]
            },
            {
              phase: 'Career Launch',
              duration: '6 months',
              milestones: [
                { task: 'Prepare for technical interviews', completed: false },
                { task: 'Apply to top tech companies', completed: false },
                { task: 'Clear coding rounds and system design interviews', completed: false },
                { task: 'Start career as Software Engineer', completed: false }
              ]
            }
          ]
        },
        'ug-final': {
          phases: [
            {
              phase: 'Skill Enhancement',
              duration: '6 months',
              milestones: [
                { task: 'Master advanced programming concepts', completed: false },
                { task: 'Learn system design and architecture', completed: false },
                { task: 'Build portfolio with 3-5 significant projects', completed: false },
                { task: 'Contribute to open source projects', completed: false }
              ]
            },
            {
              phase: 'Interview Preparation',
              duration: '3 months',
              milestones: [
                { task: 'Practice data structures and algorithms', completed: false },
                { task: 'Mock interviews and coding practice', completed: false },
                { task: 'Prepare for behavioral interviews', completed: false },
                { task: 'Research target companies and roles', completed: false }
              ]
            },
            {
              phase: 'Job Search',
              duration: '3 months',
              milestones: [
                { task: 'Apply to 50+ companies', completed: false },
                { task: 'Clear technical screening rounds', completed: false },
                { task: 'Negotiate job offers', completed: false },
                { task: 'Start career as Software Engineer', completed: false }
              ]
            }
          ]
        }
      },
      'doctor': {
        'class-10': {
          phases: [
            {
              phase: 'Foundation Phase',
              duration: '2 years (Class 11-12)',
              milestones: [
                { task: 'Choose Science stream with PCB (Physics, Chemistry, Biology)', completed: false },
                { task: 'Build strong foundation in Biology and Chemistry', completed: false },
                { task: 'Start NEET preparation early', completed: false },
                { task: 'Maintain 90%+ in board exams', completed: false }
              ]
            },
            {
              phase: 'NEET Preparation',
              duration: '2 years',
              milestones: [
                { task: 'Join coaching institute for NEET', completed: false },
                { task: 'Complete NCERT thoroughly for PCB', completed: false },
                { task: 'Take regular mock tests and analyze performance', completed: false },
                { task: 'Clear NEET with top 10,000 rank', completed: false }
              ]
            },
            {
              phase: 'Medical Education',
              duration: '5.5 years',
              milestones: [
                { task: 'Get admission in top medical college', completed: false },
                { task: 'Complete MBBS with good grades', completed: false },
                { task: 'Clear NEET PG for specialization', completed: false },
                { task: 'Complete 1 year internship', completed: false }
              ]
            },
            {
              phase: 'Specialization',
              duration: '3 years',
              milestones: [
                { task: 'Choose medical specialization (MD/MS)', completed: false },
                { task: 'Complete residency training', completed: false },
                { task: 'Clear board examinations', completed: false },
                { task: 'Start practice as specialist doctor', completed: false }
              ]
            }
          ]
        }
      },
      'chartered-accountant': {
        'class-12': {
          phases: [
            {
              phase: 'CA Foundation',
              duration: '6 months',
              milestones: [
                { task: 'Register for CA Foundation course', completed: false },
                { task: 'Study Accounting, Law, Mathematics, Economics', completed: false },
                { task: 'Clear CA Foundation exam', completed: false },
                { task: 'Register for CA Intermediate', completed: false }
              ]
            },
            {
              phase: 'CA Intermediate',
              duration: '1.5 years',
              milestones: [
                { task: 'Complete 8 months study for CA Inter', completed: false },
                { task: 'Clear both groups of CA Intermediate', completed: false },
                { task: 'Start articleship training (3 years)', completed: false },
                { task: 'Gain practical experience in auditing', completed: false }
              ]
            },
            {
              phase: 'CA Final & Articleship',
              duration: '3 years',
              milestones: [
                { task: 'Complete articleship training', completed: false },
                { task: 'Prepare for CA Final examinations', completed: false },
                { task: 'Clear CA Final - become Chartered Accountant', completed: false },
                { task: 'Join CA firm or start independent practice', completed: false }
              ]
            }
          ]
        }
      },
      'civil-servant': {
        'ug-graduate': {
          phases: [
            {
              phase: 'UPSC Preparation',
              duration: '1-2 years',
              milestones: [
                { task: 'Choose optional subject based on background', completed: false },
                { task: 'Study NCERT books and standard references', completed: false },
                { task: 'Join coaching or self-study with proper strategy', completed: false },
                { task: 'Take regular mock tests and current affairs', completed: false }
              ]
            },
            {
              phase: 'UPSC Examination',
              duration: '1 year',
              milestones: [
                { task: 'Clear UPSC Prelims examination', completed: false },
                { task: 'Clear UPSC Mains examination', completed: false },
                { task: 'Clear UPSC Interview/Personality Test', completed: false },
                { task: 'Get final selection in merit list', completed: false }
              ]
            },
            {
              phase: 'Training & Service',
              duration: '2 years training',
              milestones: [
                { task: 'Complete foundation course at LBSNAA', completed: false },
                { task: 'Complete professional training', completed: false },
                { task: 'Get first posting as Assistant Collector/SP', completed: false },
                { task: 'Start serving as IAS/IPS officer', completed: false }
              ]
            }
          ]
        }
      },
      'data-scientist': {
        'ug-graduate': {
          phases: [
            {
              phase: 'Skill Building',
              duration: '6 months',
              milestones: [
                { task: 'Learn Python programming and libraries (Pandas, NumPy)', completed: false },
                { task: 'Master statistics and probability concepts', completed: false },
                { task: 'Learn SQL and database management', completed: false },
                { task: 'Understand machine learning algorithms', completed: false }
              ]
            },
            {
              phase: 'Advanced Learning',
              duration: '6 months',
              milestones: [
                { task: 'Learn deep learning and neural networks', completed: false },
                { task: 'Master data visualization tools (Tableau, Power BI)', completed: false },
                { task: 'Work on real-world data science projects', completed: false },
                { task: 'Build portfolio with 5+ projects', completed: false }
              ]
            },
            {
              phase: 'Specialization',
              duration: '1 year',
              milestones: [
                { task: 'Choose specialization (NLP, Computer Vision, etc.)', completed: false },
                { task: 'Complete advanced courses or MS in Data Science', completed: false },
                { task: 'Participate in Kaggle competitions', completed: false },
                { task: 'Get internship at data-driven company', completed: false }
              ]
            },
            {
              phase: 'Career Launch',
              duration: '3 months',
              milestones: [
                { task: 'Apply to data scientist positions', completed: false },
                { task: 'Clear technical interviews and case studies', completed: false },
                { task: 'Negotiate job offer', completed: false },
                { task: 'Start career as Data Scientist', completed: false }
              ]
            }
          ]
        }
      }
    };

    const selectedRoadmap = roadmaps[selectedGoal]?.[currentLevel];
    if (!selectedRoadmap) {
      // Generate a generic roadmap if specific combination not found
      return {
        goal: goal.name,
        timeframe,
        currentLevel: levels.find(l => l.id === currentLevel)?.name,
        phases: [
          {
            phase: 'Preparation Phase',
            duration: '6 months',
            milestones: [
              { task: `Research ${goal.name} career requirements`, completed: false },
              { task: 'Identify skill gaps and learning needs', completed: false },
              { task: 'Create study plan and timeline', completed: false },
              { task: 'Start building relevant skills', completed: false }
            ]
          },
          {
            phase: 'Skill Development',
            duration: '1 year',
            milestones: [
              { task: 'Complete relevant courses and certifications', completed: false },
              { task: 'Build portfolio projects', completed: false },
              { task: 'Gain practical experience through internships', completed: false },
              { task: 'Network with professionals in the field', completed: false }
            ]
          },
          {
            phase: 'Career Transition',
            duration: '6 months',
            milestones: [
              { task: 'Apply for relevant positions', completed: false },
              { task: 'Prepare for interviews', completed: false },
              { task: 'Clear selection process', completed: false },
              { task: `Start career as ${goal.name}`, completed: false }
            ]
          }
        ]
      };
    }

    return {
      goal: goal.name,
      timeframe,
      currentLevel: levels.find(l => l.id === currentLevel)?.name,
      ...selectedRoadmap
    };
  };

  const generateRoadmap = () => {
    const dynamicRoadmap = generateDynamicRoadmap();
    setRoadmap(dynamicRoadmap);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateRoadmap();
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
            Smart <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Roadmap</span> Generator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create a personalized, dynamic roadmap based on your current level, chosen career, and timeline. 
            Get detailed milestones and actionable steps tailored specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-400" />
                Create Your Roadmap
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Current Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Academic Level
                  </label>
                  <select
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your current level</option>
                    {levels.map(level => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Stream */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Stream
                  </label>
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your stream</option>
                    {streams.map(stream => (
                      <option key={stream.id} value={stream.id}>
                        {stream.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Career Goal */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Career Goal
                  </label>
                  <select
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your career goal</option>
                    {goals
                      .filter(goal => selectedStream === '' || goal.stream === selectedStream || goal.stream === 'any')
                      .map(goal => (
                        <option key={goal.id} value={goal.id}>
                          {goal.name}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Timeframe */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Target Timeframe
                  </label>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select timeframe</option>
                    {timeframes.map(tf => (
                      <option key={tf.id} value={tf.id}>
                        {tf.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Generate Smart Roadmap
                </button>
              </form>
            </div>
          </div>

          {/* Roadmap Display Section */}
          <div className="lg:col-span-2">
            {roadmap ? (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
                {/* Roadmap Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      🎯 Your Personalized Roadmap: {roadmap.goal}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Timeline: {roadmap.timeframe}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        From: {roadmap.currentLevel}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Roadmap Phases */}
                <div className="space-y-8">
                  {roadmap.phases.map((phase, phaseIndex) => (
                    <div key={phaseIndex} className="relative">
                      {/* Phase Header */}
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                          {phaseIndex + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                          <p className="text-sm text-purple-300">Duration: {phase.duration}</p>
                        </div>
                      </div>

                      {/* Milestones */}
                      <div className="ml-14 space-y-3">
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <div key={milestoneIndex} className="flex items-start p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                            <div className="flex-shrink-0 mt-1">
                              {milestone.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                            <div className="ml-3 flex-1">
                              <p className={`text-sm ${milestone.completed ? 'text-green-300 line-through' : 'text-gray-300'}`}>
                                {milestone.task}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Connecting Line */}
                      {phaseIndex < roadmap.phases.length - 1 && (
                        <div className="absolute left-5 top-16 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 border-t border-purple-500/20">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/exams"
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      View Entrance Exams
                    </Link>
                    <Link
                      to="/institutions"
                      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Find Colleges
                    </Link>
                    <Link
                      to="/skills"
                      className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Develop Skills
                    </Link>
                    <Link
                      to="/ai-assistant"
                      className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                    >
                      Get AI Guidance
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Target className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Plan Your Career Journey?
                </h3>
                <p className="text-gray-300 mb-6">
                  Fill out the form to generate your personalized, dynamic roadmap with 
                  detailed milestones tailored to your current level and career goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
                  <div className="p-4 bg-purple-500/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-purple-300">Smart Timeline</div>
                  </div>
                  <div className="p-4 bg-cyan-500/10 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-cyan-300">Milestone Tracking</div>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-green-300">Dynamic Updates</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapGenerator;