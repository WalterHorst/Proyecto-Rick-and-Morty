import "./SearchBar.css";
import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");
   const handleChange = (event)=>{
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' placeholder="Id" onChange={handleChange} value={id}/>
         <button className="Button" onClick={()=>{onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}
