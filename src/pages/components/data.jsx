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
    FaGraduationCap

} from 'react-icons/fa';


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





export { benefits, interestsList, stats, tracks, lectures, resources };