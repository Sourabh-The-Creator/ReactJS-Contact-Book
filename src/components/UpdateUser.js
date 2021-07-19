import React from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../Actions/Adduser";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
export default function UpdateUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.UserReducer.users);
  const user = users[id];
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [cell, setCell] = useState("");
  let [dob, setDOB] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setCell(user.cell);
      setEmail(user.email);
      setDOB(user.dob);
    }
  }, [user]);
  const dispatch = useDispatch();
  let history = useHistory();
  let updateId = id.toString();
  updateId = parseInt(updateId);
  console.warn("id.....", typeof updateId);
  function getForm(e) {
    e.preventDefault();
    const user = { id: updateId, name, email, cell, dob };

    dispatch(updateUser(user));
    history.push("/");
  }

  return (
    <>
      <Container className="mt-5 justify-content-center">
        <Card style={{ width: "40rem" }}>
          <Card.Header>Update User</Card.Header>

          <Form onSubmit={getForm}>
            {/* This is name group */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/* This is cell group */}
            <Form.Group className="mb-3" controlId="formBasicCell">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="cell_no"
                value={cell}
                onChange={(e) => setCell(e.target.value)}
              />
            </Form.Group>

            {/* This is Email group */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {/* This is Birth date group */}
            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="text"
                value={dob}
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
