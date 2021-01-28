import Form from './components/form'
import './App.css';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
     
    <div className="App">
      Login  

      <Switch>
      <Route  exact path="/" >
      <li className="d-flex align-items-center justify-content-center">
      <Link to ="/signup" > Sign Up</Link></li>
      <li className="d-flex align-items-center justify-content-center">
      <Link to ="/login"> Login</Link>
      </li> 
      </Route>
      <route exact path='/login'> <Form/></route> 
      <route exact path="/signup"><SignUp/></route>
      </Switch>
    </div>

      

      </Router>
  );
}

export default App;
