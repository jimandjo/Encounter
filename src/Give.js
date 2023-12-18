import Card from 'react-bootstrap/Card';
import WelcomePic from "./WelcomePic.jpg";

function Give() {
    return (
      <Card className="bg-info text-black align-center">
        <Card.Img style={{ height:400 }}  src={WelcomePic} alt="Encounter Church" fluid/>
        <Card.Title>Welcome to Encounter Church of Nappanee!</Card.Title>
          <Card.Text><p><br></br> 
          This is where we place the link to online giving. <br></br></p>
          </Card.Text>
        
      </Card>
    );
  }

  export default Give;
  