import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <PortfolioProvider>
      <EditorPage />
    </PortfolioProvider>
  );
}

export default App;
