import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User, Lightbulb, BookOpen, Target, Users } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI Career Counselor powered by advanced AI. I'm here to help you with career guidance, stream selection, exam preparation, and any questions about your future. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "Which stream should I choose after 10th?",
    "What are the best engineering entrance exams?",
    "How to become a doctor in India?",
    "Career options in Commerce stream",
    "Skills needed for software engineering",
    "Best colleges for MBA in India",
    "How to prepare for NEET?",
    "What is the scope of Data Science?",
    "Career opportunities in Arts stream",
    "How to get into IIT?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Try Gemini AI API first
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAwq55eOhlaTI1tmcq1PoiTNFPsd4g2YmY`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a career counselor AI assistant for Career Canvas platform in India. Answer this career-related question: ${inputMessage}. 

              Provide helpful, accurate, and encouraging guidance about careers, education, streams, exams, and skills specifically for Indian students. Include specific information about:
              - Indian education system (Class 10, 12, UG, PG)
              - Indian entrance exams (JEE, NEET, CAT, CLAT, etc.)
              - Indian colleges and universities
              - Career opportunities in India
              - Salary ranges in Indian context
              - Government job opportunities
              
              Keep responses concise but informative (200-300 words). Use bullet points for better readability. Be encouraging and supportive.`
            }]
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || generateFallbackResponse(inputMessage);
        
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          content: aiResponse,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Gemini API failed');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      // Try OpenAI API as fallback
      try {
        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY || 'your-openai-api-key'}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are a career counselor AI assistant for Career Canvas platform in India. Provide helpful career guidance for Indian students.'
              },
              {
                role: 'user',
                content: inputMessage
              }
            ],
            max_tokens: 300,
            temperature: 0.7
          })
        });

        if (openAIResponse.ok) {
          const openAIData = await openAIResponse.json();
          const aiResponse = openAIData.choices?.[0]?.message?.content || generateFallbackResponse(inputMessage);
          
          const botMessage = {
            id: messages.length + 2,
            type: 'bot',
            content: aiResponse,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, botMessage]);
        } else {
          throw new Error('OpenAI API failed');
        }
      } catch (openAIError) {
        console.error('Error calling OpenAI API:', openAIError);
        // Fallback to local responses
        const fallbackResponse = generateFallbackResponse(inputMessage);
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          content: fallbackResponse,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  const generateFallbackResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('stream') || input.includes('10th') || input.includes('12th')) {
      return "**Stream Selection Guide** 🎯\n\nChoosing the right stream after Class 10 is crucial for your career:\n\n**Science Stream (PCM/PCB):**\n• Engineering, Medical, Research careers\n• High-demand technical fields\n• Entrance exams: JEE, NEET, BITSAT\n\n**Commerce Stream:**\n• Business, Finance, CA, MBA paths\n• Entrepreneurship opportunities\n• Exams: CA Foundation, CLAT, CUET\n\n**Arts/Humanities:**\n• Civil Services, Law, Journalism, Psychology\n• Creative and social impact careers\n• Exams: CLAT, CUET, UPSC CSE\n\n**💡 Recommendation:** Take our aptitude test to get personalized stream suggestions based on your interests and strengths!\n\nWould you like specific guidance about any stream?";
    }
    
    if (input.includes('engineering') || input.includes('jee') || input.includes('iit')) {
      return "**Engineering Career Path** ⚙️\n\n**Key Entrance Exams:**\n• **JEE Main** - NITs, IIITs, other engineering colleges\n• **JEE Advanced** - IITs (top tier)\n• **BITSAT** - BITS Pilani\n• **State CETs** - State engineering colleges\n\n**Top Specializations:**\n• Computer Science & Engineering (highest demand)\n• Artificial Intelligence & Machine Learning\n• Electronics & Communication\n• Mechanical, Civil, Chemical Engineering\n\n**Preparation Strategy:**\n• Strong foundation in Physics, Chemistry, Mathematics\n• Start preparation in Class 11\n• Regular practice with previous year papers\n• Take mock tests consistently\n\n**Career Prospects:**\n• Software Engineer: ₹3-25 LPA\n• Core Engineering roles: ₹4-15 LPA\n• Research & Development: ₹5-20 LPA\n• Entrepreneurship opportunities\n\nNeed specific guidance on any engineering branch or exam preparation?";
    }
    
    if (input.includes('doctor') || input.includes('medical') || input.includes('mbbs') || input.includes('neet')) {
      return "**Medical Career Pathway** 🩺\n\n**Education Journey:**\n• **Class 12:** PCB (Physics, Chemistry, Biology)\n• **NEET UG:** For MBBS/BDS admission\n• **MBBS:** 5.5 years (4.5 years + 1 year internship)\n• **NEET PG:** For MD/MS specialization (optional)\n\n**NEET Preparation Tips:**\n• Focus heavily on NCERT textbooks\n• Biology is scoring - don't neglect Physics & Chemistry\n• Practice MCQs extensively\n• Take regular mock tests\n• Maintain consistency in studies\n\n**Career Options:**\n• **General Practitioner:** ₹5-15 LPA\n• **Specialist (after MD/MS):** ₹15-50+ LPA\n• **Government Medical Officer:** ₹8-20 LPA\n• **Private Practice:** Variable income\n• **Medical Research:** ₹6-25 LPA\n\n**Alternative Medical Careers:**\n• BAMS (Ayurveda), BHMS (Homeopathy)\n• BDS (Dental), BPT (Physiotherapy)\n• B.Pharm (Pharmacy), B.Sc Nursing\n\nWant specific guidance on NEET preparation or medical specializations?";
    }

    if (input.includes('commerce') || input.includes('ca') || input.includes('mba') || input.includes('business')) {
      return "**Commerce Stream Opportunities** 💼\n\n**Popular Career Paths:**\n\n**1. Chartered Accountancy (CA):**\n• Duration: 3-5 years\n• Salary: ₹6-30+ LPA\n• High respect and job security\n\n**2. MBA/Management:**\n• Entrance: CAT, XAT, CMAT\n• Top IIMs offer ₹20-50+ LPA packages\n• Specializations: Finance, Marketing, HR, Operations\n\n**3. Company Secretary (CS):**\n• Corporate law and compliance expert\n• Salary: ₹5-20 LPA\n\n**4. Banking & Finance:**\n• Bank PO, Investment Banking\n• Salary: ₹4-25 LPA\n\n**5. Entrepreneurship:**\n• Start your own business\n• Unlimited earning potential\n\n**Key Skills to Develop:**\n• Financial literacy\n• Communication skills\n• Leadership abilities\n• Analytical thinking\n\n**Entrance Exams:**\n• CA Foundation, CAT, XAT, CLAT, CUET\n\nWhich commerce career interests you most?";
    }

    if (input.includes('arts') || input.includes('humanities') || input.includes('upsc') || input.includes('civil services')) {
      return "**Arts & Humanities Career Guide** 🎨\n\n**High-Impact Career Options:**\n\n**1. Civil Services (UPSC):**\n• IAS, IPS, IFS officers\n• Salary: ₹5-15 LPA + benefits\n• High social impact and prestige\n\n**2. Law & Legal Services:**\n• Entrance: CLAT for 5-year LLB\n• Corporate lawyers earn ₹8-50+ LPA\n• Judicial services, legal consulting\n\n**3. Journalism & Media:**\n• Print, digital, broadcast journalism\n• Content creation, PR, advertising\n• Salary: ₹3-20 LPA\n\n**4. Psychology & Social Work:**\n• Clinical psychology, counseling\n• NGO work, social development\n• Salary: ₹3-15 LPA\n\n**5. Teaching & Academia:**\n• School teaching, university professor\n• Research and academic writing\n• Salary: ₹3-20 LPA\n\n**Key Advantages:**\n• Develop critical thinking\n• Strong communication skills\n• Social awareness and empathy\n• Diverse career opportunities\n\n**Entrance Exams:**\n• CUET, CLAT, JNU entrance, BHU UET\n\nWhich arts career path interests you?";
    }

    if (input.includes('data science') || input.includes('ai') || input.includes('machine learning')) {
      return "**Data Science & AI Career Guide** 🤖\n\n**Why Data Science is Hot:**\n• Fastest growing field globally\n• High demand across all industries\n• Excellent salary packages\n• Future-proof career\n\n**Educational Path:**\n• **UG:** B.Sc Data Science, B.Tech CSE, B.Sc Statistics\n• **PG:** M.Sc Data Science, M.Tech AI/ML\n• **Certifications:** Google, IBM, Microsoft AI courses\n\n**Key Skills Required:**\n• Programming: Python, R, SQL\n• Statistics and Mathematics\n• Machine Learning algorithms\n• Data visualization tools\n• Business understanding\n\n**Career Roles & Salaries:**\n• **Data Analyst:** ₹3-8 LPA\n• **Data Scientist:** ₹6-25 LPA\n• **ML Engineer:** ₹8-30 LPA\n• **AI Research Scientist:** ₹15-50+ LPA\n\n**Top Hiring Companies:**\n• Google, Microsoft, Amazon\n• Flipkart, Zomato, Ola\n• Banks, consulting firms\n• Healthcare, fintech startups\n\n**Learning Resources:**\n• Coursera, edX online courses\n• Kaggle competitions\n• GitHub projects\n\nWant specific guidance on getting started in Data Science?";
    }

    if (input.includes('salary') || input.includes('package') || input.includes('earning')) {
      return "**Career Salary Guide in India** 💰\n\n**Engineering (Fresh Graduates):**\n• Software Engineer: ₹3-12 LPA\n• Core Engineering: ₹3-8 LPA\n• Top IIT graduates: ₹15-50+ LPA\n\n**Medical Field:**\n• MBBS Doctor: ₹5-15 LPA\n• Specialist (MD/MS): ₹15-50+ LPA\n• Government Medical Officer: ₹8-20 LPA\n\n**Commerce & Management:**\n• CA (Fresher): ₹6-12 LPA\n• MBA from top B-schools: ₹15-50+ LPA\n• Banking (PO level): ₹7-15 LPA\n\n**Arts & Humanities:**\n• Civil Services (IAS/IPS): ₹5-15 LPA + benefits\n• Lawyer: ₹3-50+ LPA (varies widely)\n• Journalist: ₹3-15 LPA\n\n**Emerging Fields:**\n• Data Science: ₹6-25 LPA\n• Digital Marketing: ₹3-15 LPA\n• UX/UI Design: ₹4-20 LPA\n\n**💡 Remember:**\n• Salaries vary by city, company, experience\n• Skills and performance matter more than degree\n• Continuous learning increases earning potential\n\nWhich field's salary prospects interest you most?";
    }
    
    // Default response
    return "**I'm here to help with your career questions!** 🎯\n\nI can assist you with:\n\n**📚 Academic Guidance:**\n• Stream selection after Class 10/12\n• Course recommendations\n• College and university information\n\n**🎯 Career Planning:**\n• Career options by field\n• Salary expectations\n• Skills development\n\n**📝 Exam Preparation:**\n• Entrance exam information\n• Preparation strategies\n• Important dates and deadlines\n\n**🏛️ Institution Guidance:**\n• Top colleges and universities\n• Admission processes\n• Scholarship opportunities\n\n**💼 Professional Development:**\n• Industry insights\n• Job market trends\n• Skill requirements\n\nTry asking specific questions like:\n• \"What should I study to become a software engineer?\"\n• \"How do I prepare for NEET?\"\n• \"What are the career options in Commerce?\"\n• \"Which colleges are best for MBA?\"\n\nWhat specific career guidance can I provide for you today?";
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            AI Career Assistant
          </h2>
          <p className="text-lg text-gray-300">
            Get instant answers powered by advanced AI for your career questions
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 overflow-hidden">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gradient-to-br from-purple-500 to-blue-600 text-white'
                    }`}>
                      {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-gray-100'
                  }`}>
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                    <div className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex mr-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-slate-700/50 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="border-t border-purple-500/20 p-4">
            <div className="mb-3">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Quick Questions:</h4>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-purple-500/20 p-4">
            <div className="flex space-x-3">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about careers, streams, exams, or colleges..."
                  className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows="2"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/aptitude-test"
            className="flex items-center p-4 bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
              <Lightbulb className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="font-medium text-white">Take Aptitude Test</div>
              <div className="text-sm text-gray-400">Discover your strengths</div>
            </div>
          </Link>
          
          <Link
            to="/roadmap"
            className="flex items-center p-4 bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
              <Target className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="font-medium text-white">Create Roadmap</div>
              <div className="text-sm text-gray-400">Plan your career path</div>
            </div>
          </Link>
          
          <Link
            to="/institutions"
            className="flex items-center p-4 bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
              <BookOpen className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="font-medium text-white">Find Colleges</div>
              <div className="text-sm text-gray-400">Explore institutions</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;