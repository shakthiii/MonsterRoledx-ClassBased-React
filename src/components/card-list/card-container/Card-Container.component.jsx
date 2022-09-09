import { Component } from "react";

import "./Card-Container.style.css";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monsters;
    // console.log(this.props.monsters);
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h1> {name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardContainer;
