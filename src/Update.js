import { Button } from "react-bootstrap";
import  Form  from "react-bootstrap/Form";

function Update() {
    return (

        <>
            
            <Form>
            <Form.Group className="mb-3" controlId="WelcomeEdit">
                <Form.Label>Edit Welcome</Form.Label>
                <Form.Control type="text"></Form.Control>
                <Button>Update Welcome</Button>
            </Form.Group>
            </Form>
            
        </>
    )
}

export default Update