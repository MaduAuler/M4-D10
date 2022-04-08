import {Container, Card, Row, Col} from "react-bootstrap";
import SideBar from "./SideBar";
import { useEffect, useState} from 'react'
import './Styles.css'
import Header from "./Header";
import {Link} from 'react-router-dom'
import Player from "./Player";
import { connect } from 'react-redux'
import { addToFavoritesAction, getResultsAction } from '../redux/actions';

const mapStateToProps = (state) => ({
  result: state.results.stock,
  favorites: state.favorites.musics,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (musics) => {
      dispatch(addToFavoritesAction(musics))
    },
    getResults: (query) => {
      dispatch(getResultsAction(query))

    },

  })

const Home =(props)=> {
  const [inputValue, setInputValue] = useState("")

const handleInput =(event) =>{
  setInputValue(event.target.value)
}

const handleSubmit =(event) =>{
 event.preventDefault()
 props.getResults(inputValue)
} 

    return(
  <main className="d-flex">
      <div style={{width:'15%', minHeight:'100vh',backgroundColor:'black'}}>
      <SideBar/>
      </div>
      <Container fluid className="backgroundGradient">
      <Header/>
    <Row>
            <form onSubmit={handleSubmit}>
            <input placeholder="Search..." value = {inputValue} onChange={handleInput} className='mb-5'/>
            </form>
            </Row>
            <Row>
    {props.result.data && props.result.data.map((res) => (
        <Col className='mt-5'>
           <Card style={{ width: '10rem', height:'15rem', backgroundColor:'#0001' }} className='colorGray mb-3 cut' 
            
           >
           <Link to={"/album/"+ res.album.id}> <Card.Img variant="top" src={res.album.cover}  />
           </Link>
           <Card.Body>
             <Card.Title className="cut">{res.album.title}</Card.Title>
             <Card.Text>
              {res.title}
             </Card.Text>
           </Card.Body>
         </Card>
         </Col>
            ))
          }
          </Row>
    </Container>

    <Player/>
  </main>
)

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)