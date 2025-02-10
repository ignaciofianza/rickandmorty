import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Github, Globe } from "react-bootstrap-icons";
import { useState } from "react";

const NavbarComponent = () => {
  const [hoveredWeb, setHoveredWeb] = useState(false);
  const [hoveredGithub, setHoveredGithub] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/">Rick & Morty API</Navbar.Brand>
        <div className="d-flex align-items-center">
          <a
            href="https://ignaciofianza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white d-flex align-items-center"
            style={{
              textDecoration: "none",
              transform: hoveredWeb ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={() => setHoveredWeb(true)}
            onMouseLeave={() => setHoveredWeb(false)}
          >
            <Globe size={20} className="ms-2" />
          </a>
          <a
            href="https://github.com/ignaciofianza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white d-flex align-items-center ms-4"
            style={{
              textDecoration: "none",
              transform: hoveredGithub ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={() => setHoveredGithub(true)}
            onMouseLeave={() => setHoveredGithub(false)}
          >
            <Github size={20} className="ms-2" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
