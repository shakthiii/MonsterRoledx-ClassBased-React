import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/search-box/serach-box.components";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((ele) =>
      ele.name.toLowerCase().includes(search)
    );
    setFilteredMonsters(newFilterMonsters);
  }, [monsters, search]);

  console.log("render monster");

  const onSearchEvent = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();
    setSearch(searchField);
  };

  // const filteredMonsters = monsters.filter((ele) =>
  //   ele.name.toLowerCase().includes(search)
  // );

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
};

export default App;
