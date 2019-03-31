import React, {Component} from 'react';
import '../index.css';



class Navbar extends Component {
    render(){
        
        return (
        <ul className = 'navList'>
            <li>South Park Click Game</li>
            <li><button>View Rules</button></li>
            <li>Current Score: </li>
            <li>High Score:</li>
        </ul>
        );
    }


};

export default Navbar;