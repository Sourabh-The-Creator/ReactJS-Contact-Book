import { Container, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import { deleteUser } from "../Actions/Adduser";
import CreateUser from "./CreateUser";

const UserList = () => {
  const myusers = useSelector((state) => state.UserReducer.users);
  const dispatch = useDispatch();
  console.warn("Myuser", myusers, typeof myusers);

  // This s delete operation
  function deletefun(id) {
    dispatch(deleteUser(id));
  }
  return (
    <>
      <Container className="blank-5 mt-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mo no</th>
              <th>Email</th>
              <th>DOB</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myusers.map((user, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{user.name} </td>
                <td>{user.cell}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>
                  {" "}
                  <span>
                    <Link to={`/updateUser/${user.id}`}>
                      <Button
                        onClick={() => {
                          <Route path="/updateUser">
                            <CreateUser />
                          </Route>;
                        }}
                        className="ms-5"
                        variant="danger"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </Button>
                    </Link>

                    <Button
                      onClick={() => deletefun(index)}
                      className="ms-3"
                      variant="danger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </Button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default connect()(UserList);
