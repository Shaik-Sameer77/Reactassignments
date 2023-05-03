import React, { useState, useEffect } from "react";
import "./UserContainer.css";
import UserCard from "./UserCard";

function UserContainer() {
  const [userData, setUserData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch("https://reqres.in/api/users/");
      const data = await response.json();
      setUserData(data.data);
    }
    fetchUserData();
  }, []);

  function handleClick() {
    setCurrentIndex((currentIndex + 1) % userData.length);
  }

  return (
    <div className="container">
      <h1>User Details</h1>
      {userData.length > 0 && <UserCard user={userData[currentIndex]} />}
      <button onClick={handleClick}>Get User</button>
    </div>
  );
}

export default UserContainer;