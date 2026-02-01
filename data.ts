import { Job, Education, Skill } from './types';

export const RESUME_SUMMARY = `
Ty is a public sector healthcare leader with over a decade of experience in strategic planning, analytics, and policy analysis. He excels at leading cross-functional teams to deliver data-driven, AI-forward technical assistance and innovative solutions for government health agencies. Ty earned a MPP from Harvard University and a BA in Political Science with Latin and University Honors from American University. He also completed a Public Policy & International Affairs (PPIA) Fellowship at the University of California Berkeley.
`;

export const CONTACT_INFO = {
  name: "Ty Tillett",
  title: "Health Policy, Strategy, & Analytics | Deloitte",
  location: "Arlington, Virginia, United States",
  email: "tytillett@gmail.com",
  linkedin: "www.linkedin.com/in/tytillett"
};

export const EXPERIENCE: Job[] = [
  {
    id: 'deloitte-sm',
    company: 'Deloitte',
    title: 'Senior Manager',
    period: 'May 2022 - Present',
    location: 'Washington DC-Baltimore Area',
    description: [
      "Serve as the National Policy Director for Deloitte’s State & Local Health, Human Services, and Labor practice, analyzing federal policy to help clients understand and model the impact of policy on programs, operations, and populations.",
      "Led day-to-day strategy and operations for a public-private partnership accelerating national adoption of Alternative Payment Models (APMs) across Medicare, Medicaid, and commercial lines.",
      "Directed a 10-person team, engaging 25 commercial health insurance payers and state Medicaid agencies within a key government primary care innovation model.",
      "Established and scaled Deloitte's CMS CCIIO Client Business Unit, identifying high-value growth opportunities.",
      "Functioned as COO for Deloitte's Government and Public Sector AI & Data Strategy Market Offering."
    ]
  },
  {
    id: 'deloitte-mgr',
    company: 'Deloitte',
    title: 'Manager',
    period: 'August 2018 - May 2022',
    location: 'Washington DC-Baltimore Area',
    description: [
      "Led a 10-person team to engage and align health insurance payers in 25 regions across 2 primary care innovation models.",
      "Directed a 6-person project team in delivering comprehensive financial, actuarial, and compliance support for the review of 4 non-profit health insurance payers.",
      "Led a 6-person team of actuaries and data scientists in developing novel episodes of care and target pricing models."
    ]
  },
  {
    id: 'deloitte-sc',
    company: 'Deloitte',
    title: 'Senior Consultant',
    period: 'August 2016 - August 2018',
    location: 'Washington DC-Baltimore Area',
    description: [
      "Directed a 3-person team in developing advanced Tableau-based data visualizations and analyses for a federal health agency.",
      "Engineered a sophisticated financial modeling tool to empower developing countries in strategically costing public policy reforms.",
      "Oversaw the review and analysis of financial guarantees and M&A activities for a federal government healthcare innovation model.",
      "Guided a 5-person team in the comprehensive development of a strategic 5-year 'Future State' transformation roadmap."
    ]
  },
  {
    id: 'deloitte-cons',
    company: 'Deloitte',
    title: 'Consultant',
    period: 'August 2014 - August 2016',
    location: 'Washington DC-Baltimore Area',
    description: [
      "As Deputy Project Manager for a $12M project with 70+ resources, drove a 31% reduction in PMO spend.",
      "Spearheaded a critical financial and operational evaluation of a non-profit regional health plan ceasing operations.",
      "Facilitated high-level stakeholder engagement sessions within a major federal government agency.",
      "Architected and executed a comprehensive strategic communications strategy for a $16 billion law."
    ]
  },
  {
    id: 'hhs-grad',
    company: 'US Department of Health and Human Services',
    title: 'Graduate Assistant',
    period: 'October 2013 - April 2014',
    location: 'Boston, Massachusetts',
    description: [
      "Authored Medicaid and Health Insurance Exchange enrollment reports for the Regional Director.",
      "Provided research and analysis on the Affordable Care Act (ACA).",
      "Tracked, recorded, and briefed Regional Office staff on federal regulations impacting the ACA."
    ]
  },
  {
    id: 'deloitte-summer',
    company: 'Deloitte',
    title: 'Summer Associate',
    period: 'May 2013 - August 2013',
    location: 'Washington DC-Baltimore Area',
    description: [
      "Developed a current state analysis of the progress of performance measurement development among 10 shared services teams.",
      "Produced a heat map displaying performance measurement progress.",
      "Assessed the global mobile health (mHealth) landscape."
    ]
  },
  {
    id: 'aarp',
    company: 'AARP',
    title: 'Health Education & Outreach Intern',
    period: 'May 2012 - July 2012',
    location: 'Washington DC',
    description: [
      "Ensured the accuracy and integrity of the online AARP Health Law Answers Tool.",
      "Prepared internal and external communications and monitored changes to the ACA.",
      "Drafted and edited deliverables concerning modifications to the law."
    ]
  },
  {
    id: 'ccps',
    company: 'The Center for Congressional and Presidential Studies',
    title: 'Research Assistant',
    period: 'August 2009 - May 2012',
    location: 'Washington D.C. Metro Area',
    description: [
      "Compiled data on political activities and controversies including lobbying reform, ethics, and elections.",
      "Assisted researchers from across the world through database creation."
    ]
  },
  // Older internships condensed for brevity in main view but available in data
  {
      id: 'house-reps',
      company: 'U.S. House of Representatives',
      title: 'Health Policy Intern',
      period: 'September 2011 - December 2011',
      location: 'Office of Congresswoman Allyson Schwartz (PA-13)',
      description: [
          "Authored detailed policy memos on critical health topics including the prescription drug shortage.",
          "Drafted responses and replied to correspondence from constituents."
      ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'harvard',
    school: 'Harvard University',
    degree: 'Master in Public Policy (MPP)',
    details: 'Social & Urban Policy, Health Policy',
    year: '2012 - 2014'
  },
  {
    id: 'american',
    school: 'American University',
    degree: 'B.A., Political Science',
    details: 'with honors, cum laude, Minor in Communication',
    year: '2008 - 2012'
  },
  {
    id: 'berkeley',
    school: 'University of California, Berkeley',
    degree: 'Public Policy and International Affairs (PPIA) Fellowship',
    details: 'Fellowship Program',
    year: '2011'
  }
];

export const SKILLS: Skill[] = [
  { name: "Innovation", category: "Core", level: 95 },
  { name: "Program Management", category: "Core", level: 90 },
  { name: "Stakeholder Engagement", category: "Core", level: 92 },
  { name: "Generative AI Leader", category: "Certification", level: 100 },
  { name: "Cloud Digital Leader", category: "Certification", level: 100 },
  { name: "Lean Six Sigma Yellow Belt", category: "Certification", level: 100 },
  { name: "Policy Analysis", category: "Technical", level: 88 },
  { name: "Strategic Planning", category: "Core", level: 94 },
  { name: "Data Analytics", category: "Technical", level: 85 },
];

// Constructing a prompt context string for the AI
export const RESUME_CONTEXT = `
You are an AI assistant for Ty Tillett. Answer questions based on the following resume information. Be professional, concise, and helpful.

**Profile:**
Name: ${CONTACT_INFO.name}
Title: ${CONTACT_INFO.title}
Location: ${CONTACT_INFO.location}
Email: ${CONTACT_INFO.email}
LinkedIn: ${CONTACT_INFO.linkedin}

**Summary:**
${RESUME_SUMMARY}

**Skills:**
${SKILLS.map(s => s.name).join(', ')}

**Experience:**
${EXPERIENCE.map(job => `
- Role: ${job.title} at ${job.company} (${job.period})
  Location: ${job.location}
  Details: ${job.description.join(' ')}
`).join('\n')}

**Education:**
${EDUCATION.map(edu => `- ${edu.degree} from ${edu.school} (${edu.year || ''}) ${edu.details || ''}`).join('\n')}
`;
