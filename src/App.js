import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import { NavLeft } from './components/nav-left/index'
import { Home } from './components/home';
import { Profile } from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <NavLeft />
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/profile">
            <Profile avatar="https://pbs.twimg.com/profile_images/1268673564800139267/Nph2nyZ6_400x400.jpg" displayname="Dylan" username="@dylanmede_"/>
          </Route>
        </Switch>

        <div className="right-div" />
      </div>
    </BrowserRouter>
  )
}

export default App;
