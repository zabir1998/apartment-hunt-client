import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Details from './Components/Details/Details/Details';

import Login from './Components/Login/Login';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details/:apartmentId">
            <Details></Details>
          </Route>
          
           
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          </Switch>
          </Router>
          </UserContext.Provider>
  );
}

export default App;
