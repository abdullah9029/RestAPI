import React, { Fragment } from "react";
import UserList from "./Components/UserList";
import Login from "./Components/Login";
import DeleteUser from "./Components/DeleteUser";
import UpdateUser from "./Components/UpdateUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Login />
                <DeleteUser />
                <UpdateUser />
              </Fragment>
            }
          />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
