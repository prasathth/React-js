import React from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
//import Main from './components/main.js';

function App() {
  return (
    <div>
      <div className="header">
        <h2>Welcome</h2>
        <Header/>
      </div>
      <div className="foot">
        <Footer/>
      </div>
    
    </div>
  );
}

export default App;
