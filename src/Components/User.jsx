// src/components/User.js  

import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

const User = ({ userId }) => {  
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    const fetchUser = async () => {  
      try {  
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);  
        setUser(response.data.data);  
      } catch (err) {  
        setError(err);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchUser();  
  }, [userId]);  

  if (loading) return <div>Loading...</div>;  
  if (error) return <div>Error fetching user: {error.message}</div>;  

  return (  
    <div>  
      <h1>User Details</h1>  
      {user && (  
        <div>  
          <p>ID: {user.id}</p>  
          <p>Name: {user.first_name} {user.last_name}</p>  
          <p>Email: {user.email}</p>  
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />  
        </div>  
      )}  
    </div>  
  );  
};  

export default User;