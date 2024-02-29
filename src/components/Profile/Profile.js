import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import OrderedItem from '../OrderedItem/OrderedItem';
import "./Profile.scss"

const Profile = () => {
    const auth= useAuth()
    const {email}= auth?.currentUser || {}
    const [data, setData]= useState([])

    useEffect(()=>{
      fetch(`https://eye-care-back-end-git-master-md-hadiuzzaman-rifat.vercel.app/myOrders?email=${email}`,{
        headers:{
          "authorization":`Bearer ${localStorage.getItem('idToken')}`
        }
      })
      .then(res=>res.json())
      .then(res=>{
        setData(res)
      })
    },[email])

    return (
        <div className='Profile'>
            <div className="container">
            <p className='heading'>Your Orders</p>
            {
              data && data?.length > 0 && data.map(item=><OrderedItem key={item._id} item={item}/>)
            }
            </div>
        </div>
    );
};

export default Profile;