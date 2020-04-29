import React, { Component } from "react";
import Players from "./players";
import styles from "../componentStyles/SearchTable.module.css";

class SearchTable extends Component {
  // onClick = () => {
  //   this.props.onClick(this.props.player);
  // };

  render() {
    return (
      <table className={styles.table}>
        {this.props.players.map((player) => (
          <Players
            key={player.id}
            player={player}
            onClick={this.props.onClick}
          />
        ))}
      </table>
    );
  }
}

export default SearchTable;
