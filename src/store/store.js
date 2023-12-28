import { combineReducers, legacy_createStore as createStore } from 'redux';
import movieReducer from './reducers';
import favoriReducer from './reducers';


const reducers = combineReducers({
    movie: movieReducer,
    favori: favoriReducer,
})

export const store = createStore(reducers);