import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const auth= useAuth()
    const {email}= auth?.currentUser || {}
    const [data, setData]= useState([])

    useEffect(()=>{
      fetch(`http://localhost:2020/myOrders?email=${email}`,{
        headers:{
          "authorization":`Bearer ${localStorage.getItem('idToken')}`
        }
      })
      .then(res=>res.json())
      .then(res=>{
        setData(res)
      })
    },[email])

    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default Profile;