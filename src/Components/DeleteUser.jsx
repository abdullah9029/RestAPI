import React, { useState } from "react";

const DeleteUser = () => {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  const deleteUser = async (id) => {
    console.log(id);
    const url = `https://reqres.in/api/users/${id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage(`User with ID ${id} was deleted successfully.`);
      } else {
        setMessage(`Failed to delete user. Status: ${response.status}`);
      }
    } catch (error) {
      setMessage("Error occurred while deleting the user.");
      console.error("Error:", error);
    }
  };

  const handleDeleteClick = () => {
    if (userId) {
      deleteUser(userId);
    } else {
      setMessage("Please enter a valid User ID.");
    }
  };

  return (
    <div className="cointainer">
      <div>
        <h1 className="title">Delete User</h1>
      </div>
      <div className="delete-form">
        <input
          className="user-input"
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button className="delete-btn" onClick={handleDeleteClick}>
          Delete User
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default DeleteUser;
