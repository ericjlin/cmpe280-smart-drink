import React from 'react';
import Navbar from './Navbar.jsx';

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;