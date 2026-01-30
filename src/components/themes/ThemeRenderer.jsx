import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MinimalTheme from './MinimalTheme';
import CreativeTheme from './CreativeTheme';
import ProfessionalTheme from './ProfessionalTheme';

const ThemeRenderer = () => {
    const { theme } = usePortfolio();

    switch (theme) {
        case 'creative':
            return <CreativeTheme />;
        case 'professional':
            return <ProfessionalTheme />;
        case 'minimal':
        default:
            return <MinimalTheme />;
    }
};

export default ThemeRenderer;
