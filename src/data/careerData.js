export const streams = {
  science: {
    id: 'science',
    name: 'Science',
    icon: '🧪',
    color: 'from-green-400 to-blue-500',
    description: 'Explore the mysteries of nature, technology, and innovation',
    branches: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science']
  },
  commerce: {
    id: 'commerce',
    name: 'Commerce',
    icon: '💰',
    color: 'from-yellow-400 to-orange-500',
    description: 'Master the world of business, finance, and economics',
    branches: ['Accounting', 'Economics', 'Business Studies', 'Mathematics', 'Statistics']
  },
  arts: {
    id: 'arts',
    name: 'Arts & Humanities',
    icon: '🎨',
    color: 'from-purple-400 to-pink-500',
    description: 'Express creativity and understand human society',
    branches: ['Literature', 'History', 'Political Science', 'Psychology', 'Philosophy']
  },
  engineering: {
    id: 'engineering',
    name: 'Engineering',
    icon: '⚙️',
    color: 'from-gray-400 to-blue-600',
    description: 'Build the future with technology and innovation',
    branches: ['Mechanical', 'Computer Science', 'Electrical', 'Civil', 'Chemical']
  }
};

export const userRoles = [
  { id: 'school', name: 'School Student', description: 'Class 10-12 students exploring career options' },
  { id: 'ug', name: 'UG Student', description: 'Undergraduate students planning their career path' },
  { id: 'pg', name: 'PG Student', description: 'Postgraduate students seeking advanced opportunities' },
  { id: 'parent', name: 'Parent', description: 'Parents supporting their child\'s career journey' },
  { id: 'counselor', name: 'Counselor', description: 'Professional career counselors and advisors' }
];

export const entranceExams = {
  science: [
    {
      name: 'JEE Main',
      type: 'Engineering',
      level: 'UG',
      eligibility: 'Class 12 with PCM',
      dates: 'January & April',
      website: 'https://jeemain.nta.nic.in',
      syllabus: ['Physics', 'Chemistry', 'Mathematics'],
      description: 'National level engineering entrance exam for admission to NITs, IIITs and other engineering colleges.'
    },
    {
      name: 'JEE Advanced',
      type: 'Engineering',
      level: 'UG',
      eligibility: 'JEE Main qualified',
      dates: 'May',
      website: 'https://jeeadv.ac.in',
      syllabus: ['Physics', 'Chemistry', 'Mathematics'],
      description: 'For admission to IITs and other premier engineering institutions.'
    },
    {
      name: 'NEET UG',
      type: 'Medical',
      level: 'UG',
      eligibility: 'Class 12 with PCB',
      dates: 'May',
      website: 'https://neet.nta.nic.in',
      syllabus: ['Physics', 'Chemistry', 'Biology'],
      description: 'National eligibility entrance test for medical courses (MBBS, BDS, etc.)'
    },
    {
      name: 'BITSAT',
      type: 'Engineering',
      level: 'UG',
      eligibility: 'Class 12 with PCM',
      dates: 'August',
      website: 'https://www.bitsadmission.com',
      syllabus: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Logical Reasoning'],
      description: 'Birla Institute of Technology and Science Admission Test'
    },
    {
      name: 'GATE',
      type: 'Engineering/Science',
      level: 'PG',
      eligibility: 'BE/BTech or equivalent',
      dates: 'February',
      website: 'https://gate.iitm.ac.in',
      syllabus: ['Subject-specific technical syllabus'],
      description: 'Graduate Aptitude Test in Engineering for MTech/MS admissions'
    }
  ],
  commerce: [
    {
      name: 'CAT',
      type: 'Management',
      level: 'PG',
      eligibility: 'Bachelor\'s degree',
      dates: 'November',
      website: 'https://iimcat.ac.in',
      syllabus: ['Verbal Ability', 'Data Interpretation', 'Quantitative Aptitude'],
      description: 'Common Admission Test for IIMs and other top B-schools'
    },
    {
      name: 'CLAT',
      type: 'Law',
      level: 'UG/PG',
      eligibility: 'Class 12 / LLB',
      dates: 'May',
      website: 'https://consortiumofnlus.ac.in',
      syllabus: ['English', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques', 'General Knowledge'],
      description: 'Common Law Admission Test for National Law Universities'
    },
    {
      name: 'UPSC CSE',
      type: 'Civil Services',
      level: 'Any Graduate',
      eligibility: 'Bachelor\'s degree',
      dates: 'June (Prelims)',
      website: 'https://www.upsc.gov.in',
      syllabus: ['General Studies', 'CSAT', 'Optional Subject'],
      description: 'Civil Services Examination for IAS, IPS, IFS and other services'
    },
    {
      name: 'CA Foundation',
      type: 'Chartered Accountancy',
      level: 'After Class 12',
      eligibility: 'Class 12',
      dates: 'May & November',
      website: 'https://www.icai.org',
      syllabus: ['Accounting', 'Law', 'Mathematics', 'Economics'],
      description: 'Entry level exam for Chartered Accountancy course'
    }
  ],
  arts: [
    {
      name: 'CLAT',
      type: 'Law',
      level: 'UG',
      eligibility: 'Class 12',
      dates: 'May',
      website: 'https://consortiumofnlus.ac.in',
      syllabus: ['English', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques', 'General Knowledge'],
      description: 'Common Law Admission Test for National Law Universities'
    },
    {
      name: 'UPSC CSE',
      type: 'Civil Services',
      level: 'Any Graduate',
      eligibility: 'Bachelor\'s degree',
      dates: 'June (Prelims)',
      website: 'https://www.upsc.gov.in',
      syllabus: ['General Studies', 'CSAT', 'Optional Subject'],
      description: 'Civil Services Examination for IAS, IPS, IFS and other services'
    },
    {
      name: 'BHU UET',
      type: 'Arts',
      level: 'UG',
      eligibility: 'Class 12',
      dates: 'May',
      website: 'https://bhu.ac.in',
      syllabus: ['Subject-specific syllabus'],
      description: 'Banaras Hindu University Undergraduate Entrance Test'
    },
    {
      name: 'JAMIA Entrance',
      type: 'Arts',
      level: 'UG',
      eligibility: 'Class 12',
      dates: 'June',
      website: 'https://jmi.ac.in',
      syllabus: ['General Knowledge', 'English', 'Subject-specific'],
      description: 'Jamia Millia Islamia Entrance Examination'
    }
  ]
};

export const courses = {
  science: [
    {
      name: 'B.Tech/BE',
      duration: '4 years',
      type: 'UG',
      description: 'Bachelor of Technology/Engineering in various specializations',
      specializations: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Chemical'],
      topColleges: ['IIT Delhi', 'IIT Bombay', 'IIT Madras', 'NIT Trichy', 'BITS Pilani'],
      averageFees: '₹2-15 lakhs',
      careerOptions: ['Software Engineer', 'Mechanical Engineer', 'Data Scientist']
    },
    {
      name: 'MBBS',
      duration: '5.5 years',
      type: 'UG',
      description: 'Bachelor of Medicine and Bachelor of Surgery',
      specializations: ['General Medicine', 'Surgery', 'Pediatrics', 'Gynecology'],
      topColleges: ['AIIMS Delhi', 'CMC Vellore', 'AFMC Pune', 'JIPMER', 'KGMU'],
      averageFees: '₹5-25 lakhs',
      careerOptions: ['Doctor', 'Surgeon', 'Medical Officer', 'Researcher']
    },
    {
      name: 'B.Sc',
      duration: '3 years',
      type: 'UG',
      description: 'Bachelor of Science in various subjects',
      specializations: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science'],
      topColleges: ['St. Stephens College', 'Hindu College', 'Loyola College', 'Christ University'],
      averageFees: '₹50,000-3 lakhs',
      careerOptions: ['Research Scientist', 'Lab Technician', 'Teacher', 'Data Analyst']
    }
  ],
  commerce: [
    {
      name: 'B.Com',
      duration: '3 years',
      type: 'UG',
      description: 'Bachelor of Commerce',
      specializations: ['Accounting', 'Finance', 'Banking', 'Taxation'],
      topColleges: ['Shri Ram College', 'Hans Raj College', 'Loyola College', 'Christ University'],
      averageFees: '₹30,000-2 lakhs',
      careerOptions: ['Accountant', 'Financial Analyst', 'Banking Officer', 'Tax Consultant']
    },
    {
      name: 'BBA',
      duration: '3 years',
      type: 'UG',
      description: 'Bachelor of Business Administration',
      specializations: ['Marketing', 'Finance', 'HR', 'Operations'],
      topColleges: ['Shaheed Sukhdev College', 'Christ University', 'Symbiosis', 'NMIMS'],
      averageFees: '₹1-5 lakhs',
      careerOptions: ['Business Analyst', 'Marketing Executive', 'HR Executive', 'Operations Manager']
    },
    {
      name: 'CA',
      duration: '3-5 years',
      type: 'Professional',
      description: 'Chartered Accountancy',
      specializations: ['Audit', 'Taxation', 'Financial Planning', 'Corporate Law'],
      topColleges: ['ICAI Centers'],
      averageFees: '₹50,000-1 lakh',
      careerOptions: ['Chartered Accountant', 'Tax Advisor', 'Financial Consultant', 'Auditor']
    }
  ],
  arts: [
    {
      name: 'BA',
      duration: '3 years',
      type: 'UG',
      description: 'Bachelor of Arts in various subjects',
      specializations: ['English', 'History', 'Political Science', 'Psychology', 'Economics'],
      topColleges: ['St. Stephens College', 'Hindu College', 'Presidency College', 'Loyola College'],
      averageFees: '₹20,000-1.5 lakhs',
      careerOptions: ['Civil Servant', 'Journalist', 'Teacher', 'Social Worker']
    },
    {
      name: 'LLB',
      duration: '3 years (5 years integrated)',
      type: 'UG',
      description: 'Bachelor of Laws',
      specializations: ['Criminal Law', 'Corporate Law', 'Constitutional Law', 'International Law'],
      topColleges: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'NLU Delhi', 'Gujarat NLU'],
      averageFees: '₹2-10 lakhs',
      careerOptions: ['Lawyer', 'Judge', 'Legal Advisor', 'Corporate Counsel']
    },
    {
      name: 'BJMc',
      duration: '3 years',
      type: 'UG',
      description: 'Bachelor of Journalism and Mass Communication',
      specializations: ['Print Media', 'Electronic Media', 'Digital Media', 'Advertising'],
      topColleges: ['IIMC Delhi', 'Symbiosis', 'Christ University', 'Xavier Institute'],
      averageFees: '₹1-4 lakhs',
      careerOptions: ['Journalist', 'News Anchor', 'Content Writer', 'PR Executive']
    }
  ]
};

export const careerProfiles = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    stream: 'science',
    description: 'Design, develop, and maintain software applications and systems',
    requiredDegrees: ['B.Tech CSE', 'BCA', 'MCA', 'B.Sc Computer Science'],
    skillsRequired: ['Programming', 'Problem Solving', 'Data Structures', 'Algorithms'],
    salaryRange: '₹3-25 lakhs per annum',
    demandLevel: 'Very High',
    topEmployers: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys'],
    personalityFit: ['Analytical', 'Detail-oriented', 'Problem-solver'],
    careerPath: ['Junior Developer → Senior Developer → Team Lead → Engineering Manager']
  },
  {
    id: 'doctor',
    title: 'Medical Doctor',
    stream: 'science',
    description: 'Diagnose and treat illnesses, injuries, and other health conditions',
    requiredDegrees: ['MBBS', 'MD', 'MS'],
    skillsRequired: ['Medical Knowledge', 'Communication', 'Empathy', 'Decision Making'],
    salaryRange: '₹5-50 lakhs per annum',
    demandLevel: 'High',
    topEmployers: ['Government Hospitals', 'Private Hospitals', 'Clinics', 'Research Institutes'],
    personalityFit: ['Caring', 'Analytical', 'Patient', 'Decisive'],
    careerPath: ['Intern → Resident → Specialist → Consultant → Department Head']
  },
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant',
    stream: 'commerce',
    description: 'Manage financial records, conduct audits, and provide financial advice',
    requiredDegrees: ['CA', 'CPA'],
    skillsRequired: ['Accounting', 'Financial Analysis', 'Taxation', 'Audit'],
    salaryRange: '₹4-30 lakhs per annum',
    demandLevel: 'High',
    topEmployers: ['Big 4 Firms', 'Corporate Companies', 'Government', 'Own Practice'],
    personalityFit: ['Detail-oriented', 'Analytical', 'Ethical', 'Organized'],
    careerPath: ['Article → Junior CA → Senior CA → Partner → Own Firm']
  },
  {
    id: 'civil-servant',
    title: 'Civil Servant (IAS/IPS)',
    stream: 'arts',
    description: 'Serve the public through administrative and policy roles in government',
    requiredDegrees: ['Any Bachelor\'s Degree', 'UPSC CSE Qualification'],
    skillsRequired: ['Leadership', 'Public Administration', 'Communication', 'Decision Making'],
    salaryRange: '₹5-15 lakhs per annum + benefits',
    demandLevel: 'Moderate',
    topEmployers: ['Central Government', 'State Governments', 'Public Sector'],
    personalityFit: ['Leadership', 'Service-oriented', 'Ethical', 'Responsible'],
    careerPath: ['Probationer → Assistant Collector → Collector → Secretary → Chief Secretary']
  }
];

export const institutions = {
  science: [
    {
      name: 'Indian Institute of Technology (IIT) Delhi',
      location: 'New Delhi',
      type: 'Engineering',
      ranking: '1',
      courses: ['B.Tech', 'M.Tech', 'PhD'],
      admissionProcess: 'JEE Advanced',
      fees: '₹10 lakhs (4 years)',
      placementRate: '95%',
      averagePackage: '₹15 lakhs',
      website: 'https://home.iitd.ac.in'
    },
    {
      name: 'All India Institute of Medical Sciences (AIIMS)',
      location: 'New Delhi',
      type: 'Medical',
      ranking: '1',
      courses: ['MBBS', 'MD', 'MS', 'PhD'],
      admissionProcess: 'NEET UG/PG',
      fees: '₹5,000 (subsidized)',
      placementRate: '100%',
      averagePackage: '₹8-12 lakhs',
      website: 'https://www.aiims.edu'
    },
    {
      name: 'Indian Institute of Science (IISc)',
      location: 'Bangalore',
      type: 'Research',
      ranking: '1',
      courses: ['BE', 'MTech', 'PhD'],
      admissionProcess: 'JEE Advanced/KVPY',
      fees: '₹2 lakhs',
      placementRate: '90%',
      averagePackage: '₹20 lakhs',
      website: 'https://www.iisc.ac.in'
    }
  ],
  commerce: [
    {
      name: 'Indian Institute of Management (IIM) Ahmedabad',
      location: 'Ahmedabad',
      type: 'Management',
      ranking: '1',
      courses: ['MBA', 'Executive MBA', 'PhD'],
      admissionProcess: 'CAT',
      fees: '₹25 lakhs (2 years)',
      placementRate: '100%',
      averagePackage: '₹30 lakhs',
      website: 'https://www.iima.ac.in'
    },
    {
      name: 'Shri Ram College of Commerce (SRCC)',
      location: 'New Delhi',
      type: 'Commerce',
      ranking: '1',
      courses: ['B.Com (Hons)', 'BA Economics (Hons)'],
      admissionProcess: 'DU Admissions',
      fees: '₹50,000 (3 years)',
      placementRate: '95%',
      averagePackage: '₹8 lakhs',
      website: 'https://www.srcc.edu'
    },
    {
      name: 'Institute of Chartered Accountants of India',
      location: 'Pan India',
      type: 'Professional',
      ranking: '1',
      courses: ['CA Foundation', 'CA Intermediate', 'CA Final'],
      admissionProcess: 'Direct Registration',
      fees: '₹50,000 (total)',
      placementRate: '85%',
      averagePackage: '₹6-12 lakhs',
      website: 'https://www.icai.org'
    }
  ],
  arts: [
    {
      name: 'National Law School of India University',
      location: 'Bangalore',
      type: 'Law',
      ranking: '1',
      courses: ['BA LLB', 'LLM', 'PhD'],
      admissionProcess: 'CLAT',
      fees: '₹3 lakhs (5 years)',
      placementRate: '100%',
      averagePackage: '₹15 lakhs',
      website: 'https://www.nls.ac.in'
    },
    {
      name: 'St. Stephen\'s College',
      location: 'New Delhi',
      type: 'Liberal Arts',
      ranking: '1',
      courses: ['BA (Hons)', 'BSc (Hons)'],
      admissionProcess: 'DU Admissions',
      fees: '₹40,000 (3 years)',
      placementRate: '90%',
      averagePackage: '₹6 lakhs',
      website: 'https://www.ststephens.edu'
    },
    {
      name: 'Indian Institute of Mass Communication',
      location: 'New Delhi',
      type: 'Mass Communication',
      ranking: '1',
      courses: ['Post Graduate Diploma', 'Certificate Courses'],
      admissionProcess: 'Entrance Exam',
      fees: '₹1.5 lakhs',
      placementRate: '85%',
      averagePackage: '₹5 lakhs',
      website: 'https://www.iimc.nic.in'
    }
  ]
};

export const skillCategories = {
  technical: [
    { name: 'Programming', description: 'Learn various programming languages', platforms: ['Codecademy', 'FreeCodeCamp', 'Coursera'] },
    { name: 'Data Analysis', description: 'Master data analysis and visualization', platforms: ['Kaggle', 'DataCamp', 'edX'] },
    { name: 'Digital Marketing', description: 'Learn online marketing strategies', platforms: ['Google Digital Garage', 'HubSpot Academy', 'Facebook Blueprint'] },
    { name: 'Web Development', description: 'Build modern web applications', platforms: ['freeCodeCamp', 'The Odin Project', 'MDN Web Docs'] }
  ],
  soft: [
    { name: 'Communication', description: 'Improve verbal and written communication', platforms: ['Toastmasters', 'Coursera', 'LinkedIn Learning'] },
    { name: 'Leadership', description: 'Develop leadership and management skills', platforms: ['Harvard Business Review', 'MindTools', 'Coursera'] },
    { name: 'Critical Thinking', description: 'Enhance analytical and problem-solving abilities', platforms: ['Khan Academy', 'Coursera', 'edX'] },
    { name: 'Time Management', description: 'Learn efficient time and task management', platforms: ['Productivity courses', 'Books', 'Workshops'] }
  ],
  creative: [
    { name: 'Graphic Design', description: 'Create visual designs and layouts', platforms: ['Adobe Creative Suite', 'Canva', 'Figma'] },
    { name: 'Content Writing', description: 'Write engaging and effective content', platforms: ['Copyblogger', 'Content Marketing Institute', 'Udemy'] },
    { name: 'Video Editing', description: 'Edit and produce video content', platforms: ['Adobe Premiere', 'Final Cut Pro', 'DaVinci Resolve'] },
    { name: 'Photography', description: 'Capture and edit professional photos', platforms: ['Photography courses', 'YouTube tutorials', 'Online workshops'] }
  ]
};