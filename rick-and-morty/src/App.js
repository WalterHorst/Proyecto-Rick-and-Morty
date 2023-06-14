import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import axios from "axios"; 


function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const char = characters.find((ch)=>ch.id === Number(id))
            if(char)return alert("El personaje ya fue seleccionado!")
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}></Nav>
         <Cards characters={characters} onClose = {onClose} />
      
      </div>
   );
}

export default App;
