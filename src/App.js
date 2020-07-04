import React from "react";
import MainPage from "./components/MainPage";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/contact";
import Project from "./components/project";
function App() {
  return (
    <div className="background">
      <NavBar />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Project />
      </Route>
    </div>
  );
}

export default App;
