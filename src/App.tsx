import React from "react";
import Home from "./components/Home";
import NavbarApp from "./components/NavbarApp";
//css bootstrap react
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <NavbarApp />
      <Home />
    </div>
  );
}

export default App;
