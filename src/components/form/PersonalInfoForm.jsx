import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { User, Mail, Link as LinkIcon, MapPin, Phone, Github, Linkedin, Twitter, Globe } from 'lucide-react';

const PersonalInfoForm = () => {
    const { data, updatePersonalInfo, updateSocial } = usePortfolio();
    const { personalInfo } = data;

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <User size={20} /> Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                        value={personalInfo.fullName}
                        onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="Full Stack Developer"
                        value={personalInfo.title}
                        onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">About Me</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition h-24"
                        placeholder="Write a short professional bio..."
                        value={personalInfo.bio}
                        onChange={(e) => updatePersonalInfo('bio', e.target.value)}
                    />
                </div>

                {/* Contact Info */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Mail size={14} /> Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="john@example.com"
                        value={personalInfo.email}
                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Phone size={14} /> Phone</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="+1 234 567 890"
                        value={personalInfo.phone}
                        onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><MapPin size={14} /> Location</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="New York, USA"
                        value={personalInfo.location}
                        onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    />
                </div>

                {/* Social Links */}
                <div className="md:col-span-2 border-t pt-4 mt-2">
                    <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Social Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1 flex items-center gap-1"><Github size={12} /> GitHub</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                                placeholder="github.com/username"
                                value={personalInfo.social.github}
                                onChange={(e) => updateSocial('github', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1 flex items-center gap-1"><Linkedin size={12} /> LinkedIn</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                                placeholder="linkedin.com/in/username"
                                value={personalInfo.social.linkedin}
                                onChange={(e) => updateSocial('linkedin', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1 flex items-center gap-1"><Twitter size={12} /> Twitter (X)</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                                placeholder="twitter.com/username"
                                value={personalInfo.social.twitter}
                                onChange={(e) => updateSocial('twitter', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1 flex items-center gap-1"><Globe size={12} /> Website</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                                placeholder="your-website.com"
                                value={personalInfo.social.website}
                                onChange={(e) => updateSocial('website', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
