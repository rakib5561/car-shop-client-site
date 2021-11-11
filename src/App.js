import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pagess/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import About from './Pagess/About/About';
import AllCars from './Pagess/AllCars/AllCars';
import Contact from './Pagess/Contact/Contact';
import NotFound from './Pagess/NotFound/NotFound';
import Login from './Pagess/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Registration from './Pagess/Registration/Registration';
import Dasboard from './Pagess/Dasboard/Dasboard';

function App() {
  return (
    <div className="App"> 
      <AuthProvider>
      <Router>
      <Header></Header>
        <switch>
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
            <Route path='/dasboard'>
                <Dasboard></Dasboard>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Registration></Registration>
            </Route>

        </switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
