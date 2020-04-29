import React, { Component } from "react";
import Stat from "./stat";
import styles from "../componentStyles/Stats.module.css";

class Stats extends Component {
  render() {
    return (
      <div>
        {this.props.stats.map((stat) => (
          <Stat
            className={styles.container}
            key={this.props.player.id}
            player={this.props.player}
            stat={stat}
          />
        ))}
      </div>
    );
  }
}

export default Stats;
