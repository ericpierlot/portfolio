import React, { useContext } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { Contenu } from './components/contenu/Contenu';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './context/language/LanguageContext';

import './global.css';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <Navbar />
        <Contenu />
        <Footer />
      </LanguageProvider>
    </Router>
  );
};

export default App;
