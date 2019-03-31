import React from 'react';
import './charactercard.css';

function CharacterCard(props){
    return(
        <div className="card">
            <div className="cardImage">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="cardTitle">
                <h4>{props.name}</h4>
            </div>
        </div>
    );
};

export default CharacterCard;