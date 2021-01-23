
import './App.css';
import Appbar from './Component/Appbar/Appbar.jsx';
import Signup from './Component/Signup/Signup.jsx';
import Signin from './Component/Signin/Signin.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Cart from './Component/Cart/Cart.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route path="/dashboard" component={Dashboard} exact></Route>
    <Route path="/signup" component={Signup} exact></Route>
    <Route path="/signin" component={Signin} exact></Route>
    <Route path="/cart" component={Cart} exact></Route>
    
    </Switch>
    
    </BrowserRouter>
      
    </div>
  );
}

export default App;
