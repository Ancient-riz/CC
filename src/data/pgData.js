// Comprehensive PG Framework Data
export const pgStreams = {
  science: {
    id: 'science',
    name: 'Science & Technology',
    icon: '🔬',
    color: 'from-green-400 to-blue-500',
    description: 'Advanced research and technology-focused postgraduate programs',
    categories: [
      {
        name: 'Pure Sciences',
        programs: [
          {
            name: 'M.Sc – Master of Science',
            duration: '2 years',
            specializations: [
              'Physics', 'Chemistry', 'Biology', 'Mathematics', 'Zoology', 'Botany',
              'Biotechnology', 'Microbiology', 'Biochemistry', 'Environmental Science',
              'Forensic Science', 'Nanoscience', 'Computer Science', 'Data Science',
              'Artificial Intelligence', 'Electronics', 'Statistics', 'Applied Geology', 'Astrophysics'
            ],
            eligibility: 'B.Sc in relevant subject with 50% marks',
            topColleges: ['IIT Delhi', 'IISc Bangalore', 'JNU', 'University of Delhi', 'Pune University'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Research Scientist', 'Data Analyst', 'Lab Manager', 'Teacher', 'Quality Control Analyst']
          },
          {
            name: 'M.Stat / M.Math – Master of Statistics / Mathematics',
            duration: '2 years',
            specializations: ['Applied Statistics', 'Mathematical Statistics', 'Pure Mathematics', 'Applied Mathematics'],
            eligibility: 'B.Sc Mathematics/Statistics + ISI entrance',
            topColleges: ['ISI Kolkata', 'ISI Delhi', 'ISI Bangalore', 'CMI Chennai'],
            averageFees: '₹50,000-1 lakh',
            careerOptions: ['Statistician', 'Data Scientist', 'Actuary', 'Research Analyst']
          }
        ]
      },
      {
        name: 'Engineering & Technology',
        programs: [
          {
            name: 'M.Tech / M.E. – Master of Technology / Engineering',
            duration: '2 years',
            specializations: [
              'AI/ML', 'VLSI Design', 'Embedded Systems', 'Robotics', 'Structural Engineering',
              'Thermal Engineering', 'Power Systems', 'Cybersecurity', 'Data Engineering',
              'Software Engineering', 'Computer Networks', 'Digital Signal Processing'
            ],
            eligibility: 'B.Tech/BE with valid GATE score',
            topColleges: ['IIT Delhi', 'IIT Bombay', 'IIT Madras', 'IISc Bangalore', 'NIT Trichy'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Senior Engineer', 'R&D Engineer', 'Technical Lead', 'Project Manager']
          },
          {
            name: 'MCA – Master of Computer Applications',
            duration: '2-3 years',
            specializations: ['Software Development', 'Web Technologies', 'Mobile Computing', 'Database Systems'],
            eligibility: 'BCA/B.Sc CS/Mathematics with 50% marks',
            topColleges: ['NIT Trichy', 'JNU', 'University of Delhi', 'BIT Mesra', 'VIT'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Software Developer', 'System Administrator', 'Database Administrator', 'IT Manager']
          },
          {
            name: 'M.Sc IT – Information Technology',
            duration: '2 years',
            specializations: ['Software Engineering', 'Network Security', 'Cloud Computing', 'Data Analytics'],
            eligibility: 'B.Sc IT/CS or equivalent',
            topColleges: ['Mumbai University', 'Pune University', 'VIT', 'SRM University'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['IT Consultant', 'Software Architect', 'System Analyst', 'Technical Manager']
          }
        ]
      },
      {
        name: 'Specialized Programs',
        programs: [
          {
            name: 'M.Plan – Master of Planning',
            duration: '2 years',
            specializations: ['Urban Planning', 'Transport Planning', 'Environmental Planning', 'Regional Planning'],
            eligibility: 'B.Arch/B.Plan/Civil Engineering',
            topColleges: ['CEPT Ahmedabad', 'SPA Delhi', 'IIT Kharagpur'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Urban Planner', 'Transport Planner', 'Environmental Consultant', 'Government Planner']
          },
          {
            name: 'Integrated PhD',
            duration: '5 years',
            specializations: ['All Science Disciplines'],
            eligibility: 'B.Sc with 60% marks + Entrance exam',
            topColleges: ['IISc Bangalore', 'IISERs', 'IITs', 'TIFR', 'IMSc Chennai'],
            averageFees: '₹50,000-2 lakhs (with fellowship)',
            careerOptions: ['Research Scientist', 'Professor', 'R&D Head', 'Scientific Officer']
          }
        ]
      }
    ]
  },

  medical: {
    id: 'medical',
    name: 'Medical & Allied Health Sciences',
    icon: '🧠',
    color: 'from-red-400 to-pink-500',
    description: 'Advanced medical education and healthcare specializations',
    categories: [
      {
        name: 'Medical Specializations',
        programs: [
          {
            name: 'MD – Doctor of Medicine',
            duration: '3 years',
            specializations: [
              'General Medicine', 'Pediatrics', 'Psychiatry', 'Dermatology', 'Radiology',
              'Pathology', 'Microbiology', 'Pharmacology', 'Community Medicine', 'Forensic Medicine'
            ],
            eligibility: 'MBBS + NEET PG',
            topColleges: ['AIIMS Delhi', 'CMC Vellore', 'AFMC Pune', 'JIPMER', 'KGMU'],
            averageFees: '₹5-25 lakhs',
            careerOptions: ['Specialist Doctor', 'Medical Consultant', 'Hospital Administrator', 'Medical Researcher']
          },
          {
            name: 'MS – Master of Surgery',
            duration: '3 years',
            specializations: [
              'General Surgery', 'Orthopedics', 'ENT', 'Ophthalmology', 'Obstetrics & Gynecology',
              'Neurosurgery', 'Plastic Surgery', 'Cardiac Surgery'
            ],
            eligibility: 'MBBS + NEET PG',
            topColleges: ['AIIMS Delhi', 'CMC Vellore', 'AFMC Pune', 'JIPMER'],
            averageFees: '₹5-25 lakhs',
            careerOptions: ['Surgeon', 'Specialist Consultant', 'Hospital Department Head']
          },
          {
            name: 'MDS – Master of Dental Surgery',
            duration: '3 years',
            specializations: ['Oral Surgery', 'Orthodontics', 'Periodontics', 'Prosthodontics', 'Pedodontics'],
            eligibility: 'BDS + NEET MDS',
            topColleges: ['Maulana Azad Institute', 'Government Dental Colleges'],
            averageFees: '₹3-15 lakhs',
            careerOptions: ['Specialist Dentist', 'Oral Surgeon', 'Dental Consultant']
          }
        ]
      },
      {
        name: 'Allied Health Sciences',
        programs: [
          {
            name: 'M.Pharm – Master of Pharmacy',
            duration: '2 years',
            specializations: ['Clinical Pharmacy', 'Industrial Pharmacy', 'Pharmaceutical Chemistry', 'Pharmacology'],
            eligibility: 'B.Pharm with 55% marks',
            topColleges: ['Jamia Hamdard', 'Manipal College of Pharmaceutical Sciences', 'NIPER'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Clinical Pharmacist', 'Drug Research Scientist', 'Regulatory Affairs Manager']
          },
          {
            name: 'MPT – Master of Physiotherapy',
            duration: '2 years',
            specializations: ['Orthopedic Physiotherapy', 'Neurological Physiotherapy', 'Sports Physiotherapy'],
            eligibility: 'BPT with 50% marks',
            topColleges: ['CMC Vellore', 'Manipal Academy', 'Jamia Millia Islamia'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Senior Physiotherapist', 'Sports Therapist', 'Rehabilitation Specialist']
          },
          {
            name: 'M.Sc Nursing',
            duration: '2 years',
            specializations: ['Critical Care Nursing', 'Psychiatric Nursing', 'Community Health Nursing'],
            eligibility: 'B.Sc Nursing with 55% marks',
            topColleges: ['AIIMS', 'CMC Vellore', 'Manipal College of Nursing'],
            averageFees: '₹1-5 lakhs',
            careerOptions: ['Nursing Supervisor', 'Nurse Educator', 'Clinical Nurse Specialist']
          },
          {
            name: 'MPH – Master of Public Health',
            duration: '2 years',
            specializations: ['Epidemiology', 'Health Policy', 'Environmental Health', 'Biostatistics'],
            eligibility: 'MBBS/BDS/B.Sc in health sciences',
            topColleges: ['AIIMS', 'CMC Vellore', 'TISS Mumbai'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Public Health Officer', 'Epidemiologist', 'Health Policy Analyst']
          }
        ]
      }
    ]
  },

  commerce: {
    id: 'commerce',
    name: 'Commerce & Management',
    icon: '📊',
    color: 'from-yellow-400 to-orange-500',
    description: 'Business, finance, and management focused postgraduate programs',
    categories: [
      {
        name: 'Commerce Degrees',
        programs: [
          {
            name: 'M.Com – Master of Commerce',
            duration: '2 years',
            specializations: [
              'Accounting', 'Banking', 'Finance', 'Taxation', 'E-Commerce',
              'International Business', 'Financial Markets', 'Corporate Finance'
            ],
            eligibility: 'B.Com with 50% marks',
            topColleges: ['Delhi School of Economics', 'Shri Ram College', 'Hindu College', 'Christ University'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Financial Analyst', 'Accountant', 'Tax Consultant', 'Banking Officer']
          }
        ]
      },
      {
        name: 'Management Programs',
        programs: [
          {
            name: 'MBA / PGDM – Master of Business Administration',
            duration: '2 years',
            specializations: [
              'Marketing', 'Finance', 'HR', 'Operations', 'Analytics', 'International Business',
              'Digital Marketing', 'Supply Chain', 'Entrepreneurship', 'Consulting'
            ],
            eligibility: 'Any Bachelor\'s degree + CAT/XAT/GMAT',
            topColleges: ['IIM Ahmedabad', 'IIM Bangalore', 'IIM Calcutta', 'XLRI', 'FMS Delhi'],
            averageFees: '₹8-25 lakhs',
            careerOptions: ['Management Consultant', 'Investment Banker', 'Product Manager', 'Business Analyst']
          },
          {
            name: 'MIB – Master of International Business',
            duration: '2 years',
            specializations: ['Global Trade', 'International Finance', 'Cross-cultural Management'],
            eligibility: 'Any Bachelor\'s degree + Entrance exam',
            topColleges: ['Symbiosis', 'Christ University', 'NMIMS'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['International Business Manager', 'Export-Import Manager', 'Global Operations Manager']
          },
          {
            name: 'MFM – Master of Financial Management',
            duration: '2 years',
            specializations: ['Corporate Finance', 'Investment Management', 'Risk Management'],
            eligibility: 'B.Com/BBA/Economics + Entrance',
            topColleges: ['NMIMS', 'Symbiosis', 'Christ University'],
            averageFees: '₹3-6 lakhs',
            careerOptions: ['Financial Manager', 'Investment Analyst', 'Risk Manager']
          },
          {
            name: 'MHRM – Master of Human Resource Management',
            duration: '2 years',
            specializations: ['Talent Management', 'Organizational Behavior', 'Industrial Relations'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['XLRI', 'TISS Mumbai', 'Symbiosis'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['HR Manager', 'Talent Acquisition Specialist', 'Organizational Development Manager']
          }
        ]
      },
      {
        name: 'Professional Qualifications',
        programs: [
          {
            name: 'CA (Chartered Accountancy)',
            duration: '3-4 years',
            specializations: ['Audit', 'Taxation', 'Financial Planning', 'Corporate Law'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['ICAI Centers across India'],
            averageFees: '₹50,000-1 lakh',
            careerOptions: ['Chartered Accountant', 'Tax Advisor', 'Financial Consultant', 'Auditor']
          },
          {
            name: 'CMA (Cost Management Accountant)',
            duration: '3 years',
            specializations: ['Cost Accounting', 'Management Accounting', 'Financial Management'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['ICMAI Centers across India'],
            averageFees: '₹40,000-80,000',
            careerOptions: ['Cost Accountant', 'Financial Analyst', 'Budget Analyst', 'Internal Auditor']
          },
          {
            name: 'CS (Company Secretary)',
            duration: '3 years',
            specializations: ['Corporate Law', 'Securities Law', 'Corporate Governance'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['ICSI Centers across India'],
            averageFees: '₹30,000-60,000',
            careerOptions: ['Company Secretary', 'Compliance Officer', 'Legal Advisor', 'Corporate Governance Expert']
          }
        ]
      }
    ]
  },

  arts: {
    id: 'arts',
    name: 'Arts, Humanities & Social Sciences',
    icon: '🧑‍🎨',
    color: 'from-purple-400 to-pink-500',
    description: 'Literature, social sciences, and creative arts postgraduate programs',
    categories: [
      {
        name: 'Liberal Arts & Humanities',
        programs: [
          {
            name: 'MA – Master of Arts',
            duration: '2 years',
            specializations: [
              'English Literature', 'History', 'Political Science', 'Sociology', 'Philosophy',
              'Psychology', 'Economics', 'Geography', 'Public Administration', 'Hindi',
              'Sanskrit', 'Anthropology', 'Linguistics', 'Archaeology'
            ],
            eligibility: 'BA in relevant subject with 50% marks',
            topColleges: ['JNU', 'University of Delhi', 'BHU', 'Presidency College', 'St. Stephens'],
            averageFees: '₹30,000-1.5 lakhs',
            careerOptions: ['Content Writer', 'Editor', 'Teacher', 'Journalist', 'Civil Servant']
          },
          {
            name: 'MFA – Master of Fine Arts',
            duration: '2 years',
            specializations: ['Painting', 'Sculpture', 'Applied Arts', 'Photography', 'Digital Arts'],
            eligibility: 'BFA or equivalent with 50% marks',
            topColleges: ['JNU', 'BHU', 'Jamia Millia Islamia', 'MS University Baroda'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Artist', 'Art Director', 'Curator', 'Art Teacher']
          },
          {
            name: 'M.P.A. – Master of Performing Arts',
            duration: '2 years',
            specializations: ['Music', 'Dance', 'Theatre', 'Drama'],
            eligibility: 'BPA or equivalent',
            topColleges: ['FTII Pune', 'NSD Delhi', 'Kalakshetra Chennai'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['Performer', 'Director', 'Choreographer', 'Arts Administrator']
          }
        ]
      },
      {
        name: 'Media & Communication',
        programs: [
          {
            name: 'M.JMC – Master of Journalism & Mass Communication',
            duration: '2 years',
            specializations: ['Print Journalism', 'Broadcast Journalism', 'Digital Media', 'Documentary Making'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['IIMC Delhi', 'Symbiosis', 'Christ University', 'Xavier Institute'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Senior Journalist', 'News Editor', 'Media Manager', 'Content Strategist']
          },
          {
            name: 'MA Development Studies / Gender Studies / Public Policy',
            duration: '2 years',
            specializations: ['Development Economics', 'Gender Studies', 'Public Policy Analysis'],
            eligibility: 'Any Bachelor\'s degree with 50% marks',
            topColleges: ['JNU', 'TISS Mumbai', 'University of Delhi', 'Azim Premji University'],
            averageFees: '₹1-5 lakhs',
            careerOptions: ['Development Officer', 'Policy Researcher', 'NGO Manager', 'Social Researcher']
          }
        ]
      },
      {
        name: 'Social Sciences',
        programs: [
          {
            name: 'MSW – Master of Social Work',
            duration: '2 years',
            specializations: ['Community Development', 'Medical Social Work', 'Psychiatric Social Work', 'Rural Development'],
            eligibility: 'Any Bachelor\'s degree with 50% marks',
            topColleges: ['TISS Mumbai', 'University of Delhi', 'Jamia Millia Islamia', 'Christ University'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Social Worker', 'NGO Manager', 'Community Development Officer', 'Policy Researcher']
          },
          {
            name: 'M.Ed – Master of Education',
            duration: '2 years',
            specializations: ['Curriculum Development', 'Educational Psychology', 'Educational Administration'],
            eligibility: 'B.Ed with 50% marks',
            topColleges: ['JNU', 'University of Delhi', 'BHU', 'Jamia Millia Islamia'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Educational Administrator', 'Curriculum Designer', 'Education Consultant', 'Principal']
          },
          {
            name: 'M.LIB.I.Sc – Master of Library and Information Science',
            duration: '1-2 years',
            specializations: ['Digital Library Management', 'Information Systems', 'Knowledge Management'],
            eligibility: 'B.Lib.Sc or any Bachelor\'s degree',
            topColleges: ['University of Delhi', 'Banaras Hindu University', 'Annamalai University'],
            averageFees: '₹30,000-1 lakh',
            careerOptions: ['Chief Librarian', 'Information Manager', 'Digital Archivist', 'Knowledge Manager']
          }
        ]
      },
      {
        name: 'International Studies',
        programs: [
          {
            name: 'MA International Relations / Area Studies / Peace Studies',
            duration: '2 years',
            specializations: ['International Relations', 'Area Studies', 'Peace and Conflict Studies', 'Strategic Studies'],
            eligibility: 'Any Bachelor\'s degree with 50% marks',
            topColleges: ['JNU', 'University of Delhi', 'BHU', 'Jadavpur University'],
            averageFees: '₹50,000-3 lakhs',
            careerOptions: ['Diplomat', 'Foreign Policy Analyst', 'International Consultant', 'Think Tank Researcher']
          }
        ]
      }
    ]
  },

  law: {
    id: 'law',
    name: 'Law',
    icon: '⚖️',
    color: 'from-indigo-400 to-purple-500',
    description: 'Advanced legal studies and specializations',
    categories: [
      {
        name: 'Legal Specializations',
        programs: [
          {
            name: 'LLM – Master of Laws',
            duration: '1-2 years',
            specializations: [
              'Constitutional Law', 'Business Law', 'Intellectual Property Rights', 'International Law',
              'Criminal Law', 'Human Rights Law', 'Environmental Law', 'Corporate Law',
              'Tax Law', 'Cyber Law', 'Family Law', 'Labour Law'
            ],
            eligibility: 'LLB with 50% marks',
            topColleges: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'NLU Delhi', 'Gujarat NLU'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Senior Advocate', 'Legal Consultant', 'Corporate Lawyer', 'Legal Advisor']
          }
        ]
      }
    ]
  },

  design: {
    id: 'design',
    name: 'Design, Fashion, Architecture',
    icon: '🎨',
    color: 'from-pink-400 to-rose-500',
    description: 'Creative design and architectural studies',
    categories: [
      {
        name: 'Design Programs',
        programs: [
          {
            name: 'M.Des – Master of Design',
            duration: '2 years',
            specializations: [
              'Fashion Design', 'Product Design', 'UI/UX Design', 'Interior Design',
              'Graphic Design', 'Industrial Design', 'Animation Design', 'Textile Design'
            ],
            eligibility: 'B.Des or equivalent with portfolio',
            topColleges: ['NID Ahmedabad', 'IIT Bombay IDC', 'NIFT', 'Srishti Institute'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Senior Designer', 'Design Manager', 'Creative Director', 'Design Consultant']
          },
          {
            name: 'M.F.Tech – Master of Fashion Technology',
            duration: '2 years',
            specializations: ['Fashion Design', 'Textile Technology', 'Apparel Manufacturing', 'Fashion Marketing'],
            eligibility: 'B.FTech or equivalent',
            topColleges: ['NIFT', 'Pearl Academy', 'Symbiosis Institute of Design'],
            averageFees: '₹3-6 lakhs',
            careerOptions: ['Fashion Designer', 'Fashion Technologist', 'Brand Manager', 'Fashion Entrepreneur']
          },
          {
            name: 'M.Arch – Master of Architecture',
            duration: '2 years',
            specializations: ['Urban Design', 'Landscape Architecture', 'Sustainable Architecture', 'Interior Architecture'],
            eligibility: 'B.Arch with 50% marks',
            topColleges: ['SPA Delhi', 'CEPT Ahmedabad', 'IIT Kharagpur'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Architect', 'Urban Planner', 'Design Consultant', 'Project Manager']
          },
          {
            name: 'MURP – Master of Urban and Regional Planning',
            duration: '2 years',
            specializations: ['Urban Planning', 'Regional Planning', 'Transportation Planning', 'Environmental Planning'],
            eligibility: 'B.Arch/B.Plan/Civil Engineering',
            topColleges: ['SPA Delhi', 'CEPT Ahmedabad', 'Anna University'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Urban Planner', 'Regional Planner', 'Policy Planner', 'Development Consultant']
          }
        ]
      }
    ]
  },

  global: {
    id: 'global',
    name: 'Global & Interdisciplinary Programs',
    icon: '🌐',
    color: 'from-cyan-400 to-blue-500',
    description: 'International and interdisciplinary studies',
    categories: [
      {
        name: 'International Programs',
        programs: [
          {
            name: 'MIR / MA IR – Master in International Relations',
            duration: '2 years',
            specializations: ['Diplomacy', 'International Security', 'Global Governance', 'International Economics'],
            eligibility: 'Any Bachelor\'s degree with 50% marks',
            topColleges: ['JNU', 'O.P. Jindal Global University', 'Ashoka University'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Diplomat', 'International Relations Specialist', 'Policy Analyst', 'Think Tank Researcher']
          },
          {
            name: 'MPA / MPP – Master of Public Administration / Public Policy',
            duration: '2 years',
            specializations: ['Public Policy', 'Governance', 'Development Administration', 'Policy Analysis'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['JNU', 'TISS Mumbai', 'University of Delhi', 'Azim Premji University'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Policy Analyst', 'Public Administrator', 'Development Officer', 'Government Advisor']
          },
          {
            name: 'MBA (Abroad) / EMBA – Executive MBAs',
            duration: '1-2 years',
            specializations: ['Global Management', 'International Business', 'Executive Leadership'],
            eligibility: 'Bachelor\'s degree + work experience + GMAT/GRE',
            topColleges: ['International Business Schools'],
            averageFees: '₹15-50 lakhs',
            careerOptions: ['Global Manager', 'International Business Leader', 'Executive Consultant']
          },
          {
            name: 'MIM – Master in Management',
            duration: '1-2 years',
            specializations: ['International Management', 'Strategic Management', 'Global Business'],
            eligibility: 'Bachelor\'s degree + GMAT/GRE',
            topColleges: ['International Universities'],
            averageFees: '₹10-30 lakhs',
            careerOptions: ['Management Consultant', 'International Manager', 'Business Analyst']
          }
        ]
      },
      {
        name: 'Interdisciplinary Studies',
        programs: [
          {
            name: 'MSc Sustainability / Climate Change / Environmental Management',
            duration: '2 years',
            specializations: ['Climate Change', 'Environmental Policy', 'Sustainable Development', 'Renewable Energy'],
            eligibility: 'Any Bachelor\'s degree in science/engineering',
            topColleges: ['TERI University', 'IIT Delhi', 'University of Delhi'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Environmental Consultant', 'Sustainability Manager', 'Climate Policy Analyst']
          },
          {
            name: 'MA Global Studies / Human Rights / Peacebuilding',
            duration: '2 years',
            specializations: ['Human Rights', 'Conflict Resolution', 'Peacebuilding', 'Global Governance'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['JNU', 'TISS Mumbai', 'Jamia Millia Islamia'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Human Rights Officer', 'Peace Researcher', 'International Development Worker']
          }
        ]
      }
    ]
  },

  mathematics: {
    id: 'mathematics',
    name: 'Mathematics, Statistics & Actuarial',
    icon: '🧮',
    color: 'from-emerald-400 to-teal-500',
    description: 'Advanced mathematical and statistical studies',
    categories: [
      {
        name: 'Mathematical Sciences',
        programs: [
          {
            name: 'M.Stat – Master of Statistics',
            duration: '2 years',
            specializations: ['Applied Statistics', 'Biostatistics', 'Econometrics', 'Quality Control'],
            eligibility: 'B.Stat/B.Sc Statistics + ISI entrance',
            topColleges: ['ISI Kolkata', 'ISI Delhi', 'ISI Bangalore'],
            averageFees: '₹50,000-1 lakh',
            careerOptions: ['Statistician', 'Data Scientist', 'Research Analyst', 'Quality Control Manager']
          },
          {
            name: 'M.Sc Applied Maths / Pure Maths',
            duration: '2 years',
            specializations: ['Applied Mathematics', 'Pure Mathematics', 'Mathematical Modeling', 'Computational Mathematics'],
            eligibility: 'B.Sc Mathematics with 55% marks',
            topColleges: ['IIT Delhi', 'IISc Bangalore', 'University of Delhi', 'CMI Chennai'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Mathematician', 'Research Scientist', 'Data Scientist', 'Academic Researcher']
          },
          {
            name: 'M.ActSc – Master of Actuarial Science',
            duration: '2 years',
            specializations: ['Life Insurance', 'General Insurance', 'Pension Planning', 'Risk Management'],
            eligibility: 'B.Sc Mathematics/Statistics/Actuarial Science',
            topColleges: ['University of Mumbai', 'Christ University', 'Amity University'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Actuary', 'Risk Analyst', 'Insurance Manager', 'Pension Consultant']
          },
          {
            name: 'M.Sc Quantitative Finance / Analytics',
            duration: '2 years',
            specializations: ['Financial Engineering', 'Risk Analytics', 'Algorithmic Trading', 'Financial Modeling'],
            eligibility: 'B.Sc Mathematics/Statistics/Economics',
            topColleges: ['ISB Hyderabad', 'IIM Bangalore', 'Christ University'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Quantitative Analyst', 'Risk Manager', 'Financial Engineer', 'Investment Analyst']
          }
        ]
      }
    ]
  },

  hospitality: {
    id: 'hospitality',
    name: 'Hospitality, Travel, Aviation',
    icon: '✈️',
    color: 'from-orange-400 to-red-500',
    description: 'Tourism, hospitality, and aviation management',
    categories: [
      {
        name: 'Hospitality & Tourism',
        programs: [
          {
            name: 'MHM – Master of Hotel Management',
            duration: '2 years',
            specializations: ['Hotel Operations', 'Food & Beverage Management', 'Event Management', 'Resort Management'],
            eligibility: 'BHM or equivalent',
            topColleges: ['IHM Delhi', 'IHM Mumbai', 'Welcomgroup Graduate School'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Hotel General Manager', 'Food & Beverage Manager', 'Event Manager', 'Resort Manager']
          },
          {
            name: 'MTTM – Master of Tourism & Travel Management',
            duration: '2 years',
            specializations: ['Tourism Planning', 'Destination Management', 'Eco-tourism', 'Adventure Tourism'],
            eligibility: 'BTTM or any Bachelor\'s degree',
            topColleges: ['IITTM Gwalior', 'Christ University', 'Symbiosis'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Tourism Manager', 'Destination Planner', 'Travel Consultant', 'Tourism Policy Analyst']
          },
          {
            name: 'MBA Aviation Management',
            duration: '2 years',
            specializations: ['Airport Management', 'Airline Operations', 'Aviation Finance', 'Aviation Safety'],
            eligibility: 'Any Bachelor\'s degree + Entrance exam',
            topColleges: ['Rajiv Gandhi Aviation Academy', 'Hindustan Aviation Academy'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Airport Manager', 'Airline Operations Manager', 'Aviation Consultant']
          }
        ]
      }
    ]
  },

  professional: {
    id: 'professional',
    name: 'Professional & Vocational Diplomas',
    icon: '💼',
    color: 'from-gray-400 to-slate-500',
    description: 'Professional diplomas and skill-based programs',
    categories: [
      {
        name: 'Professional Diplomas',
        programs: [
          {
            name: 'PGDCA – Computer Applications',
            duration: '1 year',
            specializations: ['Software Development', 'Database Management', 'Web Technologies'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['Various Universities and Institutes'],
            averageFees: '₹30,000-1 lakh',
            careerOptions: ['Computer Programmer', 'System Administrator', 'Web Developer']
          },
          {
            name: 'PGDHRM / PGDIB / PGDM – Management Diplomas',
            duration: '1-2 years',
            specializations: ['HR Management', 'International Business', 'General Management'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['Symbiosis', 'NMIMS', 'Christ University'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['HR Manager', 'Business Manager', 'Operations Manager']
          },
          {
            name: 'PGDJ – Journalism',
            duration: '1 year',
            specializations: ['Print Journalism', 'Broadcast Journalism', 'Digital Media'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['IIMC Delhi', 'Symbiosis', 'Xavier Institute'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['Journalist', 'Content Writer', 'Media Executive']
          },
          {
            name: 'PGD Data Science / AI / Digital Marketing',
            duration: '6 months - 1 year',
            specializations: ['Data Analytics', 'Machine Learning', 'Digital Marketing', 'AI Applications'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['IITs', 'IIMs', 'Specialized Institutes'],
            averageFees: '₹1-5 lakhs',
            careerOptions: ['Data Scientist', 'AI Engineer', 'Digital Marketing Manager']
          }
        ]
      }
    ]
  }
};

export const pgCareerPaths = {
  science: [
    {
      path: 'Research & Academia',
      description: 'PhD, JRF, Research Associate positions',
      roles: ['Research Scientist', 'Professor', 'Research Fellow', 'Lab Head'],
      organizations: ['CSIR Labs', 'Universities', 'IITs', 'IISc', 'TIFR']
    },
    {
      path: 'Government Science Organizations',
      description: 'Scientist roles in premier government organizations',
      roles: ['Scientist', 'Scientific Officer', 'Technical Officer', 'Research Officer'],
      organizations: ['ISRO', 'DRDO', 'BARC', 'DAE', 'DST']
    },
    {
      path: 'Corporate R&D',
      description: 'Research and development in private companies',
      roles: ['R&D Engineer', 'Data Scientist', 'Product Developer', 'Technical Lead'],
      organizations: ['TCS Innovation Labs', 'Infosys Labs', 'Microsoft Research', 'Google Research']
    }
  ],
  commerce: [
    {
      path: 'Investment Banking & Finance',
      description: 'High-finance roles in banking and investments',
      roles: ['Investment Banker', 'Equity Analyst', 'Portfolio Manager', 'Risk Manager'],
      organizations: ['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'ICICI Bank', 'HDFC Bank']
    },
    {
      path: 'Corporate Management',
      description: 'Leadership roles in corporations',
      roles: ['General Manager', 'Vice President', 'Director', 'CEO'],
      organizations: ['MNCs', 'Indian Corporates', 'Startups', 'Consulting Firms']
    },
    {
      path: 'Professional Services',
      description: 'CA, CS, CMA professional practice',
      roles: ['Chartered Accountant', 'Company Secretary', 'Tax Consultant', 'Audit Partner'],
      organizations: ['Big 4 Firms', 'CA Firms', 'Corporate Houses', 'Own Practice']
    }
  ],
  arts: [
    {
      path: 'Civil Services & Administration',
      description: 'Government administrative roles',
      roles: ['IAS Officer', 'IPS Officer', 'IFS Officer', 'State Civil Services'],
      organizations: ['Central Government', 'State Governments', 'District Administration', 'Foreign Service']
    },
    {
      path: 'Media & Communication',
      description: 'Journalism, content creation, and media roles',
      roles: ['Senior Journalist', 'Editor', 'Content Strategist', 'Media Manager'],
      organizations: ['News Channels', 'Newspapers', 'Digital Media', 'Publishing Houses']
    },
    {
      path: 'Social Sector & NGOs',
      description: 'Development and social work',
      roles: ['Program Manager', 'Policy Researcher', 'Development Officer', 'NGO Director'],
      organizations: ['NGOs', 'International Organizations', 'Government Programs', 'CSR Departments']
    }
  ]
};

export const pgEntranceExams = {
  science: [
    {
      name: 'GATE',
      type: 'Engineering/Science',
      level: 'PG',
      eligibility: 'BE/BTech/BSc in relevant field',
      dates: 'February',
      website: 'https://gate.iitm.ac.in',
      syllabus: ['Subject-specific technical syllabus', 'Engineering Mathematics', 'General Aptitude'],
      description: 'Graduate Aptitude Test in Engineering for MTech/MS admissions and PSU jobs'
    },
    {
      name: 'JAM',
      type: 'Science',
      level: 'PG',
      eligibility: 'BSc in relevant subject with 55% marks',
      dates: 'February',
      website: 'https://jam.iitm.ac.in',
      syllabus: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Biotechnology', 'Geology'],
      description: 'Joint Admission Test for MSc programs in IITs and IISc'
    },
    {
      name: 'CSIR NET',
      type: 'Research',
      level: 'PG/PhD',
      eligibility: 'MSc in relevant subject',
      dates: 'June & December',
      website: 'https://csirnet.nta.nic.in',
      syllabus: ['Life Sciences', 'Physical Sciences', 'Chemical Sciences', 'Mathematical Sciences'],
      description: 'For JRF and eligibility for Assistant Professor in Science subjects'
    }
  ],
  commerce: [
    {
      name: 'CAT',
      type: 'Management',
      level: 'PG',
      eligibility: 'Bachelor\'s degree with 50% marks',
      dates: 'November',
      website: 'https://iimcat.ac.in',
      syllabus: ['Verbal Ability & Reading Comprehension', 'Data Interpretation & Logical Reasoning', 'Quantitative Ability'],
      description: 'Common Admission Test for IIMs and top B-schools'
    },
    {
      name: 'XAT',
      type: 'Management',
      level: 'PG',
      eligibility: 'Bachelor\'s degree',
      dates: 'January',
      website: 'https://xatonline.in',
      syllabus: ['Verbal & Logical Ability', 'Decision Making', 'Quantitative Ability & Data Interpretation'],
      description: 'Xavier Aptitude Test for XLRI and other Xavier schools'
    }
  ],
  arts: [
    {
      name: 'UGC NET',
      type: 'Teaching/Research',
      level: 'PG',
      eligibility: 'Master\'s degree with 55% marks',
      dates: 'June & December',
      website: 'https://ugcnet.nta.nic.in',
      syllabus: ['Teaching & Research Aptitude', 'Subject-specific syllabus'],
      description: 'For Assistant Professor eligibility and JRF in humanities and social sciences'
    },
    {
      name: 'JNU Entrance',
      type: 'University Specific',
      level: 'PG',
      eligibility: 'Bachelor\'s degree with 50% marks',
      dates: 'May',
      website: 'https://www.jnu.ac.in',
      syllabus: ['Subject-specific syllabus', 'General awareness', 'Language skills'],
      description: 'For MA/MSc/MPhil/PhD admissions at JNU'
    }
  ]
};

export const pgInstitutions = {
  science: [
    'Indian Institute of Technology Delhi - MTech Programs',
    'Indian Institute of Technology Bombay - MTech Programs',
    'Indian Institute of Science Bangalore - MSc/PhD Programs',
    'Indian Institute of Science Education and Research Pune',
    'Jawaharlal Nehru University - School of Physical Sciences',
    'University of Delhi - Department of Physics',
    'Banaras Hindu University - Faculty of Science',
    'Tata Institute of Fundamental Research Mumbai',
    'Institute of Mathematical Sciences Chennai',
    'Indian Statistical Institute Kolkata'
  ],
  commerce: [
    'Indian Institute of Management Ahmedabad',
    'Indian Institute of Management Bangalore',
    'Indian Institute of Management Calcutta',
    'Xavier Labour Relations Institute Jamshedpur',
    'Faculty of Management Studies Delhi University',
    'SP Jain Institute of Management and Research Mumbai',
    'Delhi School of Economics',
    'Shri Ram College of Commerce Delhi',
    'Institute of Chartered Accountants of India - All Centers'
  ],
  arts: [
    'Jawaharlal Nehru University - School of Social Sciences',
    'University of Delhi - Faculty of Arts',
    'Banaras Hindu University - Faculty of Arts',
    'Tata Institute of Social Sciences Mumbai',
    'National Law School of India University Bangalore',
    'NALSAR University of Law Hyderabad',
    'Indian Institute of Mass Communication Delhi',
    'Film and Television Institute of India Pune'
  ]
};