import React from 'react';


const HeaderStyle = (props)=> {
    return (
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="site-logo" href="#"><img src="./styles/images/kyazoonga.png" alt="The Big Ticket" title="The Big Ticket"></img></a>
        </div>
    )
}

export default HeaderStyle;
