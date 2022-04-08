import { useParams } from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from './Header'
import SideBar from "./SideBar";
import {useEffect, useState} from 'react'
import Player from "./Player";
import { connect } from 'react-redux'
import { addToMusicsAction, getAlbunsAction } from '../redux/actions';
import {Table} from 'react-bootstrap'

const mapStateToProps = (state) => ({
  musics: state.musics.stock,
  result: state.results.stock,
  albuns: state.albuns.stock
   })
   
   const mapDispatchToProps = (dispatch) => ({
    addToMusics: (musics) => {
      dispatch(addToMusicsAction(musics))
    },
    getAlbuns: (musics) => {
      dispatch(getAlbunsAction(musics))
    }
   })

const AlbumPage =(props)=> {
    let params = useParams();

    useEffect( ()=>{
     props.getAlbuns(params.musicId)
    }, [])


return(
    <main className="d-flex">
      <div style={{width:'15%', minHeight:'100vh',backgroundColor:'black'}}>
      <SideBar/>
      </div>
      <Container fluid className="backgroundGradient">
      <Header/>
      <div className="d-flex">
        <div className="mr-5">  <img src={props.albuns.cover} className='mb-5' alt="" /></div>
        <div>   <div>Album</div><h1>{props.albuns.title}</h1></div>
      </div>
 
 
    <Table bordeless hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
    </tr>
  </thead>
  <tbody>

  {props.albuns.tracks && props.albuns.tracks.data.map((res, i) => (

<tr>
<td>{i}</td>
<td><button style={{backgroundColor: 'transparent', border:'none', color: 'white'}} onClick={() => { props.addToMusics(res)}}>{res.title}</button></td>
</tr>
        ))
      }
  </tbody>
</Table>
   
    
    </Container>
    <Player/>
  </main>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage)