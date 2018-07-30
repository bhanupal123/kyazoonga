import React from 'react';


const CategoryBox = (props)=> {
    
    
 
    return (
        <div className={props.id ==='seller' ? 'col-sm-6 cat-box' : "col-sm-4 cat-box"}>
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>{props.item.title}</h3>
            </div>
            <img src={props.item.imageLink} alt="" className="img-full-width"/>
          </a>
        </div>
    )
}

export default CategoryBox;



