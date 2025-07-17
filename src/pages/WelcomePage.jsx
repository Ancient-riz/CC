import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated CC Logo */}
        <div className="mb-12">
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-75 animate-pulse scale-110"></div>
            
            {/* Middle ring */}
            <div className="absolute inset-2 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-full blur-lg opacity-60 animate-spin-slow"></div>
            
            {/* Logo container */}
            <div className="relative bg-slate-900 rounded-full p-12 border-2 border-purple-500/30 shadow-2xl">
              {/* Animated CC Text */}
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                CC
              </div>
              
              {/* Floating particles around logo */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute top-8 right-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60 animation-delay-1000"></div>
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-70 animation-delay-2000"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-80 animation-delay-3000"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 mb-4">
            Career <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Canvas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Paint Your Future with AI-Powered Career Guidance
          </p>
        </div>

        {/* Enter Button */}
        <Link
          to="/login"
          className="group relative inline-flex items-center px-12 py-6 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
        >
          <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
          Enter the Future
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
        </Link>
      </div>

      {/* Credits */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-400 text-sm">
          Credits to the team: <span className="text-purple-400 font-semibold">Lies Of Code</span>
        </p>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-60 animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-60 animation-delay-2000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-yellow-400 rounded-full animate-bounce opacity-60 animation-delay-3000"></div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;