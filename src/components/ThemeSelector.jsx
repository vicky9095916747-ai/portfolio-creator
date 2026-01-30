import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Palette, Layout } from 'lucide-react';

const ThemeSelector = () => {
    const { theme, setTheme } = usePortfolio();

    const themes = [
        { id: 'minimal', name: 'Minimalist', description: 'Clean, simple, and typography-focused.' },
        { id: 'creative', name: 'Creative Bold', description: 'Vibrant, colorful, and expressive.' },
        { id: 'professional', name: 'Professional', description: 'Corporate, structured, and reliable.' },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Palette size={20} /> Choose Theme
            </h2>

            <div className="grid grid-cols-1 gap-3">
                {themes.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`text-left p-4 rounded-lg border-2 transition-all flex items-start gap-4 hover:shadow-md ${theme === t.id
                                ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600'
                                : 'border-gray-200 bg-white hover:border-blue-300'
                            }`}
                    >
                        <div className={`p-2 rounded-md ${theme === t.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                            <Layout size={24} />
                        </div>
                        <div>
                            <h3 className={`font-semibold ${theme === t.id ? 'text-blue-900' : 'text-gray-800'}`}>{t.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{t.description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSelector;
