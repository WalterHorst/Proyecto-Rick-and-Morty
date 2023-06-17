import SearchBar from "./SearchBar";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className="Nav">
      <span>
        <button className="Button">
          <NavLink to={"/home"}>Home</NavLink>
        </button>
        <button className="Button">
          <NavLink to={"/about"}>About</NavLink>
        </button>
      </span>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button>
        <NavLink to={"/"}>Log out</NavLink>
      </button>
    </div>
  );
};

export default Nav;
