import Card from 'react-bootstrap/Card';
import SmallGroupsPic from "./SmallGroupsPic.jpg"

function SmallGroups() {
  return (
    <Card className="bg-info text-black align-center">
      <Card.Img style={{ height:400 }}  src={SmallGroupsPic} alt="Encounter Church" />
      <Card.Body>
        <Card.Title>Small Groups</Card.Title>
        <Card.Text>
        Encounter Church of Nappanee meets twice a month in small groups.<br></br> 
        This gives us the opportunity to grow in deeper relationships with each other.<br></br>  
        Saturday night and Sunday morning groups available.<br></br>  
        Let us know if you're interested and we can get you connected! Have a great weekend!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SmallGroups;