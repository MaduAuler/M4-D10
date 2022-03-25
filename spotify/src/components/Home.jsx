import {Container, Card, Row, Col} from "react-bootstrap";
import SideBar from "./SideBar";
import {useState, useEffect} from 'react'
import './Styles.css'
import Header from "./Header";
import AlbumPage from "./AlbumPage";
import {Link} from 'react-router-dom'

const Home =()=> {
const [music, setMusic] = useState([])

useEffect( ()=>{
 fetchMusic()
}, [])

const fetchMusic = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")

          if(response.ok) {
              const musics = await response.json()
                setMusic( musics.data )
            } else {
                console.log('error while fetching')
            }
          } catch(e) {
            console.log(e)
          }
        
}

    return(
  <main className="d-flex">
      <div style={{width:'15%',backgroundColor:'black'}}>
      <SideBar/>
      </div>
      <Container fluid className="backgroundGradient">
      <Header/>
    <Row>
    
    {music.map((res) => (
        <Col className='mt-5'>
           <Card style={{ width: '10rem', height:'15rem', backgroundColor:'#0001' }} className='colorGray mb-3 cut' 
            
           >
           <Link to={"/album/"+ res.id}> <Card.Img variant="top" src={res.album.cover} /></Link>
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
  </main>
)

}

export default Home