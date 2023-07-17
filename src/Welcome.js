import Card from 'react-bootstrap/Card';
import Banner from "./Banner 4 X 8.jpg";

function Welcome() {
  return (
    <Card className="bg-info text-black align-center">
      <Card.Img style={{ height:400 }}  src={Banner} alt="Encounter Church" />
      <Card.Body>
        <Card.Title>Pursuing the heart of God through divine encounters</Card.Title>
        <Card.Text>
        Come join the Encounter family this Sunday at 9:30 as we worship our King and study his word together! <br></br>
        </Card.Text>
        <Card.Text>107 E Marion St, Nappanee, IN 46550</Card.Text>

        <Card.Text><p>July Schedule:<br></br></p>
<p>July 2nd- Service 9:30<br></br>
July 9th- Service 9:30<br></br>
July 16th- Chair Cleaning Party!<br></br>
July 23rd- Service 9:30<br></br>
July 30th- Small Group<br></br></p>
<p>*Chair Party: This will be held at the church in the parking lot. We need volunteers to help clean our new-to-us upholstered chairs! (Whoo-hoo!) Party will get started @10:00am and will finish off with some pizza for lunch! This will be a great opportunity for fellowship and to serve!</p></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Welcome;