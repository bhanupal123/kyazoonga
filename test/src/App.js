import React, { Component } from 'react';
import Header from './component/header';
import Ribbon from './component/ribbon';
import MainContent from './component/mainContent'
import Footer from './component/footer';
import './App.css';
import './styles/css/bootstrap.css';
import './styles/css/bootstrap.css.map';
import './styles/css/site.css';
import './styles/css/site.css.map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <br/>
        <Ribbon />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
