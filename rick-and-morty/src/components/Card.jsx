import "./Card.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../Redux/Actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card({ id, name, onClose, image, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, image, onClose });
    }
  };

  return (
    <div className="Card">
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <NavLink to={`/details/${id}`}>
        {" "}
        <h2>Name: {name}</h2>
      </NavLink>
      <img src={image} alt={name} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
