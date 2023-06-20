import { REMOVE_FAV } from "./ActionsType";
import { ADD_FAV } from "./ActionsType";

const initialState ={
    myFavorites:[]
}


const reducer=(state = initialState, {type, payload})=>{
switch (type) {
    case ADD_FAV: return{
        ...state,
        myFavorites: [...state.myFavorites, payload]
    }
    
    case REMOVE_FAV: return{
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== Number(payload))
    }     

    default:return{
        ...state
    }
        
}
}


export default reducer;