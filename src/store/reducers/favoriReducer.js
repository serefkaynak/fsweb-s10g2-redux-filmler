
import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoriActions";

const initialState = {
    favorites: [],
    displayFavorites: false,
};

const favoriReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_FAVORITE:
      return {...state,favorites:[...state.favorites, action.payload]};

    case REMOVE_FAVORITE:
      return {...state ,favorites: state.favorites.filter((fav) => fav.id !== action.payload)};
    
    case TOGGLE_FAVORITES:
      return {...state,displayFavorites: !state.displayFavorites};

    default:
      return state;
  }
}

export default favoriReducer;