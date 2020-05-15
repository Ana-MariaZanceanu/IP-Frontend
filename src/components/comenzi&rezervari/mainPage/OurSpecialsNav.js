import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
export class OurSpecialsNav extends Component {
  render() {
    const { specials, handleChangeKey } = this.props;
    let navItems = [];
    for (var i = 0; i < specials.length; i++) {
      navItems.push(specials[i].restaurant);
    }
    return (
      <div>
        <Nav
          className="flex-column"
          onSelect={(selectedKey) => handleChangeKey(selectedKey)}
        >
          <Nav.Link style={styles.nav} eventKey="0">
            {navItems[0]}
          </Nav.Link>
          <Nav.Link style={styles.nav} eventKey="1">
            {navItems[1]}
          </Nav.Link>
          <Nav.Link style={styles.nav} eventKey="2">
            {navItems[2]}
          </Nav.Link>
          <Nav.Link style={styles.nav} eventKey="3">
            {navItems[3]}
          </Nav.Link>
          <Nav.Link style={styles.nav} eventKey="4">
            {navItems[4]}
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

const styles = {
  nav: {
    color: "#333",
    fontSize: "1rem",
  },
};

export default OurSpecialsNav;
