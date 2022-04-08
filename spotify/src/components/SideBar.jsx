import {Container} from "react-bootstrap";
import { BsFillHouseDoorFill , BsSearch, BsFillPlusSquareFill, BsFillBookmarkHeartFill, BsThreeDots } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi"
import './Styles.css'
import {Link} from 'react-router-dom'

const SideBar =()=> (
  <>
   <Container className='sidebar'>
       <BsThreeDots/>
       <div className="d-flex mb-1 align-items-center text-center  ">
       <div><BsFillHouseDoorFill className="icons"/></div>
          <div><Link to='/'><p className="colorGray">Home</p></Link> </div> 
       </div>

       <div className="d-flex mb-1">
       <BsSearch className="icons"/>
       <p className="colorGray">Search</p>
       </div>

       <div className="d-flex mb-5">
           <BiLibrary/>
       <p className="colorGray">Your Library</p>
        </div>

        <div className="d-flex mb-1">
            <BsFillPlusSquareFill/>
        <p className="colorGray">Create Playlist</p>
        </div>

        <div className="d-flex mb-1">
            <BsFillBookmarkHeartFill/>
       <Link to='/liked'><p className="colorGray">Liked Songs</p></Link> 
        </div>


        <div className="colorGray">
            	<div>Funky Heavy Bluesy</div>
                <div>Your Top Songs 2020</div>
                <div>In Love With You - Erykah Badu</div>
                <div>This Is Rod Stewart</div>
                <div>FRANCHISE With Young Thug</div>
                <div>Your Top Songs 2019</div>
                <div>Pallegio</div>
                <div>This Is Joe Bonamassa</div>
                <div>Jun19</div>
                <div>Jack 30th Party2</div>
                <div>Jack 30th Party</div>
                <div>This Is Opeth</div>
                <div>Metal Ballads</div>
                <div>New Playlist</div>
                <div>Your Top Songs 2018</div>
                <div>Jazz Classics Blue Note Edition</div>
        </div>
   </Container>
 </>
)

export default SideBar