import SearchBar from "./SearchBar";
import "./Nav.css";

const Nav = ({onSearch})=>{
    return(
        <div className="Nav">
            <SearchBar onSearch = {onSearch}></SearchBar> 
        </div>
    )
}

export default Nav; 