import "./Card.css";
import { NavLink } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
}) {
  return (
    <div className="Card">
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        {" "}
        X
      </button>
      <NavLink to={`/details/${id}`}>
        <h2>Name: {name}</h2>
      </NavLink>
      <img src={image} alt={name} />
    </div>
  );
}
