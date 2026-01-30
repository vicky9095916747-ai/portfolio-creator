import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import PersonalInfoForm from '../components/form/PersonalInfoForm';
import SkillsForm from '../components/form/SkillsForm';
import ProjectsForm from '../components/form/ProjectsForm';
import ExperienceForm from '../components/form/ExperienceForm';
import ThemeSelector from '../components/ThemeSelector';
import ThemeRenderer from '../components/themes/ThemeRenderer';
import { Eye, Code, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const EditorPage = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [isPreviewOpen, setIsPreviewOpen] = useState(false); // Mobile preview toggle

    const tabs = [
        { id: 'personal', label: 'Personal Info' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'theme', label: 'Theme' },
    ];

    const handlePrint = () => {
        import('../utils/printHelper').then(module => {
            module.printElement('printable-content');
        });
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar / Editor */}
            <div className={`w-full md:w-[450px] bg-white border-r border-gray-200 flex flex-col h-full z-10 transition-transform duration-300 absolute md:relative print:hidden ${isPreviewOpen ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}>
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        PortfolioBuilder
                    </h1>
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsPreviewOpen(true)}
                    >
                        <Eye size={20} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-blue-600 text-blue-600 bg-blue-50'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {activeTab === 'personal' && <PersonalInfoForm />}
                    {activeTab === 'skills' && <SkillsForm />}
                    {activeTab === 'projects' && <ProjectsForm />}
                    {activeTab === 'experience' && <ExperienceForm />}
                    {activeTab === 'theme' && <ThemeSelector />}
                </div>

                <div className="p-4 border-t border-gray-200 bg-gray-50 text-center text-xs text-gray-400">
                    <p>Fill in details and check the preview on the right.</p>
                </div>
            </div>

            {/* Preview Area */}
            <div className={`flex-1 relative bg-gray-200 overflow-hidden flex flex-col transition-transform duration-300 ${isPreviewOpen ? 'translate-x-0 absolute inset-0 z-20' : 'translate-x-full md:translate-x-0 absolute md:relative'}`}>

                {/* Mobile Header for Preview */}
                <div className="md:hidden bg-white p-3 border-b flex items-center justify-between print:hidden">
                    <button onClick={() => setIsPreviewOpen(false)} className="flex items-center gap-1 text-sm font-medium text-gray-600">
                        <ChevronLeft size={16} /> Back to Editor
                    </button>
                    <span className="font-semibold text-gray-800">Preview</span>
                    <div className="w-8"></div> {/* Spacer */}
                </div>

                {/* Toolbar */}
                <div className="bg-white border-b border-gray-200 p-3 flex justify-between items-center shadow-sm z-10 print:hidden">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Eye size={16} /> Live Preview
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition shadow-lg"
                        >
                            <Download size={16} /> Export PDF / Print
                        </button>
                    </div>
                </div>

                {/* Iframe-like container for isolation/styling context */}
                <div className="flex-1 overflow-y-auto bg-gray-300 p-0 md:p-8">
                    <div id="printable-content" className="bg-white min-h-[calc(100vh-100px)] shadow-2xl mx-auto rounded-none md:rounded-lg overflow-hidden max-w-[1200px] print:m-0 print:shadow-none print:w-full print:max-w-none">
                        <ThemeRenderer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorPage;
