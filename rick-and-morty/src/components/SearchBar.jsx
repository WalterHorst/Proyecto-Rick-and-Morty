export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' placeholder="Search"/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
