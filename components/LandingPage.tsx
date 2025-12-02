import React from 'react';
import { 
  ArrowRight, ChevronDown, Cpu, Globe, LayoutGrid, Mic, BarChart3, Webhook, 
  HardHat, Landmark, ShoppingBag, Utensils, Building, Truck, Activity, Rocket,
  Gem, Zap, Settings2, Twitter, Linkedin, Github, User, Phone, Mail, PhoneOff, MicOff
} from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const handleScrollToCapabilities = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-neutral-300 overflow-x-hidden selection:bg-[#F5C26B] selection:text-black font-sans scroll-smooth">
      <style>{`
        .text-gold-gradient {
            background: linear-gradient(to right, #F5C26B, #D8891C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .bg-gold-gradient {
            background: linear-gradient(135deg, #F5C26B, #D8891C);
        }
        .border-gold-subtle {
            border-color: rgba(245, 194, 107, 0.2);
        }
        .glow-gold {
            box-shadow: 0 0 40px rgba(245, 194, 107, 0.15);
        }
        .gold-halo {
            background: radial-gradient(circle, rgba(245,194,107,0.15) 0%, rgba(0,0,0,0) 70%);
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                {/* Logo Mark */}
                <div className="w-8 h-8 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gold-gradient rounded-full opacity-20 blur-sm"></div>
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#F5C26B]" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.5"></circle>
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" className="text-[#F5C26B]"></path>
                    </svg>
                </div>
                <span className="text-white font-medium tracking-tight text-lg">HEAVENZY</span>
            </div>
            
            {/* Navigation links and buttons removed */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Background Halo */}
        <div className="absolute inset-0 gold-halo z-0 pointer-events-none"></div>
        
        {/* Large Background Logo (Blurred) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 z-0 pointer-events-none blur-3xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#F5C26B]">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
            </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F5C26B]/20 bg-[#F5C26B]/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C26B]"></span>
                <span className="text-xs font-medium text-[#F5C26B] uppercase tracking-wider">The Future of Enterprise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1]">
                AI Software, Built for <br className="hidden md:block" />
                <span className="text-gold-gradient">Every Company.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                Custom software, webapps, automations, OS systems, and Voice AI — engineered for any industry with precision and luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button onClick={onStart} className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-black font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                    Build My Software
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <a 
                    href="#services" 
                    onClick={handleScrollToCapabilities}
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F5C26B]/30 text-[#F5C26B] font-medium rounded-lg hover:bg-[#F5C26B]/10 transition-colors flex items-center justify-center"
                >
                    See Our Capabilities
                </a>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#F5C26B]/50" />
        </div>
      </header>

      {/* Services Strip */}
      <section id="services" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight"> capabilities.</h2>
                <div className="h-1 w-20 bg-gold-gradient mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cards */}
                <div className="group p-8 rounded-xl bg-neutral-900/40 border border-gold-subtle hover:border-[#F5C26B]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,194,107,0.1)]">
                    <div className="w-12 h-12 rounded-lg bg-[#F5C26B]/10 flex items-center justify-center mb-6 text-[#F5C26B]">
                        <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Custom AI &amp; Automations</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Bespoke neural networks and process automation tailored to your specific operational bottlenecks.</p>
                </div>

                <div className="group p-8 rounded-xl bg-neutral-900/40 border border-gold-subtle hover:border-[#F5C26B]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,194,107,0.1)]">
                    <div className="w-12 h-12 rounded-lg bg-[#F5C26B]/10 flex items-center justify-center mb-6 text-[#F5C26B]">
                        <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Webapps &amp; SaaS Platforms</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Scalable, secure, and ultra-fast web applications built on modern frameworks for global deployment.</p>
                </div>

                <div className="group p-8 rounded-xl bg-neutral-900/40 border border-gold-subtle hover:border-[#F5C26B]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,194,107,0.1)]">
                    <div className="w-12 h-12 rounded-lg bg-[#F5C26B]/10 flex items-center justify-center mb-6 text-[#F5C26B]">
                        <LayoutGrid className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Company AI OS</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">A centralized operating system where AI agents manage tasks, data, and communications.</p>
                </div>

                <div className="group p-8 rounded-xl bg-neutral-900/40 border border-gold-subtle hover:border-[#F5C26B]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,194,107,0.1)]">
                    <div className="w-12 h-12 rounded-lg bg-[#F5C26B]/10 flex items-center justify-center mb-6 text-[#F5C26B]">
                        <Mic className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Voice AI &amp; Phone Agents</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Human-like conversational AI for customer support, sales, and internal coordination.</p>
                </div>

                <div className="group p-8 rounded-xl bg-neutral-900/40 border border-gold-subtle hover:border-[#F5C26B]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,194,107,0.1)]">
                    <div className="w-12 h-12 rounded-lg bg-[#F5C26B]/10 flex items-center justify-center mb-6 text-[#F5C26B]">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Internal Tools &amp; Dashboards</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Beautifully designed admin panels to visualize data and control your business logic.</p>
                </div>

                <div className="group p-8 rounded-xl bg-neutral-900/40 border border-gold-subtle hover:border-[#F5C26B]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,194,107,0.1)]">
                    <div className="w-12 h-12 rounded-lg bg-[#F5C26B]/10 flex items-center justify-center mb-6 text-[#F5C26B]">
                        <Webhook className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Enterprise Integrations</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Seamlessly connect legacy systems with modern AI infrastructure via custom APIs.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Product Preview / Mockup Strip */}
      <section id="capabilities" className="py-24 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Intelligence, Visualized.</h2>
                <p className="text-neutral-400">Experience interfaces designed for clarity and power.</p>
            </div>

            {/* Mockups Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Mockup 1: Dashboard */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gold-gradient opacity-5 blur-2xl rounded-full group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] flex flex-col">
                        {/* Window Controls */}
                        <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                        </div>
                        {/* UI Content */}
                        <div className="flex-1 flex">
                            {/* Sidebar */}
                            <div className="w-16 md:w-48 border-r border-white/5 bg-black/50 p-4 hidden md:flex flex-col gap-3">
                                <div className="h-4 w-20 bg-white/10 rounded"></div>
                                <div className="h-4 w-28 bg-white/5 rounded mt-4"></div>
                                <div className="h-4 w-24 bg-white/5 rounded"></div>
                                <div className="h-4 w-32 bg-white/5 rounded"></div>
                            </div>
                            {/* Main Area */}
                            <div className="flex-1 p-6 space-y-4">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="h-6 w-32 bg-white/10 rounded"></div>
                                    <div className="h-8 w-8 rounded-full border border-[#F5C26B]/50"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-24 rounded bg-white/5 border border-white/5 p-3 relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F5C26B]"></div>
                                    </div>
                                    <div className="h-24 rounded bg-white/5 border border-white/5 p-3"></div>
                                    <div className="h-24 rounded bg-white/5 border border-white/5 p-3"></div>
                                </div>
                                <div className="h-40 rounded bg-white/5 border border-white/5 mt-4 p-4 flex items-end gap-2">
                                    <div className="w-full bg-[#F5C26B]/20 h-[40%] rounded-t"></div>
                                    <div className="w-full bg-[#F5C26B]/40 h-[70%] rounded-t"></div>
                                    <div className="w-full bg-[#F5C26B]/60 h-[50%] rounded-t"></div>
                                    <div className="w-full bg-[#F5C26B]/80 h-[90%] rounded-t"></div>
                                    <div className="w-full bg-[#F5C26B] h-[65%] rounded-t"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mockup 2: Voice AI Flow */}
                <div className="relative group mt-12 lg:mt-0">
                    <div className="absolute inset-0 bg-gold-gradient opacity-5 blur-2xl rounded-full group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] flex items-center justify-center">
                         {/* Abstract Voice Visualization */}
                         <div className="text-center space-y-6 w-full max-w-sm">
                            <div className="flex justify-center items-end gap-1 h-16">
                                <div className="w-2 bg-[#F5C26B] h-8 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                                <div className="w-2 bg-[#F5C26B] h-12 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                                <div className="w-2 bg-[#F5C26B] h-6 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                                <div className="w-2 bg-[#F5C26B] h-14 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                                <div className="w-2 bg-[#F5C26B] h-10 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
                            </div>
                            <div className="space-y-2 px-6">
                                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                <div className="h-2 w-2/3 bg-white/10 rounded-full mx-auto"></div>
                            </div>
                            <div className="flex justify-center gap-4 mt-6">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-red-400 bg-red-900/10">
                                    <PhoneOff className="w-5 h-5" />
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5">
                                    <MicOff className="w-5 h-5" />
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl font-medium text-white tracking-tight">AI built to fit <span className="text-gold-gradient">any business.</span></h2>
                    <p className="text-neutral-500 mt-2">Deep vertical expertise across all major sectors.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Industry Items */}
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <HardHat className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Construction</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <Landmark className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Finance</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <ShoppingBag className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Retail</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <Utensils className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Restaurants</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <Building className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Real Estate</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <Truck className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Logistics</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <Activity className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Healthcare</span>
                </div>
                <div className="p-6 border border-white/5 rounded-lg hover:border-[#F5C26B]/40 hover:bg-[#F5C26B]/5 transition-all cursor-default group">
                    <Rocket className="w-6 h-6 text-[#F5C26B] mb-3 opacity-70 group-hover:opacity-100" />
                    <span className="block text-sm font-medium text-neutral-300 group-hover:text-white">Tech Startups</span>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5C26B] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-white mb-16 text-center tracking-tight">Why companies choose Heavenzy.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Vertical Separators for Desktop */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                <div className="text-center px-6">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-[#F5C26B]/30 flex items-center justify-center text-[#F5C26B] bg-[#F5C26B]/5">
                        <Gem className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">Premium Engineering</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">We don't just write code. We architect enterprise-level systems designed for stability and luxury performance.</p>
                </div>

                <div className="text-center px-6">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-[#F5C26B]/30 flex items-center justify-center text-[#F5C26B] bg-[#F5C26B]/5">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">Fast Delivery</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Leveraging our own proprietary AI accelerators, we deploy complex software in weeks, not months.</p>
                </div>

                <div className="text-center px-6">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-[#F5C26B]/30 flex items-center justify-center text-[#F5C26B] bg-[#F5C26B]/5">
                        <Settings2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">Fully Custom Systems</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">No templates. No cookie-cutter solutions. Every line of code is tailor-made for your unique ecosystem.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl p-1 bg-gold-gradient relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="bg-black rounded-[20px] px-8 py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20"></div>
                
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight relative z-10">Let's Build Your <span className="text-gold-gradient">AI System.</span></h2>
                <p className="text-neutral-400 mb-10 text-lg relative z-10">Transform your operations with next-generation intelligence.</p>
                
                <button onClick={onStart} className="relative z-10 px-10 py-4 bg-gold-gradient text-black text-lg font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(245,194,107,0.4)] transition-all transform hover:-translate-y-1">
                    Start Your Project
                </button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                {/* Brand Column */}
                <div className="md:col-span-4 space-y-6">
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#F5C26B]" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.5"></circle>
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"></path>
                        </svg>
                        <span className="text-white font-medium tracking-tight text-xl">HEAVENZY</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                        Engineered intelligence for the modern enterprise. Defining the future of software interaction.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-500 hover:text-[#F5C26B] transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-neutral-500 hover:text-[#F5C26B] transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-neutral-500 hover:text-[#F5C26B] transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Contact Column (New) */}
                <div className="md:col-span-5 md:col-start-6 space-y-6">
                    <h3 className="text-sm font-medium text-white tracking-wide uppercase opacity-90">Direct Contact</h3>
                    <div className="grid gap-4">
                        {/* Contact Card 1 */}
                        <div className="flex items-start gap-4 group p-3 -ml-3 rounded-xl transition-colors hover:bg-white/5">
                            <div className="mt-1 p-2 rounded-lg bg-[#F5C26B]/10 text-[#F5C26B] border border-[#F5C26B]/20 group-hover:border-[#F5C26B]/50 transition-colors">
                                <User className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 font-medium mb-0.5">Principal</p>
                                <p className="text-white font-medium">Andre Arroyo</p>
                            </div>
                        </div>

                        {/* Contact Card 2 */}
                        <a href="tel:+15875687333" className="flex items-start gap-4 group p-3 -ml-3 rounded-xl transition-colors hover:bg-white/5">
                            <div className="mt-1 p-2 rounded-lg bg-[#F5C26B]/10 text-[#F5C26B] border border-[#F5C26B]/20 group-hover:border-[#F5C26B]/50 transition-colors">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 font-medium mb-0.5">Phone</p>
                                <p className="text-neutral-300 group-hover:text-[#F5C26B] transition-colors">+1 (587) 568-7333</p>
                            </div>
                        </a>

                        {/* Contact Card 3 */}
                        <a href="mailto:andrearroyo4b@gmail.com" className="flex items-start gap-4 group p-3 -ml-3 rounded-xl transition-colors hover:bg-white/5">
                            <div className="mt-1 p-2 rounded-lg bg-[#F5C26B]/10 text-[#F5C26B] border border-[#F5C26B]/20 group-hover:border-[#F5C26B]/50 transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 font-medium mb-0.5">Email</p>
                                <p className="text-neutral-300 group-hover:text-[#F5C26B] transition-colors">andrearroyo4b@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Links Column */}
                <div className="md:col-span-2 space-y-6">
                    <h3 className="text-sm font-medium text-white tracking-wide uppercase opacity-90">Links</h3>
                    <div className="flex flex-col gap-3 text-sm text-neutral-500">
                        <a href="#" className="hover:text-white transition-colors">Services</a>
                        <a href="#" className="hover:text-white transition-colors">Industries</a>
                        <a href="#" className="hover:text-white transition-colors">Process</a>
                        <a href="#" className="hover:text-white transition-colors">Client Login</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xs text-neutral-600">
                    © 2024 Heavenzy AI. All rights reserved.
                </div>
                <div className="flex gap-6 text-xs text-neutral-600">
                    <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};