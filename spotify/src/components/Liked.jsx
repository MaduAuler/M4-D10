import SideBar from './SideBar'
import Header from './Header'
import './Player.css'
import { connect } from 'react-redux'
import {Container}from 'react-bootstrap'
import Player from './Player'
import { addToMusicsAction } from '../redux/actions';


const mapStateToProps = (state) => ({
   music: state.musics.stock,
   results: state.results.stock,
   favorites: state.favorites.musics
    })
    
    const mapDispatchToProps = (dispatch) => ({
        addToMusics: (musics) => {
            dispatch(addToMusicsAction(musics))
          }
    })

const Liked =(props)=> {
  
    return(
    
<main className="d-flex">
<div style={{width:'15%', height:'100vh',backgroundColor:'black'}}>
<SideBar/>
</div>
<Container fluid className="backgroundGradient">
<Header/>
<h1>Liked Sogs</h1>
{ props.favorites && props.favorites.map((fav) => (
              <li >
              <button  onClick={() => { props.addToMusics(fav)}}>{fav.title}</button></li>
        ))}
</Container>
<Player/>
</main>
    
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Liked)