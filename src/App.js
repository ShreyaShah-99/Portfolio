import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ButterflyReveal from './components/ButterflyReveal';
import Terminal from './components/Terminal';
import './App.css';

const sections = [
  { id: 'hero', Component: Hero },
  { id: 'about', Component: About },
  { id: 'timeline', Component: Timeline },
  { id: 'skills', Component: Skills },
  { id: 'projects', Component: Projects }
];

function App() {
  return (
    <div className="App relative overflow-hidden">
      <ButterflyReveal />
      <Terminal />
      <Header />
      {sections.map(({ id, Component }) => (
        <div key={id} id={id}><Component /></div>
      ))}
    </div>
  );
}

export default App;