import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import reducer from './Reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; //esta linea sirve para conectar nuestra app con la extencion REDUX DEVTOOLS del navergador 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//esta linea sirve para que podamos hacer peticiones a na api/servidor 
);




export default store;


