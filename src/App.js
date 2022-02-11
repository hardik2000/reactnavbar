import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createBrowserHistory} from 'history';

import NavBar from "./components/Navbar"

import Hardik from "./pages/Hardik"
import Abhishek from "./pages/Abhishek"
import Shelja from "./pages/Shelja"
import Bhanu from "./pages/Bhanu"

import Home from "./pages/Home"
import Excel from "./pages/Excel"
import ContactForm from "./pages/Contact"
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history} basename="/reactnavbar">
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/hardik' component={Hardik} />
        <Route path='/abhishek' component={Abhishek} />
        <Route path='/shelja' component={Shelja} />
        <Route path='/bhanu' component={Bhanu} />
        <Route path='/excel' component={Excel} />
        <Route path='/contact' component={ContactForm} />
      </Switch>
    </Router>
  );
}
  
export default App;