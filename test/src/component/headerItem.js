import React from 'react';


const HeaderItem = (props)=> {
   return (
        <ul class="nav navbar-nav top-nav hide-on-mobile">
            {
                props.item.map((item, index) => (
                <li  key={item}>&nbsp;&nbsp;&nbsp;{item}</li>
                ))
            }
        </ul>
    )
}

export default HeaderItem;
