import React, { Component } from "react";
import styles from "../componentStyles/SearchBar.module.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          className={styles.searchBar}
          value={!this.props.showStats ? this.props.searchValue : ""}
          type="text"
          placeholder="SEARCH PLAYER"
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
