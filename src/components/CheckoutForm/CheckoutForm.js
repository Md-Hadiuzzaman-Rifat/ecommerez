import React from "react";
import "./CheckoutForm.scss";
import { useState } from "react";
const CheckoutForm = () => {
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [address, setAddress]=useState("")
  const [city, setCity]=useState("")
  const [zip, setZip]=useState("")
  const [country, setCountry]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(firstName, lastName, email, phone, address, city, zip, country);
  }
  return (
    <div className="checkoutForm">
      <form className="container" onSubmit={handleSubmit}>
        <div className="input-row">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" onChange={e=>setFirstName(e.target.value)} name="fname" required />
        </div>
        <div className="input-row">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" onChange={e=>setLastName(e.target.value)} name="lname" required />
        </div>
        <div className="input-row">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={e=>setEmail(e.target.value)} name="email" required />
        </div>
        <div className="input-row">
          <label htmlFor="Phone">Phone</label>
          <input type="text" id="phone" onChange={e=>setPhone(e.target.value)} name="phone" required />
        </div>
        <div className="input-row">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" onChange={e=>setAddress(e.target.value)} name="address" required />
        </div>
        <div className="input-row">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" onChange={e=>setCity(e.target.value)} required />
        </div>
        <div className="input-row">
          <label htmlFor="zip">Zip Code</label>
          <input type="text" id="zip" name="zip" onChange={e=>setZip(e.target.value)} required />
        </div>
        <div className="input-row">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" onChange={e=>setCountry(e.target.value)} required />
        </div>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
