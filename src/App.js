// src/App.js
import React from "react";
import Routing from "./routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Routing />
      </div>
    </Router>
  );
}

export default App;
