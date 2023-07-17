import Card from 'react-bootstrap/Card';
import WelcomePic from "./WelcomePic.jpg";

function About() {
  return (
    <Card className="bg-info text-black align-center">
      <Card.Img style={{ height:400 }}  src={WelcomePic} alt="Encounter Church" />
      <Card.Body>About Encounter Church of Nappanee
        <Card.Text><p>Welcome to Encounter Church of Nappanee!<br></br> 
        The latest happenings and schedule of the church are listed on the first page of this site.<br></br> 
        We currently meet the 1st and 3rd Sundays of every month at 107 E Marion St, Nappanee, IN 46550.<br></br> 
        The weeks we are not there we meet in small groups in members homes.<br></br> 
        For further information or details please message us through Facebook or email at encounter.nappanee@gmail.com.<br></br>
        We're excited to connect with you! <br></br></p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;