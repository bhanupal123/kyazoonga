import React from 'react';
import ClientPrint from './ClientPrint';

const Client = (props)=> {
    
    var clientList = [
        {linkvalue:'https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2',srcvalue:'https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg',altvalue:'Forbes'},
        {linkvalue:'https://tech.co/technology-upgrading-events-industry-2017-06',srcvalue:'https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg',altvalue:'Forbes'},
        {linkvalue:'https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/',srcvalue:'https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg',altvalue:'INC'},
    ]   
 
    return (
    <section className="home-featured-sec text-center">
    <h2 className="site-title"><span>We've been featured in</span></h2>
    <div className="container-fluid">

        {
            clientList.map((item, index) => (
                <ClientPrint item={item}/>
            ))
        }
      </div>
  </section>
    )
}

export default Client;
