// src/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setUsers(response.data.data);
      } catch (err) {
        setError("Error fetching users");
      } finally {
        //setLoading(true);
      }
    };

    fetchUsers();
  }, []);

  if (error)
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );

  return (
    <div className="container">
      <h1 className="title">Our Team Members</h1>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="avatar-container">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="user-avatar"
              />
            </div>
            <div className="user-info">
              <h2 className="user-name">
                {user.first_name} {user.last_name}
              </h2>
              <p className="user-email">{user.email}</p>
            </div>
            <button className="contact-btn">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
