import {Navbar, Image} from "react-bootstrap";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillCaretDownFill } from "react-icons/bs";
import image from '../album-img/pp.jpg'
import './Styles.css'

const Header =()=> (
  <>
<Navbar expand="lg" className="d-flex justify-content-between headerColor" sticky="top">
 <div><BsFillArrowLeftCircleFill/> <BsFillArrowRightCircleFill/></div>
 <div class="button d-flex align-items-center">
                        <div class=" mr-1">
                            <Image src={image} style={{height: '30px', borderRadius: '50%'}}/>
                            Madu Auler
                            <BsFillCaretDownFill/>
                        </div>
                    </div>
</Navbar>
 </>
)

export default Header