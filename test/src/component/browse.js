import React from 'react';
import CategoryBox from './categoryBox';

const Browse = (props)=> {
    
    var item = [
        {title:'Concerts',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg'},
        {title:'Cricket',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg'},
        {title:'Theatre & Arts',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg'},
        {title:'Amusement Parks',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg'},
        {title:'Sports',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg'},
        {title:'Restaurants',imageLink:'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg'},
    
    ]
 
    return (
        <section className="home-cat-sec text-center">
            <div className="container">
            <h2 className="site-title">Browse by top categories</h2>
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

export default Browse;
