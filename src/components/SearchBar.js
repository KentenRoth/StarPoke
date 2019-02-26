import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    state = {
        term: ""
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term.toLowerCase());
    };

    render() {
        return (
            <div className="searchBar">
                <div className="container">
                    <div>
                        <form onSubmit={this.onFormSubmit} className="form">
                            <input
                                className="formSearchBar"
                                placeholder="Search for your favorite Character"
                                type="text"
                                value={this.state.term}
                                onChange={e =>
                                    this.setState({ term: e.target.value })
                                }
                            />
                            <div>
                                <button className="searchButton">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
