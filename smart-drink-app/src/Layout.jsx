import React from 'react';
import Navbar from './Navbar.jsx';

class Layout extends React.Component {
    render() {
        const container = {
            "paddingTop": "100px",
            "display": "flex",
            "flexDirection": "column",
            "minHeight": "90vh"
        }
        return(
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;