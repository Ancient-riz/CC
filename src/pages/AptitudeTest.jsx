import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Circle, BarChart3, Target, Brain } from 'lucide-react';

const AptitudeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 1,
      category: 'Logical Reasoning',
      question: "If all roses are flowers and some flowers are red, which of the following is definitely true?",
      options: [
        "All roses are red",
        "Some roses are red", 
        "No roses are red",
        "Some roses may be red"
      ],
      correct: 3
    },
    {
      id: 2,
      category: 'Mathematical Aptitude',
      question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correct: 1
    },
    {
      id: 3,
      category: 'Verbal Reasoning',
      question: "Choose the word that is most similar in meaning to 'METICULOUS':",
      options: ["Careless", "Careful", "Quick", "Lazy"],
      correct: 1
    },
    {
      id: 4,
      category: 'Scientific Reasoning',
      question: "Which of the following is NOT a renewable source of energy?",
      options: ["Solar", "Wind", "Coal", "Hydroelectric"],
      correct: 2
    },
    {
      id: 5,
      category: 'Analytical Thinking',
      question: "In a class of 30 students, 18 play cricket, 12 play football, and 8 play both. How many play neither?",
      options: ["6", "8", "10", "12"],
      correct: 1
    },
    {
      id: 6,
      category: 'Spatial Reasoning',
      question: "If you fold a piece of paper in half twice and then cut a hole, how many holes will there be when unfolded?",
      options: ["2", "4", "6", "8"],
      correct: 1
    },
    {
      id: 7,
      category: 'Logical Reasoning',
      question: "All birds can fly. Penguins are birds. Therefore:",
      options: [
        "Penguins can fly",
        "The first statement is false",
        "Penguins are not birds", 
        "Both A and B are possible"
      ],
      correct: 1
    },
    {
      id: 8,
      category: 'Mathematical Aptitude',
      question: "If 3x + 7 = 22, what is the value of x?",
      options: ["3", "5", "7", "9"],
      correct: 1
    },
    {
      id: 9,
      category: 'Verbal Reasoning',
      question: "Complete the analogy: Book : Author :: Painting : ?",
      options: ["Canvas", "Artist", "Gallery", "Color"],
      correct: 1
    },
    {
      id: 10,
      category: 'Interest Assessment',
      question: "Which activity would you find most engaging?",
      options: [
        "Solving complex mathematical problems",
        "Writing creative stories",
        "Conducting scientific experiments",
        "Organizing events and leading teams"
      ],
      correct: -1 // No correct answer for interest questions
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const completeTest = () => {
    // Calculate results
    let correctAnswers = 0;
    let categoryScores = {
      'Logical Reasoning': { correct: 0, total: 0 },
      'Mathematical Aptitude': { correct: 0, total: 0 },
      'Verbal Reasoning': { correct: 0, total: 0 },
      'Scientific Reasoning': { correct: 0, total: 0 },
      'Analytical Thinking': { correct: 0, total: 0 },
      'Spatial Reasoning': { correct: 0, total: 0 },
      'Interest Assessment': { correct: 0, total: 0 }
    };

    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      const category = question.category;
      
      if (category !== 'Interest Assessment') {
        categoryScores[category].total++;
        if (userAnswer === question.correct) {
          correctAnswers++;
          categoryScores[category].correct++;
        }
      } else {
        categoryScores[category].total++;
      }
    });

    // Determine recommended streams based on performance
    const mathScore = categoryScores['Mathematical Aptitude'].correct / categoryScores['Mathematical Aptitude'].total;
    const scienceScore = categoryScores['Scientific Reasoning'].correct / categoryScores['Scientific Reasoning'].total;
    const verbalScore = categoryScores['Verbal Reasoning'].correct / categoryScores['Verbal Reasoning'].total;
    const logicalScore = categoryScores['Logical Reasoning'].correct / categoryScores['Logical Reasoning'].total;

    let recommendedStreams = [];
    
    if (mathScore >= 0.7 && scienceScore >= 0.7) {
      recommendedStreams.push({
        stream: 'Science',
        percentage: Math.round((mathScore + scienceScore) * 50),
        reason: 'Strong mathematical and scientific reasoning abilities'
      });
    }
    
    if (mathScore >= 0.6 && logicalScore >= 0.6) {
      recommendedStreams.push({
        stream: 'Commerce',
        percentage: Math.round((mathScore + logicalScore) * 50),
        reason: 'Good analytical and logical thinking skills'
      });
    }
    
    if (verbalScore >= 0.7) {
      recommendedStreams.push({
        stream: 'Arts',
        percentage: Math.round(verbalScore * 100),
        reason: 'Excellent verbal and communication abilities'
      });
    }

    // If no strong recommendations, provide balanced suggestions
    if (recommendedStreams.length === 0) {
      recommendedStreams = [
        { stream: 'Commerce', percentage: 70, reason: 'Balanced analytical skills suitable for business studies' },
        { stream: 'Arts', percentage: 65, reason: 'Good communication skills for humanities' },
        { stream: 'Science', percentage: 60, reason: 'Potential for development in scientific thinking' }
      ];
    }

    setResults({
      totalScore: Math.round((correctAnswers / (questions.length - 1)) * 100), // Exclude interest questions
      categoryScores,
      recommendedStreams: recommendedStreams.sort((a, b) => b.percentage - a.percentage)
    });
    
    setTestCompleted(true);
  };

  const startTest = () => {
    setTestStarted(true);
  };

  if (!testStarted) {
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Career Aptitude Test
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your strengths and get personalized stream recommendations based on your 
              aptitude, interests, and cognitive abilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Test Overview</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">15-20 minutes</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Questions</div>
                  <div className="text-gray-600">10 carefully designed questions</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What This Test Measures:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Logical Reasoning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Mathematical Aptitude</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Verbal Reasoning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Scientific Thinking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Analytical Skills</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Interest Assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <h4 className="font-semibold text-yellow-800 mb-2">Instructions:</h4>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Read each question carefully before answering</li>
                <li>• Choose the best answer from the given options</li>
                <li>• You can navigate back and forth between questions</li>
                <li>• Take your time - there's no strict time limit</li>
                <li>• Answer honestly for the most accurate results</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={startTest}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                Start Aptitude Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (testCompleted && results) {
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Your Aptitude Test Results
            </h2>
            <p className="text-lg text-gray-600">
              Based on your performance, here are your personalized recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overall Score */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Overall Score</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{results.totalScore}%</div>
                <div className="text-gray-600">Aptitude Score</div>
                <div className="mt-4 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${results.totalScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Recommended Streams */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Academic Streams</h3>
              <div className="space-y-4">
                {results.recommendedStreams.map((stream, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{stream.stream}</h4>
                      <span className="text-2xl font-bold text-green-600">{stream.percentage}%</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{stream.reason}</p>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${stream.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Detailed Category Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(results.categoryScores).map(([category, scores]) => {
                if (category === 'Interest Assessment') return null;
                const percentage = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0;
                return (
                  <div key={category} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{category}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">{scores.correct}/{scores.total} correct</span>
                      <span className="font-semibold text-blue-600">{percentage}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/stream-selector"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Target className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Explore Streams</h4>
                <p className="text-gray-600 text-center text-sm">Learn more about your recommended academic streams</p>
              </Link>
              
              <Link
                to="/roadmap"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Create Roadmap</h4>
                <p className="text-gray-600 text-center text-sm">Build a personalized career roadmap</p>
              </Link>
              
              <Link
                to="/ai-assistant"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Brain className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Ask AI Counselor</h4>
                <p className="text-gray-600 text-center text-sm">Get personalized guidance from our AI assistant</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test in progress
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <div className="text-sm font-medium text-blue-600 mb-2">{currentQ.category}</div>
            <h3 className="text-xl font-semibold text-gray-900">{currentQ.question}</h3>
          </div>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion] === index
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    answers[currentQuestion] === index
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Complete Test' : 'Next'}
            </button>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Question Navigator</h4>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg font-medium text-sm transition-all duration-200 ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : answers[index] !== undefined
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-600 border border-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;