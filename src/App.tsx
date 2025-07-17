import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LevelSelector from './pages/LevelSelector';
import Dashboard from './pages/Dashboard';
import StreamSelector from './pages/StreamSelector';
import StreamDashboard from './pages/StreamDashboard';
import ExamsModule from './pages/ExamsModule';
import CoursesModule from './pages/CoursesModule';
import CareerExplorer from './pages/CareerExplorer';
import SkillsHub from './pages/SkillsHub';
import RoadmapGenerator from './pages/RoadmapGenerator';
import InstitutionFinder from './pages/InstitutionFinder';
import AIAssistant from './pages/AIAssistant';
import AptitudeTest from './pages/AptitudeTest';
import ResumeBuilder from './pages/ResumeBuilder';
import PGDashboard from './pages/PGDashboard';
import PGStreamDashboard from './pages/PGStreamDashboard';
import ScholarshipFinder from './pages/ScholarshipFinder';
import PGPrograms from './pages/PGPrograms';
import PGJobs from './pages/PGJobs';
import PGCareers from './pages/PGCareers';
import ResearchOpportunities from './pages/ResearchOpportunities';
import PGExams from './pages/PGExams';
import PGInstitutions from './pages/PGInstitutions';
import UserProvider from './context/UserContext';
import './index.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/level-selector" element={<LevelSelector />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stream-selector" element={<StreamSelector />} />
            <Route path="/stream/:streamId" element={<StreamDashboard />} />
            <Route path="/exams" element={<ExamsModule />} />
            <Route path="/courses" element={<CoursesModule />} />
            <Route path="/careers" element={<CareerExplorer />} />
            <Route path="/skills" element={<SkillsHub />} />
            <Route path="/roadmap" element={<RoadmapGenerator />} />
            <Route path="/institutions" element={<InstitutionFinder />} />
            <Route path="/scholarships" element={<ScholarshipFinder />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/aptitude-test" element={<AptitudeTest />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/pg-dashboard" element={<PGDashboard />} />
            <Route path="/pg-stream/:streamId" element={<PGStreamDashboard />} />
            <Route path="/pg-programs" element={<PGPrograms />} />
            <Route path="/pg-jobs" element={<PGJobs />} />
            <Route path="/pg-careers" element={<PGCareers />} />
            <Route path="/research-opportunities" element={<ResearchOpportunities />} />
            <Route path="/pg-exams" element={<PGExams />} />
            <Route path="/pg-institutions" element={<PGInstitutions />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;