import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { CONTACT_INFO } from './data';
import { ArrowDown, Activity, Brain, Globe, Users, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      <Header />
      
      <main>
        {/* Modern Hero Section */}
        <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="text-left space-y-8 animate-fade-in-up">
                        
                        <div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
                                Ty <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Tillett</span>
                            </h1>
                            <p className="mt-4 text-2xl md:text-3xl text-slate-300 font-light">
                                Policy. Strategy. <span className="font-medium text-white">Analytics.</span>
                            </p>
                        </div>

                        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                            Driving public sector healthcare transformation through data-driven insights, policy innovation, and strategic analysis. Bridging the gap between complex regulations and operational excellence.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a 
                              href={`https://${CONTACT_INFO.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1"
                            >
                                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                View LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    {/* Visual Stats Grid */}
                    <div className="relative hidden lg:grid grid-cols-2 gap-4 animate-float">
                        <div className="glass-dark p-6 rounded-2xl transform translate-y-8 hover:bg-slate-800/50 transition-colors">
                            <Activity className="h-8 w-8 text-emerald-400 mb-4" />
                            <h3 className="text-3xl font-bold text-white">11+</h3>
                            <p className="text-slate-400 text-sm">Years Experience in Health Strategy</p>
                        </div>
                        <div className="glass-dark p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                            <Brain className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-3xl font-bold text-white">AI</h3>
                            <p className="text-slate-400 text-sm">Generative AI & Data Strategy Leader</p>
                        </div>
                        <div className="glass-dark p-6 rounded-2xl transform translate-y-8 hover:bg-slate-800/50 transition-colors">
                            <Users className="h-8 w-8 text-blue-400 mb-4" />
                            <h3 className="text-3xl font-bold text-white">National</h3>
                            <p className="text-slate-400 text-sm">Policy Director & Team Leader</p>
                        </div>
                        <div className="glass-dark p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                            <Globe className="h-8 w-8 text-amber-400 mb-4" />
                            <h3 className="text-xl font-bold text-white">Harvard MPP</h3>
                            <p className="text-slate-400 text-sm">Public Policy & Strategy Education</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce cursor-pointer hover:text-white transition-colors" onClick={() => document.getElementById('skills')?.scrollIntoView()}>
                    <ArrowDown className="h-6 w-6" />
                </div>
            </div>
        </section>

        <Skills />
        <Experience />

        {/* Minimal Footer */}
        <footer id="contact" className="bg-white border-t border-slate-200 py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Let's Connect</h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                    I'm always interested in discussing the future of health policy, AI integration in the public sector, or strategic analytics.
                </p>
                <div className="flex justify-center gap-6">
                     <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                        {CONTACT_INFO.email}
                     </a>
                     <span className="text-slate-300">|</span>
                     <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                        LinkedIn Profile
                     </a>
                </div>
                <div className="mt-12 text-slate-400 text-sm">
                    © {new Date().getFullYear()} Ty Tillett.
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
