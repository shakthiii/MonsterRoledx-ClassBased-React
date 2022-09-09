import { Component } from "react";

import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
