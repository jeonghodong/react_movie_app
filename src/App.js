import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Routers/Detail";
import Home from "./Routers/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
