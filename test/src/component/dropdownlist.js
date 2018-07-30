import React from 'react';


const DropDownList = (props)=> {
    
    
 
    return (
        <ul>
        {
            props.item.map((item, index) => (
                <li><a href="#">{props.item.title}</a></li>
            ))
        }
        </ul>
    )
}

export default DropDownList;
