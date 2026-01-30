import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Sparkles, Plus, X } from 'lucide-react';

const SkillsForm = () => {
    const { data, addSkill, removeSkill } = usePortfolio();
    const [newSkill, setNewSkill] = useState('');

    const handleAddKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    const handleAdd = () => {
        if (newSkill.trim()) {
            addSkill(newSkill.trim());
            setNewSkill('');
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Sparkles size={20} /> Skills
            </h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Add a skill (e.g. React, Python, UI Design)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={handleAddKey}
                />
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-1"
                >
                    <Plus size={18} /> Add
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                    <div key={index} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm text-sm">
                        <span>{skill}</span>
                        <button
                            onClick={() => removeSkill(index)}
                            className="text-gray-400 hover:text-red-500 transition"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
                {data.skills.length === 0 && (
                    <p className="text-sm text-gray-500 italic">No skills added yet.</p>
                )}
            </div>
        </div>
    );
};

export default SkillsForm;
