import React from 'react';
import FooterTempalte from './FooterTempalte';


const FollowUs = (props)=> {
    var SocialLink = [
        {id:'social',className:'f',linkvalue:'https://www.facebook.com/kyazoonga',imagevalue:'images/facebook.png',altvalue:'Facebook'},
        {id:'social',className:'f',linkvalue:'https://twitter.com/kyazoonga',imagevalue:'images/twitter.png',altvalue:'Twitter'},
        {id:'social',className:'f',linkvalue:'https://www.instagram.com/kyazoonga',imagevalue:'images/instagram.png',altvalue:'in'}
    ]
    
 
    return (
        <div className="footer-social text-center">
        <h6>Follow Us</h6>
        <ul>
            {
                 SocialLink.map((item, index) => (
                    <FooterTempalte item={item}/>
                 ))
            }
            
        </ul>
        <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
      </div>
    )
}

export default FollowUs;
