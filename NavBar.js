import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() { 
        return <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    }
}
 
export default NavBar;