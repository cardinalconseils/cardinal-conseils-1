import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              {/* French routes (default) */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* English routes */}
              <Route path="/en" element={<Home />} />
              <Route path="/en/services" element={<Services />} />
              <Route path="/en/about" element={<About />} />
              <Route path="/en/contact" element={<Contact />} />
              
              {/* Redirects for consistency */}
              <Route path="/about" element={<Navigate to="/en/about" replace />} />
              <Route path="/en/a-propos" element={<Navigate to="/en/about" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
