import React, { useState } from 'react';
import { 
  Server, Database, ShieldCheck, Zap, 
  Layers, GitFork, Cpu, RefreshCw, CheckCircle2 
} from 'lucide-react';

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'components' | 'database' | 'security'>('lifecycle');

  return (
    <section id="architecture" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
            Engineering Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Full-Stack MERN Architecture
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            How I structure, optimize, and scale production web applications from client components down to database indexes.
          </p>
        </div>

        {/* Tab Controls (Functional Buttons) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveTab('lifecycle')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'lifecycle'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Request-Response Lifecycle
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'components'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Modular React Architecture
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'database'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              MongoDB Indexing & Queries
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'security'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              JWT & Security Guards
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {activeTab === 'lifecycle' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm">
                  1
                </div>
                <h4 className="text-sm font-bold text-white">Client State & Dispatch</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  React hooks handle client-side form validation, optimistic state updates, and dispatch requests via Fetch/Axios with Bearer auth tokens.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  React.js · Custom Hooks · Redux
                </div>
              </div>

              <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm">
                  2
                </div>
                <h4 className="text-sm font-bold text-white">Express Gateway & Auth</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Incoming requests pass through CORS policy, body parsers, and custom JWT verification middleware before routing to controllers.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Express Router · JWT Verify · Rate Limit
                </div>
              </div>

              <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm">
                  3
                </div>
                <h4 className="text-sm font-bold text-white">Controller & Business Logic</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Controllers enforce business rules, input sanitization, transaction sessions, and invoke Mongoose models with structured try/catch blocks.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Node.js ES6+ · Async/Await · Error Handlers
                </div>
              </div>

              <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm">
                  4
                </div>
                <h4 className="text-sm font-bold text-white">MongoDB Aggregation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mongoose executes compound indexed queries or multi-stage aggregation pipelines ($match, $group, $sort) returning clean JSON responses.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  MongoDB 7.x · Mongoose ODM · Compound Indexes
                </div>
              </div>
            </div>
          )}

          {activeTab === 'components' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">30% Acceleration via Reusable Components</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  At <strong className="text-white">Digit Wett</strong>, I engineered a modular component system that reduced recurring frontend development effort by 30%. By separating dumb presentational components from container state logic, UI code became self-documenting and resilient to breaking API changes.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dynamic compound components for data tables, modals, and input fields</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Code splitting with React.lazy and Suspense boundaries for fast initial paints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Consistent cross-device responsiveness with Tailwind CSS utilities</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-indigo-200 overflow-x-auto">
                <pre>{`// Component Architecture Pattern
src/
├── components/
│   ├── ui/              # Reusable atoms (Buttons, Modals, Inputs)
│   ├── features/        # Business feature modules
│   │   ├── portfolio/   # HoldingsTable, AssetChart, TradeBar
│   │   ├── chat/        # MessageList, ChannelBar, ChatInput
│   │   └── booking/     # CalendarGrid, TimeSlotPicker
├── hooks/               # Custom hooks (useAuth, useSocket, useFetch)
├── services/            # API client layer (endpoints, interceptors)
└── context/             # Global stores (AuthContext, CartContext)`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Schema Optimization & Query Pipelines</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Document modeling in MongoDB requires careful balance between embedding and referencing. During internships at <strong className="text-white">CODEC Technologies</strong> and <strong className="text-white">Cognifyz IT</strong>, I designed and managed normalized collections with compound indexing to maintain sub-20ms lookup times.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Compound indexes on frequently queried fields like `{` { userId: 1, timestamp: -1 } `}`</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Mongoose schema pre-save hooks for password hashing and data normalization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Multi-stage aggregation for analytics, computing totals directly inside the engine</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>{`// Compound index & schema configuration
UserSchema.index({ email: 1 }, { unique: true });
OrderSchema.index({ customerId: 1, createdAt: -1 });
AppointmentSchema.index({ date: 1, timeSlot: 1 }, { unique: true });

// Pre-save password security hook
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">JWT Authentication & Role-Based Access</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Security is baked into the routing layer. Using JSON Web Tokens (JWT) signed with secure algorithmic secrets, endpoints verify user identity and check permission scopes before processing payload data.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Stateless Bearer token authorization stored in HttpOnly cookies or client headers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Role-Based Access Control (RBAC) middleware verifying Admin and Customer roles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Input validation & payload sanitization against injection attacks</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-indigo-200 overflow-x-auto">
                <pre>{`// Role-Based Authorization Middleware
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Access denied: Insufficient privileges'
      });
    }
    next();
  };
};`}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
