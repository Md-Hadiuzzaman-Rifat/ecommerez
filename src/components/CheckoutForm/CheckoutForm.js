import React, { useEffect } from "react";
import "./CheckoutForm.scss";
import { useState } from "react";
import { usePurchaseOrderMutation } from "../../features/confirmOrder/confirmOrder";
import { clearTheCart } from "../../utilities/localStorage";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../features/orderProduct/orderProductSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({data, products ,keys}) => {
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [address, setAddress]=useState("")
  const [city, setCity]=useState("")
  const [zip, setZip]=useState("")
  const [country, setCountry]=useState("")

  const navigate= useNavigate()
  const dispatch= useDispatch()

  function reset(){
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setZip("");
    setCountry("");
  }




  // traverse the function
  let orderedProduct=Object.entries(products)
  // console.log(orderedProduct, data);

  function getData(orders, products) {
    let newArray = [];
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (orders[i][0] === products[i]._id) {
          newArray.push({
            ...products[i],
            amount: orders[i][1],
          });
        } else if (orders[i][0] === products[j]._id) {
          newArray.push({
            ...products[j],
            amount: orders[i][1],
          });
        } else {
          continue;
        }
      }
    }
    return newArray;
  }
  // console.log(getData(orderedProduct, data));
  let  ordered=getData(orderedProduct, data)
  

// find unique order cz upper function return duplicate values
  function uniqueByListening(data, key){
    return[
      ...new Map(
        data.map(x=>[key(x),x])
      ).values()
    ]
  }
  console.log(uniqueByListening(ordered, res=>res._id));

  let total=0
  let payableTotal=(arr)=>{
    for(let i=0; i<arr.length; i++){
      total= total+arr[i].amount*arr[i].price
    }
    return total
  }

  let payable= payableTotal(uniqueByListening(ordered, res=>res._id))

  const handleSubmit=(e)=>{
    e.preventDefault() 
    let product={
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zip,
      country,
      status:"pending",
      timestamp: new Date().toLocaleString(),
      order:uniqueByListening(ordered, res=>res._id),
      payable
    }
    navigate('/payment',{state:{product}})

    //  order(product)
    //  clearTheCart()
  }
  // const handleSubmit=(e)=>{
  //   e.preventDefault() 
  //   navigate('/')
  //   let product={
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     address,
  //     city,
  //     zip,
  //     country,
  //     status:"pending",
  //     timestamp: new Date().toLocaleString(),
  //     order:uniqueByListening(ordered, res=>res._id),
  //     payable
  //   }
  //    order(product)
  //    clearTheCart()
  // }

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
