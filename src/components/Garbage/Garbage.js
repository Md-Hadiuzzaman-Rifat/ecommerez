import React, { useEffect, useState } from 'react';
import "./Garbage.scss"

const Garbage = () => {
    
    const [trash, setTrash]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:25000/getGarbage`)
        .then(res=>res.json())
        .then(data=>setTrash(data))
    },[])

    const handleDelete=(id)=>{
        fetch(`http://localhost:25000/deleteGarbage/${id}`,{
            method:'DELETE'
        })
    }

    return (
        <div className='garbage'>
            {
                trash && trash?.length === 0 && <p>No Product Found</p>
            }{
                trash?.length > 0 && trash?.map((item, index)=> <div key={index} className='garbage__image' >
                    <img src={`http://localhost:25000/images/${item?.filename}`} alt="" />
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </div> )
            }
        </div>
    );
};

export default Garbage;