
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import RickAndMorthyCharacters from './Components/RickAndMorthyCharacters';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CharacterDetais from './Components/CharacterDetails';
import Layout from './Components/Layout.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component = {RickAndMorthyCharacters}></Route>
          <Route path='/Characters/:id' Component={CharacterDetais}></Route> 
          <Route path='/Prueba' element = {<p>prueba</p>}></Route> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
