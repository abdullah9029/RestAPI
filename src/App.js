// src/App.js
import React from "react";
import UserList from "./Components/UserList";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
