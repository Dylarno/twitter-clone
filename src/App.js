import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import { NavLeft } from './components/nav-left/index'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <NavLeft />
        <switch>
          <Route path="/" exact>Home</Route>
          <Route path="/profile">Profile</Route>
        </switch>

        <div className="right-div">
          RightDiv
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
