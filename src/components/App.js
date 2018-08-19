import React, { Component } from 'react';
import '../css/App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Galleries from './Galleries';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='test'>
        <Header />
        <hr />
        <switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/galleries' component={Galleries} />
        </switch>
        <Footer />
      </div>
    );
  }
}

export default App;
