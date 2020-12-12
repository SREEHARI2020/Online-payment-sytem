
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Homepage/Home';

function App() {
  return (
    <Router>
      
   <Navbar/>
   <Switch>
   <Route exact path='/' ><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
