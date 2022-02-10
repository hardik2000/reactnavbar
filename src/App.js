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
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/hardik' component={Hardik} />
        <Route path='/abhishek' component={Abhishek} />
        <Route path='/shelja' component={Shelja} />
        <Route path='/bhanu' component={Bhanu} />
        <Route path='/sheeps' component={Sheeps} />
      </Switch>
    </Router>
  );
}
  
export default App;