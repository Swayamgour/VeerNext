import {

    FaBook,
    FaChartLine,
    FaPiggyBank,
    FaHome,
    FaUsers,
    FaBriefcase,
    FaHandshake,
    FaChalkboardTeacher,
    FaNetworkWired,
    FaShieldAlt,
    FaGraduationCap,

    FaUniversity,
    FaAward,
    FaMoneyBillWave,
    FaCreditCard

} from 'react-icons/fa';


import {
    FaTachometerAlt,
    FaUser,
    FaBookOpen,
    FaClipboardList,
    FaTasks,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";


import { FaUserTie, FaLaptopCode, FaLanguage } from "react-icons/fa";



export const missions = [
    {
        id: 1,
        number: "01",
        icon: "fas fa-book",
        title: "Military Salary Management",
        desc: "Learn to manage your defense salary effectively",
        duration: "3 Minutes",
        color: "#1a2a6c"
    },
    {
        id: 2,
        number: "02",
        icon: "fas fa-chart-line",
        title: "Investment Basics",
        desc: "Understanding stocks, mutual funds, and SIPs",
        duration: "3 Minutes",
        color: "#ff6b35"
    },
    {
        id: 3,
        number: "03",
        icon: "fas fa-shield-alt",
        title: "Insurance Planning",
        desc: "Term, health, and life insurance for defense personnel",
        duration: "3 Minutes",
        color: "#4CAF50"
    },
    {
        id: 4,
        number: "04",
        icon: "fas fa-piggy-bank",
        title: "Emergency Fund Creation",
        desc: "Building a 12-month safety net",
        duration: "3 Minutes",
        color: "#2196F3"
    },
    {
        id: 5,
        number: "05",
        icon: "fas fa-home",
        title: "Home & Vehicle Planning",
        desc: "Smart loans and asset acquisition",
        duration: "3 Minutes",
        color: "#9C27B0"
    },
    {
        id: 6,
        number: "06",
        icon: "fas fa-graduation-cap",
        title: "Child Education Planning",
        desc: "Securing your children's future",
        duration: "3 Minutes",
        color: "#FF9800"
    },
    {
        id: 7,
        number: "07",
        icon: "fas fa-users",
        title: "Retirement Planning",
        desc: "Building a pension-independent future",
        duration: "3 Minutes",
        color: "#607D8B"
    }
];

// Mission Content Data
export const missionContent = {
    1: {
        title: "Military Salary Management",
        subtitle: "Master your defense salary like a pro",
        icon: <FaBook />,
        sections: [
            {
                title: "Understanding Your Salary Structure",
                content:
                    "Learn how your military salary is structured and how each component contributes to your total income.",
                keyPoints: [
                    "Basic Pay & Pay Level system",
                    "Military Service Pay (MSP)",
                    "Dearness Allowance (DA)",
                    "House Rent Allowance (HRA)",
                    "Other special allowances"
                ]
            },
            {
                title: "Smart Budgeting for Defense Personnel",
                content:
                    "Build a realistic budget that works with postings, deployments, and transfers.",
                keyPoints: [
                    "50/30/20 budgeting rule",
                    "Handling field area expenses",
                    "Managing family expenses remotely",
                    "Emergency posting fund",
                    "Avoiding lifestyle inflation"
                ]
            },
            {
                title: "Tax Benefits for Armed Forces",
                content:
                    "Understand special tax exemptions available only to defense personnel.",
                keyPoints: [
                    "Section 10 tax exemptions",
                    "Allowances with tax benefits",
                    "Leave Travel Concessions",
                    "Pension & gratuity exemptions",
                    "Tax-saving investments"
                ]
            }
        ],
        quiz: {
            question:
                "According to the 50/30/20 rule, how much should be saved or invested?",
            options: [
                { id: 1, text: "10%" },
                { id: 2, text: "20%" },
                { id: 3, text: "30%" },
                { id: 4, text: "40%" }
            ],
            correctAnswer: 2
        }
    },

    2: {
        title: "Investment Basics",
        subtitle: "Start your wealth creation journey",
        icon: <FaChartLine />,
        sections: [
            {
                title: "Why Investing Is Important",
                content:
                    "Saving alone is not enough to beat inflation. Investing helps grow your money.",
                keyPoints: [
                    "Power of compounding",
                    "Inflation impact",
                    "Long-term wealth creation",
                    "Risk vs return",
                    "Start early advantage"
                ]
            },
            {
                title: "Beginner-Friendly Investments",
                content:
                    "Low-risk and government-backed investment options for beginners.",
                keyPoints: [
                    "PPF & EPF",
                    "Mutual Fund SIPs",
                    "Sovereign Gold Bonds",
                    "NSC & Post Office schemes",
                    "Index funds"
                ]
            }
        ],
        quiz: {
            question:
                "Which investment option is government-backed and tax-efficient?",
            options: [
                { id: 1, text: "PPF" },
                { id: 2, text: "Cryptocurrency" },
                { id: 3, text: "Intraday Trading" },
                { id: 4, text: "Forex Trading" }
            ],
            correctAnswer: 1
        }
    },

    3: {
        title: "Insurance Planning",
        subtitle: "Protect yourself and your family",
        icon: <FaShieldAlt />,
        sections: [
            {
                title: "Importance of Insurance",
                content:
                    "Insurance ensures financial security in uncertain situations.",
                keyPoints: [
                    "Life insurance importance",
                    "Health insurance coverage",
                    "Accident & disability cover",
                    "Income replacement",
                    "Peace of mind"
                ]
            },
            {
                title: "Insurance for Defense Personnel",
                content:
                    "Special insurance schemes designed for armed forces.",
                keyPoints: [
                    "Army Group Insurance Fund (AGIF)",
                    "Term insurance benefits",
                    "Family health coverage",
                    "Critical illness plans",
                    "Nominee updates"
                ]
            }
        ],
        quiz: {
            question:
                "Which insurance is most important for income protection?",
            options: [
                { id: 1, text: "Term Insurance" },
                { id: 2, text: "Vehicle Insurance" },
                { id: 3, text: "Travel Insurance" },
                { id: 4, text: "Mobile Insurance" }
            ],
            correctAnswer: 1
        }
    },

    4: {
        title: "Emergency Fund Creation",
        subtitle: "Be ready for the unexpected",
        icon: <FaPiggyBank />,
        sections: [
            {
                title: "Why Emergency Fund Matters",
                content:
                    "An emergency fund protects you during medical, job, or family emergencies.",
                keyPoints: [
                    "Unplanned medical expenses",
                    "Posting or relocation costs",
                    "Family emergencies",
                    "Avoiding high-interest loans",
                    "Financial stability"
                ]
            },
            {
                title: "How Much to Save",
                content:
                    "Defense personnel should aim for a larger safety buffer.",
                keyPoints: [
                    "6–12 months of expenses",
                    "Separate emergency account",
                    "Liquid & safe instruments",
                    "Easy access to funds",
                    "Regular monthly contribution"
                ]
            }
        ],
        quiz: {
            question:
                "Ideal emergency fund size should cover expenses for?",
            options: [
                { id: 1, text: "1–2 months" },
                { id: 2, text: "3 months" },
                { id: 3, text: "6–12 months" },
                { id: 4, text: "2 years" }
            ],
            correctAnswer: 3
        }
    },

    5: {
        title: "Home & Vehicle Planning",
        subtitle: "Smart asset acquisition",
        icon: <FaHome />,
        sections: [
            {
                title: "Buying a Home Wisely",
                content:
                    "Home buying should not overburden your finances.",
                keyPoints: [
                    "Right time to buy",
                    "Loan eligibility",
                    "EMI affordability",
                    "Location vs posting",
                    "Tax benefits on home loan"
                ]
            },
            {
                title: "Vehicle Purchase Planning",
                content:
                    "Avoid impulse purchases and high EMIs.",
                keyPoints: [
                    "Need vs luxury",
                    "Down payment importance",
                    "Loan tenure planning",
                    "Maintenance costs",
                    "Resale value"
                ]
            }
        ],
        quiz: {
            question:
                "Ideal EMI should be what percentage of income?",
            options: [
                { id: 1, text: "20%" },
                { id: 2, text: "30–40%" },
                { id: 3, text: "50%" },
                { id: 4, text: "60%" }
            ],
            correctAnswer: 2
        }
    },

    6: {
        title: "Child Education Planning",
        subtitle: "Secure your child’s future",
        icon: <FaGraduationCap />,
        sections: [
            {
                title: "Rising Education Costs",
                content:
                    "Education costs are increasing faster than inflation.",
                keyPoints: [
                    "School & college expenses",
                    "Foreign education costs",
                    "Inflation impact",
                    "Early planning advantage",
                    "Goal-based investing"
                ]
            },
            {
                title: "Education Investment Options",
                content:
                    "Long-term investment options for education goals.",
                keyPoints: [
                    "Child education mutual funds",
                    "PPF accounts",
                    "SIP planning",
                    "Balanced funds",
                    "Insurance + investment plans"
                ]
            }
        ],
        quiz: {
            question:
                "Best time to start child education planning?",
            options: [
                { id: 1, text: "At college time" },
                { id: 2, text: "After school" },
                { id: 3, text: "As early as possible" },
                { id: 4, text: "After retirement" }
            ],
            correctAnswer: 3
        }
    },

    7: {
        title: "Retirement Planning",
        subtitle: "Build a pension-independent future",
        icon: <FaUsers />,
        sections: [
            {
                title: "Life After Retirement",
                content:
                    "Plan for a comfortable life after service.",
                keyPoints: [
                    "Longevity planning",
                    "Medical expenses",
                    "Lifestyle goals",
                    "Inflation impact",
                    "Independent income sources"
                ]
            },
            {
                title: "Retirement Investment Strategy",
                content:
                    "Create multiple income streams post retirement.",
                keyPoints: [
                    "NPS & pension schemes",
                    "Mutual fund SWP",
                    "Real estate income",
                    "Fixed income options",
                    "Asset allocation strategy"
                ]
            }
        ],
        quiz: {
            question:
                "Which factor is most important in retirement planning?",
            options: [
                { id: 1, text: "High risk returns" },
                { id: 2, text: "Short-term gains" },
                { id: 3, text: "Long-term consistency" },
                { id: 4, text: "Frequent trading" }
            ],
            correctAnswer: 3
        }
    }
};


const benefits = [
    {
        icon: <FaUsers />,
        title: "10,000+ Veterans Network",
        description: "Connect with a vast community of Agniveers and experienced veterans across India"
    },
    {
        icon: <FaGraduationCap />,
        title: "Free Skill Development",
        description: "Access 200+ courses and certifications tailored for defense personnel"
    },
    {
        icon: <FaBriefcase />,
        title: "Job Placement Support",
        description: "85% placement rate with connections to 500+ hiring partners"
    },
    {
        icon: <FaHandshake />,
        title: "Personalized Mentorship",
        description: "One-on-one guidance from successful veterans and industry experts"
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "Live Workshops",
        description: "Weekly sessions on career transition, entrepreneurship, and personal growth"
    },
    {
        icon: <FaNetworkWired />,
        title: "Business Opportunities",
        description: "Connect with veteran entrepreneurs and explore partnership possibilities"
    }
];

const interestsList = [
    "Job Placement",
    "Skill Training",
    "Entrepreneurship",
    "Higher Education",
    "Mentorship",
    "Networking Events",
    "Startup Support",
    "Government Exams",
    "Freelancing",
    "Resume Building"
];

const stats = [
    { number: "10,000+", label: "Active Members" },
    { number: "500+", label: "Expert Mentors" },
    { number: "85%", label: "Placement Rate" },
    { number: "200+", label: "Free Courses" }
];


const tracks = [
    {
        number: '1️⃣',
        title: 'Corporate Readiness Track',
        subtitle: 'From Uniform to Office Leadership.',
        skills: [
            'Workplace behaviour & communication',
            'Email writing',
            'Excel, MIS, CRM basics'
        ],
        icon: <FaUserTie />,
        color: 'var(--growth-color)'
    },
    {
        number: '2️⃣',
        title: 'Security & Ops Track',
        subtitle: 'Command. Control. Coordinate.',
        skills: [
            'Security officer training',
            'CCTV ops & surveillance',
            'Facility management',
            'Crisis response basics'
        ],
        icon: <FaShieldAlt />,
        color: 'var(--protection-color)'
    },
    {
        number: '3️⃣',
        title: 'Tech & Digital Track',
        subtitle: 'Future-ready digital skills.',
        skills: [
            'Basic IT & computer fundamentals',
            'Digital tools (Docs, Sheets, CRM)',
            'Intro to cybersecurity',
            'Data entry + administrative systems'
        ],
        icon: <FaLaptopCode />,
        color: 'var(--skills-color)'
    },
    {
        number: '4️⃣',
        title: 'Communication & English Mastery',
        subtitle: 'Speak with confidence.',
        skills: [
            'Spoken English',
            'Interview communication'
        ],
        icon: <FaLanguage />,
        color: 'var(--gold-color)'
    }
];



const lectures = [
    {
        id: 1,
        number: '1',
        title: 'Introduction to Corporate Security',
        type: 'video',
        duration: '45 min',
        status: 'Completed',
        description: 'Learn the fundamentals of corporate security management and its importance in modern business environments.'
    },
    {
        id: 2,
        number: '2',
        title: 'Risk Assessment Framework',
        type: 'video',
        duration: '60 min',
        status: 'Completed',
        description: 'Understand how to identify, analyze, and evaluate security risks using structured frameworks.'
    },
    {
        id: 3,
        number: '3',
        title: 'Security Operations Planning',
        type: 'video',
        duration: '55 min',
        status: 'In Progress',
        description: 'Learn how to plan and execute security operations in corporate environments using military-grade strategies adapted for civilian use.'
    },
    {
        id: 4,
        number: '4',
        title: 'Crisis Management Protocols',
        type: 'pdf',
        duration: '30 min',
        status: 'Not Started',
        description: 'Study crisis management protocols and emergency response procedures for corporate settings.'
    },
    {
        id: 5,
        number: '5',
        title: 'Physical Security Systems',
        type: 'video',
        duration: '70 min',
        status: 'Not Started',
        description: 'Explore various physical security systems and technologies used in corporate security.'
    }
]

const resources = [
    {
        id: 1,
        icon: 'fas fa-file-pdf',
        title: 'Security Management Handbook',
        type: 'PDF',
        size: '4.2 MB',
        downloadUrl: '#'
    },
    {
        id: 2,
        icon: 'fas fa-file-pdf',
        title: 'Risk Assessment Templates',
        type: 'PDF',
        size: '2.8 MB',
        downloadUrl: '#'
    },
    {
        id: 3,
        icon: 'fas fa-file-excel',
        title: 'Security Audit Checklist',
        type: 'Excel',
        size: '1.5 MB',
        downloadUrl: '#'
    },
    {
        id: 4,
        icon: 'fas fa-file-word',
        title: 'Report Writing Guidelines',
        type: 'Word',
        size: '3.1 MB',
        downloadUrl: '#'
    },
    {
        id: 5,
        icon: 'fas fa-video',
        title: 'Case Study Videos',
        type: 'Videos',
        size: '120 min',
        downloadUrl: '#'
    }
]

const examsData = [
    {
        id: 1,
        title: "UPSC CDS Examination",
        category: "defense",
        description: "Combined Defense Services Examination for entry into Indian Military Academy, Officers Training Academy, Indian Naval Academy, and Air Force Academy.",
        icon: <FaShieldAlt />,
        eligibility: "Graduate (Any Discipline)",
        ageLimit: "19-24 years",
        lastDate: "15 Dec 2024",
        attempts: "Unlimited till age limit",
        notification: "UPSC",
        salary: "₹56,100 - ₹1,77,500",
        badge: "Popular"
    },
    {
        id: 2,
        title: "SSC CGL",
        category: "government",
        description: "Staff Selection Commission Combined Graduate Level examination for various government posts.",
        icon: <FaUniversity />,
        eligibility: "Graduation",
        ageLimit: "18-32 years",
        lastDate: "30 Nov 2024",
        attempts: "Varies by category",
        notification: "SSC",
        salary: "₹35,400 - ₹1,12,400",
        badge: "High Demand"
    },
    {
        id: 3,
        title: "IBPS PO",
        category: "banking",
        description: "Institute of Banking Personnel Selection Probationary Officer examination for public sector banks.",
        icon: <FaBriefcase />,
        eligibility: "Graduation (Any)",
        ageLimit: "20-30 years",
        lastDate: "25 Oct 2024",
        attempts: "6 attempts",
        notification: "IBPS",
        salary: "₹38,000 - ₹63,000",
        badge: "Banking"
    },
    {
        id: 4,
        title: "Indian Army Technical Entry",
        category: "defense",
        description: "10+2 Technical Entry Scheme for Indian Army. Direct entry as Officer after training.",
        icon: <FaShieldAlt />,
        eligibility: "10+2 with PCM",
        ageLimit: "16.5-19.5 years",
        lastDate: "Ongoing",
        attempts: "No limit",
        notification: "Indian Army",
        salary: "₹56,100 - ₹1,77,500",
        badge: "Technical"
    },
    {
        id: 5,
        title: "RRB NTPC",
        category: "psu",
        description: "Railway Recruitment Board Non-Technical Popular Categories examination for various posts in Indian Railways.",
        icon: <FaUniversity />,
        eligibility: "Graduation",
        ageLimit: "18-33 years",
        lastDate: "20 Nov 2024",
        attempts: "No limit",
        notification: "RRB",
        salary: "₹19,900 - ₹63,200",
        badge: "Railways"
    },
    {
        id: 6,
        title: "CAPF (Assistant Commandant)",
        category: "defense",
        description: "Central Armed Police Forces Examination for Assistant Commandant posts in BSF, CRPF, CISF, SSB, ITBP.",
        icon: <FaShieldAlt />,
        eligibility: "Bachelor's Degree",
        ageLimit: "20-25 years",
        lastDate: "10 Dec 2024",
        attempts: "6 attempts",
        notification: "UPSC",
        salary: "₹56,100 - ₹1,77,500",
        badge: "Paramilitary"
    },
    {
        id: 7,
        title: "SBI PO",
        category: "banking",
        description: "State Bank of India Probationary Officer examination for one of India's largest banks.",
        icon: <FaBriefcase />,
        eligibility: "Graduation",
        ageLimit: "21-30 years",
        lastDate: "15 Nov 2024",
        attempts: "No limit",
        notification: "SBI",
        salary: "₹41,960 - ₹63,840",
        badge: "Premium"
    },
    {
        id: 8,
        title: "DRDO Scientist Entry",
        category: "psu",
        description: "Defence Research and Development Organization Scientist entry for engineering graduates.",
        icon: <FaChartLine />,
        eligibility: "BE/B.Tech/M.Sc",
        ageLimit: "28 years",
        lastDate: "25 Oct 2024",
        attempts: "No limit",
        notification: "DRDO",
        salary: "₹56,100 - ₹1,77,500",
        badge: "Research"
    }
];


const examCategories = [
    { id: 'all', label: 'All Exams' },
    { id: 'government', label: 'Government Jobs' },
    { id: 'defense', label: 'Defense' },
    { id: 'psu', label: 'PSU Jobs' },
    { id: 'banking', label: 'Banking' },
    { id: 'ssc', label: 'SSC' },
    { id: 'upsc', label: 'UPSC' },
    { id: 'state-level', label: 'State Level' }
];


const benefitsOf = [
    {
        icon: <FaUserTie />,
        title: "Personalized Career Roadmap",
        description: "Get a customized plan based on your skills, experience, and career aspirations"
    },
    {
        icon: <FaGraduationCap />,
        title: "Skill Development Programs",
        description: "Access to industry-relevant training and certification courses"
    },
    {
        icon: <FaBriefcase />,
        title: "Job Placement Assistance",
        description: "Direct connections with 500+ hiring partners across India"
    },
    {
        icon: <FaHandshake />,
        title: "Mentorship Network",
        description: "Guidance from successful veterans and industry experts"
    },
    {
        icon: <FaChartLine />,
        title: "Career Growth Tracking",
        description: "Monitor your progress with our advanced analytics dashboard"
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Salary Negotiation Support",
        description: "Expert advice on compensation packages and benefits"
    },
    {
        icon: <FaUsers />,
        title: "Community Support",
        description: "Join a network of 10,000+ Agniveers and veterans"
    },
    {
        icon: <FaAward />,
        title: "Certification & Recognition",
        description: "Industry-recognized certificates for your military skills"
    }
];

const successStories = [
    {
        quote: "After 15 years in the Army, I was uncertain about my civilian career. This platform gave me a clear roadmap and within 3 months, I landed a project management role!",
        name: "Major Rajesh Kumar",
        role: "Now: Project Manager at Tata Group",
        initial: "RK"
    },
    {
        quote: "The skill mapping and training programs helped me transition from Navy logistics to supply chain management. The mentorship was invaluable!",
        name: "Commander Priya Sharma",
        role: "Now: Supply Chain Lead at Amazon",
        initial: "PS"
    },
    {
        quote: "As an Agniveer, I needed guidance for post-service career. The personalized plan and job connections helped me secure a cybersecurity position.",
        name: "Vikram Singh",
        role: "Now: Cybersecurity Analyst at Wipro",
        initial: "VS"
    }
];


const tabData = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'Profile', label: 'My Profile' },
    { id: 'Enrolled Courses', label: 'Enrolled Courses' },
    { id: 'Wishlist', label: 'Wishlist' },
    { id: 'My Quiz Attempts', label: 'My Quiz Attempts' },
    { id: 'Assignments', label: 'Assignments' },
    { id: 'todays-orders', label: "Today's Orders" },
    { id: 'exams', label: 'Exams Targeting' },
    { id: 'roadmap', label: 'Syllabus Roadmap' },
    { id: 'mock-tests', label: 'Mock Tests' },
    { id: 'weak-zones', label: 'Weak Zones' },
    { id: 'skill-courses', label: 'Skill Courses' },
];

const Exams = [
    {
        name: 'SSC GD Constable',
        eligibility: '10th Pass',
        difficulty: 'Easy–Moderate',
        status: '48% Prepared',
        buttonText: 'View Syllabus'
    },
    {
        name: 'State Police – Maharashtra & Rajasthan',
        eligibility: '12th Pass',
        difficulty: 'Moderate',
        status: '31% Prepared',
        buttonText: 'View Pattern'
    },
    {
        name: 'RRB Group D',
        eligibility: '10th Pass',
        difficulty: 'Easy',
        status: '60% Prepared',
        buttonText: 'Practice Mock'
    }
]


const roadMap = [
    {
        title: 'PHASE 1 – FOUNDATION',
        status: 'Completed 70%',
        items: ['Reasoning basics', 'Arithmetic basics', 'Simple grammar', 'Static GK']
    },
    {
        title: 'PHASE 2 – APPLICATION',
        status: 'Completed 40%',
        items: ['Mixed problem sets', 'Topic-wise mock tests', 'Speed improvement drills']
    },
    {
        title: 'PHASE 3 – MASTER',
        status: 'Pending',
        items: ['Full-length mocks', 'Exam simulation', 'Weak-zone elimination']
    }
]


const skillCourses = [
    {
        title: 'English Speaking',
        level: 'Beginner → Pro',
        description: 'Master communication skills for interviews and workplace'
    },
    {
        title: 'Computer Skills',
        level: 'MS Office + Email Writing',
        description: 'Essential digital skills for modern workplaces'
    },
    {
        title: 'Corporate Etiquette',
        level: 'Veteran Mentors',
        description: 'Learn workplace norms and professional behavior'
    }
]

const Courses = [
    {
        title: 'SSC GD Complete Batch 2024',
        progress: 65,
        lessons: '32/50 Lessons',
        instructor: 'Capt. Rajesh Sharma',
        duration: '3 Months',
        status: 'Active'
    },
    {
        title: 'Reasoning Masterclass',
        progress: 100,
        lessons: '40/40 Lessons',
        instructor: 'Maj. Priya Singh',
        duration: '2 Months',
        status: 'Completed'
    },
    {
        title: 'Mathematics Foundation',
        progress: 45,
        lessons: '18/40 Lessons',
        instructor: 'Col. Amit Kumar',
        duration: '2.5 Months',
        status: 'Active'
    },
    {
        title: 'English for Competitive Exams',
        progress: 30,
        lessons: '12/40 Lessons',
        instructor: 'Lt. Neha Gupta',
        duration: '2 Months',
        status: 'Active'
    },
    {
        title: 'Static GK Crash Course',
        progress: 0,
        lessons: '0/30 Lessons',
        instructor: 'Dr. Anil Verma',
        duration: '1 Month',
        status: 'Upcoming'
    },
    {
        title: 'Current Affairs Monthly',
        progress: 100,
        lessons: '12/12 Lessons',
        instructor: 'News Analysis Team',
        duration: 'Monthly',
        status: 'Completed'
    }
]


const wishlist = [
    {
        title: 'SSC GD 2024 Ultimate Batch',
        category: 'Full Course',
        price: '₹9,999',
        discount: '₹12,999',
        rating: 4.8,
        students: '2.5k',
        deadline: 'Offer ends in 2 days',
        priority: true
    },
    {
        title: 'Reasoning Super 30 Sessions',
        category: 'Crash Course',
        price: '₹2,499',
        discount: '₹3,999',
        rating: 4.9,
        students: '1.2k',
        deadline: 'Limited seats',
        priority: true
    },
    {
        title: 'Current Affairs Yearly Package',
        category: 'Subscription',
        price: '₹1,999',
        discount: '₹2,999',
        rating: 4.7,
        students: '3.4k',
        deadline: 'Monthly updates',
        priority: false
    },
    {
        title: 'Mathematics 5000+ Questions',
        category: 'Practice Book',
        price: '₹1,499',
        discount: '₹2,499',
        rating: 4.6,
        students: '890',
        deadline: 'Digital access',
        priority: false
    },
    {
        title: 'Interview Preparation Guide',
        category: 'Skill Course',
        price: '₹3,999',
        discount: '₹4,999',
        rating: 4.8,
        students: '560',
        deadline: 'Personal mentorship',
        priority: true
    },
    {
        title: 'Mock Test Series - Pro',
        category: 'Test Series',
        price: '₹2,999',
        discount: '₹3,999',
        rating: 4.5,
        students: '1.8k',
        deadline: '20 tests included',
        priority: false
    }
]


const Assignments = [
    {
        title: 'Percentage & Ratio Problems',
        course: 'Mathematics Foundation',
        dueDate: 'Tomorrow, 11:59 PM',
        status: 'pending',
        points: 25,
        difficulty: 'Medium',
        estimatedTime: '45 mins'
    },
    {
        title: 'Indian Constitution MCQ Set',
        course: 'General Knowledge',
        dueDate: 'Today, 6:00 PM',
        status: 'overdue',
        points: 20,
        difficulty: 'Easy',
        estimatedTime: '30 mins'
    },
    {
        title: 'Sentence Correction Exercises',
        course: 'English Grammar',
        dueDate: 'In 3 days',
        status: 'pending',
        points: 30,
        difficulty: 'Hard',
        estimatedTime: '60 mins'
    },
    {
        title: 'Reasoning Puzzle Solving',
        course: 'Logical Reasoning',
        dueDate: 'Submitted',
        status: 'submitted',
        points: 35,
        difficulty: 'Medium',
        grade: 'A-',
        submittedOn: 'Yesterday'
    },
    {
        title: 'Current Affairs Essay',
        course: 'GK & Current Affairs',
        dueDate: 'Graded',
        status: 'graded',
        points: 40,
        difficulty: 'Hard',
        grade: 'B+',
        feedback: 'Good analysis, needs more examples'
    },
    {
        title: 'Data Interpretation Set',
        course: 'Quantitative Aptitude',
        dueDate: 'In 5 days',
        status: 'pending',
        points: 30,
        difficulty: 'Medium',
        estimatedTime: '50 mins'
    }
]


const Quiz = [
    {
        name: 'Reasoning: Analogy & Classification',
        date: 'Today, 10:30 AM',
        score: '85%',
        time: '12:30 mins',
        rank: 'Top 12%',
        questions: '20/20'
    },
    {
        name: 'Mathematics: Percentage & Profit',
        date: 'Yesterday, 3:45 PM',
        score: '78%',
        time: '18:45 mins',
        rank: 'Top 25%',
        questions: '15/20'
    },
    {
        name: 'General Knowledge: Polity',
        date: '2 days ago, 9:15 AM',
        score: '92%',
        time: '10:20 mins',
        rank: 'Top 8%',
        questions: '20/20'
    },
    {
        name: 'English: Spotting Errors',
        date: '3 days ago, 8:00 PM',
        score: '65%',
        time: '25:10 mins',
        rank: 'Top 40%',
        questions: '13/20'
    },
    {
        name: 'Current Affairs: March 2024',
        date: '1 week ago, 11:00 AM',
        score: '88%',
        time: '15:30 mins',
        rank: 'Top 15%',
        questions: '18/20'
    },
    {
        name: 'Full Mock Test #4',
        date: '2 weeks ago, 2:00 PM',
        score: '74%',
        time: '85:00 mins',
        rank: 'Top 20%',
        questions: '74/100'
    }
]

const insightData = [
    {
        title: "Strongest Subject",
        value: "General Knowledge",
        extra: "Average Score: 86%",
    },
    {
        title: "Needs Improvement",
        value: "English Grammar",
        extra: "Average Score: 68%",
    },
    {
        title: "Best Time of Day",
        value: "Morning (8AM-11AM)",
        extra: "Average Score: 81%",
    },
    {
        title: "Consistency Score",
        value: "Good",
        extra: "±8% variation",
    },
];


const assignmentStats = [
    {
        label: "PENDING",
        value: 8,
    },
    {
        label: "SUBMITTED",
        value: 24,
    },
    {
        label: "OVERDUE",
        value: 2,
    },
    {
        label: "AVG. GRADE",
        value: "B+",
    },
];


const mockTest = [
    {
        title: 'Full Mock Test #5',
        details: '100Q / 90 min',
        score: '62%',
        rank: 'Top 18%'
    },
    {
        title: 'Topic Test – Simplification',
        details: '20Q / 30 min',
        score: '75%',
        rank: 'Top 25%'
    },
    {
        title: 'Topic Test – Indian Constitution',
        details: '20Q / 30 min',
        score: '58%',
        rank: 'Top 30%'
    }
]


const simplifiedTabs = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <FaTachometerAlt />
    },
    {
        id: 'Profile',
        label: 'My Profile',
        icon: <FaUser />
    },
    {
        id: 'Enrolled Courses',
        label: 'Courses',
        icon: <FaBookOpen />
    },
    {
        id: 'My Quiz Attempts',
        label: 'My Quiz Attempts',
        icon: <FaClipboardList />
    },
    {
        id: 'Notes',
        label: 'Notes',
        icon: <FaTasks />
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: <FaCog />
    },
    {
        id: 'subscription',
        label: 'My Subscription',
        icon: <FaCreditCard />
    },
    {
        id: 'logout',
        label: 'Logout',
        icon: <FaSignOutAlt />
    },

];


const notesData = [
    {
        id: 1,
        category: "course: Fundamentals",
        title: "Write a the 5",
        preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        pages: "80 pages",
        date: "2 days ago",
        actions: ["download"]
    },
    {
        id: 2,
        category: "course: Advanced",
        title: "Mathematics Formulas",
        preview:
            "Important formulas and theorems for calculus and algebra with solved examples.",
        pages: "45 pages",
        date: "1 week ago",
        actions: ["download"]
    },
    {
        id: 3,
        category: "course: History",
        title: "World War Timeline",
        preview:
            "Detailed timeline of major events from 1914 to 1945 with important battles.",
        pages: "32 pages",
        date: "3 days ago",
        actions: ["download"]
    },
    {
        id: 4,
        category: "course: Science",
        title: "Chemistry Reactions",
        preview:
            "Organic and inorganic chemical reactions with mechanisms and examples.",
        pages: "68 pages",
        date: "5 days ago",
        actions: ["download"]
    },
    {
        id: 5,
        category: "course: Literature",
        title: "Poetry Analysis",
        preview:
            "Analysis of major poems from different eras with critical interpretations.",
        pages: "28 pages",
        date: "Yesterday",
        actions: ["download"]
    }
];

const notesStats = [
    { label: "Total Notes", value: 125 },
    { label: "This Week", value: 8 },
    { label: "Subjects", value: 12 }
];


const offerings = [
    {
        iconClass: 'fas fa-briefcase',
        title: 'Career Transition',
        text: 'Access 500+ central & state govt exams, AI-powered career mapping, VR interview prep, CV building, soft skills & English training.',
        tagText: 'Explore Exams',
        buttonText: 'Explore Exams',
        link: '/CareerTransition', // Replace with actual link

    },
    {
        iconClass: 'fas fa-shield-alt',
        title: 'Grow Your Sewa Nidhi',
        text: 'Smart investment guidance, insurance, loans, mutual funds, entrepreneurship support—maximize your ₹8-10 lakh package.',
        tagText: 'Plan Your Finances',
        buttonText: 'Plan Your Finances',
        link: '/FinancialGuidance', // Replace with actual link
    },
    {
        iconClass: 'fas fa-users',
        title: 'Connect & Thrive',
        text: 'Join 10,000+ veterans, access global mentors, peer support, exclusive job boards, and industry networking events.',
        tagText: 'Join Community',
        buttonText: 'Join Community',
        link: '/CommunityPage', // Replace with actual link
    },
];


const workflowSteps = [
    {
        stepNumber: '01',
        title: 'Profile Scan',
        description: 'Tell us your education, goals, and preferred locations — takes just 30 seconds.',
        iconClass: 'fas fa-user-check',
    },
    {
        stepNumber: '02',
        title: 'Mission Assignment',
        description: 'We recommend your best-fit exams and essential financial actions.',
        iconClass: 'fas fa-tasks',
    },
    {
        stepNumber: '03',
        title: 'Training Plan',
        description: 'Daily tasks, lessons, and practice tests — like your PT schedule.',
        iconClass: 'fas fa-calendar-alt',
    },
    {
        stepNumber: '04',
        title: 'Government Exam Prep',
        description: 'Clean, structured, syllabus-wise exam preparation.',
        iconClass: 'fas fa-graduation-cap',
    },
    {
        stepNumber: '05',
        title: 'Interview & CV',
        description: 'Convert service experience into corporate language.',
        iconClass: 'fas fa-microphone-alt',
    },
    {
        stepNumber: '06',
        title: 'Prosperity Activation',
        description: 'Build savings, invest smartly, protect your financial future.',
        iconClass: 'fas fa-chart-line',
    },
    {
        stepNumber: '07',
        title: 'Victory',
        description: "Get a job. Build your life. Secure your family's future.",
        iconClass: 'fas fa-trophy',
        isVictory: true,
    },
];


const slidesData = [
    {
        id: 1,
        title: "Personalized Dashboard",
        description:
            ' Your customized mission control center with real-time progress tracking, personalized recommendations, and smart notifications tailored to your career goals.',
        ctaText: "Start Your Journey",
        bgClass: "slide-1-bg",
    },
    {
        id: 2,
        title: "Live Exam Calendar",
        description:
            "Track all government exam dates, application deadlines, and preparation timeline with automated reminders and smart scheduling to optimize your study plan.",
        ctaText: "See Platform Demo",
        bgClass: "slide-2-bg",
    },
    {
        id: 3,
        title: "Financial Portfolio Tracker",
        description:
            "Monitor your Sewa Nidhi investments, savings, and financial goals with expert guidance on smart allocation and long-term wealth building strategies.",
        ctaText: "See Platform Demo",
        bgClass: "slide-3-bg",
    },
    {
        id: 4,
        title: "Job Match Suggestions",
        description:
            "AI-powered job recommendations based on your profile and skills, with personalized match scores and direct application links to top employers.",
        ctaText: "See Platform Demo",
        bgClass: "slide-4-bg",
    },
];

const featuresData = [
    {
        imageSrc: '/VEER/assets/img/icons/exam-brief.png',
        title: 'Clean Exam Briefs',
        subtitle: 'Only what matters. Nothing more.',
    },
    {
        imageSrc: '/VEER/assets/img/icons/learning.png',
        title: 'Complete Learning System',
        subtitle: 'Videos, quizzes, mock tests.',
    },
    {
        imageSrc: '/VEER/assets/img/icons/resume.png',
        title: 'CV Builder',
        subtitle: 'Convert military experience to civilian roles.',
    },
    {
        imageSrc: '/VEER/assets/img/icons/interview.png',
        title: 'Interview Simulator',
        subtitle: 'AI-powered + human mentoring.',
    },
    {
        imageSrc: '/VEER/assets/img/icons/business-plan.png',
        title: 'Financial Planner',
        subtitle: 'Secure your Sewa Nidhi.',
    },
    {
        imageSrc: '/VEER/assets/img/icons/ved.png',
        title: 'Veteran-Led, Discipline-Driven',
        subtitle: 'By veterans, for veterans.',
    },
];


const ctaButtons = [
    {
        text: 'Start My Mission',
        className: 'fill-btn',
        icon: 'fas fa-rocket',
        link: '/StartMissionPage', // Replace with actual URL
        // onClick: onStartMissionClick,
    },
    {
        text: 'View Exams',
        className: 'border-btn',
        icon: 'fas fa-search',
        link: '/ViewExamsPage', // Replace with actual URL
        // onClick: onViewExamsClick,
    },
    {
        text: 'Financial Command',
        className: 'border-btn',
        icon: 'fas fa-chart-line',
        link: '/FinancialCommandPage', // Replace with actual URL
        // onClick: onFinancialCommandClick,
    },
];



export {
    benefits, interestsList, stats, tracks, lectures, resources, examsData, examCategories, successStories, benefitsOf,
    tabData, Exams, roadMap, skillCourses, Courses, wishlist, Assignments, Quiz, insightData, assignmentStats, mockTest, simplifiedTabs,
    notesData, notesStats, offerings, workflowSteps, slidesData, featuresData , ctaButtons
};