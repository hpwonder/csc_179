import './App.css';
import Add from './Pages/Add'
import Dash from './Pages/Dash'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Router>
        
        
        <Routes>
          <Route path = "/" element = {<Dash/>} />
          <Route path = '/add' element = {<Add/>}/>
        
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
