import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import About from './components/About.js'
import Profile from './components/Profile.js'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'

function App() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="mb-auto">
    
      <Navbar isAuthenticated={isAuthenticated}/>

    <Switch>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/menu">
          <Menu/>
        </Route>
    </Switch>

    <Footer />
    </div>
  );
}

export default App;
