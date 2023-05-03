import React from "react";
import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className="details">
        <p>{user.first_name} {user.last_name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;