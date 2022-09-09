import { Component } from "react";

import CardContainer from "./card-container/Card-Container.component";

import "./card-list.style.css";

class CardList extends Component {
  render() {
    console.log("reder card");
    // console.log(this.props);
    const { monsters: filteredMonsters } = this.props;
    return (
      <div className="card-list">
        {filteredMonsters.map((data) => {
          // const { name, id, email } = data;
          return (
            // console.log(data.name)
            <CardContainer monsters={data} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
