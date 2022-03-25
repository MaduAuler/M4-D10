import { useParams } from "react-router-dom";
import {Container, Card, Row, Col} from "react-bootstrap";
import Header from './Header'
import SideBar from "./SideBar";
import {useEffect, useState} from 'react'

const AlbumPage =()=> {
    let params = useParams();

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

          </Row>
    </Container>
  </main>
)
}

export default AlbumPage