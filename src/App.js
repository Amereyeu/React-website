import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Products from "./components/Products";
import Faqs from "./components/Faqs";
import About from "./components/About"
import Footer from "./components/Footer";
import Detail from './components/Detail'
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bikes" component={Products} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/about" component={About} />
          <Route path="/bike/:id" component={Detail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
