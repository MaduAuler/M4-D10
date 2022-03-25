
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import ArtistPage from './components/ArtistPage'
import AlbumPage from './components/AlbumPage'
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={ <Home/>}/>
    <Route path="/artist" element={<ArtistPage/>}/>
    <Route path="/album/:musicId" element={<AlbumPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
