import React from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
const NavBar = () => {
  return (
    <Nav className="navbar">
      <NavItem>
        <NavLink href="/">
          <Button color="primary" size="sm">
            Main
          </Button>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">
          <Button color="primary" size="sm">
            About
          </Button>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact">
          <Button color="primary" size="sm">
            Contact
          </Button>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/projects">
          <Button color="primary" size="sm">
            Projects
          </Button>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
