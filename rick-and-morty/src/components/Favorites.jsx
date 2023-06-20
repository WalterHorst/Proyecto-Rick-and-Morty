import { connect } from "react-redux";
import Card from "./Card";

const Favorite = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            image={fav.image}
            onClose={fav.onClose}
          ></Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorite);
