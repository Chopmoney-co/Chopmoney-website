import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Storytime from "./pages/storytime";
import Storytimeleft from "./pages/storytimeleft";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route path="/">
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="storytime" element={<Storytime />} />
          <Route path="storytime2" element={<Storytimeleft />} />
          <Route path="about" element={<About />} />
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
