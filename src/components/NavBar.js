import React from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";

import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import authStore from "../stores/authStore";
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/products">
          <Navbar.Brand>Chicken Shop</Navbar.Brand>
        </Link>
        <Nav>
          {authStore.user ? (
            <>
              <h2 className="welcome-msg">Welcome {authStore.user.username}</h2>
              <Button variant="danger" onClick={authStore.signout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <SignupModal />
              <SigninModal />
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);

//<
