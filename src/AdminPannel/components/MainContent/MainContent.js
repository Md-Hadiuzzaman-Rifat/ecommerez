import React from 'react';
import "./MainContent.scss"
import Box from '../Box/Box';
import OrderTable from '../../pages/OrderTable/OrderTable';

const MainContent = () => {
    return (
        <div className='mainContent'>
            <Box></Box>
            <OrderTable></OrderTable>
        </div>
    );
};

export default MainContent;