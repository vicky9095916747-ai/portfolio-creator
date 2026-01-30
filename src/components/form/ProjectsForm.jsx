import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Briefcase, Plus, X, Image as ImageIcon } from 'lucide-react';

const ProjectsForm = () => {
    const { data, addProject, removeProject } = usePortfolio();
    const [project, setProject] = useState({ title: '', description: '', link: '', tags: '' });

    const handleAdd = () => {
        if (project.title.trim()) {
            addProject({
                ...project,
                tags: project.tags.split(',').map(tag => tag.trim()).filter(t => t)
            });
            setProject({ title: '', description: '', link: '', tags: '' });
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Briefcase size={20} /> Projects
            </h2>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Project Title"
                    value={project.title}
                    onChange={(e) => setProject({ ...project, title: e.target.value })}
                />
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-20"
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) => setProject({ ...project, description: e.target.value })}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Project Link (URL)"
                        value={project.link}
                        onChange={(e) => setProject({ ...project, link: e.target.value })}
                    />
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Tags (comma separated)"
                        value={project.tags}
                        onChange={(e) => setProject({ ...project, tags: e.target.value })}
                    />
                </div>
                <button
                    onClick={handleAdd}
                    disabled={!project.title}
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Add Project
                </button>
            </div>

            <div className="space-y-2">
                {data.projects.map((p) => (
                    <div key={p.id} className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-start shadow-sm">
                        <div>
                            <h3 className="font-semibold">{p.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                            {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 block">{p.link}</a>}
                            <div className="flex gap-1 mt-2">
                                {p.tags && p.tags.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">{t}</span>)}
                            </div>
                        </div>
                        <button
                            onClick={() => removeProject(p.id)}
                            className="text-gray-400 hover:text-red-500 p-1"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
                {data.projects.length === 0 && (
                    <p className="text-sm text-gray-500 italic text-center py-4">No projects added yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectsForm;
