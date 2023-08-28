import { Button, Card } from "react-bootstrap"

function Team() {
    return (

        <>
        <h1>

           Our Staff/Team
        </h1>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Tom</Card.Title>
        <Card.Text>
         Our founding pastor
        </Card.Text>
        <Button variant="primary">Contact Tom</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default Team