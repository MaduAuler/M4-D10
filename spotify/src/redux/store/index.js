
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favoritesReducer from '../reducers/favorites'
import resultsReducer from '../reducers/results'
import musicsReducer from '../reducers/musics'
import thunk from 'redux-thunk'
import albunsReducer from '../reducers/albuns'

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favorites: {
    musics: [
     
    ],
  },
musics:{
      stock:[],

  },

  results:{
      stock: []
  },

  albuns:{
      stock:[]
  }
}

const bigReducer = combineReducers({
  favorites: favoritesReducer,
  results: resultsReducer,
 musics:musicsReducer,
 albuns: albunsReducer
})

const configureStore = createStore(
  bigReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore