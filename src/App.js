import { Component } from "react";
import CardList from "./components/card-list/Card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/serach-box.components";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.state = {
    //   monsters: [
    //     {
    //       name: "lucas",
    //       name: "obito",
    //     },
    //     {
    //     },
    //     {
    //       name: "sakura",
    //     },
    //     {
    //       name: "nine-Tails",
    //     },
    //     {
    //       name: "octopops",
    //     },
    //   ],
    // };

    // doApiCall();
  }

  componentDidMount() {
    // let count = 0;

    console.log("componenetDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchEvent = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return {
          searchField,
        };
      },
      () => {
        // console.log(this.state);
        // console.log(this.count);
      }
    );
  };

  render() {
    console.log("render");
    const { searchField, monsters } = this.state;
    const { onSearchEvent } = this;
    const filteredMonsters = monsters.filter((ele) =>
      ele.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monster RoloDex</h1>

        <SearchBox
          onSearchHandler={onSearchEvent}
          placeholder="Search Monsters..."
          className="Monsters-Search-Box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
