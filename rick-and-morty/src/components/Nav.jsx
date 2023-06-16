import SearchBar from "./SearchBar";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className="Nav">
      <button className="Button">
        <NavLink to={"/home"}>Home</NavLink>
      </button>
      <button className="Button">
        <NavLink to={"/about"}>About</NavLink>
      </button>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
};

export default Nav;
