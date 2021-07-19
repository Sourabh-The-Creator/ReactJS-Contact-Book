import { Card, Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Actions/Adduser";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function CreateUser() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [cell, setCell] = useState("");
  let [dob, setDOB] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const users = useSelector((state) => state.UserReducer.users);

  function getForm(e) {
    e.preventDefault();
    let user = { id: users.length, name, email, cell, dob };
    console.warn(user);
    dispatch(addUser(user));
    history.push("/");
  }

  return (
    <>
      <Container className="mt-5 justify-content-center">
        <Card style={{ width: "40rem" }}>
          <Card.Header>New User</Card.Header>

          <Form onSubmit={getForm}>
            {/* This is name group */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/* This is cell group */}
            <Form.Group className="mb-3" controlId="formBasicCell">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="cell_no"
                placeholder="Enter Mobile number"
                onChange={(e) => setCell(e.target.value)}
              />
            </Form.Group>

            {/* This is Email group */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {/* This is Birth date group */}
            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter date of birth"
                onChange={(e) => setDOB(e.target.value)}
              />
            </Form.Group>

            {/* This is submit button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default CreateUser;
