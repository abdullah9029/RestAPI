// src/App.js  
import React from 'react';  
import UserList from './Components/UserList'
import User from './Components/User';
import "./index.css"

function App() {  
  return (  
    <div className="App">  
      <UserList />  
      <User/>
    </div>  
  );  
}  

export default App;