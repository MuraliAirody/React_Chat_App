import "./addUser.css";

import { useState } from "react";

const AddUser = () => {
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  const handleAdd = async () => {};

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="det">
          <img src="./avatar.png" alt="" />
          <span>Ram</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
