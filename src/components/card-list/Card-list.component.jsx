import CardContainer from "./card-container/Card-Container.component";

import "./card-list.style.css";

const CardList = ({ monsters: filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((data) => {
        return <CardContainer monsters={data} />;
      })}
    </div>
  );
};

export default CardList;
