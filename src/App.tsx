import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Product Manager with 3+ years building and scaling GenAI, AI/ML, and enterprise SaaS products across Goldman Sachs and Charles Schwab environments. Owns the full product lifecycle from discovery (Voice of Customer, user research, feasibility, build vs. buy) and PRD writing to north star metric definition, backlog prioritization, sprint execution, and post-launch experimentation and KPI reviews. Fluent across SQL, Python, APIs, data pipelines, Kafka, and cloud platforms, translating complex systems into defensible product decisions and measurable outcomes, including $13M value delivered and 53% error reduction.";

  const experience = [
    {
      company: "Apexon · Client: Goldman Sachs, NYC",
      role: "Lead AI Product Manager",
      location: "New York, NY",
      dates: "May 2025 – Aug 2025",
      highlights: [
        "Defined product vision and PRDs for a GenAI Accelerator, translating recruiter and operations discovery insights into measurable requirements aligned to a north star metric, delivering $13M in business value.",
        "Established KPI framework and experimentation cadence, defining adoption, cycle-time, SLA compliance, and cost guardrail metrics; implemented weekly metric reviews and post-launch analysis that validated 23% faster processing and 35% cost reduction.",
        "Prioritized 15+ enterprise AI use cases using structured scoring (RICE-style evaluation, feasibility, risk, ROI impact) to sequence MVP vs. Phase 2 roadmap investments, reducing recruiter overhead by 40% while aligning engineering capacity with highest-value outcomes."
      ],
      highlightsLink: "https://drive.google.com/file/d/1OSWfjuPdVe-TPXCR1RD78UaQIXrSjb6N/view",
      certificateLink: "https://drive.google.com/file/d/1OSWfjuPdVe-TPXCR1RD78UaQIXrSjb6N/view"
    },
    {
      company: "Spim Innovations",
      role: "Technical Product Consultant",
      location: "Bangalore, India",
      dates: "Jul 2024 – Aug 2024",
      highlights: [
        "Led end-to-end product delivery for a Metaverse discovery platform, defining MVP scope, writing product specifications and acceptance criteria, and completing feasibility assessments to ship in 3 weeks and onboard 3,000+ users.",
        "Analyzed 500+ environment and user interaction flows to surface adoption blockers, prioritized fixes into a sprint-ready backlog, and drove iterative releases through retrospectives, improving feature adoption by 15% and increasing delivery throughput by 25%."
      ]
    },
    {
      company: "Mphasis · Client: Charles Schwab",
      role: "Senior Software Engineer",
      location: "Bangalore, India",
      dates: "Oct 2023 – Jul 2024",
      highlights: [
        "Shipped onboarding analytics and authentication enhancements for Charles Schwab advisor platforms supporting 10,000+ users, coordinating delivery across Agile and Waterfall workstreams and releasing 5% ahead of schedule against committed milestones.",
        "Modernized Kafka-based event monitoring and alerting to improve platform reliability by 15%, and instituted post-go-live KPI tracking (SLA compliance, event latency, incident rate, and onboarding completion) to validate continuous value realization after release."
      ]
    },
    {
      company: "Mphasis · Client: Charles Schwab",
      role: "Software Engineer",
      location: "Bangalore, India",
      dates: "Aug 2021 – Oct 2023",
      highlights: [
        "Cut onboarding errors by 53% across Charles Schwab advisory platforms by leading requirements workshops, running API design reviews, and translating voice of customer inputs into clear user stories, acceptance criteria, and release-ready specifications.",
        "Reduced churn by 15% and saved 20+ hours by resolving 180+ defects in 2 months through disciplined backlog governance and root-cause defect management."
      ]
    }
  ];

  const projects = [
    {
      title: "AI Interview Intelligence Platform",
      subtitle: "NYU Capstone Project · Go to Market Strategy for AI Recruitment Tool",
      category: "GenAI Product",
      introduction: "Developed a comprehensive Go-to-Market strategy for an AI-powered recruitment and interview intelligence platform. Conducted extensive market research, competitive analysis, and customer discovery to define market entry strategy, positioning, and launch roadmap for enterprise AI recruitment solutions.",
      problem: "Traditional interview and recruitment processes lack data-driven insights and consistency, leading to suboptimal hiring decisions and candidate experiences. AI recruitment tools face adoption barriers and unclear go-to-market positioning.",
      objective: "Create a defensible Go-to-Market strategy for an AI recruitment platform that enables successful market entry, clear value proposition, and scalable adoption across enterprises.",
      methodology: [
        "Authored product vision and Go-to-Market strategy document.",
        "Benchmarked 40+ competitors to identify market gaps and opportunities.",
        "Defined target segments, positioning, and pricing strategy.",
        "Developed phased launch roadmap and success metrics."
      ],
      results: [
        "Identified key market differentiators and positioning strategy.",
        "Established clear market entry plan and phased roadmap.",
        "Created actionable GTM playbook with technical and commercial specifications."
      ],
      conclusion: "Successfully demonstrated end-to-end product management skills from market research to Go-to-Market strategy for an AI-powered enterprise recruitment solution.",
      link: "https://drive.google.com/file/d/1RVhSoUjai1VkC77Ga04F29NZJ1Q8YZAE/view?usp=sharing"
    },
    {
      title: "Design Strategy",
      subtitle: "Design Strategy Project",
      category: "Design Strategy",
      introduction:
        "Design strategy project addressing the Sandwich Generation problem — adults aged 40–60 doing double duty caring for young and adult children as well as aging parents. The project explores product insights, user research, and strategic decision modeling to create solutions that help multigenerational caregivers survive and thrive.",
      problem:
        "53 million Americans provide unpaid care to family members, often balancing full-time jobs and caregiving responsibilities. This invisible labor leads to emotional burnout, financial stress from out-of-pocket expenses, career disruptions, and family tensions due to unshared caregiving load. Existing wellness apps don't offer tools for shared caregiving, mental health support, or recognition.",
      objective:
        "Build a data-driven, user-centered approach that converts raw caregiving pain points into actionable product concepts, visual analytics, and strategic recommendations — bridging family life and workplace wellness in a $100B+ market.",
      methodology: [
        "Conducted primary user interviews with sandwich-generation caregivers to validate assumptions against real behaviors and preferences.",
        "Applied design strategy frameworks: opportunity hypothesis generation, \"What We Thought vs. What We Learnt\" insight mapping, and cliché auditing.",
        "Built product concepts (CareXP, Time Trader) with user journeys, flywheels, and How-to-Win strategies.",
        "Developed TAM/SAM/SOM market sizing, financial projections, and Business Model Canvas for each opportunity area."
      ],
      results: [
        "Generated actionable product insights from primary research — community-driven emotional support preferred over clinical therapy; financial rewards appealing regardless of income level.",
        "Demonstrated a practical design strategy workflow from problem framing through opportunity hypothesis, user journey mapping, flywheel design, and go-to-market strategy.",
        "Presented two distinct product concepts with market analysis (CareXP: $60B TAM, Time Trader: $1B TAM), subscription pricing models, and 3-year financial projections."
      ],
      conclusion:
        "The project demonstrates the integration of design strategy techniques with product thinking to generate valuable business insights — transforming the caregiving challenge into two viable platform concepts that address emotional burnout, family coordination, and workplace wellness for the sandwich generation.",
      link: "https://drive.google.com/file/d/1ZSCh9qU2NNUbuHnmkvnP5xEeFVjQot09/view?usp=sharing"
    },
    {
      title: "Strategic Risk & Resource Modeling",
      subtitle: "NYU Stern Analytics Project",
      category: "Data Analytics & Strategy",
      introduction: "Applied advanced analytics and simulation techniques to optimize budget allocation decisions for an $80M portfolio.",
      problem: "Complex budget allocation decisions across multiple initiatives require rigorous analytical approach to optimize resource distribution and manage risk.",
      objective: "Optimize $80M budget allocation using statistical modeling and simulation to inform prioritization trade-offs.",
      methodology: [
        "Ran 1,000-trial Monte Carlo simulations for risk assessment.",
        "Used confidence intervals to quantify uncertainty ranges.",
        "Applied RICE-based prioritization framework.",
        "Developed scenario models for different allocation strategies."
      ],
      results: [
        "Provided data-driven recommendations for budget allocation.",
        "Quantified risk exposure across different scenarios.",
        "Enabled informed trade-off decisions using statistical evidence."
      ],
      conclusion: "Showcased ability to apply advanced analytics and statistical methods to strategic business decisions."
    },
    {
      title: "Ashwa Racing - FSAE Program Lead",
      subtitle: "120-member Racing Team",
      category: "Program Management",
      introduction: "Directed roadmap execution and cross-team dependency management for a 120-member Formula SAE racing program, overseeing multiple engineering workstreams.",
      problem: "Large-scale engineering programs require strong governance and coordination across multiple teams to deliver complex systems on time.",
      objective: "Strengthen delivery governance and reduce execution risk across a 120-member program while improving operational stability.",
      methodology: [
        "Established roadmap execution framework across all teams.",
        "Managed cross-team dependencies and critical path items.",
        "Implemented delivery governance processes.",
        "Coordinated resource allocation and timeline management."
      ],
      results: [
        "Reduced execution risk through improved governance.",
        "Enhanced operational stability across all workstreams.",
        "Successfully delivered complex engineering program."
      ],
      conclusion: "Demonstrated program management expertise at scale, coordinating large teams toward complex technical deliverables."

    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'PM Execution',
      skills: ['Jira', 'Confluence', 'Azure DevOps', 'Planview', 'Sprint Planning', 'Backlog Grooming', 'User Stories', 'Acceptance Criteria', 'PRD Writing', 'Launch Readiness', 'Figma', 'Miro', 'Productboard', 'Notion', 'Linear']
    },
    {
      icon: TrendingUp,
      title: 'Product Strategy',
      skills: ['Use Case Intake', 'Feasibility Assessment', 'Scope Definition', 'Prioritization', 'Risk Management', 'Stakeholder Management', 'North Star Metric', 'RICE/ICE Framework', 'Kano Model', 'Jobs-to-be-Done', 'Opportunity Solution Trees', 'OKR Alignment']
    },
    {
      icon: Users,
      title: 'Discovery & Research',
      skills: ['Requirements Elicitation', 'Voice of Customer', 'Market Research', 'Competitive Analysis', 'User Interviews', 'Usability Testing', 'Persona Building', 'Journey Mapping', 'Design Sprints']
    },
    {
      icon: Lightbulb,
      title: 'Technical & AI/ML',
      skills: ['Python', 'SQL', 'REST APIs', 'Microservices', 'Kafka', 'GCP', 'Azure Cognitive Services', 'Vector Databases', 'Generative AI', 'LLM Scoping', 'Model Deployment', 'Ethical AI Governance', 'Experimentation Platforms', 'Tableau', 'Power BI', 'A/B Testing', 'Monte Carlo Simulation']
    }
  ];

  const education = [
    {
      school: "New York University",
      degree: "M.S., Management of Technology",
      location: "New York, NY",
      dates: "Expected 2026",
      details: "Relevant Coursework: Decision Model Analytics, Statistics for Data Analytics, Financial Analysis for Tech Managers, Operations Management"
    },
    {
      school: "RV College of Engineering",
      degree: "B.E., Telecommunication Engineering",
      location: "Bengaluru, India",
      dates: "Aug 2017 – Aug 2021",
      details: "Relevant Coursework: Neural Networks, Data Structures & Algorithms, Java, Linear Integrated Circuits, Network Analysis"
    }
  ];
  const papers = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications = [
    {
    title: "Product Management Certification",
    platform: "Udemy",
    description: "Completed professional certification in Product Management covering product strategy, roadmaps, and product lifecycle.",
    link: "https://drive.google.com/file/d/1FmRQMjwOmukZzLUq8730MkYSgibtxeiv/view"
    }
    ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              SAI TEJA VELURI
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Sai Teja Veluri"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              SAI TEJA VELURI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Technical Product Manager · AI/ML & Enterprise SaaS · GenAI Products
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              BROOKLYN, NY, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'BUSINESS VALUE DELIVERED', value: '$13M', detail: 'GenAI Accelerator Impact' },
              { label: 'ERROR REDUCTION', value: '53%', detail: 'Onboarding Improvement' },
              { label: 'USERS IMPACTED', value: '10,000+', detail: 'Platform Scale' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Technical Product Manager specializing in GenAI and enterprise SaaS products. Bridging technical depth with product strategy to deliver measurable business outcomes across financial services and technology sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Product Strategy',
                detail: 'Define product vision, north star metrics, and roadmap prioritization using RICE/ICE frameworks. Delivered $13M in business value through structured use case evaluation and phased roadmap investments.'
              },
              {
                icon: Rocket,
                title: 'Execution Excellence',
                detail: 'Own full product lifecycle from discovery to post-launch experimentation. Reduced recruiter overhead by 40%, cut onboarding errors by 53%, and improved platform reliability by 15% through disciplined execution.'
              },
              {
                icon: Lightbulb,
                title: 'Technical Fluency',
                detail: 'Fluent in SQL, Python, APIs, Kafka, and cloud platforms. Translate complex technical systems into defensible product decisions, enabling effective collaboration with engineering teams on AI/ML initiatives.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Product management and software engineering experience across Goldman Sachs, Charles Schwab, and technology consulting environments.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {role.highlightsLink && (
                  <div className="mt-4 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Highlights</span>
                    <a href={role.highlightsLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}

                {role.certificateLink && (
                  <div className="mt-2 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Certificate</span>
                    <a href={role.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              GenAI product development, product strategy, data analytics, and program management projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or product documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'PRESENTATION DECK (PDF)' : 'LINK'}
                  </h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'View Presentation Deck (PDF)' : 'View Project'}
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Product management, technical execution, and strategic planning expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in product management, AI, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                  View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss GenAI product strategy, enterprise SaaS initiatives, or technical product management opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19296981277"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (929) 698-1277
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/saitejaveluri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:sv2862@stern.nyu.edu"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                sv2862@stern.nyu.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Sai Teja Veluri · Technical Product Management & GenAI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;