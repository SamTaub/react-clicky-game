import React, {Component} from 'react';
import './style.css';



class Navbar extends Component {
    
    render(){        
        return (
        <ul className = 'navList'>
            <li>South Park Click Game</li>
            <li>{this.props.status}</li>
            <li>Current Score: {this.props.currentScore}</li>
            <li>High Score: {this.props.highScore}</li>
        </ul>
        );
    }
};

export default Navbar;