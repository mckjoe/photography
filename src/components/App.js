import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import ImageSlider from './ImageSlider';
import HomepageText from './HomepageText';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='test'>
        <Header />
        <hr />
        <ImageSlider />
        <HomepageText />
        <Footer />
      </div>
    );
  }
}

export default App;
