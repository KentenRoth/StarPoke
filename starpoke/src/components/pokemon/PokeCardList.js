import React from "react";
import SearchCard from "./SearchCard";
import BaseCard from "./BaseCard";

const PokeCardList = props => {
    const searchResults = props.responseResults.map(poke => {
        return <SearchCard key={poke.name} poke={poke} />;
    });

    const baseData = props.pokemonData.map(baseData => {
        return <BaseCard key={baseData.name} baseData={baseData} />;
    });

    if (props.responseResults.length === 0) {
        return (
            <div className="container">
                <div>{baseData}</div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div>{searchResults}</div>
            </div>
        );
    }
};

export default PokeCardList;
