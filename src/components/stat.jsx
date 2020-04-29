import React, { Component } from "react";
import styles from "../componentStyles/Stats.module.css";

class Stat extends Component {
  render() {
    let trb = this.props.stat.dreb + this.props.stat.oreb;
    let pts = this.props.stat.pts;

    return (
      <React.Fragment>
        <div className={styles.tableDiv}>
          <div key={this.props.key} className={styles.cell}>
            <li className={styles.key}>Games Played</li>
            <li className={styles.value}>{this.props.stat.games_played}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Minutes Per Game" className={styles.key}>
              MP
            </li>
            <li className={styles.value}>{this.props.stat.min}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Field Goals Per Game" className={styles.key}>
              FGM
            </li>
            <li className={styles.value}>{this.props.stat.fgm}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Field Goals Attempted Per Game" className={styles.key}>
              FGA
            </li>
            <li className={styles.value}>{this.props.stat.fga}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="3-Point Field Goals Per Game" className={styles.key}>
              3PM
            </li>
            <li className={styles.value}>{this.props.stat.fg3m}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li
              title="3-Point Field Goals Attempted Per Gamee"
              className={styles.key}
            >
              3PA
            </li>
            <li className={styles.value}>{this.props.stat.fg3a}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Free Throws Made Per Game" className={styles.key}>
              FTM
            </li>
            <li className={styles.value}>{this.props.stat.ftm}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Free Throws Attempted Per Game" className={styles.key}>
              FTA
            </li>
            <li className={styles.value}>{this.props.stat.fta}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Offensive Rebounds Per Game" className={styles.key}>
              ORB
            </li>
            <li className={styles.value}>{this.props.stat.oreb}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Defensive Rebounds Per Game" className={styles.key}>
              DRB
            </li>
            <li className={styles.value}>{this.props.stat.dreb}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Total Rebounds Per Game" className={styles.key}>
              TRB
            </li>
            <li className={styles.value}>{trb.toFixed(2)}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Assists Per Game" className={styles.key}>
              AST
            </li>
            <li className={styles.value}>{this.props.stat.ast}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Steals Per Game" className={styles.key}>
              STL
            </li>
            <li className={styles.value}>{this.props.stat.stl}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Blocks Per Game" className={styles.key}>
              BLK
            </li>
            <li className={styles.value}>{this.props.stat.blk}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Turnovers Per Game" className={styles.key}>
              TOV
            </li>
            <li className={styles.value}>{this.props.stat.turnover}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Personal Fouls Per Game" className={styles.key}>
              PF
            </li>
            <li className={styles.value}>{this.props.stat.pf}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Points Per Game" className={styles.key}>
              PTS
            </li>
            <li className={styles.value}>{pts.toFixed(1)}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Field Goal Percentage" className={styles.key}>
              FG%
            </li>
            <li className={styles.value}>{this.props.stat.fg_pct}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="3-Point Field Goal Percentage" className={styles.key}>
              3P%
            </li>
            <li className={styles.value}>{this.props.stat.fg3_pct}</li>
          </div>

          <div key={this.props.key} className={styles.cell}>
            <li title="Free Throw Percentage" className={styles.key}>
              FT%
            </li>
            <li className={styles.value}>{this.props.stat.ft_pct}</li>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Stat;
