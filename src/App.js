import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar"

import Hardik from "./pages/Hardik"
import Abhishek from "./pages/Abhishek"
import Shelja from "./pages/Shelja"
import Bhanu from "./pages/Bhanu"

import Dogs from "./pages/Dogs"
import Sheeps from "./pages/Sheeps"
function App() {
  return (
    <Router basename="https://hardik2000.github.io/reactnavbar/">
      <NavBar />
      <Switch>
        <Route path='/reactnavbar/' exact component={Dogs} />
        <Route path='/reactnavbar/hardik' component={Hardik} />
        <Route path='/reactnavbar/abhishek' component={Abhishek} />
        <Route path='/reactnavbar/shelja' component={Shelja} />
        <Route path='/reactnavbar/bhanu' component={Bhanu} />
        <Route path='/reactnavbar/sheeps' component={Sheeps} />
      </Switch>
    </Router>
  );
}
  
export default App;