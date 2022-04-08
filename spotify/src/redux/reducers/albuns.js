import { GET_ALBUNS} from '../actions'
import { initialState } from '../store'

const albunsReducer = (state = initialState.albuns, action) => {
  switch (action.type) {
 
    case GET_ALBUNS:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default albunsReducer