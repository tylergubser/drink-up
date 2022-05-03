import './App.css';
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import About from './components/About.js'
import Profile from './components/Profile.js'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import Orders from './components/Orders.js'
import EditMenu from './components/EditMenu.js'
import React, { useEffect, useState } from "react"
function App() {
  
  const { user, isAuthenticated } = useAuth0();
  const [isUser, setIsUser] = useState([])
  
  useEffect(() => {

    if (isAuthenticated) {

      fetch(`http://localhost:3000/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.nickname,
          manager: false
          }),
        }) 
        .then((r) => r.json())
        .then((data) => setIsUser(data));

      }},[user])
      console.log(isUser)
  return (
    <div className="mb-auto">
    
     {/* {isUser.manager ? <Navbar isAuthenticated={isAuthenticated}/> :
      null } */}
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
        <Route exact path="/orders">
          <Orders/>
        </Route>
        <Route exact path="/edit-menu">
          <EditMenu/>
        </Route>
    </Switch>

    <Footer />
    </div>
  );
}

export default App;
