import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Detail from "./Routers/Detail";
import Home from "./Routers/Home";
import List from "./Routers/List";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route>
          <Route path="/:detail" element={<List />} />
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
