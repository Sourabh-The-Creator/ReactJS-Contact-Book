import "./App.css";

import UserList from "./components/Userlist";
import { Route, Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="justify-content-center"
      >
        <Container>
          <Navbar.Brand href="#home">UserList</Navbar.Brand>
        </Container>

        <Link to="/createUser">
          <Button className="ms-5 me-2" variant="success">
            Create User
          </Button>
        </Link>
      </Navbar>

      <Route path="/createUser">
        <CreateUser />
      </Route>
      <Route path="/" exact={true}>
        <UserList />
      </Route>
      <Route exact path="/updateUser/:id" component={UpdateUser} />
    </>
  );
}

export default App;
