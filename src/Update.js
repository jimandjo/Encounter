import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import  Form  from "react-bootstrap/Form";

function EditForm() {
    {
      return (
      
      <>
      {/* Form to edit the Welcome Page */}
        <Container>
        <Form>
            <legend>Edit Welcome Page</legend>
          <Form.Group controlId="form.Line1">
              <Form.Label>Edit Line 1</Form.Label>
              <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="form.Line2">
              <Form.Label>Edit Line 2</Form.Label>
              <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="form.Calendar">
              <Form.Label>Edit Calendar</Form.Label>
              <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button>Update</Button>
        </Form>
      </Container>
{/* Form to edit the About Page */}
<Container>
<Form>
    <legend>Edit About Page</legend>
  <Form.Group controlId="form.Line1">
      <Form.Label>Edit Line 1</Form.Label>
      <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="form.Line2">
      <Form.Label>Edit Line 2</Form.Label>
      <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="form.About">
      <Form.Label>Edit Body</Form.Label>
      <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button>Update</Button>
</Form>
</Container>
{/* Form to edit the Small Groups page */}
<Container>
<Form>
    <legend>Edit Small Groups Page</legend>
  <Form.Group controlId="form.Line1">
      <Form.Label>Edit Line 1</Form.Label>
      <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="form.Line2">
      <Form.Label>Edit Line 2</Form.Label>
      <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="form.SmallGroups">
      <Form.Label>Edit Body</Form.Label>
      <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button>Update</Button>
</Form>
</Container>


</>
      );
    }
         
  }
  
  export default EditForm;