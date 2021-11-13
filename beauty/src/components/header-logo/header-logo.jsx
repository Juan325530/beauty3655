import React from 'react'
import logo from '../../img/logo.jpg'
import './header-logo.css';

function HeaderLogo(props){
   
 
    return(
        <div className="bg-black">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-7 col-xl-6 m-auto">
                    <img src={logo} alt=" " className="w-100"/>
                </div>
            </div>
        </div>
    )

}

export default  HeaderLogo