import React from "react";
import "./Control.scss";
import { useState } from "react";
import Button from "../../../components/Button/Button";

const Control = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("moderator");
 
  const handleSubmit = () => {};

  return (
    <div className="Control">
        <h1>Admin Controller</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="product-name">Enter Email</label>
          <input
            type="text"
            id="control-email"
            name="control-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="controller">Select Role</label>
          <select
            name="category"
            required
            id=""
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
          <div className="submit-btn">
          <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Control;
