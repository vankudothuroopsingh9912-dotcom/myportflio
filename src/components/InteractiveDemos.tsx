import React, { useState } from 'react';
import { 
  TrendingUp, ArrowUpRight, ArrowDownRight, DollarSign, 
  Send, MessageSquare, ShoppingBag, Plus, Minus, Trash2, 
  Check, Calendar, Clock, AlertCircle, RefreshCw
} from 'lucide-react';

/* ==========================================================
   1. STOCK MARKET TRACKER DEMO
   ========================================================== */
interface Holding {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
}

export function StockMarketDemo() {
  const [cash, setCash] = useState<number>(14250.0);
  const [holdings, setHoldings] = useState<Holding[]>([
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 25, avgCost: 185.5, currentPrice: 228.4 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 35, avgCost: 104.2, currentPrice: 132.8 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 15, avgCost: 410.0, currentPrice: 428.6 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 20, avgCost: 155.0, currentPrice: 174.2 },
  ]);

  const [selectedStock, setSelectedStock] = useState<string>('NVDA');
  const [tradeShares, setTradeShares] = useState<number>(5);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const totalHoldingsValue = holdings.reduce((sum, h) => sum + h.shares * h.currentPrice, 0);
  const totalCostBasis = holdings.reduce((sum, h) => sum + h.shares * h.avgCost, 0);
  const totalPnL = totalHoldingsValue - totalCostBasis;
  const pnlPercent = totalCostBasis > 0 ? (totalPnL / totalCostBasis) * 100 : 0;
  const netWorth = cash + totalHoldingsValue;

  const currentSelectedHolding = holdings.find((h) => h.symbol === selectedStock) || holdings[0];

  const handleBuy = () => {
    const cost = currentSelectedHolding.currentPrice * tradeShares;
    if (cash < cost) {
      setLastAction(`Error: Insufficient cash balance to execute trade.`);
      return;
    }

    setCash((prev) => prev - cost);
    setHoldings((prev) =>
      prev.map((h) => {
        if (h.symbol === selectedStock) {
          const totalExistingCost = h.shares * h.avgCost;
          const newShares = h.shares + tradeShares;
          const newAvgCost = (totalExistingCost + cost) / newShares;
          return { ...h, shares: newShares, avgCost: Number(newAvgCost.toFixed(2)) };
        }
        return h;
      })
    );
    setLastAction(`Bought ${tradeShares} shares of ${selectedStock} @ $${currentSelectedHolding.currentPrice.toFixed(2)}`);
  };

  const handleSell = () => {
    if (currentSelectedHolding.shares < tradeShares) {
      setLastAction(`Error: Cannot sell more shares than currently owned.`);
      return;
    }

    const proceeds = currentSelectedHolding.currentPrice * tradeShares;
    setCash((prev) => prev + proceeds);
    setHoldings((prev) =>
      prev.map((h) => {
        if (h.symbol === selectedStock) {
          return { ...h, shares: h.shares - tradeShares };
        }
        return h;
      })
    );
    setLastAction(`Sold ${tradeShares} shares of ${selectedStock} for $${proceeds.toFixed(2)}`);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 text-slate-100">
      {/* Top Bar Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-slate-800 text-xs">
        <div>
          <span className="text-slate-400 block mb-1">Total Net Worth</span>
          <span className="text-base font-semibold text-white font-mono tabular-nums">
            ${netWorth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Cash Balance</span>
          <span className="text-base font-semibold text-slate-200 font-mono tabular-nums">
            ${cash.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Unrealized P&L</span>
          <span className={`text-base font-semibold font-mono tabular-nums flex items-center gap-1 ${totalPnL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {totalPnL >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            ${Math.abs(totalPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">All-Time Return</span>
          <span className={`text-base font-semibold font-mono tabular-nums ${pnlPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {pnlPercent >= 0 ? '+' : ''}{pnlPercent.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Holdings list */}
      <div className="my-4 space-y-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Portfolio Holdings</div>
        <div className="grid grid-cols-1 gap-2">
          {holdings.map((h) => {
            const holdingValue = h.shares * h.currentPrice;
            const holdingCost = h.shares * h.avgCost;
            const itemPnL = holdingValue - holdingCost;
            const isSelected = selectedStock === h.symbol;

            return (
              <div
                key={h.symbol}
                onClick={() => setSelectedStock(h.symbol)}
                className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-wrap items-center justify-between gap-2 ${
                  isSelected
                    ? 'bg-slate-800/80 border-indigo-500/60 shadow-sm shadow-indigo-500/10'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white font-mono">{h.symbol}</span>
                    <span className="text-xs text-slate-400">{h.name}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {h.shares} shares @ avg ${h.avgCost.toFixed(2)}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-sm font-semibold text-white">
                    ${holdingValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className={`text-xs font-mono tabular-nums ${itemPnL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {itemPnL >= 0 ? '+' : ''}${itemPnL.toFixed(2)} ({((itemPnL / (holdingCost || 1)) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trade execution simulator */}
      <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs text-slate-400 whitespace-nowrap">Trade {selectedStock}:</span>
          <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded border border-slate-800">
            <button
              onClick={() => setTradeShares((s) => Math.max(1, s - 1))}
              className="text-slate-400 hover:text-white px-1 font-mono text-xs"
            >
              -
            </button>
            <span className="text-xs font-mono px-2 text-white">{tradeShares}</span>
            <button
              onClick={() => setTradeShares((s) => s + 1)}
              className="text-slate-400 hover:text-white px-1 font-mono text-xs"
            >
              +
            </button>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            = ${(currentSelectedHolding.currentPrice * tradeShares).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleBuy}
            className="flex-1 sm:flex-initial px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition-colors"
          >
            Buy {selectedStock}
          </button>
          <button
            onClick={handleSell}
            disabled={currentSelectedHolding.shares < tradeShares}
            className="flex-1 sm:flex-initial px-4 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 rounded-lg text-xs font-medium transition-colors border border-slate-700"
          >
            Sell {selectedStock}
          </button>
        </div>
      </div>

      {lastAction && (
        <div className="mt-3 text-xs text-slate-400 bg-slate-950/70 p-2 rounded border border-slate-800/80 font-mono flex items-center justify-between">
          <span>{lastAction}</span>
          <button onClick={() => setLastAction(null)} className="text-slate-500 hover:text-slate-300 ml-2">×</button>
        </div>
      )}
    </div>
  );
}

/* ==========================================================
   2. REAL-TIME CHAT APPLICATION DEMO
   ========================================================== */
interface ChatMessage {
  id: string;
  sender: string;
  role: string;
  text: string;
  time: string;
  isSelf: boolean;
}

export function RealTimeChatDemo() {
  const [activeChannel, setActiveChannel] = useState<'#general' | '#mern-dev' | '#code-reviews'>('#mern-dev');
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>({
    '#mern-dev': [
      { id: '1', sender: 'Roopsingh V.', role: 'Developer', text: 'I updated the MongoDB aggregation pipeline for user metrics. Queries are now under 18ms.', time: '10:14 AM', isSelf: true },
      { id: '2', sender: 'Sarah K.', role: 'Tech Lead', text: 'Nice! Did you add the compound index on `{ channelId: 1, timestamp: -1 }`?', time: '10:15 AM', isSelf: false },
      { id: '3', sender: 'Roopsingh V.', role: 'Developer', text: 'Yes, verified in Compass and tested with Postman. Deploying to the staging cluster.', time: '10:17 AM', isSelf: true },
    ],
    '#general': [
      { id: '4', sender: 'Alex M.', role: 'Designer', text: 'Sprint review is scheduled for 3:00 PM today.', time: '09:30 AM', isSelf: false },
      { id: '5', sender: 'Roopsingh V.', role: 'Developer', text: 'Will have the new responsive layout demo ready to present.', time: '09:35 AM', isSelf: true },
    ],
    '#code-reviews': [
      { id: '6', sender: 'Dev Bot', role: 'CI/CD', text: 'PR #42: "Lazy loading components & API caching" approved by 2 reviewers.', time: '08:45 AM', isSelf: false },
    ],
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'You (Visitor)',
      role: 'Guest Engineer',
      text: inputMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true,
    };

    setMessages((prev) => ({
      ...prev,
      [activeChannel]: [...prev[activeChannel], newMsg],
    }));

    setInputMessage('');

    // Simulate instant peer response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "Received via WebSocket! Express server dispatched the event to this channel.",
        "Payload validated and written to MongoDB chat collections in real-time.",
        "API integration looks solid. The component-based state handled the optimistic render cleanly.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'Roopsingh V.',
        role: 'MERN Developer',
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSelf: false,
      };

      setMessages((prev) => ({
        ...prev,
        [activeChannel]: [...prev[activeChannel], botReply],
      }));
    }, 1200);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[400px]">
      {/* Channels header */}
      <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold text-slate-300">Channels:</span>
          {(['#mern-dev', '#general', '#code-reviews'] as const).map((ch) => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={`px-2.5 py-1 text-xs rounded transition-colors ${
                activeChannel === ch
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-500 font-mono hidden sm:inline">WebSocket: Connected (Simulated)</span>
      </div>

      {/* Message history */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages[activeChannel].map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.isSelf ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-2 mb-1 text-xs text-slate-400">
              <span className={`font-semibold ${msg.isSelf ? 'text-indigo-300' : 'text-slate-200'}`}>
                {msg.sender}
              </span>
              <span>·</span>
              <span className="text-slate-500">{msg.role}</span>
              <span>·</span>
              <span className="font-mono text-[11px] text-slate-500">{msg.time}</span>
            </div>
            <div
              className={`max-w-[85%] rounded-lg px-3.5 py-2 text-xs leading-relaxed ${
                msg.isSelf
                  ? 'bg-indigo-600/90 text-white border border-indigo-500/50'
                  : 'bg-slate-800/90 text-slate-200 border border-slate-700/60'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic">
            <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
            <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            <span>Roopsingh is responding...</span>
          </div>
        )}
      </div>

      {/* Message input */}
      <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={`Message ${activeChannel}...`}
          className="flex-1 bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={!inputMessage.trim()}
          className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

/* ==========================================================
   3. E-COMMERCE PLATFORM DEMO
   ========================================================== */
interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
}

export function EcommerceDemo() {
  const products: ProductItem[] = [
    { id: 'p1', name: 'Developer Mechanical Keyboard (Hot-Swap)', category: 'Peripherals', price: 129.99, rating: 4.8, stock: 14 },
    { id: 'p2', name: 'Ergonomic Desk Mat with Wire Channel', category: 'Desk Setup', price: 34.5, rating: 4.6, stock: 28 },
    { id: 'p3', name: 'Active Noise Cancelling Studio Headphones', category: 'Audio', price: 199.0, rating: 4.9, stock: 8 },
    { id: 'p4', name: 'USB-C Dual 4K DisplayPort Hub', category: 'Accessories', price: 79.99, rating: 4.7, stock: 19 },
  ];

  const [cart, setCart] = useState<{ product: ProductItem; quantity: number }[]>([
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 2 },
  ]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: ProductItem; quantity: number }[]
    );
  };

  const removeItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setCart([]);
      setOrderPlaced(false);
    }, 3500);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Products catalog */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300">Catalog Storefront</span>
            <span className="text-xs text-slate-500 font-mono">Role: Authenticated Customer</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>{item.category}</span>
                    <span className="font-mono text-amber-400">★ {item.rating}</span>
                  </div>
                  <h5 className="text-xs font-semibold text-white leading-snug line-clamp-2">{item.name}</h5>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="font-mono text-sm font-bold text-white">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Drawer & Checkout */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-slate-200">Cart Summary</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {cart.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>

            {/* Cart Items list */}
            <div className="py-3 space-y-2.5 max-h-48 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">Your cart is currently empty.</div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between gap-2 text-xs">
                    <div className="truncate flex-1">
                      <span className="text-slate-200 block truncate">{item.product.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">${item.product.price.toFixed(2)} each</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-5 h-5 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono text-white text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-5 h-5 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-slate-500 hover:text-rose-400 ml-1 p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pricing calculations */}
          <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Subtotal</span>
              <span className="font-mono text-slate-200">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Sales Tax (8%)</span>
              <span className="font-mono text-slate-200">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-white pt-1 border-t border-slate-800/80">
              <span>Order Total</span>
              <span className="font-mono text-sm text-emerald-400">${total.toFixed(2)}</span>
            </div>

            {orderPlaced ? (
              <div className="bg-emerald-950/80 border border-emerald-500/60 p-2.5 rounded text-center text-xs text-emerald-300 font-medium flex items-center justify-center gap-1.5 mt-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Order #ORD-7193 Processed in MongoDB!</span>
              </div>
            ) : (
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full mt-2 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Complete Checkout with REST API</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================
   4. APPOINTMENT SCHEDULING PLATFORM DEMO
   ========================================================== */
interface ServiceOption {
  id: string;
  name: string;
  duration: string;
  fee: string;
}

export function AppointmentSchedulerDemo() {
  const services: ServiceOption[] = [
    { id: 's1', name: 'Full-Stack Architecture Consultation', duration: '45 mins', fee: 'Free Intro' },
    { id: 's2', name: 'React Component Hierarchy & Code Review', duration: '60 mins', fee: 'Technical' },
    { id: 's3', name: 'REST API & MongoDB Schema Planning', duration: '45 mins', fee: 'Advisory' },
  ];

  const dates = [
    { label: 'Mon, Oct 19', value: '2026-10-19' },
    { label: 'Tue, Oct 20', value: '2026-10-20' },
    { label: 'Wed, Oct 21', value: '2026-10-21' },
    { label: 'Thu, Oct 22', value: '2026-10-22' },
  ];

  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const [selectedService, setSelectedService] = useState<ServiceOption>(services[0]);
  const [selectedDate, setSelectedDate] = useState<string>(dates[0].value);
  const [selectedSlot, setSelectedSlot] = useState<string>('11:30 AM');
  const [bookedSlots, setBookedSlots] = useState<string[]>(['2026-10-19_02:00 PM', '2026-10-20_10:00 AM']);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const slotKey = `${selectedDate}_${selectedSlot}`;
  const isSlotBooked = bookedSlots.includes(slotKey);

  const handleBook = () => {
    if (isSlotBooked) return;
    setBookedSlots((prev) => [...prev, slotKey]);
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Step 1: Service selection */}
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            1. Select Engineering Service
          </div>
          <div className="space-y-2">
            {services.map((srv) => (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedService.id === srv.id
                    ? 'bg-indigo-600/15 border-indigo-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-xs text-white leading-snug">{srv.name}</div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1 font-mono">
                  <span>{srv.duration}</span>
                  <span>·</span>
                  <span>{srv.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Date & Slot selection */}
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            2. Choose Date & Slot
          </div>
          {/* Date tabs */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {dates.map((d) => (
              <button
                key={d.value}
                onClick={() => setSelectedDate(d.value)}
                className={`p-2 rounded text-xs font-medium text-center transition-colors border ${
                  selectedDate === d.value
                    ? 'bg-slate-800 border-indigo-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Time slot chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] text-slate-400 block mb-1">Available Timeslots:</span>
            <div className="grid grid-cols-2 gap-1.5">
              {timeSlots.map((time) => {
                const key = `${selectedDate}_${time}`;
                const taken = bookedSlots.includes(key);
                const selected = selectedSlot === time;

                return (
                  <button
                    key={time}
                    disabled={taken}
                    onClick={() => setSelectedSlot(time)}
                    className={`py-1.5 px-2 rounded text-xs font-mono transition-all border ${
                      taken
                        ? 'bg-slate-950/80 border-slate-900 text-slate-600 line-through cursor-not-allowed'
                        : selected
                        ? 'bg-indigo-600 border-indigo-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {time} {taken && '(Booked)'}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Reservation confirmation & Guard */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-300 pb-2 border-b border-slate-800">
              3. Reservation Guard
            </div>

            <div className="py-3 space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Service:</span>
                <span className="font-semibold text-white">{selectedService.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Date & Time:</span>
                <span className="font-mono text-slate-200">
                  {selectedDate} at {selectedSlot}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">Conflict Guard Status:</span>
                {isSlotBooked ? (
                  <span className="inline-flex items-center gap-1 text-rose-400 font-mono text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5" /> Already booked (409 Conflict)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                    <Check className="w-3.5 h-3.5" /> Slot open for reservation
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            {bookingSuccess ? (
              <div className="bg-emerald-950/80 border border-emerald-500/60 p-2.5 rounded text-center text-xs text-emerald-300 font-medium">
                Appointment successfully stored in MongoDB!
              </div>
            ) : (
              <button
                onClick={handleBook}
                disabled={isSlotBooked}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Reserve Appointment Slot</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
