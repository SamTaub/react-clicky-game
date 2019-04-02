import React from 'react';
import './style.css';


function CharacterCard(props){
    
    

    return(
        <div className="card p-2 mb-1" onClick={props.onClick} id={props.id}>
            <div className="cardImage">
                <img className="characterImage" alt={props.name} src={props.image} />
            </div>
            <div className="cardTitle mt-1">
                <h4 className="text-center">{props.name}</h4>
            </div>
        </div>
    );
};

export default CharacterCard;