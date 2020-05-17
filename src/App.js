import React from "react";
import "assets/scss/style.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
