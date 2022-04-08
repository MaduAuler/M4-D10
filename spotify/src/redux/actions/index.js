export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const GET_RESULTS = 'GET_RESULTS'
export const GET_MUSICS = 'GET_MUSICS'
export const GET_ALBUNS = 'GET_ALBUNS'

export const addToFavoritesAction = (musics) => ({

  type: ADD_TO_FAVORITES,
  payload: musics,
 
})

export const addToMusicsAction = (musics, pic) => ({
    type: GET_MUSICS,
    payload:musics
  
})


export const getResultsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q='${query}`
      )
      if (resp.ok) {
        let results = await resp.json()

        dispatch({
          type: GET_RESULTS,
          payload: results,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}


export const getAlbunsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${query}`
      )
      if (resp.ok) {
        let results = await resp.json()

        dispatch({
          type: GET_ALBUNS,
          payload: results,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}