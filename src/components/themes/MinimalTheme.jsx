import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, Github, Linkedin, Globe, Twitter, ArrowUpRight } from 'lucide-react';

const MinimalTheme = () => {
    const { data } = usePortfolio();
    const { personalInfo, skills, projects, experience } = data;

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-20">
                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-gray-900">{personalInfo.fullName || 'Your Name'}</h1>
                    <p className="text-xl text-gray-500 mb-6">{personalInfo.title || 'Creative Technologist'}</p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                        {personalInfo.bio || 'I build accessible, pixel-perfect, performant, and delightful digital experiences.'}
                    </p>

                    <div className="flex gap-4">
                        {personalInfo.social.email && (
                            <a href={`mailto:${personalInfo.social.email}`} className="text-gray-500 hover:text-black transition">
                                <Mail size={20} />
                            </a>
                        )}
                        {personalInfo.social.github && (
                            <a href={`https://${personalInfo.social.github}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition">
                                <Github size={20} />
                            </a>
                        )}
                        {personalInfo.social.linkedin && (
                            <a href={`https://${personalInfo.social.linkedin}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition">
                                <Linkedin size={20} />
                            </a>
                        )}
                        {personalInfo.social.twitter && (
                            <a href={`https://${personalInfo.social.twitter}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition">
                                <Twitter size={20} />
                            </a>
                        )}
                        {personalInfo.social.website && (
                            <a href={`https://${personalInfo.social.website}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition">
                                <Globe size={20} />
                            </a>
                        )}
                    </div>
                </header>

                {/* Experience */}
                {experience.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Experience</h2>
                        <div className="space-y-8">
                            {experience.map(exp => (
                                <div key={exp.id} className="group">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                        <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                                        <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                                    </div>
                                    <div className="text-gray-600 mb-1">{exp.company}</div>
                                    <p className="text-gray-600 leading-relaxed text-sm">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Projects</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {projects.map(project => (
                                <div key={project.id} className="group border border-gray-100 hover:border-gray-200 p-6 rounded-lg transition hover:shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition flex items-center gap-1">
                                            {project.title}
                                            {project.link && <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`View ${project.title}`}></a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Skills</h2>
                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                            {skills.map((skill, i) => (
                                <span key={i} className="text-gray-700">{skill}{i !== skills.length - 1 && <span className="text-gray-300">/</span>}</span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
                    <p>© {new Date().getFullYear()} {personalInfo.fullName || 'User'}. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default MinimalTheme;
