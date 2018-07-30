import React from 'react';


const ClientPrint = (props)=> {
    return (
        <a target="_blank" href={props.item.linkvalue}>
            <img src={props.item.srcvalue} alt={props.item.altvalue}/></a>
 
    )
}

export default ClientPrint;
