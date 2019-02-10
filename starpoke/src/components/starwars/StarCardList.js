import React from "react";
import Card from "./Card";

const StarCardList = props => {
    const searchResults = props.responseResults.map(starWars => {
        return <Card key={starWars.name} starWars={starWars} />;
    });

    const baseData = props.starWarsData.map(baseData => {
        return <Card key={baseData.name} baseData={baseData} />;
    });

    if (props.responseResults.length === 0) {
        return <div className="container">{baseData}</div>;
    } else {
        return <div className="container">{searchResults}</div>;
    }
};

export default StarCardList;
