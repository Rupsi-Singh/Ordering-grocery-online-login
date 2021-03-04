import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link,NavLink } from 'react-router-dom';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Router>
   <div>
      <div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/Login">Login</NavLink>
        <NavLink activeClassName="active" to="/SignUp">SignUp</NavLink>
        <NavLink activeClassname="active" to="/Dashboard">Dashboard</NavLink>
    </div>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home  }/>
        <Route path="/Login" component={Login  }/>
        <Route path="/SignUp" component={SignUp   }/>
        <Route path="/Dashboard" component={Dashboard   }/>
      </Switch>
    </div>
    </div>
    
    </Router>
    </div>
  );
}

export default App;
