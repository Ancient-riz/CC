// Comprehensive UG Programs Data for Degree Explorer
export const ugPrograms = {
  science: {
    id: 'science',
    name: 'Science & Technology',
    icon: '🔬',
    color: 'from-green-400 to-blue-500',
    description: 'Explore scientific research, technology, and innovation-driven careers',
    categories: [
      {
        name: 'Pure Sciences',
        programs: [
          {
            name: 'B.Sc – Bachelor of Science',
            duration: '3 years',
            specializations: [
              'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Zoology', 'Botany', 
              'Computer Science', 'Biotechnology', 'Microbiology', 'Statistics', 
              'Environmental Science', 'Data Science', 'Forensic Science', 'Geology'
            ],
            eligibility: 'Class 12 with Science (PCM/PCB)',
            topColleges: ['St. Stephens College', 'Hindu College', 'Loyola College', 'Christ University'],
            averageFees: '₹50,000-3 lakhs',
            careerOptions: ['Research Scientist', 'Lab Technician', 'Data Analyst', 'Teacher', 'Quality Control Analyst']
          },
          {
            name: 'B.Stat – Bachelor of Statistics',
            duration: '3 years',
            specializations: ['Applied Statistics', 'Mathematical Statistics', 'Biostatistics'],
            eligibility: 'Class 12 with Mathematics',
            topColleges: ['Indian Statistical Institute', 'St. Xaviers College'],
            averageFees: '₹1-2 lakhs',
            careerOptions: ['Statistician', 'Data Scientist', 'Actuary', 'Research Analyst']
          }
        ]
      },
      {
        name: 'Engineering & Technology',
        programs: [
          {
            name: 'B.Tech / B.E. – Bachelor of Technology / Engineering',
            duration: '4 years',
            specializations: [
              'Computer Science', 'Civil Engineering', 'Mechanical Engineering', 
              'Electrical Engineering', 'Electronics & Communication', 'Information Technology',
              'AI & Machine Learning', 'Cybersecurity', 'Robotics', 'Aerospace Engineering',
              'Chemical Engineering', 'Biotechnology Engineering', 'Environmental Engineering'
            ],
            eligibility: 'Class 12 with PCM + JEE Main/Advanced',
            topColleges: ['IIT Delhi', 'IIT Bombay', 'NIT Trichy', 'BITS Pilani', 'VIT'],
            averageFees: '₹2-15 lakhs',
            careerOptions: ['Software Engineer', 'Mechanical Engineer', 'Data Scientist', 'Product Manager']
          },
          {
            name: 'BCA – Bachelor of Computer Applications',
            duration: '3 years',
            specializations: ['Software Development', 'Web Development', 'Mobile App Development', 'Database Management'],
            eligibility: 'Class 12 with Mathematics',
            topColleges: ['Christ University', 'Symbiosis', 'Amity University'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Software Developer', 'System Administrator', 'Web Developer', 'Database Administrator']
          },
          {
            name: 'B.Sc IT – Bachelor of Science in Information Technology',
            duration: '3 years',
            specializations: ['Software Engineering', 'Network Security', 'Data Analytics', 'Cloud Computing'],
            eligibility: 'Class 12 with Mathematics',
            topColleges: ['Mumbai University', 'Pune University', 'VIT'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['IT Consultant', 'Software Developer', 'System Analyst', 'Network Administrator']
          }
        ]
      },
      {
        name: 'Specialized Sciences',
        programs: [
          {
            name: 'B.F.Sc – Bachelor of Fisheries Science',
            duration: '4 years',
            specializations: ['Aquaculture', 'Marine Biology', 'Fish Processing', 'Fisheries Management'],
            eligibility: 'Class 12 with PCB',
            topColleges: ['Central Institute of Fisheries Education', 'Kerala University of Fisheries'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Fisheries Officer', 'Aquaculture Specialist', 'Marine Biologist', 'Research Scientist']
          },
          {
            name: 'B.Sc Agriculture / B.Sc Horticulture',
            duration: '4 years',
            specializations: ['Crop Science', 'Soil Science', 'Plant Breeding', 'Horticulture', 'Agricultural Economics'],
            eligibility: 'Class 12 with PCB/PCM',
            topColleges: ['IARI Delhi', 'Punjab Agricultural University', 'Tamil Nadu Agricultural University'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Agricultural Officer', 'Farm Manager', 'Agricultural Scientist', 'Horticulturist']
          },
          {
            name: 'B.Voc – Bachelor of Vocation (Technical)',
            duration: '3 years',
            specializations: ['Software Development', 'Electronics', 'Renewable Energy', 'Food Processing'],
            eligibility: 'Class 12 in relevant stream',
            topColleges: ['Various Universities offering B.Voc programs'],
            averageFees: '₹30,000-1.5 lakhs',
            careerOptions: ['Technical Specialist', 'Industry Expert', 'Entrepreneur', 'Skill Trainer']
          },
          {
            name: 'B.Des Tech – Bachelor of Design with Technology',
            duration: '4 years',
            specializations: ['Product Design', 'Industrial Design', 'Interaction Design', 'Design Engineering'],
            eligibility: 'Class 12 with PCM + Design Aptitude',
            topColleges: ['IIT Bombay IDC', 'NID', 'MIT Institute of Design'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Product Designer', 'Design Engineer', 'UX Designer', 'Innovation Consultant']
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
    description: 'Healthcare, medical sciences, and allied health professions',
    categories: [
      {
        name: 'Medical Degrees',
        programs: [
          {
            name: 'MBBS – Bachelor of Medicine, Bachelor of Surgery',
            duration: '5.5 years (including internship)',
            specializations: ['General Medicine', 'Surgery', 'Pediatrics', 'Gynecology'],
            eligibility: 'Class 12 with PCB + NEET UG',
            topColleges: ['AIIMS Delhi', 'CMC Vellore', 'AFMC Pune', 'JIPMER'],
            averageFees: '₹5-25 lakhs',
            careerOptions: ['Doctor', 'Surgeon', 'Medical Officer', 'Researcher']
          },
          {
            name: 'BDS – Bachelor of Dental Surgery',
            duration: '5 years (including internship)',
            specializations: ['Oral Surgery', 'Orthodontics', 'Periodontics', 'Prosthodontics'],
            eligibility: 'Class 12 with PCB + NEET UG',
            topColleges: ['Maulana Azad Institute', 'Government Dental College'],
            averageFees: '₹3-15 lakhs',
            careerOptions: ['Dentist', 'Oral Surgeon', 'Orthodontist', 'Dental Consultant']
          }
        ]
      },
      {
        name: 'Alternative Medicine',
        programs: [
          {
            name: 'BAMS – Bachelor of Ayurvedic Medicine & Surgery',
            duration: '5.5 years',
            specializations: ['Panchakarma', 'Kayachikitsa', 'Shalya Tantra', 'Dravyaguna'],
            eligibility: 'Class 12 with PCB + NEET UG',
            topColleges: ['Gujarat Ayurved University', 'Rajiv Gandhi University'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Ayurvedic Doctor', 'Panchakarma Specialist', 'Wellness Consultant']
          },
          {
            name: 'BHMS – Bachelor of Homeopathic Medicine & Surgery',
            duration: '5.5 years',
            specializations: ['Classical Homeopathy', 'Clinical Homeopathy', 'Pediatric Homeopathy'],
            eligibility: 'Class 12 with PCB + NEET UG',
            topColleges: ['National Institute of Homeopathy', 'Homeopathic Medical Colleges'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Homeopathic Doctor', 'Clinic Owner', 'Research Officer']
          },
          {
            name: 'BUMS – Bachelor of Unani Medicine & Surgery',
            duration: '5.5 years',
            specializations: ['Unani Medicine', 'Unani Surgery', 'Preventive Medicine'],
            eligibility: 'Class 12 with PCB + NEET UG',
            topColleges: ['Jamia Hamdard', 'Aligarh Muslim University'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Unani Doctor', 'Medical Officer', 'Research Scientist']
          },
          {
            name: 'BNYS – Bachelor of Naturopathy & Yogic Sciences',
            duration: '5.5 years',
            specializations: ['Naturopathy', 'Yoga Therapy', 'Acupuncture', 'Nutrition'],
            eligibility: 'Class 12 with PCB + NEET UG',
            topColleges: ['SDM College of Naturopathy', 'Government Yoga Colleges'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Naturopathy Doctor', 'Yoga Therapist', 'Wellness Coach']
          }
        ]
      },
      {
        name: 'Allied Health Sciences',
        programs: [
          {
            name: 'BPT – Bachelor of Physiotherapy',
            duration: '4.5 years',
            specializations: ['Sports Physiotherapy', 'Neurological Physiotherapy', 'Orthopedic Physiotherapy'],
            eligibility: 'Class 12 with PCB',
            topColleges: ['CMC Vellore', 'Manipal Academy', 'Jamia Millia Islamia'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Physiotherapist', 'Sports Therapist', 'Rehabilitation Specialist']
          },
          {
            name: 'B.Sc Nursing',
            duration: '4 years',
            specializations: ['Critical Care Nursing', 'Pediatric Nursing', 'Community Health Nursing'],
            eligibility: 'Class 12 with PCB',
            topColleges: ['AIIMS', 'CMC Vellore', 'Manipal College of Nursing'],
            averageFees: '₹1-5 lakhs',
            careerOptions: ['Staff Nurse', 'Nursing Supervisor', 'Community Health Nurse']
          },
          {
            name: 'B.Pharm – Bachelor of Pharmacy',
            duration: '4 years',
            specializations: ['Clinical Pharmacy', 'Industrial Pharmacy', 'Hospital Pharmacy'],
            eligibility: 'Class 12 with PCM/PCB',
            topColleges: ['Jamia Hamdard', 'Manipal College of Pharmaceutical Sciences'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Pharmacist', 'Drug Inspector', 'Medical Representative', 'Research Scientist']
          },
          {
            name: 'B.Optom – Bachelor of Optometry',
            duration: '4 years',
            specializations: ['Clinical Optometry', 'Contact Lens Practice', 'Low Vision Rehabilitation'],
            eligibility: 'Class 12 with PCM/PCB',
            topColleges: ['Elite School of Optometry', 'Manipal Academy'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Optometrist', 'Vision Therapist', 'Optical Shop Owner']
          },
          {
            name: 'BMLT – Bachelor in Medical Lab Technology',
            duration: '3-4 years',
            specializations: ['Clinical Biochemistry', 'Microbiology', 'Hematology', 'Pathology'],
            eligibility: 'Class 12 with PCB',
            topColleges: ['AIIMS', 'CMC Vellore', 'Manipal Academy'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Lab Technician', 'Lab Manager', 'Quality Control Analyst']
          },
          {
            name: 'BASLP – Audiology & Speech-Language Pathology',
            duration: '4 years',
            specializations: ['Audiology', 'Speech Therapy', 'Voice Therapy', 'Swallowing Disorders'],
            eligibility: 'Class 12 with PCB',
            topColleges: ['AIIMS', 'Manipal Academy', 'JSS Academy'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Audiologist', 'Speech Therapist', 'Clinical Specialist']
          },
          {
            name: 'BOT – Bachelor of Occupational Therapy',
            duration: '4.5 years',
            specializations: ['Pediatric OT', 'Mental Health OT', 'Physical Rehabilitation'],
            eligibility: 'Class 12 with PCB',
            topColleges: ['CMC Vellore', 'Manipal Academy', 'AIIMS'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Occupational Therapist', 'Rehabilitation Specialist', 'Community Health Worker']
          },
          {
            name: 'BMRSc – Bachelor of Medical Record Science',
            duration: '3 years',
            specializations: ['Health Information Management', 'Medical Coding', 'Healthcare Analytics'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Manipal Academy', 'Apollo Institute'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['Medical Records Officer', 'Health Information Manager', 'Medical Coder']
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
    description: 'Business, finance, economics, and management studies',
    categories: [
      {
        name: 'Commerce Degrees',
        programs: [
          {
            name: 'B.Com – Bachelor of Commerce',
            duration: '3 years',
            specializations: [
              'B.Com (General)', 'B.Com (Hons.)', 'B.Com (Banking & Finance)', 
              'B.Com (Accounting & Finance)', 'B.Com (Computer Applications)',
              'B.Com (E-Commerce)', 'B.Com (Tax Procedures & Practices)'
            ],
            eligibility: 'Class 12 with Commerce/any stream',
            topColleges: ['Shri Ram College of Commerce', 'Hindu College', 'Loyola College', 'Christ University'],
            averageFees: '₹30,000-2 lakhs',
            careerOptions: ['Accountant', 'Financial Analyst', 'Banking Officer', 'Tax Consultant']
          }
        ]
      },
      {
        name: 'Management Degrees',
        programs: [
          {
            name: 'BBA / BBM / BMS – Bachelor of Business Administration / Management',
            duration: '3 years',
            specializations: [
              'Marketing', 'Finance', 'Human Resources', 'Operations', 'International Business',
              'Digital Marketing', 'Supply Chain Management', 'Entrepreneurship'
            ],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Shaheed Sukhdev College', 'Christ University', 'Symbiosis', 'NMIMS'],
            averageFees: '₹1-5 lakhs',
            careerOptions: ['Business Analyst', 'Marketing Executive', 'HR Executive', 'Operations Manager']
          },
          {
            name: 'BIBF – Bachelor of International Business and Finance',
            duration: '3 years',
            specializations: ['International Trade', 'Global Finance', 'Cross-border Commerce'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Symbiosis', 'Christ University', 'NMIMS'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['International Business Manager', 'Export-Import Executive', 'Global Finance Analyst']
          },
          {
            name: 'BFIA – Bachelor of Financial & Investment Analysis',
            duration: '3 years',
            specializations: ['Investment Banking', 'Portfolio Management', 'Risk Analysis'],
            eligibility: 'Class 12 with Mathematics',
            topColleges: ['Christ University', 'Symbiosis', 'NMIMS'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Investment Analyst', 'Portfolio Manager', 'Financial Advisor']
          },
          {
            name: 'BBS – Bachelor of Business Studies',
            duration: '3 years',
            specializations: ['Business Management', 'Entrepreneurship', 'Corporate Strategy'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Delhi University', 'Symbiosis', 'Christ University'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['Business Manager', 'Entrepreneur', 'Corporate Executive']
          }
        ]
      },
      {
        name: 'Integrated Programs',
        programs: [
          {
            name: 'BBA LLB – Integrated Law & Management',
            duration: '5 years',
            specializations: ['Corporate Law', 'Business Law', 'International Law'],
            eligibility: 'Class 12 with any stream + CLAT',
            topColleges: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'Symbiosis Law School'],
            averageFees: '₹3-10 lakhs',
            careerOptions: ['Corporate Lawyer', 'Legal Advisor', 'Compliance Officer']
          },
          {
            name: 'B.Voc (Business) – Skill-based Business Degrees',
            duration: '3 years',
            specializations: ['Retail Management', 'E-Commerce', 'Banking & Finance', 'Insurance'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Various Universities offering B.Voc programs'],
            averageFees: '₹30,000-1.5 lakhs',
            careerOptions: ['Retail Manager', 'E-Commerce Specialist', 'Banking Associate']
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
    description: 'Liberal arts, humanities, social sciences, and creative fields',
    categories: [
      {
        name: 'Liberal Arts',
        programs: [
          {
            name: 'BA – Bachelor of Arts',
            duration: '3 years',
            specializations: [
              'History', 'Political Science', 'Sociology', 'Psychology', 'Philosophy', 
              'Economics', 'English Literature', 'Geography', 'Hindi', 'Sanskrit',
              'Anthropology', 'Journalism', 'Public Administration'
            ],
            eligibility: 'Class 12 with any stream',
            topColleges: ['St. Stephens College', 'Hindu College', 'Presidency College', 'Loyola College'],
            averageFees: '₹20,000-1.5 lakhs',
            careerOptions: ['Civil Servant', 'Journalist', 'Teacher', 'Social Worker', 'Researcher']
          },
          {
            name: 'BA (Hons.) – Honours with Specialization',
            duration: '3 years',
            specializations: ['Single subject specialization with research component'],
            eligibility: 'Class 12 with relevant subjects',
            topColleges: ['Delhi University Colleges', 'JNU', 'BHU'],
            averageFees: '₹30,000-2 lakhs',
            careerOptions: ['Subject Expert', 'Researcher', 'Academic', 'Specialist Roles']
          },
          {
            name: 'BA (Liberal Arts) – Multi-disciplinary Degree',
            duration: '3-4 years',
            specializations: ['Interdisciplinary Studies', 'Global Studies', 'Critical Thinking'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Ashoka University', 'Flame University', 'Christ University'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Policy Analyst', 'Consultant', 'Writer', 'Think Tank Researcher']
          }
        ]
      },
      {
        name: 'Creative Arts',
        programs: [
          {
            name: 'BFA – Bachelor of Fine Arts',
            duration: '3-4 years',
            specializations: ['Painting', 'Sculpture', 'Applied Arts', 'Photography', 'Digital Arts'],
            eligibility: 'Class 12 with any stream + Portfolio',
            topColleges: ['JNU', 'BHU', 'Jamia Millia Islamia', 'MS University Baroda'],
            averageFees: '₹50,000-3 lakhs',
            careerOptions: ['Artist', 'Art Director', 'Curator', 'Art Teacher', 'Freelance Artist']
          },
          {
            name: 'BPA – Bachelor of Performing Arts',
            duration: '3 years',
            specializations: ['Music', 'Dance', 'Theatre', 'Drama', 'Film Studies'],
            eligibility: 'Class 12 with any stream + Audition',
            topColleges: ['FTII Pune', 'NSD Delhi', 'Kalakshetra Chennai'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Performer', 'Director', 'Choreographer', 'Music Teacher', 'Entertainment Industry']
          },
          {
            name: 'BVA – Bachelor of Visual Arts',
            duration: '4 years',
            specializations: ['Graphic Design', 'Animation', 'Film Making', 'Visual Communication'],
            eligibility: 'Class 12 with any stream + Portfolio',
            topColleges: ['NID Ahmedabad', 'Srishti Institute', 'Pearl Academy'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Graphic Designer', 'Animator', 'Film Maker', 'Visual Artist']
          }
        ]
      },
      {
        name: 'Media & Communication',
        programs: [
          {
            name: 'BMM – Bachelor of Mass Media',
            duration: '3 years',
            specializations: ['Journalism', 'Advertising', 'Public Relations', 'Digital Media'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Xavier Institute Mumbai', 'Symbiosis', 'Christ University'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Journalist', 'Content Creator', 'PR Executive', 'Media Planner']
          },
          {
            name: 'BJMC / BMC – Bachelor of Journalism & Mass Communication',
            duration: '3 years',
            specializations: ['Print Journalism', 'Broadcast Journalism', 'Digital Journalism', 'Documentary Making'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['IIMC Delhi', 'Symbiosis', 'Christ University', 'Xavier Institute'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Journalist', 'News Anchor', 'Content Writer', 'Media Analyst']
          },
          {
            name: 'BA Film Making / Screenwriting / Direction',
            duration: '3 years',
            specializations: ['Direction', 'Screenwriting', 'Cinematography', 'Film Production'],
            eligibility: 'Class 12 with any stream + Portfolio',
            topColleges: ['FTII Pune', 'Whistling Woods', 'Asian Academy of Film'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Film Director', 'Screenwriter', 'Cinematographer', 'Film Producer']
          },
          {
            name: 'B.Sc Animation & VFX',
            duration: '3 years',
            specializations: ['2D Animation', '3D Animation', 'VFX', 'Game Design'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Arena Animation', 'Frameboxx', 'MAAC'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Animator', 'VFX Artist', 'Game Designer', 'Motion Graphics Designer']
          }
        ]
      },
      {
        name: 'Social Sciences',
        programs: [
          {
            name: 'BSW – Bachelor of Social Work',
            duration: '3 years',
            specializations: ['Community Development', 'Medical Social Work', 'Psychiatric Social Work'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['TISS Mumbai', 'Delhi University', 'Jamia Millia Islamia'],
            averageFees: '₹50,000-2 lakhs',
            careerOptions: ['Social Worker', 'NGO Manager', 'Community Development Officer']
          },
          {
            name: 'B.Lib.Sc / B.Lib.I.Sc – Library & Information Sciences',
            duration: '1 year (after graduation)',
            specializations: ['Digital Library Management', 'Information Systems', 'Archives Management'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['University of Delhi', 'Banaras Hindu University'],
            averageFees: '₹20,000-50,000',
            careerOptions: ['Librarian', 'Information Manager', 'Digital Archivist']
          }
        ]
      },
      {
        name: 'Law',
        programs: [
          {
            name: 'BA LLB – 5-Year Integrated Law with Arts',
            duration: '5 years',
            specializations: ['Constitutional Law', 'Criminal Law', 'Corporate Law', 'Human Rights Law'],
            eligibility: 'Class 12 with any stream + CLAT',
            topColleges: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'NLU Delhi'],
            averageFees: '₹2-10 lakhs',
            careerOptions: ['Lawyer', 'Judge', 'Legal Advisor', 'Corporate Counsel']
          },
          {
            name: 'LLB – 3-Year Law Degree',
            duration: '3 years',
            specializations: ['General Law', 'Specialized Law Areas'],
            eligibility: 'Any Bachelor\'s degree',
            topColleges: ['Faculty of Law DU', 'Government Law College Mumbai'],
            averageFees: '₹50,000-3 lakhs',
            careerOptions: ['Advocate', 'Legal Consultant', 'Judicial Services']
          }
        ]
      },
      {
        name: 'Design & Fashion',
        programs: [
          {
            name: 'B.Des – Bachelor of Design',
            duration: '4 years',
            specializations: [
              'Fashion Design', 'Product Design', 'Graphic Design', 'Interior Design', 
              'Animation', 'Game Design', 'UI/UX Design', 'Industrial Design'
            ],
            eligibility: 'Class 12 with any stream + Design Aptitude Test',
            topColleges: ['NID Ahmedabad', 'NIFT', 'Srishti Institute', 'MIT Institute of Design'],
            averageFees: '₹2-8 lakhs',
            careerOptions: ['Designer', 'Creative Director', 'Design Consultant', 'Freelance Designer']
          },
          {
            name: 'B.FTech – Bachelor of Fashion Technology',
            duration: '4 years',
            specializations: ['Fashion Design', 'Textile Technology', 'Apparel Production', 'Fashion Marketing'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['NIFT', 'Pearl Academy', 'Symbiosis Institute of Design'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Fashion Designer', 'Fashion Technologist', 'Merchandiser', 'Fashion Entrepreneur']
          },
          {
            name: 'B.Sc Fashion Design / Apparel Design',
            duration: '3 years',
            specializations: ['Fashion Illustration', 'Pattern Making', 'Garment Construction'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['NIFT', 'Pearl Academy', 'JD Institute'],
            averageFees: '₹1-4 lakhs',
            careerOptions: ['Fashion Designer', 'Stylist', 'Fashion Illustrator']
          }
        ]
      },
      {
        name: 'Education',
        programs: [
          {
            name: 'B.El.Ed – Bachelor of Elementary Education',
            duration: '4 years',
            specializations: ['Primary Education', 'Early Childhood Education'],
            eligibility: 'Class 12 with 50% marks',
            topColleges: ['Jamia Millia Islamia', 'University of Delhi'],
            averageFees: '₹50,000-1.5 lakhs',
            careerOptions: ['Primary School Teacher', 'Education Coordinator']
          },
          {
            name: 'BA B.Ed / B.Sc B.Ed – 4-Year Integrated Education',
            duration: '4 years',
            specializations: ['Subject Teaching with Education'],
            eligibility: 'Class 12 with relevant subjects',
            topColleges: ['Jamia Millia Islamia', 'University of Delhi', 'BHU'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['School Teacher', 'Education Officer', 'Curriculum Developer']
          }
        ]
      },
      {
        name: 'Hospitality & Tourism',
        programs: [
          {
            name: 'BHM – Bachelor of Hotel Management',
            duration: '4 years',
            specializations: ['Hotel Operations', 'Food & Beverage', 'Front Office', 'Housekeeping'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['IHM Delhi', 'IHM Mumbai', 'Welcomgroup Graduate School'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['Hotel Manager', 'Restaurant Manager', 'Event Manager']
          },
          {
            name: 'BTTM – Bachelor of Travel and Tourism Management',
            duration: '3 years',
            specializations: ['Tour Operations', 'Travel Planning', 'Tourism Marketing'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['IITTM Gwalior', 'Christ University', 'Symbiosis'],
            averageFees: '₹1-3 lakhs',
            careerOptions: ['Travel Consultant', 'Tour Operator', 'Tourism Officer']
          },
          {
            name: 'BBA Aviation',
            duration: '3 years',
            specializations: ['Airport Management', 'Airline Operations', 'Aviation Safety'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['Rajiv Gandhi Aviation Academy', 'Hindustan Aviation Academy'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Airport Manager', 'Airline Executive', 'Aviation Consultant']
          }
        ]
      },
      {
        name: 'Emerging & Interdisciplinary',
        programs: [
          {
            name: 'B.Sc Data Science / Analytics',
            duration: '3 years',
            specializations: ['Machine Learning', 'Big Data Analytics', 'Statistical Analysis'],
            eligibility: 'Class 12 with Mathematics',
            topColleges: ['IIT Madras', 'Christ University', 'Symbiosis'],
            averageFees: '₹2-5 lakhs',
            careerOptions: ['Data Scientist', 'Data Analyst', 'Business Intelligence Analyst']
          },
          {
            name: 'B.Sc AI & ML',
            duration: '3 years',
            specializations: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
            eligibility: 'Class 12 with PCM',
            topColleges: ['IIT Delhi', 'VIT', 'SRM University'],
            averageFees: '₹2-6 lakhs',
            careerOptions: ['AI Engineer', 'ML Engineer', 'Research Scientist']
          },
          {
            name: 'Bachelor in Public Policy / International Relations',
            duration: '3 years',
            specializations: ['Policy Analysis', 'Diplomacy', 'Global Governance'],
            eligibility: 'Class 12 with any stream',
            topColleges: ['JNU', 'Ashoka University', 'O.P. Jindal Global University'],
            averageFees: '₹3-8 lakhs',
            careerOptions: ['Policy Analyst', 'Diplomat', 'International Relations Specialist']
          }
        ]
      }
    ]
  }
};

export const ugCareerPaths = {
  science: [
    {
      path: 'Research & Academia',
      description: 'Scientific research and academic careers',
      roles: ['Research Scientist', 'Professor', 'Lab Manager', 'Research Fellow'],
      organizations: ['Universities', 'CSIR Labs', 'IITs', 'Research Institutes']
    },
    {
      path: 'Technology & Engineering',
      description: 'Technology development and engineering roles',
      roles: ['Software Engineer', 'Data Scientist', 'Product Manager', 'Technical Lead'],
      organizations: ['Tech Companies', 'Startups', 'MNCs', 'Government Organizations']
    },
    {
      path: 'Healthcare & Medicine',
      description: 'Medical and healthcare professions',
      roles: ['Doctor', 'Medical Researcher', 'Healthcare Administrator', 'Public Health Officer'],
      organizations: ['Hospitals', 'Research Institutes', 'Government Health Departments', 'NGOs']
    }
  ],
  commerce: [
    {
      path: 'Finance & Banking',
      description: 'Financial services and banking careers',
      roles: ['Financial Analyst', 'Investment Banker', 'Portfolio Manager', 'Risk Analyst'],
      organizations: ['Banks', 'Investment Firms', 'Insurance Companies', 'Financial Consultancies']
    },
    {
      path: 'Business & Management',
      description: 'Corporate management and business roles',
      roles: ['Business Manager', 'Marketing Manager', 'Operations Manager', 'Entrepreneur'],
      organizations: ['Corporations', 'Startups', 'Consulting Firms', 'Own Business']
    },
    {
      path: 'Professional Services',
      description: 'Specialized professional services',
      roles: ['Chartered Accountant', 'Tax Consultant', 'Auditor', 'Financial Advisor'],
      organizations: ['CA Firms', 'Consulting Companies', 'Corporate Finance Departments']
    }
  ],
  arts: [
    {
      path: 'Public Service & Administration',
      description: 'Government and public sector careers',
      roles: ['Civil Servant', 'Policy Analyst', 'Administrative Officer', 'Diplomat'],
      organizations: ['Government Departments', 'Public Sector Units', 'International Organizations']
    },
    {
      path: 'Media & Communication',
      description: 'Media, journalism, and communication roles',
      roles: ['Journalist', 'Content Creator', 'PR Executive', 'Media Analyst'],
      organizations: ['News Organizations', 'Media Companies', 'PR Agencies', 'Digital Platforms']
    },
    {
      path: 'Creative & Cultural',
      description: 'Arts, culture, and creative industries',
      roles: ['Artist', 'Designer', 'Writer', 'Cultural Manager'],
      organizations: ['Creative Agencies', 'Cultural Organizations', 'Entertainment Industry', 'Freelance']
    }
  ]
};