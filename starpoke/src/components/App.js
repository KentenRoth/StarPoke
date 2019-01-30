import React, { Component } from "react";
import starwars from "../apis/starwars";
import pokemon from "../apis/pokemon";
import Header from "./Header";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true,
            title: "Star Wars",
            term: "",
            starWarsData: [],
            pokemonData: []
        };
    }

    flipCheckbox = () => {
        this.setState({ checked: !this.state.checked });
        if (this.state.title === "Star Wars") {
            this.setState({ title: "Pokemon" });
        } else {
            this.setState({ title: "Star Wars" });
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
                    <Header title={this.state.title} />
                    <input
                        type="checkbox"
                        onChange={this.flipCheckbox}
                        defaultChecked={this.state.checked}
                    />
                    <p>StarWars!</p>
                </div>
            );
        } else {
            return (
                <div>
                    <Header title={this.state.title} />
                    <input
                        type="checkbox"
                        onChange={this.flipCheckbox}
                        defaultChecked={this.state.checked}
                    />
                    <p>Pokemon</p>
                </div>
            );
        }
    }
}

export default App;
