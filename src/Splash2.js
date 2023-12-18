import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Banner from './Banner.jpg';
import WelcomePic from "./WelcomePic.jpg";
import SmallGroupsPic from "./SmallGroupsPic.jpg"
import { Link } from 'react-router-dom';

export default function Splash2() {
  return (
    <MDBCarousel  showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Banner}
        alt='Banner'
      >
        <h5>Pursuing the heart of God through divine encounters</h5>
        <p>Come join the Encounter family this Sunday at 9:30 as we worship our King and study his word together! </p>
        <p>107 E Marion St, Nappanee, IN 46550  -  Enter through the back doors.</p>
        <p>See More - Click Here</p>
        <Link to="/" className="nav-link">More About Encounter church</Link>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={WelcomePic}
        alt='Welcome'
      >
        <h5 style={{color: 'black'}}>Welcome to Encounter Church of Nappanee!</h5>
        <Link to="/about" className="nav-link">Click Here</Link>
        <p></p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={SmallGroupsPic}
        alt='SmallGroups'
      >
        <h5></h5>
        <p>Encounter Church of Nappanee meets twice a month in small groups.</p>
        <Link to="/smallgroups" className="nav-link">Small Groups</Link>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}