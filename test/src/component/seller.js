import React from 'react';
import CategoryBox from './categoryBox';

const Seller = (props)=> {
    var item = [
        {title:'Youtube',imageLink:'https://youtu.be/IyucJZev9wM',id:'seller'},
        {title:'Kyazoonga Blog',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg',id:'seller'},
    ]
    
 
    return (
        <section className="home-cat-sec text-center">
    <div className="container-fluid">
      <h2 className="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/" target="_blank"><img src="http://www.kyazoonga.com/images/iticket-logo.png" /></a> to create and sell your event tickets online <small>Discover and purchase tickets to cool events created and listed by organizers directly</small></h2>
      <div className="row">
                {
                    item.map((item, index) => (
                        <CategoryBox item={item}/>
                    ))
                }
       
        
      </div>
    </div>
  </section>
    )
}

export default Seller;
