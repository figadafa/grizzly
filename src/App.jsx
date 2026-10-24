import React from 'react';
import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;
