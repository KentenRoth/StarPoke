import React from "react";
import "./Card.css";

const BaseCard = props => {
    const { name, height, mass, hair_color, eye_color } = props.starWars;
    return (
        <div className="card">
            <div className="cardName">
                {name}
                <br />
                Height: {height} cm
                <br />
                Weight: {mass} kg
                <br />
                Eye Color: {eye_color}
                <br />
                Hair Color: {hair_color}
            </div>
        </div>
    );
};

export default BaseCard;
