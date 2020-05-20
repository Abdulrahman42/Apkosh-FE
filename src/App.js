import React from "react";
import "assets/scss/style.scss";
import "bootstrap/dist/js/bootstrap.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
      </Router>
    </div>
  );
}

export default App;
