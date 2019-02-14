import React from "react";
import "./Card.css";

const BaseCard = props => {
    return <div>{props.baseData.name}</div>;
};

export default BaseCard;
