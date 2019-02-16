import React from "react";
import "./SearchCard.css";

const SearchCard = props => {
    return (
        <div className="cardBackground">
            <div className="searchCard">
                <div className="searchCardImage">
                    <img
                        src={props.poke.sprites.front_shiny}
                        alt={props.poke.name}
                    />
                </div>
                <div className="searchCardName">{props.poke.name}</div>
                <div className="searchCardBaseExperienceTitle">
                    Base Experience:
                </div>
                <div className="searchCardBaseExperience">
                    {props.poke.base_experience}
                </div>

                <div className="searchCardAbilitiesTitle">Abilities:</div>
                <div className="searchCardAbilities">
                    {props.poke.abilities[0].ability.name}
                    <br />
                    {props.poke.abilities[1].ability.name}
                </div>
                <div className="searchCardImage">
                    <img
                        src={props.poke.sprites.back_shiny}
                        alt={props.poke.name}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
