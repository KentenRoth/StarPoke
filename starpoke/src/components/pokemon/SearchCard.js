import React from "react";

const SearchCard = props => {
    return (
        <div>
            <img src={props.poke.sprites.front_shiny} />
            <br />
            Name: {props.poke.name}
            <br />
            Base Experience: {props.poke.base_experience}
            <br />
            Abilities
            <br />
            {props.poke.abilities[0].ability.name}
            <br />
            {props.poke.abilities[1].ability.name}
            <br />
            <img src={props.poke.sprites.back_shiny} />
        </div>
    );
};

export default SearchCard;
