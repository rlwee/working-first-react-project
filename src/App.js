import React from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNfo/index';
import Highlight from './components/Highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';



function App() {
  return (
    <div className="App" style={{ height:"1350px",
                                  background:'cornflowerblue'}}>
      <Element name="header">
        <Header/>
      </Element>                 
      
      <Featured/>

      <Element name="venueNFO">
        <VenueNfo/>
      </Element>
      
      <Element name="highlight">
        <Highlight/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>
      
      <Element name="location">
        <Location/>
      </Element>
      
      <Footer/>

    </div>
  );
}

export default App;
