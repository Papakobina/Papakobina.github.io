import './App.css';
import TopNavBarComponent from './components/TopNavBar/TopNav';
import AboutPageComponent from "./components/AboutPageComponent/AboutPage";
import BlogPageComponent from './components/BlogPageComponent/BlogPage';
import ContactPageComponent from './components/ContactPageComponent/ContactPage';
import FooterComponent from './FooterComponent/footerComponent';
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
        <Route path="about" element={<AboutPageComponent />}/>
        <Route path="blog" element={<BlogPageComponent />}/>
      </Routes>
      <FooterComponent />

    </div>
  );
}

export default App;
