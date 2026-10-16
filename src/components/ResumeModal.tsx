import React from 'react';
import { X, Printer, Download, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white text-slate-900 rounded-2xl w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden print:m-0 print:p-0 print:max-w-none print:shadow-none print:rounded-none"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Controls (Hidden in print) */}
        <div className="bg-slate-900 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-white print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-indigo-400 font-semibold">Curriculum Vitae</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Vankudothu Roopsingh</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-10 overflow-y-auto flex-1 font-sans text-slate-800 space-y-6 text-sm bg-white">
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-300 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-900">
              Vankudothu Roopsingh
            </h1>
            <p className="text-sm font-bold text-slate-700 tracking-wide">
              MERN Stack Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1 font-medium">
              <span>Phone: +91 9912772118</span>
              <span>|</span>
              <span>Gmail: vankudothuroopsingh9912@gmail.com</span>
              <span>|</span>
              <span>LinkedIn: vankudothu-roopsingh-0b854a34a</span>
              <span>|</span>
              <span>website: https://roopsinghportflio.site.js/wp</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-0.5 border-b border-slate-400">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed pt-1">
              MERN Stack Developer with 1+ years of experience building scalable and responsive web applications using React.js, Node.js, Express.js, MongoDB, and JavaScript (ES6+). Skilled in developing and integrating REST APIs, creating responsive user interfaces, and implementing reusable, component-based solutions. Proficient in Git and GitHub for version control, collaboration, and maintaining clean, production-ready code.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-0.5 border-b border-slate-400">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 pt-1 text-slate-700">
              <div><strong className="text-slate-900">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Redux, Bootstrap, Tailwind CSS</div>
              <div><strong className="text-slate-900">Backend:</strong> Node.js, Express.js, RESTful APIs</div>
              <div><strong className="text-slate-900">Database:</strong> MongoDB, Mongoose, MySQL</div>
              <div><strong className="text-slate-900">Authentication:</strong> JWT, Role-Based Authentication</div>
              <div><strong className="text-slate-900">Tools:</strong> Git, GitHub, Postman, Visual Studio Code, Chrome DevTools</div>
              <div><strong className="text-slate-900">Concepts:</strong> Responsive Design, Single Page Applications (SPA), Component-Based Architecture, CRUD Operations, API Integration, Cross-Browser Compatibility</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-0.5 border-b border-slate-400">
              Professional Experience
            </h2>

            {/* Digit Wett */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Frontend Developer | Digit Wett</span>
                <span>Bengaluru, India | Feb 2025 – Feb 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Developed and maintained responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Bootstrap, delivering consistent user experiences across desktop and mobile devices.</li>
                <li>Built reusable, modular React.js components using component-based architecture, reducing development effort by 30% and accelerating feature delivery.</li>
                <li>Integrated RESTful APIs and implemented efficient API integration and client-side state management to support dynamic application features.</li>
                <li>Optimized frontend performance using code splitting, lazy loading, and efficient state management, improving application load performance and responsiveness.</li>
                <li>Debugged and resolved UI, functionality, and cross-browser compatibility issues using Chrome DevTools and modern debugging practices.</li>
                <li>Collaborated with UI/UX designers and backend developers in Agile sprints to develop, test, and deliver production-ready features within project deadlines.</li>
              </ul>
            </div>

            {/* Unified Mentor */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Frontend Developer Intern | Unified Mentor</span>
                <span>Remote | 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Developed interactive and responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap.</li>
                <li>Built reusable React.js components using modern frontend development practices and component-based architecture.</li>
                <li>Integrated RESTful APIs to retrieve and display dynamic application data and implemented efficient client-side state management.</li>
                <li>Developed responsive layouts following mobile-first and cross-browser compatibility principles.</li>
                <li>Debugged frontend issues and optimized application functionality to improve usability and overall performance.</li>
              </ul>
            </div>

            {/* CODEC Technologies */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>MERN Stack Developer Intern | CODEC Technologies</span>
                <span>Remote | 2026</span>
              </div>
              <p className="text-slate-700 italic">Developed and integrated RESTful APIs using Node.js and Express.js for full-stack web application functionality.</p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Implemented JWT-based authentication and authorization to secure user access and application resources.</li>
                <li>Designed and managed MongoDB database schemas using Mongoose and performed CRUD operations for application data.</li>
                <li>Integrated frontend and backend services through REST APIs to support dynamic and scalable web application features.</li>
                <li>Debugged API, database, and application issues using Postman and modern development tools.</li>
              </ul>
            </div>

            {/* Cognifyz IT */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>MERN Stack Developer Intern | Cognifyz IT Technologies</span>
                <span>Remote | 2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Developed and integrated RESTful APIs using Node.js and Express.js to support full-stack web application functionality.</li>
                <li>Implemented JWT-based authentication and authorization to secure user access and application resources.</li>
                <li>Designed and managed MongoDB database schemas using Mongoose and performed CRUD operations for application data.</li>
                <li>Integrated React.js frontend components with Node.js and Express.js backend services through REST APIs to deliver dynamic web application features.</li>
                <li>Tested, debugged, and validated REST APIs using Postman, resolving API, database, and application-level issues.</li>
                <li>Followed Git/GitHub version control practices to manage source code and support collaborative development.</li>
              </ul>
            </div>

            {/* Santosh Infra Power */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Planning Engineer | Santosh Infra Power Private Limited (SIPPL)</span>
                <span>Jan 2024 – Jan 2025</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Created and maintained project schedules and timelines to support timely project execution.</li>
                <li>Developed Work Breakdown Structures (WBS) and organized project activities according to project requirements.</li>
                <li>Estimated resource requirements including labor, materials, and equipment for project planning.</li>
                <li>Monitored project progress against baseline schedules, identifying delays and supporting corrective actions.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-0.5 border-b border-slate-400">
              Technical Projects
            </h2>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-900">1. Stock Market Portfolio Tracker</div>
              <p className="text-slate-700">
                <strong>Description:</strong> Developed a full-stack portfolio tracking application that enables users to monitor investments, track portfolio performance, and analyze stock data through an interactive dashboard. Implemented RESTful APIs for portfolio management and optimized the application for responsive performance across devices.
              </p>
              <p className="text-slate-700"><strong>Tools Used:</strong> React.js, JavaScript (ES6+), Node.js, Express.js, MongoDB, Mongoose, REST APIs</p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-900">2. Real-Time Chat Application</div>
              <p className="text-slate-700">
                <strong>Description:</strong> Built a real-time chat application with a responsive React.js interface and Node.js backend. Implemented user communication features, API integration, database operations, and secure application functionality to provide a smooth messaging experience.
              </p>
              <p className="text-slate-700"><strong>Tools Used:</strong> React.js, JavaScript, Node.js, Express.js, MongoDB, REST APIs</p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-900">3. E-Commerce Platform</div>
              <p className="text-slate-700">
                <strong>Description:</strong> Developed a responsive MERN Stack e-commerce platform with product browsing, product details, cart management, user authentication, and order-related functionality. Created reusable React.js components and integrated backend REST APIs with MongoDB for dynamic data management.
              </p>
              <p className="text-slate-700"><strong>Tools Used:</strong> React.js, JavaScript, Node.js, Express.js, MongoDB, Mongoose, REST APIs, Bootstrap/Tailwind CSS</p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-900">4. Appointment Scheduling Platform</div>
              <p className="text-slate-700">
                <strong>Description:</strong> Developed a full-stack appointment scheduling platform that enables users to view available services, schedule appointments, and manage booking information. Built responsive user interfaces, integrated RESTful APIs, implemented CRUD operations, and managed application data using MongoDB.
              </p>
              <p className="text-slate-700"><strong>Tools Used:</strong> React.js, JavaScript, Node.js, Express.js, MongoDB, Mongoose, REST APIs, Tailwind CSS</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-0.5 border-b border-slate-400">
              Education
            </h2>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-800">
                <span><strong>Bachelor of Technology (B.Tech) – Computer Engineering</strong> | Brilliant Institute of Engineering, Hyderabad (JNTUH)</span>
                <span>2014 – 2018 | Percentage: 62%</span>
              </div>
              <div className="flex justify-between text-slate-800">
                <span><strong>Intermediate (MPC)</strong> | Arvind Junior College</span>
                <span>2012 – 2014 | Percentage: 56%</span>
              </div>
              <div className="flex justify-between text-slate-800">
                <span><strong>Secondary School Certificate (SSC)</strong> | ZPHS Channa Palm</span>
                <span>2012 | CGPA: 5.5</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-0.5 border-b border-slate-400">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
              <li>Generative AI and AI Agents Course – CynoHub | 2026</li>
              <li>Front-End Development with React.js – Naresh i Technologies | 2024</li>
              <li>Back-End Development with Node.js & MongoDB – Naresh i Technologies | 2024</li>
              <li>TCS NQT Score – 64% – Tata Consultancy Services (TCS) | 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
