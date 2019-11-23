import React from 'react';
import logo from './logo.svg';
import Header from './layout/compenents/corps/Header';
import Footer from './layout/compenents/corps/Footer';
import Content from './layout/compenents/corps/Content';
import MainSidebar from './layout/compenents/aside/MainSidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSidebar/>
      <Content />
      <Footer appname="Governance des formation" version="0.1" annee="2019-2020" urlcpy="www.myriamScool.com"/>
    </div>
  );
}

export default App;
