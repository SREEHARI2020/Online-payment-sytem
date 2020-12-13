
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import { Home } from './components/pages/Homepage/Home';
import { Products } from './components/pages/Products/Products';
import {Services} from './components/pages/Services/Services';
import {Signup} from './components/pages/Signup/Signup';
function App() {
  return (
    <Router>
      
   <Navbar/>
   <Switch>
   <Route exact path='/' ><Home/></Route>
   <Route path ='/services'><Services/></Route>
   <Route path ='/products'><Products/></Route>
   <Route path ='/sign-up'><Signup/></Route>
      </Switch>
      <Footer/>
    </Router>
   
  );
}

export default App;
