import { REMOVE_FAV } from "./ActionsType";
import { ADD_FAV } from "./ActionsType";
import { FILTER } from "./ActionsType";
import { ORDER } from "./ActionsType";

 export const addFav = (character)=>{
    return{ type: ADD_FAV, payload: character }
}

 export const removeFav = (id)=>{
    return{ type: REMOVE_FAV, payload:id}
}

export const filterCards = (gender)=>{
    return{type:FILTER, payload:gender }
}

export const orderCards = (order)=>{
    return{type:ORDER, payload: order}
}