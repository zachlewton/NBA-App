import React, { Component } from "react";
import styles from "../componentStyles/PlayerInfo.module.css";

class PlayerInfo extends Component {
  render() {
    return (
      <ul className={styles.container}>
        <div className={styles.name}>
          <li>
            {this.props.player.first_name} {this.props.player.last_name}
          </li>
          <li>{this.props.player.team.full_name}</li>
        </div>

        <div className={styles.info}>
          <li>{this.props.player.position}</li>
          <li>
            {this.props.player.height_feet}'{this.props.player.height_inches}
          </li>

          <li>{this.props.player.weight_pounds} lbs</li>
        </div>
      </ul>
    );
  }
}

export default PlayerInfo;
