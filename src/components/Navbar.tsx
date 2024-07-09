import Link from "next/link";
import { Button, Navbar as NavbarBs } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./styles/Navbar.module.css";
import { useEffect, useState } from "react";
import ICON_LOGO from "../../platformAssets/runtime/logo.png";

export function Navbar() {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(localStorage.getItem("auth") || "");
  }, []);

  return (
    <NavbarBs sticky="top" className="bg-dark shadow-sm">
      <Container>
        <Nav className="me-right">
          <Nav.Link as={Link} href="/">
            <img src={ICON_LOGO} alt="Logo" className={styles.logo} />
          </Nav.Link>
        </Nav>
        <Nav className="me-left">
          <Button
            className="btn-dark"
            onClick={() => {
              window.location.href = "movies";
            }}
          >
            <p>All movies</p>
          </Button>
          <Button
            className="btn-dark"
            onClick={() => {
              window.location.href = "categories";
            }}
          >
            <p>Categories</p>
          </Button>
          {data && (
            <Button
              id="nav_library"
              className="btn-dark"
              onClick={() => {
                window.location.href = "library";
              }}
            >
              <p>Library</p>
            </Button>
          )}
          {!data ? (
            <Button
              className="btn-success"
              onClick={() => {
                window.location.href = "login";
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              className="btn-danger"
              onClick={() => {
                localStorage.removeItem("auth");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </NavbarBs>
  );
}
