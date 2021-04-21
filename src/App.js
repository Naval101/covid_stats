import React, {useState, useEffect} from "react"
import  "./App.css";
import News from "./News";
import Stats from "./Stats";
import Info from "./Info";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="app">

    <Router>
    <div className="navigation">
    <div className="logo">
      <h3> COVID-19 </h3>
    </div>
    <ul className="menu">
		  <li><Link to="/">Stats </Link></li>
		  <li><Link to="/News">Top News </Link></li>
		  <li><Link to="/Info">Health information</Link></li>
  	</ul>
    </div>

     <Route path="/" exact component={Stats} />
     <Route path="/News" exact component={News} />
     <Route path="/Info" exact component={Info} />
     
    </Router>
    </div>

   
  );
}

export default App;
