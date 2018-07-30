import React from 'react';
import FollowUs from './FollowUs';
import FooterTempalte from './FooterTempalte'
import HeaderItem from './headerItem';

const Footer = (props)=> {
    
    var dropDownList = [{title:'Action'} , {title:'Another action'},{title:'Something else here'} , {title:'Seprated link'}]
    var Company = [{title:'About Us'},{title:'Blog'},{title:'Careers'},{title:'Contact Us'},{title:'Policies'}]
    var Help = [{title:'24x7 Customer Service'},{title:'Regenerate your PAH e-Ticket'},{title:'Reprint Confirmation'},{title:'Regenerate-e-Ticket'},{title:'Track Courier'}]
    var Events = [{title:'EsselWorld'},{title:'KidZania'},{title:'Water Kingdom'},{title:'Adventure Park'},{title:'Vineyard Tour & Cycling'}];
    var Country = [{id:'country',title:'Australia',linkvalue:'http://www.kyazoonga.com.au/',imagevalue:'images/CountriesFlag/aus.png'},
    {id:'country',title:'India',linkvalue:'http://www.kyazoonga.com/',imagevalue:'images/CountriesFlag/ind.png'},
    {id:'country',title:'Ireland',linkvalue:'http://www.kyazoonga.ie/',imagevalue:'images/CountriesFlag/ireland.png'},
    {id:'country',title:'United Arab Emirates',linkvalue:'http://www.kyazoonga.ae/',imagevalue:'images/CountriesFlag/uae.png'},
    {id:'country',title:'United States',linkvalue:'http://www.kyazoonga.com/',imagevalue:'images/CountriesFlag/usa.png'}
    ]
    
    return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-3 cont-drop">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span className="caret"></span>
          </button>
                { dropDownList.map((item, index) => (
                    <FooterTempalte item={item}/>
                 ))
                }
            
          </div>
        </div>
        <div className="col-sm-9 home-newsletter">
          <div className="row">
            <div className="col-sm-5 news-subs-txt">
              <h3>Subscribe to our Newsletter</h3>
            </div>
            <div className="col-sm-7">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email"/>
                <span className="input-group-btn">
                 <button className="btn btn-theme" type="submit">Subscribe</button>
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer-links">
        <div className="col-sm-3">
          <h6>Help</h6>
          <ul>
            {
                Help.map((item, index) => (
                    <FooterTempalte item={item}/>
                 ))
          
            }</ul>
        </div>

        
        <div className="col-sm-3">
          <h6>Company</h6>
          <ul>
            {
                Company.map((item, index) => (
                    <FooterTempalte item={item}/>
                 ))
          
            }
            </ul> 
        </div>
        <div className="col-sm-3">
          <h6>Popular Events</h6>
          <ul>
            {
                Events.map((item, index) => (
                    <FooterTempalte item={item}/>
                 ))
          
            }
        </ul>
        </div>
        <div className="col-sm-3 country-flag-sec">
          <h6>Country</h6>
          <ul>
            {
                 Country.map((item, index) => (
                    <FooterTempalte item={item}/>
                 ))
            }
            
        </ul>
        </div>
      </div>


      <FollowUs />

      

    </div>
  </footer>


    )
}

export default Footer;
