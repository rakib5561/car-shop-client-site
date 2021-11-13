import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pagess/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import About from './Pagess/About/About';
import AllCars from './Pagess/AllCars/AllCars';
import Contact from './Pagess/Contact/Contact';
import Login from './Pagess/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Registration from './Pagess/Registration/Registration';
import Dasboard from './Pagess/Dasboard/Dasboard/Dasboard';
import Purchase from './Pagess/Purchase/Purchase';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App"> 
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/about'>
                <About></About>
            </Route>
            <Route path='/cars'>
                <AllCars></AllCars>
            </Route>
            <Route path='/contact'>
                <Contact></Contact>
            </Route>
            <PrivateRoute path='/purchase'>
               <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/dasboard'>
                <Dasboard></Dasboard>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
