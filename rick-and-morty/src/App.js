import './App.css';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import axios from "axios"; 
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About';
import Details from './components/Details';
import Error from './components/Error';
import Form from './components/Form';

const email = "whorst42@gmail.com"
const password = "walter123"

function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const location = useLocation()
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
   
   const login = (userData)=>{
    if(userData.password === password && userData.email===email){
      setAccess(true);
      navigate('/home');
    }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>{
         location.pathname !=="/"?<Nav onSearch = {onSearch} setAccess={setAccess}></Nav>:null
      }
         <Routes>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}></Route>
            <Route path="/details/:id" element={<Details/>}></Route>
            <Route path='/:error' element={<Error/>}> </Route>
            <Route path='/' element={<Form login={login}/>}></Route>
         </Routes> 
         
      
      </div>
   );
}

export default App;
