import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileToggle: false,
    };
  }

  profileToggle = () => {
    this.setState({
      profileToggle: !this.state.profileToggle,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Smart Drink</NavbarBrand>
          <NavbarToggler onClick={() => { }} />
          <Collapse isOpen={this.state.profileToggle} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sensors
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/sensor">Refridgerator 1</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/sensor">Refridgerator 2</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/sensor">Refridgerator 3</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/sensor">Refridgerator 4</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/sensor">Refridgerator 5</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/sensor">Refridgerator 6</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;