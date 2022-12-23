import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Routers/Detail";
import Home from "./Routers/Home";
import List from "./Routers/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/:detail" element={<List />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
