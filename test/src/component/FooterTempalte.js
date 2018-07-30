import React from 'react';


const FooterTempalte = (props)=> {
    
    
 
    return (
        <li><a className={props.item.className} href={props.item.linkvalue} target="blank" rel="me">
            {(props.item.id==='social' || props.item.id==='country') ? <img src={props.item.imagevalue} alt={props.item.altvalue} width="32" height="32"/>:''}  {(props.item.id !== 'social') ?  props.item.title : ''}    </a>
        </li>
    )
}

export default FooterTempalte;
