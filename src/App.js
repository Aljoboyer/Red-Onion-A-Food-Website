import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Login from '../src/Pages/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Pages/Register/Register';
import Authcontext from './Context/Authcontext';
import Orderfood from './Pages/OrderFood/Orderfood';
import Footer from './Pages/Footer/Footer';
import Yourcart from './Pages/YourCart/Yourcart';
import Privateroute from './Privateroute/Privateroute';
import Resetpassword from './Pages/Resetpass/Resetpassword';
import Yourorder from './Pages/Yourorder/Yourorder';
import Manageorder from './Pages/Adminpages/Manageorder/Manageorder'
function App( ) {
  return (
    <div className="container-fluid">
      <Authcontext>
          <Router>
              <Header></Header>
              <Switch>
                  <Route exact path="/">
                      <Home></Home>
                    </Route>
                <Route exact path="/login">
                  <Login></Login>
                </Route>
                <Route exact path="/register">
                    <Register></Register>
                </Route>
                <Route exact path="/orderfood/:foodID">
                    <Orderfood></Orderfood>
                </Route>
                <Route exact path="/reset">
                    <Resetpassword></Resetpassword>
                </Route>
                <Privateroute exact path="/yourcart">
                    <Yourcart></Yourcart>
                </Privateroute>
                <Route exact path="/yourorder">
                  <Yourorder></Yourorder>
                </Route>
                <Route exact path="/manageorder">
                  <Manageorder></Manageorder>
                </Route>
              </Switch>
              <Footer></Footer>
          </Router>
      </Authcontext>
    </div>
  );
}

export default App;
