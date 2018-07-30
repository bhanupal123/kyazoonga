import React from 'react';


const Thumbnail = (props)=> {
   return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="box">
            <a href="#" className="block-link">
              <div className="ticket-img">
                <img src={props.item.imageLink} alt=""/>
                <br/>
                <span className="ticket-price">{props.item.price}</span>
              </div>
              <div className="ticket-info">
                <span className="time-info">{props.item.time}</span>
                <h3 className="ticket-title">{props.item.title}</h3>
                <p className="venue-info">{props.item.venue}</p>
              </div>
            </a>
            <div className="social clearfix">
              <div className="pull-left">
                <a className="btn btn-default btn-xs ical" href="#">
              <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                <a className="btn btn-default btn-xs ml-10" href="#">
              <i className="fa fa-calendar"></i> &nbsp;Google</a>
              </div>
              <div className="pull-right">
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-facebook"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Thumbnail;
