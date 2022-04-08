import { ADD_TO_FAVORITES } from '../actions'
import { initialState } from '../store'

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
 
    case ADD_TO_FAVORITES:
     
        return {
          ...state,
         
            musics: [...state.musics, action.payload],
        }
  

    default:
      return state
  }
}

export default favoritesReducer