import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './compnents/Home'
import Form  from './compnents/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/form' Component={Form}/>
      </Routes>
    </Router>
  );
}

export default App;
