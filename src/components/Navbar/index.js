import React, {Component} from 'react';
import './style.css';



class Navbar extends Component {
    
    render(){        
        return (
        <ul className = 'navList'>
            <li className = "title"><img id= "signImage" alt="Sign" src="http://icons.iconarchive.com/icons/xtudiando/south-park/48/South-Park-icon.png"/>Click Game</li>
            <li className = "status">{this.props.status}</li>
            <li className = "highScore">High Score: {this.props.highScore}</li>
            <li className = "currentScore">Current Score: {this.props.currentScore}</li>
        </ul>
        );
    }
};

export default Navbar;