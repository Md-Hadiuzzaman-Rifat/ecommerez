import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Fuck = () => {
    const { logout } = useAuth();
    
    return (
        <div className='mt-12'>
            <br /> <br /> <br />
            <h2>This is fuck</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Fuck;