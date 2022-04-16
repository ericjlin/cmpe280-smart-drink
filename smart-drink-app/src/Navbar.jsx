import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink
} from "reactstrap";
// import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileToggle: false,
    //   role: localStorage.getItem("user") ? localStorage.getItem("user") : "",
    };
  }

  profileToggle = () => {
    this.setState({
      profileToggle: !this.state.profileToggle,
    });
  };

  handleLogout = (e) => {
    // localStorage.clear();
    // this.props.history.push("/login");
  };

  //prop that checks role

  render() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Smart Drink</NavbarBrand>
          <NavbarToggler onClick={() => {}} />
          <Collapse isOpen={this.state.profileToggle} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Configure</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sensors
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Refridgerator
                  </DropdownItem>
                  <DropdownItem>
                    Bedroom
                  </DropdownItem>
                  <DropdownItem>
                    Office
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