import React from "react";
import "./Card.css";

const BaseCard = props => {
    const { name, height, mass, hair_color, eye_color } = props.baseData;
    return (
        <div className="starWarsCard">
            <h3 className="starWarsCardHeader">{name}</h3>
            <div className="starWarsCardContent">
                Height: {height} cm
                <br />
                Weight: {mass} kg
                <br />
                Eye Color: {eye_color}
                <br />
                Hair Color: {hair_color}
            </div>
            <br />
        </div>
    );
};

export default BaseCard;
