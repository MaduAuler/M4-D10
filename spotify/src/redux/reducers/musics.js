import { GET_MUSICS} from '../actions'
import { initialState } from '../store'

const musicsReducer = (state = initialState.musics, action) => {
  switch (action.type) {
 
    case GET_MUSICS:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default musicsReducer