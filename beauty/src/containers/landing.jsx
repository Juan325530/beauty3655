import React from 'react'
import Banner from '../components/banner/banner'
import Footer from '../components/footer/footer'
import HeaderLogo from '../components/header-logo/header-logo'
import ReserveForm from '../components/reserve-form/reserve-form'
import Service from '../components/service/service'

function Landing(props){
   
 
    return(
        <div className ="bg-dark"> 
            <HeaderLogo/>
            <Banner/>
            <div class="container pt-4 pb-5">
            <div class="row text-light text-center">
            <Service titulo="Salon de belleza" contenido="Secado"/> 
            <Service titulo="Secado" contenido="Tinte"/>
            <Service titulo="Pintado" contenido="Tinte"/>
            <Service titulo="Uñas" contenido="Tinte"/>
            <Service titulo="Planchado" contenido="Tinte"/>
            <Service titulo="Mascarilla Facial" contenido="Tinte"/>
            </div>
            
              <ReserveForm/>  

              <Footer/>

         
          
        </div> 
        </div>
    )

}

export default  Landing
