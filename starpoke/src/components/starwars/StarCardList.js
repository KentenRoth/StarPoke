import React from "react";
import BaseCard from "./BaseCard";
import SearchCard from "./SearchCard";

const StarCardList = props => {
    const searchResults = props.responseResults.map(starWars => {
        return <SearchCard key={starWars.name} starWars={starWars} />;
    });

    const baseData = props.starWarsData.map(baseData => {
        return <BaseCard key={baseData.name} baseData={baseData} />;
    });

    if (props.responseResults.length === 0) {
        return (
            <div className="cardList">
                <div className="container">
                    <div className="cardListItems">{baseData}</div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cardList">
                <div className="container">
                    <div className="cardListItems">{searchResults}</div>
                </div>
            </div>
        );
    }
};

export default StarCardList;
