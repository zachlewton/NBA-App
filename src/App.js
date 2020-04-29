import React, { Component } from "react";
import axios from "axios";
import styles from "./componentStyles/App.module.css";
import SearchBar from "./components/searchBar";
import SearchTable from "./components/searchTable";
import Stats from "./components/stats";
import { FaBasketballBall } from "react-icons/fa";
import PlayerInfo from "./components/playerInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      stats: [],
      searchValue: "",
      selectedPlayer: [],
      url: "https://www.balldontlie.io/api/v1/players?search=",
      showStats: false,
      playerStats: [],
    };
  }

  async componentDidMount() {
    console.log("async");
    let result = null;
    try {
      result = await axios(this.state.url + this.state.searchValue, {
        accept: "application/json",
      });
    } catch (e) {
      console.log(e);
    }
    if (!this.state.showStats) {
      this.setState({ players: result.data.data });
    } else {
      this.setState({ stats: result.data.data });
    }

    if (this.state.searchValue.length < 1) {
      this.setState({ players: [] });

      return;
    }
  }

  findPlayer = (x) => {
    for (var i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].id === x) {
        let selectedPlayer = this.state.players[i];
        this.setState({ selectedPlayer: selectedPlayer });
      }
    }
  };

  handlePlayerClick = (player) => {
    this.setState({ showStats: true });
    this.findPlayer(player);

    this.setState({ searchValue: String(player) });
    this.setState(
      {
        url:
          "https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=",
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  handleSearch = (search) => {
    this.setState({ searchValue: search.target.value });
    this.setState({ showStats: false });
    this.setState(
      {
        url: "https://www.balldontlie.io/api/v1/players?search=",
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  render() {
    return (
      <div styles={styles.flexWrapper}>
        <nav className={styles.navBar}>
          <FaBasketballBall size="10x" className={styles.icon} />
          <h1>2019-2020 Stats</h1>
        </nav>

        <div className={styles.container}>
          <SearchBar
            showStats={this.state.showStats}
            searchBar={this.state.searchBar}
            onSearch={this.handleSearch}
          />

          {this.state.showStats ? (
            <PlayerInfo player={this.state.selectedPlayer} />
          ) : null}

          {!this.state.showStats & (this.state.players.length < 6) ? (
            <SearchTable
              players={this.state.players}
              onClick={this.handlePlayerClick}
            />
          ) : null}

          {this.state.showStats && (
            <Stats player={this.state.players[0]} stats={this.state.stats} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
