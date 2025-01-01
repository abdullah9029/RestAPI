import React, { useState, useEffect } from "react";

const UpdateUser = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("");
  const [validUserIds, setValidUserIds] = useState([]);

  // Fetch valid user IDs upon component mount
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setValidUserIds(data.data.map((user) => user.id)); // Store valid user IDs from the API
    };
    fetchUsers();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    console.log(validUserIds.includes(parseInt(userId)));

    // Validate that the user ID is among the valid ones
    if (!validUserIds.includes(parseInt(userId)) || !name || !job) {
      setMessage("Please provide a valid user ID");

      console.log(typeof name);
      return;
    } else if (/^\d+$/.test(name)) {
      //setMessage("please Provide valid user Name");'
      setMessage("Please provide a valid user  name");
      return;
    } else if (/^\d+$/.test(job)) {
      //setMessage("please Provide valid user Name");'
      setMessage("Please provide a valid Job");
      return;
    }

    //if (/^\d+$/.test(name))

    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, job }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`User updated successfully: ${JSON.stringify(data)}`);
      } else {
        setMessage(`Failed to update user: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      setMessage(`Failed to update user: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Update User</h2>
      <form className="login-form" onSubmit={handleUpdateUser}>
        <div className="form-group">
          <label>
            User ID:
            <input
              className="user-input"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Name:
            <input
              className="user-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Job:
            <input
              className="user-input"
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="update-btn">
          Update User
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UpdateUser;
