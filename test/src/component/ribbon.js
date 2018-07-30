import React from 'react';
import HeaderItem from './headerItem';


const Ribbon = (props)=> {
    
    var item = ['Concerts','Cricket','Events', 'Sports' , 'Amusement Parks', 'Restaurants','Theatre & Arts','Parties'];
 
    return (
        
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <h1>Tickets made simple for everyone, everywhere</h1>
                <div className="site-manu container">
                <div className="collapse navbar-collapse">
                    <HeaderItem item={item}/>
                </div>
                <div className="banner-serch-box"><input id="txtSearchBox" className="" name="q" value="" placeholder="Search for an event, venue or city" type="text"/><a href="javascript:void(0);" ><i className="fa fa-search" aria-hidden="true"></i></a></div>
                </div>
                
            </div>
        
    )
}

export default Ribbon;
