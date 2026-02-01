import React, { useState } from 'react';
import { SKILLS } from '../data';
import { Brain, Cloud, Zap, Layers, Terminal, Award, ChevronRight, Star } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'Core',
      label: 'Strategic Leadership',
      icon: Layers,
      description: 'Driving organizational change and program success through high-level strategy.',
      color: 'blue',
      skills: SKILLS.filter(s => s.category === 'Core')
    },
    {
      id: 'Technical',
      label: 'Policy & Analytics',
      icon: Terminal,
      description: 'Bridging the gap between complex data, regulatory frameworks, and actionable insights.',
      color: 'indigo',
      skills: SKILLS.filter(s => s.category === 'Technical')
    },
    {
      id: 'Certification',
      label: 'Specialized Certifications',
      icon: Award,
      description: 'Validated expertise in cutting-edge technologies and methodologies.',
      color: 'purple',
      skills: SKILLS.filter(s => s.category === 'Certification')
    }
  ];

  const getQualitativeLabel = (level: number) => {
    if (level >= 95) return 'Thought Leader';
    if (level >= 90) return 'Expert';
    if (level >= 85) return 'Advanced';
    return 'Proficient';
  };

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Core Competencies Matrix
          </h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Hover over a domain to explore the specific skills and qualitative expertise I bring to public sector challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            
            // Dynamic coloring classes
            const bgClass = isActive 
                ? (cat.color === 'blue' ? 'bg-blue-600' : cat.color === 'indigo' ? 'bg-indigo-600' : 'bg-purple-600')
                : 'bg-white hover:bg-slate-50';
            
            const textClass = isActive ? 'text-white' : 'text-slate-900';
            const subTextClass = isActive ? 'text-blue-100' : 'text-slate-500';
            const iconClass = isActive ? 'text-white' : `text-${cat.color}-600`;
            const borderClass = isActive ? 'border-transparent shadow-2xl scale-[1.02]' : 'border-slate-200 shadow-sm';

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`
                  relative rounded-3xl border p-8 transition-all duration-500 ease-in-out cursor-default flex flex-col
                  ${bgClass} ${borderClass}
                  ${isActive ? 'lg:row-span-2' : ''}
                `}
              >
                <div className="mb-6 flex items-start justify-between">
                    <div className={`p-3 rounded-2xl ${isActive ? 'bg-white/20 backdrop-blur-sm' : 'bg-slate-100'}`}>
                        <Icon className={`h-8 w-8 ${iconClass}`} />
                    </div>
                    {isActive && <Star className="h-6 w-6 text-yellow-300 animate-pulse" fill="currentColor" />}
                </div>

                <h4 className={`text-2xl font-bold mb-3 ${textClass}`}>{cat.label}</h4>
                <p className={`mb-8 leading-relaxed ${subTextClass}`}>
                    {cat.description}
                </p>

                <div className={`space-y-4 mt-auto transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70 lg:opacity-50'}`}>
                    {cat.skills.map((skill, idx) => (
                        <div key={idx} className="group">
                            <div className={`flex items-center justify-between text-sm mb-1 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                                <span className="font-semibold flex items-center gap-2">
                                    {skill.name}
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-500'}`}>
                                    {getQualitativeLabel(skill.level)}
                                </span>
                            </div>
                            {/* Qualitative bar representation (just a line) */}
                            <div className={`h-1 w-full rounded-full ${isActive ? 'bg-black/20' : 'bg-slate-100'}`}>
                                <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${isActive ? 'bg-white' : `bg-${cat.color}-500`}`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {!isActive && (
                    <div className="absolute bottom-8 right-8 opacity-0 lg:opacity-100 transition-opacity">
                        <ChevronRight className="h-6 w-6 text-slate-300" />
                    </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;