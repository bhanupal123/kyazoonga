import React from 'react';
import HeaderItem from './headerItem'
import HeaderStyle from './headerStyle'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        var item = ['Sign Up','Sign In', 'cart' , 'Notification', 'Ticket Your Event'];
        
        return (
       
            <nav className="navbar navbar-inverse site-nav">
                <HeaderStyle />
                <div className="collapse navbar-collapse navbar-right " id="myNavbar">
                    <HeaderItem item={item}/>
                </div>
            </nav>
        
        )
    }
}
