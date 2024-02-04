import React from 'react';
import { useState } from "react";
import Button from "../../../components/Button/Button";
import "./ControlForm.scss"

const ControlForm = () => {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("moderator");
   
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(email, role);
    };
    return (
        <form onSubmit={handleSubmit} className='ControlForm'>
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
    );
};

export default ControlForm;