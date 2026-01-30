import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Mail, Github, Linkedin, Globe, Twitter } from 'lucide-react';

const CreativeTheme = () => {
    const { data } = usePortfolio();
    const { personalInfo, skills, projects, experience } = data;

    return (
        <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-pink-500 selection:text-white">
            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Header */}
                <header className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            {personalInfo.fullName || 'HELLO WORLD'}
                        </h1>
                        <p className="text-2xl md:text-3xl font-bold text-gray-400 mb-6">{personalInfo.title || 'Creative Developer'}</p>
                        <div className="flex gap-4">
                            {personalInfo.social.email && <a href={`mailto:${personalInfo.social.email}`} className="p-2 bg-neutral-800 rounded-full hover:bg-pink-500 transition"><Mail size={24} /></a>}
                            {personalInfo.social.github && <a href={`https://${personalInfo.social.github}`} className="p-2 bg-neutral-800 rounded-full hover:bg-pink-500 transition"><Github size={24} /></a>}
                            {personalInfo.social.linkedin && <a href={`https://${personalInfo.social.linkedin}`} className="p-2 bg-neutral-800 rounded-full hover:bg-pink-500 transition"><Linkedin size={24} /></a>}
                        </div>
                    </div>
                    <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-4 border-pink-500 pl-6">
                        {personalInfo.bio || 'I create digital experiences that blend art and technology. Innovation is my passion, and code is my canvas.'}
                    </div>
                </header>

                {/* Skills ticker or cloud */}
                {skills.length > 0 && (
                    <section className="mb-20">
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="px-6 py-3 bg-neutral-800 rounded-full text-xl font-bold hover:scale-110 transition cursor-default border border-neutral-700 hover:border-pink-500 hover:text-pink-400">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-4xl font-black mb-10 text-white flex items-center gap-4">
                            <span className="w-12 h-2 bg-pink-500"></span> WORKS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map(project => (
                                <div key={project.id} className="group relative bg-neutral-800 rounded-2xl overflow-hidden p-8 hover:bg-neutral-700 transition duration-300">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold text-neutral-900 bg-pink-400 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold border-b-2 border-pink-500 pb-1 hover:text-pink-400 transition">View Project</a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-4xl font-black mb-10 text-white flex items-center gap-4">
                            <span className="w-12 h-2 bg-purple-500"></span> PATH
                        </h2>
                        <div className="space-y-12 border-l-2 border-neutral-800 ml-3 pl-8 relative">
                            {experience.map(exp => (
                                <div key={exp.id} className="relative">
                                    <span className="absolute -left-[41px] top-2 w-5 h-5 bg-purple-500 rounded-full border-4 border-neutral-900"></span>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                        <h3 className="text-2xl font-bold">{exp.position}</h3>
                                        <span className="text-purple-400 font-bold">@ {exp.company}</span>
                                    </div>
                                    <span className="inline-block bg-neutral-800 px-3 py-1 rounded text-sm text-gray-300 mb-4">{exp.period}</span>
                                    <p className="text-gray-400 leading-relaxed text-lg">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="py-10 text-center text-gray-500 font-bold tracking-widest uppercase">
                    Designed with Portfolio Creator
                </footer>
            </div>
        </div>
    );
};

export default CreativeTheme;
