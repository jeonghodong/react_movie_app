import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Default from "./Routers/Default";
import Detail from "./Routers/Detail";
import Home from "./Routers/Home";
import List from "./Routers/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route element={<Default />}>
            <Route path="/react_movie_app" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/:detail" element={<List />} />
          </Route>
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
