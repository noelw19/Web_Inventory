import './App.css';

import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from'./Routes/Home';
import Profile from'./Routes/Profile';
import Login from'./Routes/Login';
import Logout from './Routes/Logout';
import Product_Info from './Routes/Product_Info';

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/info">Inventory</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <bottomNavigation></bottomNavigation>

        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/info" component={Product_Info} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} /> 
      </main>
    </Router>
  );
}

export default App;
