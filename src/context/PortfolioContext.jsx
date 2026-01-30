import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
    const [data, setData] = useState({
        personalInfo: {
            fullName: '',
            title: '',
            bio: '',
            email: '',
            phone: '',
            location: '',
            social: {
                linkedin: '',
                github: '',
                twitter: '',
                website: ''
            }
        },
        skills: [],
        projects: [],
        experience: [],
        education: []
    });

    const [theme, setTheme] = useState('minimal');

    const updatePersonalInfo = (field, value) => {
        setData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value }
        }));
    };

    const updateSocial = (field, value) => {
        setData(prev => ({
            ...prev,
            personalInfo: {
                ...prev.personalInfo,
                social: { ...prev.personalInfo.social, [field]: value }
            }
        }));
    }

    const addSkill = (skill) => {
        setData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    };

    const removeSkill = (index) => {
        setData(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }));
    };

    const addProject = (project) => {
        setData(prev => ({ ...prev, projects: [...prev.projects, { ...project, id: Date.now() }] }));
    };

    const removeProject = (id) => {
        setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
    };

    const addExperience = (exp) => {
        setData(prev => ({ ...prev, experience: [...prev.experience, { ...exp, id: Date.now() }] }));
    };

    const removeExperience = (id) => {
        setData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }));
    };

    return (
        <PortfolioContext.Provider value={{
            data,
            theme,
            setTheme,
            updatePersonalInfo,
            updateSocial,
            addSkill,
            removeSkill,
            addProject,
            removeProject,
            addExperience,
            removeExperience
        }}>
            {children}
        </PortfolioContext.Provider>
    );
};
