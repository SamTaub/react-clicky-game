import React, {Component} from 'react';
import './style.css';



class Navbar extends Component {
    
    render(){        
        return (
        <ul className = 'navList'>
            <li className = "title">South Park Click Game</li>
            <li className = "status">{this.props.status}</li>
            <li className = "currentScore">Current Score: {this.props.currentScore}</li>
            <li classname = "highScore">High Score: {this.props.highScore}</li>
        </ul>
        );
    }
};

export default Navbar;