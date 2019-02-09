import React from "react";

const Card = props => {
    return (
        <div>
            {props.baseData}
            {props.starWars}
        </div>
    );
};

export default Card;
