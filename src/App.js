import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addreceipe from './Addreceipe';
import Searchrecipe from './Searchrecipe';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './Viewall';


function App() {
  return (
    <div >
   
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addreceipe/>}/>
      <Route path="/search" exact element={<Searchrecipe/>}/>
      <Route path="/view" exact element={<Viewall/>}/>
    

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
