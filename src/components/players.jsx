import React, { Component } from "react";
import styles from "../componentStyles/Players.module.css";

class Players extends Component {
  onClick = () => {
    this.props.onClick(this.props.player.id);
  };

  render() {
    return (
      <React.Fragment>
        <li onClick={this.onClick} className={styles.playerClick}>
          {this.props.player.first_name} {this.props.player.last_name}{" "}
        </li>
      </React.Fragment>
    );
  }
}

export default Players;
