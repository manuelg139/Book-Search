import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import "./index.css"

function App() {
  return (
    <Router>
      <div>
       
        <Header />
        <NavBar />
        <Wrapper>
        <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
    
          </Wrapper>
          
      </div>
      </Router>
  );
}

export default App;
