import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const ramdonCharacter = () => {
    const numRamdom = Math.floor(Math.random() * 825) + 1;
    onSearch(numRamdom);
  };
  return (
    <div className="barra">
      <input
        type="search"
        placeholder="Id"
        onChange={handleChange}
        value={id}
      />
      <button
        className="full-rounded"
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
      <button className="full-rounded" onClick={ramdonCharacter}>
        Random character
      </button>
    </div>
  );
}
