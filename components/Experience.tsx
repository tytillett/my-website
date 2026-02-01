import React from 'react';
import { EXPERIENCE, EDUCATION, RESUME_SUMMARY, CONTACT_INFO } from '../data';
import { Building, GraduationCap, Briefcase, Linkedin } from 'lucide-react';
import { Job } from '../types';

const Experience: React.FC = () => {
  
  // Group Experience by Company for cleaner list
  const groupedJobs = EXPERIENCE.reduce((acc, job) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.company === job.company) {
      lastGroup.jobs.push(job);
    } else {
      acc.push({ company: job.company, jobs: [job] });
    }
    return acc;
  }, [] as { company: string, jobs: Job[] }[]);

  // Get key highlights for the "At a Glance" section
  const currentRole = EXPERIENCE[0]; // Assumes first item is latest
  const topEducation = EDUCATION.find(e => e.school.includes('Harvard')) || EDUCATION[0];

  return (
    <section id="experience" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Narrative Summary */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Professional Narrative</h2>
                <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">My Journey</h3>
                <div className="prose prose-lg text-slate-600 leading-relaxed">
                    <p>{RESUME_SUMMARY}</p>
                </div>
                
                <div className="mt-8">
                     <a 
                        href={`https://${CONTACT_INFO.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                     >
                        <Linkedin className="h-4 w-4 mr-2" />
                        View LinkedIn Profile
                     </a>
                </div>
            </div>
            
            {/* "At a Glance" Highlights */}
            <div className="grid gap-5 self-center bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2">At a Glance</h4>
                
                {/* Latest Role Highlight */}
                <div className="flex items-start gap-4 pb-6 border-b border-slate-50">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600 shrink-0">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Current Focus</div>
                        <div className="font-bold text-slate-900 text-lg">{currentRole.title}</div>
                        <div className="text-slate-600">{currentRole.company}</div>
                    </div>
                </div>

                {/* Education Highlight */}
                <div className="flex items-start gap-4 pt-2">
                    <div className="bg-amber-50 p-3 rounded-xl text-amber-600 shrink-0">
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Education</div>
                        <div className="font-bold text-slate-900 text-lg">{topEducation.degree}</div>
                        <div className="text-slate-600">{topEducation.school}</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Split Lists: History & Education */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 pt-12 border-t border-slate-200">
            
            {/* Professional History Column */}
            <div>
                <h4 className="font-display font-bold text-2xl text-slate-900 mb-8 flex items-center gap-3">
                    <Building className="h-6 w-6 text-slate-400" />
                    Professional History
                </h4>
                <div className="space-y-10">
                    {groupedJobs.map((group, idx) => (
                        <div key={idx} className="group">
                            <h5 className="font-bold text-lg text-slate-900 mb-3">{group.company}</h5>
                            <div className="space-y-3 pl-4 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">
                                {group.jobs.map(job => (
                                    <div key={job.id}>
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                            <span className="font-medium text-slate-700">{job.title}</span>
                                            <span className="text-xs font-mono text-slate-400 shrink-0">{job.period}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Academic Background Column */}
            <div>
                 <h4 className="font-display font-bold text-2xl text-slate-900 mb-8 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-slate-400" />
                    Academic Background
                </h4>
                <div className="space-y-10">
                    {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="group">
                             <h5 className="font-bold text-lg text-slate-900 mb-1">{edu.school}</h5>
                             <div className="pl-4 border-l-2 border-slate-100 group-hover:border-amber-200 transition-colors">
                                <div className="font-medium text-slate-700">{edu.degree}</div>
                                <div className="text-xs font-mono text-slate-400 mt-1">{edu.year}</div>
                                {edu.details && (
                                    <div className="text-sm text-slate-500 mt-2 italic leading-snug">
                                        {edu.details}
                                    </div>
                                )}
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
