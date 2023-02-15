import './App.css';
import TopNavBarComponent from './components/TopNavBar/TopNav';
import ContactPageComponent from './components/ContactPageComponent/ContactPage';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomeApp from './HomeApp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBarComponent />
      </header>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="contact" element={<ContactPageComponent />}/>
      </Routes>


    </div>
  );
}

export default App;
