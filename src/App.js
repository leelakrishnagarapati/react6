import React from 'react';
import './App.css';
import Header from './Component_6/Header';
import About from './Component_6/About';
import Projects from './Component_6/Project';
import Contact from './Component_6/Contact';
import "./Component_6/style.css";
function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;