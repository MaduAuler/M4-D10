
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import ArtistPage from './components/ArtistPage'
import AlbumPage from './components/AlbumPage'
import {Provider} from 'react-redux'
import store from './redux/store'
import Liked from './components/Liked';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={ <Home/>}/>
    <Route path="/artist" element={<ArtistPage/>}/>
    <Route path="/album/:musicId" element={<AlbumPage/>}/>
    <Route path='/liked' element={<Liked/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
