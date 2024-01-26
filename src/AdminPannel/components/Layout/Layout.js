import React from 'react';
import "./Layout.scss"

const Layout = ({children}) => {
    return (
        <div className='adminLayout'>
            {children}
        </div>
    );
};

export default Layout;