import React from 'react'
import logo from '../../img/logo.jpg'
import './header-logo.css';

function HeaderLogo(props){
   
 
    return(
        <div class="bg-black">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-7 col-xl-6 m-auto">
                    <img src={logo} class="w-100"/>
                </div>
            </div>
        </div>
    )

}

export default  HeaderLogo