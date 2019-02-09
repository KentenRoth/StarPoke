import React from "react";
import Card from "./Card";

const StarCardList = props => {
    const searchResults = props.responseResults.map(starWars => {
        console.log("searchResults");
        return <Card key={starWars.name} starWars={starWars.name} />;
    });

    const baseData = props.starWarsData.map(baseData => {
        console.log("baseData");
        return <Card key={baseData.name} baseData={baseData.name} />;
    });

    if (props.responseResults.length === 0) {
        return <div>{baseData}</div>;
    } else {
        return <div>{searchResults}</div>;
    }
};

export default StarCardList;
