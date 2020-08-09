import React, {Component} from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <input type="text" className="search-bar__text-input"/>
                <div className="search-bar__text"/>
            </div>
        );
    }
}

export default SearchBar;
