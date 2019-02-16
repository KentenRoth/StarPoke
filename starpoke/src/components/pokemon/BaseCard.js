import React from "react";
import "./Card.css";

const BaseCard = props => {
    return (
        <div className="pokemonCard">
            <div className="pokemonCardTitle">{props.baseData.name}</div>
        </div>
    );
};

export default BaseCard;
