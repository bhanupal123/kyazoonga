import React from 'react';
import HotTicket from './HotTicket';
import Browse from './browse';
import Seller from './seller';
import Client from './Client';

const MainContent = (props)=> {
    
    
 
    return (
        <div>
            <HotTicket />
            <Browse />
            <Seller />
            <Client />
        </div>
    )
}

export default MainContent;
