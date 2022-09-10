import "./Card-Container.style.css";

const CardContainer = ({ monsters: { id, name, email } }) => (
  <div className="card-container" key={id}>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
    <h1> {name}</h1>
    <p>{email}</p>
  </div>
);

export default CardContainer;
