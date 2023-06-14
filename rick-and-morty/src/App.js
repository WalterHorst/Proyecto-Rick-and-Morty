import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import axios from "axios"; 


function App() {
   const [characters, setCharaters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharaters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharaters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}></Nav>
         <Cards characters={characters} onClose = {onClose} />
      
      </div>
   );
}

export default App;
