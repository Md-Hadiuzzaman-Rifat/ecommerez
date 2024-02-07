import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import "./ControlForm.scss";
import {
  useEditUsersMutation,
  useGetUsersQuery,
} from "../../../features/users/userApi";

const ControlForm = () => {
  const [role, setRole] = useState("moderator");
  const { data:findUser } = useGetUsersQuery();
  const [editUsers, {isSuccess}] = useEditUsersMutation();

  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    setSearch(value);
  };
  const handleSearch = debounceHandler(doSearch, 500);

  // check either it exist or not
  useEffect(() => {
    setResult(findUser?.find((e) => e.email === search));
  }, [search, findUser]);

  useEffect(()=>{
    if(isSuccess){
      alert("User added successfully as "+role)
    }
  },[isSuccess, role])

  const handleSubmit = (e) => {
    e.preventDefault();
    editUsers({ email: search, role });
  };

  return (
    <form onSubmit={handleSubmit} className="ControlForm">
      <label htmlFor="product-name">Enter Email</label>
      <input
        type="text"
        id="control-email"
        name="control-email"
        onChange={(e) => handleSearch(e.target.value)}
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
        <Button disabled={!result}>Submit</Button>
      </div>
    </form>
  );
};

export default ControlForm;
