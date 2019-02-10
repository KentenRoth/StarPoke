import React from "react";
import "./Card.css";

const Card = props => {
    const { name, height, mass, hair_color, eye_color } = props.baseData;
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
                {props.starWars}
            </div>
        </div>
    );
};

export default Card;
