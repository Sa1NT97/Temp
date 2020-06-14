import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
        ava + description My posts New post post 1 post 2
      </div>
    </div>
  );
};

export default App;