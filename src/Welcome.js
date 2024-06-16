import Card from 'react-bootstrap/Card';
import Banner from './Banner.jpg'
import './style.css';
import { useState } from 'react';

function Welcome() {
  const [welcome, setWelcome] = useState('Calendar goes here....');

  function updateWelcome(newWelcome) {
    setWelcome(newWelcome);
  }


  return (
    <Card className="bg-info text-black align-center" style={{ width: '100%' }}>
      <Card.Img style={{ height:400 }}  src={Banner} fluid alt="Encounter Church" />
      <Card.Body>
        <Card.Title>Pursuing the heart of God through divine encounters</Card.Title>
        <Card.Text>When we were called to start a church we all received the same words, we were meant to look different and do “church” differently purely because we want what only the Father has for His/this body.  We threw out all we knew about the “western church” and are letting the Holy Spirit build what He wants. It’s been a hard but refreshing road to only go in directions the Holy Spirit is leading us in. We know we have to make moves and step out but we rely on Him to guide and direct us. The name Encounter came to us because Jesus is the only reason why we’re here. His heart is all we’re seeking.  We want this to be a place of encountering the King of Kings. We’re not running a business, we’re not controlling our finances like one, and we’re going all in for Him. Seeking his purity.</Card.Text>
        <Card.Text>
        Come join the Encounter family this Sunday at 9:30 as we worship our King and study his word together! <br></br>
        </Card.Text>
        <Card.Text>107 E Marion St, Nappanee, IN 46550  -  Enter through the back doors.</Card.Text>

        <Card.Text> {welcome} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Welcome;