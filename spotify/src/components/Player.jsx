import { BsFillPlayCircleFill} from "react-icons/bs";
import {BiSkipPrevious, BiSkipNext, BiRepeat, BiHeart} from "react-icons/bi"
import { FaRandom } from "react-icons/fa"
import './Player.css'
import { connect } from 'react-redux'
import { addToFavoritesAction } from '../redux/actions';
import { useState } from "react";

const mapStateToProps = (state) => ({
   music: state.musics.stock,
   result: state.results.stock,
   favorites: state.favorites.musics,
   albuns: state.albuns.stock
    })
    
    const mapDispatchToProps = (dispatch) => ({
        addToFavorites: (musics) => {
            dispatch(addToFavoritesAction(musics))
          }
    })

const Player =(props)=> {
  
   
    return(
    
     <div style={{height:'10vh', width:'100vw', position:'fixed' , bottom:'0', backgroundColor:'#181818'}} className='d-flex align-items justify-content-between'>
       <div className="d-flex ml-5  align-items-center" style={{width:'20%'}}>
        
          <div><img src={props.albuns.cover} className='imgSquare' /></div>

           <div className="d-flex ml-2 mr-2"> {props.music.title && 
           <div style={{color:'white', fontSize: '1rem'}}>{props.music.title} 
           <div> {props.music.artist.name}</div>
           </div> } </div>

           <div>
               <button style={{backgroundColor:'transparent'}} className='ml-2' onClick={() => { props.addToFavorites(props.music)}}><BiHeart className="icons ml"/></button>
            </div>

       </div>

       <div className="align-items-center text-center mt-3">
           
           <FaRandom className="icons"/>
           <BiSkipPrevious className="icons"/>
           <BsFillPlayCircleFill className="icons"/>
           <BiSkipNext className="icons"/>
           <BiRepeat className="icons"/>
           <div className="d-flex align-items-center" style={{color:'white'}}>02:15 <div className='divBar ml-2 mr-2'></div>04:01</div>
       </div>
       <div style={{width:'20%'}}></div>
    
    </div>
    
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)