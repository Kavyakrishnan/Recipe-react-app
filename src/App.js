import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addreceipe from './Addreceipe';
import Searchrecipe from './Searchrecipe';

function App() {
  return (
    <div >
      <Addreceipe/>
      <Searchrecipe/>
    </div>
  );
}

export default App;
