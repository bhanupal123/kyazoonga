import React from 'react';
import Thumbnail from './thumbnail';

const HotTicket = (props)=> {
    
    var item = [
        {imageLink:'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',price:'INR 50 - 2,500',time:'SAT, FEB 10, 2018 20:00 Onward',title:'JamshedpurFC - ISL Season 4',value:'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'},
        {imageLink:'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',price:'INR 50 - 2,500',time:'SAT, FEB 10, 2018 20:00 Onward',title:'JamshedpurFC - ISL Season 4',value:'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'},
        {imageLink:'http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif',price:'INR 50 - 2,500',time:'SAT, FEB 10, 2018 20:00 Onward',title:'JamshedpurFC - ISL Season 4',value:'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur'}    
    ]    

    return (
        <section className="hot-ticket-sec ticket-boxes">
            <div className="container">
            <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
            <div className="row">
                {
                    item.map((item, index) => (
                        <Thumbnail item={item}/>
                    ))
                }
            <div className="btn-sec text-center p-20 pt-0">
            <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
        </div>
        </div>
    </div>
  </section>
    )
}

export default HotTicket;
