import React from 'react';
import { EDUCATION } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Academic Background</h2>
          <p className="mt-4 text-slate-500">Foundational knowledge in public policy and political science.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${index === 0 ? 'bg-amber-700' : index === 1 ? 'bg-red-700' : 'bg-blue-700'}`}></div>
              
              <div className="h-14 w-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-7 w-7 text-slate-700" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 min-h-[3.5rem] flex items-center">{edu.school}</h3>
              <p className="text-blue-600 font-medium text-sm mb-4">{edu.degree}</p>
              
              {edu.details && (
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                  {edu.details}
                </p>
              )}
              
              <div className="mt-auto flex items-center text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                <Calendar className="h-3 w-3 mr-1.5" />
                {edu.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;