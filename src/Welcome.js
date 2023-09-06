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
      <Card.Img style={{ height:400 }}  src={Banner} alt="Encounter Church" class="img-fluid img-thumbnail" />
      <Card.Body>
        <Card.Title>Pursuing the heart of God through divine encounters</Card.Title>
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