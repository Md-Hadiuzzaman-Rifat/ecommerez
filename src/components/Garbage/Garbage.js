/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import "./Garbage.scss"

const Garbage = () => {
    
    const [trash, setTrash]= useState([])

    useEffect(()=>{
        fetch(`https://backend.thespectacle23.com/getGarbage`)
        .then(res=>res.json())
        .then(data=>setTrash(data))
    },[])

    const handleDelete=(id)=>{
        fetch(`https://backend.thespectacle23.com/deleteGarbage/${id}`,{
            method:'DELETE'
        })
        .then(()=>alert('Alert For your User!') ? "" : location.reload()  )
    }

    return (
        <div className='garbage'>
            {
                trash && trash?.length === 0 && <p>No Product Found</p>
            }{
                trash?.length > 0 && trash?.map((item, index)=> <div key={index} className='garbage__image' >
                    <img src={`https://backend.thespectacle23.com/images/${item?.filename}`} alt="" />
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </div> )
            }
        </div>
    );
};

export default Garbage;