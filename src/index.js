import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/homePage'
import Header from './components/header'
import Footer from './components/footer'

import './assets/styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="container container-global">
      <Header />
      <Home />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
