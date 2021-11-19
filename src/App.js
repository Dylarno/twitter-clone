import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import { NavLeft } from './components/nav-left/index'
import { Home } from './components/home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <NavLeft />
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/profile">Profile</Route>
        </Switch>

        <div className="right-div" />
      </div>
    </BrowserRouter>
  )
}

export default App;
