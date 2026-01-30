import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Clock, Briefcase, X } from 'lucide-react';

const ExperienceForm = () => {
    const { data, addExperience, removeExperience } = usePortfolio();
    const [exp, setExp] = useState({ company: '', position: '', period: '', description: '' });

    const handleAdd = () => {
        if (exp.company.trim() && exp.position.trim()) {
            addExperience(exp);
            setExp({ company: '', position: '', period: '', description: '' });
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Clock size={20} /> Experience
            </h2>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Company Name"
                        value={exp.company}
                        onChange={(e) => setExp({ ...exp, company: e.target.value })}
                    />
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Job Position"
                        value={exp.position}
                        onChange={(e) => setExp({ ...exp, position: e.target.value })}
                    />
                </div>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Period (e.g. 2020 - Present)"
                    value={exp.period}
                    onChange={(e) => setExp({ ...exp, period: e.target.value })}
                />
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-20"
                    placeholder="Job Description / Achievements"
                    value={exp.description}
                    onChange={(e) => setExp({ ...exp, description: e.target.value })}
                />
                <button
                    onClick={handleAdd}
                    disabled={!exp.company || !exp.position}
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Add Experience
                </button>
            </div>

            <div className="space-y-2">
                {data.experience.map((e) => (
                    <div key={e.id} className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-start shadow-sm">
                        <div>
                            <h3 className="font-semibold">{e.position} <span className="text-gray-500 font-normal">at</span> {e.company}</h3>
                            <p className="text-xs text-gray-500 mb-1">{e.period}</p>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">{e.description}</p>
                        </div>
                        <button
                            onClick={() => removeExperience(e.id)}
                            className="text-gray-400 hover:text-red-500 p-1"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
                {data.experience.length === 0 && (
                    <p className="text-sm text-gray-500 italic text-center py-4">No experience added yet.</p>
                )}
            </div>
        </div>
    );
};

export default ExperienceForm;
