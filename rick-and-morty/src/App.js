import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import axios from "axios"; 
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Details from './components/Details';


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
         <Routes>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}></Route>
            <Route path="/details/:id" element={<Details/>}></Route>
         </Routes>
         
      
      </div>
   );
}

export default App;
