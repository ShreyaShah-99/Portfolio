import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';

import Projects from './components/Projects';

import Terminal from './components/Terminal';
import Footer from './components/Footer';
import ParallaxEffect from './components/ParallaxEffect';
import ButterflyReveal from './components/ButterflyReveal';

import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

const sections = [
  { id: 'hero', Component: Hero },
  { id: 'about', Component: About },
  { id: 'timeline', Component: Timeline },
  { id: 'projects', Component: Projects }
];

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 overflow-x-hidden relative transition-all duration-700">
        <ParallaxEffect />
        <Terminal />
        <ButterflyReveal />

        <Header />
        {sections.map(({ id, Component }) => (
          <div key={id} id={id} className="relative z-10"><Component /></div>
        ))}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;