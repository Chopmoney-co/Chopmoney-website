import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Nostalgia from "./pages/nostalgia";
import Aboutleft from "./pages/aboutleft";


function App() {
  return (
    <div className="App">

      <Routes>
        {/* Main Routes */}
        <Route path="/" >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about1" element={<About />} />
          <Route path="about2" element={<Aboutleft />} />
          <Route path="nostalgia" element={<Nostalgia />} />
        </Route>

        {/* Not found */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-muted">
              You have hit the end of the road!
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
