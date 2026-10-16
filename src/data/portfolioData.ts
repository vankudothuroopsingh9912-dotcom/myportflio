export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack MERN' | 'Real-Time' | 'E-Commerce' | 'Scheduling';
  description: string;
  keyInnovations: string[];
  techStack: string[];
  architectureOverview: string;
  apiEndpoints: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
  }[];
  schemaSnippet: string;
  codeSnippet: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Vankudothu Roopsingh",
    title: "MERN Stack Developer",
    subtitle: "Building Scalable, Production-Ready Web Applications & Resilient REST APIs",
    email: "vankudothuroopsingh9912@gmail.com",
    phone: "+91 9912772118",
    linkedin: "https://www.linkedin.com/in/vankudothu-roopsingh-0b854a34a",
    github: "https://github.com/vankudothuroopsingh9912",
    location: "Bengaluru / Hyderabad, India",
    portfolioUrl: "https://roopsinghportflio.site.js/wp",
    bio: "MERN Stack Developer with 1+ years of experience building scalable, responsive web applications using React.js, Node.js, Express.js, MongoDB, and JavaScript (ES6+). Skilled in developing and integrating REST APIs, creating responsive user interfaces, and implementing reusable, component-based architectures. Experienced in full lifecycle development, from database schema design to performance optimization.",
  },

  metrics: [
    { value: "4+", label: "Full-Stack Production Projects" },
    { value: "1+ Years", label: "Professional Development Experience" },
    { value: "30%", label: "Development Effort Reduction via Reusable Components" },
    { value: "100%", label: "Responsive Cross-Device Compatibility" },
  ],

  projects: [
    {
      id: "stock-market-tracker",
      title: "Stock Market Portfolio Tracker",
      subtitle: "Full-Stack Investment Tracking & Real-Time Performance Analytics",
      category: "Full-Stack MERN",
      description:
        "A full-stack portfolio tracking application that enables users to monitor investments, calculate unrealized returns, and analyze stock distributions through a reactive dashboard. Features automated balance calculations and responsive performance across mobile and desktop devices.",
      keyInnovations: [
        "Implemented RESTful APIs for real-time portfolio management and transactions tracking.",
        "Built dynamic portfolio analytics with interactive asset allocation graphs and profit/loss calculations.",
        "Designed MongoDB schemas with Mongoose for efficient transactional histories and position tracking.",
        "Optimized frontend bundle and load speed using React code splitting and lazy loading.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Tailwind CSS"],
      architectureOverview:
        "Client (React + Hooks) -> Express API Router -> JWT Auth Middleware -> Portfolio Controller -> Mongoose ODM -> MongoDB Cluster",
      apiEndpoints: [
        { method: "GET", path: "/api/v1/portfolio", description: "Fetch authenticated user holdings, balances, and P&L metrics" },
        { method: "POST", path: "/api/v1/stocks/transaction", description: "Execute buy/sell trade and update holdings atomically" },
        { method: "GET", path: "/api/v1/stocks/market-feed", description: "Retrieve simulated real-time market prices and day changes" },
      ],
      schemaSnippet: `const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cashBalance: { type: Number, default: 25000 },
  holdings: [{
    symbol: { type: String, uppercase: true, required: true },
    shares: { type: Number, required: true },
    avgCost: { type: Number, required: true }
  }],
  history: [{
    type: { type: String, enum: ['BUY', 'SELL'] },
    symbol: String,
    shares: Number,
    price: Number,
    timestamp: { type: Date, default: Date.now }
  }]
});`,
      codeSnippet: `// Portfolio aggregation & profit calculation logic
export const getPortfolioSummary = async (userId: string) => {
  const portfolio = await Portfolio.findOne({ userId });
  if (!portfolio) throw new Error("Portfolio not found");

  const enrichedHoldings = portfolio.holdings.map(item => {
    const currentPrice = marketQuotes[item.symbol] ?? item.avgCost;
    const marketValue = item.shares * currentPrice;
    const totalCost = item.shares * item.avgCost;
    const pnl = marketValue - totalCost;
    return { ...item.toObject(), currentPrice, marketValue, pnl };
  });

  const totalEquity = enrichedHoldings.reduce((sum, h) => sum + h.marketValue, 0);
  return { cash: portfolio.cashBalance, totalEquity, holdings: enrichedHoldings };
};`,
    },

    {
      id: "real-time-chat",
      title: "Real-Time Chat Application",
      subtitle: "Low-Latency Messaging Engine with Room Channels & Persistent Storage",
      category: "Real-Time",
      description:
        "A responsive messaging application built with React.js and a Node.js backend. Features live channel messaging, conversation persistence in MongoDB, active participant tracking, and seamless state synchronization.",
      keyInnovations: [
        "Architected an event-driven messaging service delivering instant communication.",
        "Integrated JWT authentication to protect private channel endpoints and user identity.",
        "Created MongoDB message schemas indexed by channel ID and timestamp for fast conversation history retrieval.",
        "Engineered smooth optimistic UI updates with typing indicators and delivery confirmations.",
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      architectureOverview:
        "React Chat Client -> Express WebSocket / Event Dispatcher -> Room Partitioning Middleware -> MongoDB Message Store",
      apiEndpoints: [
        { method: "GET", path: "/api/v1/channels", description: "List all public & member-joined chat channels" },
        { method: "GET", path: "/api/v1/channels/:id/messages", description: "Fetch paginated chat messages for a channel" },
        { method: "POST", path: "/api/v1/messages/send", description: "Dispatch message to channel subscribers and save to DB" },
      ],
      schemaSnippet: `const MessageSchema = new mongoose.Schema({
  channelId: { type: String, required: true, index: true },
  sender: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    avatar: String
  },
  content: { type: String, required: true, trim: true },
  timestamp: { type: Date, default: Date.now, index: true }
});`,
      codeSnippet: `// Channel message dispatcher with real-time broadcast
export const handleSendMessage = async (req: Request, res: Response) => {
  const { channelId, content } = req.body;
  const user = req.user;

  const message = await Message.create({
    channelId,
    content,
    sender: { id: user._id, name: user.name, avatar: user.avatar }
  });

  // Broadcast to room subscribers & return response
  broadcastToRoom(channelId, 'NEW_MESSAGE', message);
  return res.status(201).json({ success: true, message });
};`,
    },

    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Retail Application with Cart Management & Role-Based Access",
      category: "E-Commerce",
      description:
        "A responsive MERN Stack e-commerce platform offering smooth product browsing, search & category filtering, interactive cart state management, user authentication, and order workflows.",
      keyInnovations: [
        "Built reusable, modular React.js UI components that accelerated feature delivery across product catalogs.",
        "Designed RESTful endpoints for catalog filtering, inventory checks, and order lifecycle management.",
        "Implemented JWT authentication with role-based access control (Admin vs. Customer accounts).",
        "Optimized client-side state handling with persistent cart state and responsive mobile-first layouts.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Tailwind CSS", "Bootstrap"],
      architectureOverview:
        "React Storefront -> Express Routing Layer -> Role Authorization Middleware -> MongoDB Order & Inventory Collections",
      apiEndpoints: [
        { method: "GET", path: "/api/v1/products", description: "Query products with pagination, category filter, and search" },
        { method: "POST", path: "/api/v1/cart/checkout", description: "Validate inventory, create customer order, and clear cart" },
        { method: "GET", path: "/api/v1/orders/my-orders", description: "Retrieve purchase history and shipment status for user" },
      ],
      schemaSnippet: `const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, index: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 4.5 },
  inventory: { type: Number, required: true, min: 0 },
  featured: { type: Boolean, default: false }
});`,
      codeSnippet: `// Inventory-safe checkout transaction
export const processOrderCheckout = async (userId: string, cartItems: CartItem[]) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let subtotal = 0;
    for (const item of cartItems) {
      const prod = await Product.findById(item.productId).session(session);
      if (!prod || prod.inventory < item.quantity) {
        throw new Error(\`Insufficient stock for item: \${item.name}\`);
      }
      prod.inventory -= item.quantity;
      await prod.save({ session });
      subtotal += prod.price * item.quantity;
    }
    const order = await Order.create([{ userId, items: cartItems, total: subtotal }], { session });
    await session.commitTransaction();
    return order[0];
  } catch (err) {
    await session.abortTransaction();
    throw err;
  }
};`,
    },

    {
      id: "appointment-scheduler",
      title: "Appointment Scheduling Platform",
      subtitle: "Service Booking Engine with Double-Booking Prevention & Calendar Views",
      category: "Scheduling",
      description:
        "A full-stack appointment scheduling platform that enables users to view available services, inspect timetable slots, schedule bookings, and manage reservation details. Engineered with robust conflict-detection logic and MongoDB.",
      keyInnovations: [
        "Built interactive calendar views with dynamic time slot availability and date filters.",
        "Integrated RESTful APIs executing full CRUD operations for appointment bookings and cancellations.",
        "Developed automated conflict resolution logic preventing overlapping timeslot reservations.",
        "Implemented cross-browser compatible layouts adhering to mobile-first responsive design standards.",
      ],
      techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Tailwind CSS"],
      architectureOverview:
        "React Booking UI -> Availability Controller -> Double-Booking Guard -> MongoDB Appointments Collection",
      apiEndpoints: [
        { method: "GET", path: "/api/v1/services", description: "Retrieve available service catalogs, durations, and pricing" },
        { method: "GET", path: "/api/v1/availability/:date", description: "Query non-conflicting time slots for a given day" },
        { method: "POST", path: "/api/v1/appointments", description: "Reserve appointment slot with contact details" },
        { method: "DELETE", path: "/api/v1/appointments/:id", description: "Cancel appointment and release slot back to schedule" },
      ],
      schemaSnippet: `const AppointmentSchema = new mongoose.Schema({
  serviceId: { type: String, required: true },
  serviceName: { type: String, required: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  date: { type: String, required: true, index: true }, // YYYY-MM-DD
  timeSlot: { type: String, required: true }, // e.g. "10:00 AM"
  status: { type: String, enum: ['CONFIRMED', 'CANCELLED', 'COMPLETED'], default: 'CONFIRMED' }
});`,
      codeSnippet: `// Conflict prevention algorithm for appointment booking
export const bookAppointment = async (req: Request, res: Response) => {
  const { serviceId, serviceName, clientName, clientEmail, date, timeSlot } = req.body;

  // Check if slot is already reserved
  const existing = await Appointment.findOne({ date, timeSlot, status: 'CONFIRMED' });
  if (existing) {
    return res.status(409).json({ error: 'This time slot is already booked. Please choose another.' });
  }

  const booking = await Appointment.create({
    serviceId, serviceName, clientName, clientEmail, date, timeSlot, status: 'CONFIRMED'
  });

  return res.status(201).json({ success: true, booking });
};`,
    },
  ] as Project[],

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", desc: "Hooks, Custom Hooks, State Management, Reusable Component Architecture" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, Promises, Closures, DOM Manipulation, Modules" },
      { name: "Redux & Context", level: "Proficient", desc: "Predictable state containers, actions, reducers, global state" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Modern utility-first responsive styling, dark mode, design systems" },
      { name: "Bootstrap 5", level: "Proficient", desc: "Grid system, responsive layouts, rapid prototyping" },
      { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic markup, Flexbox, CSS Grid, media queries, animations" },
    ],
    backend: [
      { name: "Node.js", level: "Proficient", desc: "Event-driven asynchronous runtime, server architecture, streams" },
      { name: "Express.js", level: "Proficient", desc: "RESTful API design, custom middleware, routing, error handling" },
      { name: "RESTful APIs", level: "Advanced", desc: "Standard CRUD design, status codes, query filtering, pagination" },
      { name: "JWT Authentication", level: "Proficient", desc: "Token generation, verification middleware, Role-Based Access Control" },
    ],
    database: [
      { name: "MongoDB", level: "Proficient", desc: "NoSQL document modeling, indexing, aggregation pipelines" },
      { name: "Mongoose ODM", level: "Proficient", desc: "Schema validation, middleware hooks, query population, transactions" },
      { name: "MySQL", level: "Familiar", desc: "Relational queries, primary/foreign keys, joins, table normalization" },
    ],
    toolsAndPractices: [
      { name: "Git & GitHub", level: "Proficient", desc: "Branching strategies, pull requests, version control, collaboration" },
      { name: "Postman", level: "Advanced", desc: "API endpoint testing, request suites, environment variables, validation" },
      { name: "Chrome DevTools", level: "Advanced", desc: "Performance profiling, network analysis, debugging DOM & console" },
      { name: "VS Code", level: "Advanced", desc: "Modern developer workflow, linting, extensions, workspace debugging" },
      { name: "Agile & Sprints", level: "Proficient", desc: "Daily standups, sprint planning, cross-functional collaboration" },
      { name: "Code Optimization", level: "Proficient", desc: "Lazy loading, code splitting, memoization, cross-browser compatibility" },
    ],
  },

  experiences: [
    {
      company: "Digit Wett",
      role: "Frontend Developer",
      location: "Bengaluru, India",
      period: "Feb 2025 – Feb 2026",
      highlights: [
        "Developed and maintained responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Bootstrap, delivering consistent user experiences across desktop and mobile devices.",
        "Built reusable, modular React.js components using component-based architecture, reducing development effort by 30% and accelerating feature delivery.",
        "Integrated RESTful APIs and implemented efficient API integration and client-side state management to support dynamic application features.",
        "Optimized frontend performance using code splitting, lazy loading, and efficient state management, improving application load performance and responsiveness.",
        "Debugged and resolved UI, functionality, and cross-browser compatibility issues using Chrome DevTools and modern debugging practices.",
        "Collaborated with UI/UX designers and backend developers in Agile sprints to develop, test, and deliver production-ready features within project deadlines.",
      ],
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "RESTful APIs", "Performance Tuning"],
    },
    {
      company: "Unified Mentor",
      role: "Frontend Developer Intern",
      location: "Remote",
      period: "2026",
      highlights: [
        "Developed interactive and responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap.",
        "Built reusable React.js components using modern frontend development practices and component-based architecture.",
        "Integrated RESTful APIs to retrieve and display dynamic application data and implemented efficient client-side state management.",
        "Developed responsive layouts following mobile-first and cross-browser compatibility principles.",
        "Debugged frontend issues and optimized application functionality to improve usability and overall performance.",
      ],
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "API Integration"],
    },
    {
      company: "CODEC Technologies",
      role: "MERN Stack Developer Intern",
      location: "Remote",
      period: "2026",
      highlights: [
        "Developed and integrated RESTful APIs using Node.js and Express.js for full-stack web application functionality.",
        "Implemented JWT-based authentication and authorization to secure user access and application resources.",
        "Designed and managed MongoDB database schemas using Mongoose and performed CRUD operations for application data.",
        "Integrated frontend and backend services through REST APIs to support dynamic and scalable web application features.",
        "Debugged API, database, and application issues using Postman and modern development tools.",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Postman"],
    },
    {
      company: "Cognifyz IT Technologies",
      role: "MERN Stack Developer Intern",
      location: "Remote",
      period: "2026",
      highlights: [
        "Developed and integrated RESTful APIs using Node.js and Express.js to support full-stack web application functionality.",
        "Implemented JWT-based authentication and authorization to secure user access and application resources.",
        "Designed and managed MongoDB database schemas using Mongoose and performed CRUD operations for application data.",
        "Integrated React.js frontend components with Node.js and Express.js backend services through REST APIs to deliver dynamic web application features.",
        "Tested, debugged, and validated REST APIs using Postman, resolving API, database, and application-level issues.",
        "Followed Git/GitHub version control practices to manage source code and support collaborative development.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Postman", "Git/GitHub"],
    },
    {
      company: "Santosh Infra Power Private Limited (SIPPL)",
      role: "Planning Engineer",
      location: "India",
      period: "Jan 2024 – Jan 2025",
      highlights: [
        "Created and maintained project schedules and timelines to support timely project execution.",
        "Developed Work Breakdown Structures (WBS) and organized project activities according to project requirements.",
        "Estimated resource requirements including labor, materials, and equipment for project planning.",
        "Monitored project progress against baseline schedules, identifying delays and supporting corrective actions.",
      ],
      skills: ["Project Scheduling", "WBS Architecture", "Resource Planning", "Timeline Optimization"],
    },
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Engineering",
      institution: "Brilliant Institute of Engineering, Hyderabad (JNTUH)",
      period: "2014 – 2018",
      score: "Percentage: 62%",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Arvind Junior College",
      period: "2012 – 2014",
      score: "Percentage: 56%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "ZPHS Channa Palm",
      period: "2012",
      score: "CGPA: 5.5",
    },
  ] as EducationItem[],

  certifications: [
    {
      name: "Generative AI and AI Agents Course",
      issuer: "CynoHub",
      year: "2026",
    },
    {
      name: "Front-End Development with React.js",
      issuer: "Naresh i Technologies",
      year: "2024",
    },
    {
      name: "Back-End Development with Node.js & MongoDB",
      issuer: "Naresh i Technologies",
      year: "2024",
    },
    {
      name: "TCS NQT Score – 64%",
      issuer: "Tata Consultancy Services (TCS)",
      year: "2025",
    },
  ] as Certification[],
};
