import React, { Component } from "react";
import starwars from "../apis/starwars";
import pokemon from "../apis/pokemon";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox";
import StarCardList from "./starwars/StarCardList";
import PokeCardList from "./pokemon/PokeCardList";

class App extends Component {
    constructor(props) {
        super(props);

        this.flipCheckbox = this.flipCheckbox.bind(this);

        this.state = {
            checked: true,
            responseResults: [],
            starWarsData: [],
            pokemonData: []
        };
    }

    flipCheckbox = () => {
        return this.setState({ checked: !this.state.checked });
    };

    onSearchSubmit = async term => {
        if (this.state.checked === true) {
            const response = await starwars.get("/people/", {
                params: {
                    search: term
                }
            });
            this.setState({ responseResults: response.data.results });
        } else {
            const response = await pokemon.get(`/pokemon/${term}`, {
                params: {
                    limit: 10
                }
            });
            this.setState({ responseResults: response.data });
        }
    };

    async componentDidMount() {
        const starWarsResponse = await starwars.get("/people/");
        this.setState({ starWarsData: starWarsResponse.data.results });
        const pokemonResponse = await pokemon.get("/pokemon/", {
            params: {
                limit: 10
            }
        });
        this.setState({ pokemonData: pokemonResponse.data.results });
    }

    render() {
        if (this.state.checked === true) {
            return (
                <div>
                    <Header />
                    <Checkbox
                        isChecked={this.state.checked}
                        action={this.flipCheckbox}
                    />
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <StarCardList
                        starWarsData={this.state.starWarsData}
                        responseResults={this.state.responseResults}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <Header />
                    <Checkbox
                        isChecked={this.state.checked}
                        action={this.flipCheckbox}
                    />
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <PokeCardList
                        pokemonData={this.state.pokemonData}
                        responseResults={this.state.responseResults}
                    />
                </div>
            );
        }
    }
}

export default App;
