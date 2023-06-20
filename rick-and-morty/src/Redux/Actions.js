import { REMOVE_FAV } from "./ActionsType";
import { ADD_FAV } from "./ActionsType";

 export const addFav = (character)=>{
    return{ type: ADD_FAV, payload: character }
}

 export const removeFav = (id)=>{
    return{ type: REMOVE_FAV, payload:id}
}

