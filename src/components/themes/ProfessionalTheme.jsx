import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, Github, Linkedin, Globe, MapPin, Phone } from 'lucide-react';

const ProfessionalTheme = () => {
    const { data } = usePortfolio();
    const { personalInfo, skills, projects, experience } = data;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-serif">
            <div className="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto bg-white shadow-2xl my-0 md:my-10">

                {/* Sidebar */}
                <aside className="w-full md:w-1/3 bg-slate-900 text-white p-10 flex flex-col">
                    <div className="mb-10 text-center md:text-left">
                        <div className="inline-block w-24 h-24 bg-slate-700 rounded-full mb-6 flex items-center justify-center text-3xl font-bold">
                            {personalInfo.fullName ? personalInfo.fullName.substring(0, 2).toUpperCase() : 'ME'}
                        </div>
                        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || 'Your Name'}</h1>
                        <p className="text-slate-400 text-lg">{personalInfo.title || 'Professional Title'}</p>
                    </div>

                    <div className="space-y-6 mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-700 pb-2">Contact</h3>
                        <div className="space-y-3 text-sm text-slate-300">
                            {personalInfo.email && <div className="flex items-center gap-3"><Mail size={16} /> {personalInfo.email}</div>}
                            {personalInfo.phone && <div className="flex items-center gap-3"><Phone size={16} /> {personalInfo.phone}</div>}
                            {personalInfo.location && <div className="flex items-center gap-3"><MapPin size={16} /> {personalInfo.location}</div>}
                            {personalInfo.social.website && <div className="flex items-center gap-3"><Globe size={16} /> {personalInfo.social.website}</div>}
                            {personalInfo.social.linkedin && <div className="flex items-center gap-3"><Linkedin size={16} /> {personalInfo.social.linkedin}</div>}
                            {personalInfo.social.github && <div className="flex items-center gap-3"><Github size={16} /> {personalInfo.social.github}</div>}
                        </div>
                    </div>

                    {skills.length > 0 && (
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-700 pb-2 mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>

                {/* Main Content */}
                <main className="w-full md:w-2/3 p-10 md:p-16">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-200 pb-2 mb-6">Profile</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {personalInfo.bio || 'Experienced professional with a demonstrated history of working in the industry. Skilled in various technologies and committed to delivering high-quality results.'}
                        </p>
                    </section>

                    {experience.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-200 pb-2 mb-6">Experience</h2>
                            <div className="space-y-8">
                                {experience.map(exp => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                                            <span className="text-sm font-bold text-slate-500">{exp.period}</span>
                                        </div>
                                        <div className="text-slate-700 italic mb-2">{exp.position}</div>
                                        <p className="text-slate-600">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {projects.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-200 pb-2 mb-6">Projects</h2>
                            <div className="space-y-6">
                                {projects.map(project => (
                                    <div key={project.id}>
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                                            {project.link && <a href={project.link} className="text-sm text-blue-800 hover:underline">View Link</a>}
                                        </div>
                                        <p className="text-slate-600 mb-2">{project.description}</p>
                                        <div className="flex gap-2 text-sm text-slate-500">
                                            <span className="font-semibold">Tech:</span> {project.tags.join(', ')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProfessionalTheme;
