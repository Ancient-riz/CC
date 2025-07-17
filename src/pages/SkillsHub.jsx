import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillCategories } from '../data/careerData';
import { ArrowLeft, Search, Code, Users, Palette, ExternalLink, Star, Clock, Award } from 'lucide-react';

const SkillsHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all skills from all categories
  const allSkills = Object.entries(skillCategories).flatMap(([category, skills]) =>
    skills.map(skill => ({ ...skill, category }))
  );

  // Filter skills based on selected criteria
  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'technical', label: 'Technical Skills' },
    { value: 'soft', label: 'Soft Skills' },
    { value: 'creative', label: 'Creative Skills' }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'technical': return <Code className="w-5 h-5" />;
      case 'soft': return <Users className="w-5 h-5" />;
      case 'creative': return <Palette className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'technical': return 'from-blue-500 to-blue-600';
      case 'soft': return 'from-green-500 to-green-600';
      case 'creative': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/dashboard"
              className="flex items-center text-blue-600 hover:text-blue-700 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-blue-600">Career Canvas</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills Development Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Develop essential skills for your career success. Explore technical, soft, and creative skills 
            with curated learning resources and platforms.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className={`bg-gradient-to-br ${getCategoryColor(category)} rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition-shadow duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="flex items-center mb-4">
                {getCategoryIcon(category)}
                <h3 className="text-lg font-semibold ml-2 capitalize">{category} Skills</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                {category === 'technical' && 'Master programming, data analysis, and digital tools'}
                {category === 'soft' && 'Develop communication, leadership, and interpersonal skills'}
                {category === 'creative' && 'Express creativity through design, writing, and media'}
              </p>
              <div className="text-2xl font-bold">{skills.length} Skills</div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categoryOptions.find(c => c.value === selectedCategory)?.label}`}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Skill Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      {getCategoryIcon(skill.category)}
                      <span className="ml-1 capitalize">{skill.category}</span>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(skill.category)} flex items-center justify-center text-white`}>
                    {getCategoryIcon(skill.category)}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>

              {/* Learning Platforms */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Learning Platforms</h4>
                <div className="space-y-2">
                  {skill.platforms.map((platform, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-700">{platform}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <Link
                    to="/roadmap"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    Add to Roadmap
                  </Link>
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    <Award className="w-4 h-4 mr-1" />
                    Track Progress
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Star className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No skills found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find relevant skills.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Skill Assessment CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 border border-orange-200">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Assess Your Current Skills
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our comprehensive skills assessment to identify your strengths and areas for improvement. 
              Get personalized recommendations for skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/aptitude-test"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Take Skills Assessment
                <Award className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/ai-assistant"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 border border-gray-300 transition-colors"
              >
                Get AI Recommendations
                <Users className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsHub;