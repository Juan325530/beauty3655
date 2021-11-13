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
<<<<<<< HEAD
            <Service titulo="Salon de belleza" contenido="Precio:Lps."/> 
            <Service titulo="Secado" contenido="Precio:Lps."/>
            <Service titulo="Pintado" contenido="Precio:Lps."/>
            <Service titulo="Uñas" contenido="Precio:Lps."/>
            <Service titulo="Planchado" contenido="Precio:Lps."/>
            <Service titulo="Mascarilla Facial" contenido="Precio:Lps."/>
=======
            <Service titulo="Salon de belleza" contenido="Secado"/>
            <Service titulo="Lavado" contenido="Tinte"/>
            <Service titulo="Lavado" contenido="Tinte"/>
            <Service titulo="Lavado" contenido="Tinte"/>
            <Service titulo="Lavado" contenido="Tinte"/>
            <Service titulo="Lavado" contenido="Tinte"/>
>>>>>>> 15c6a80 (vistas de admin)
            </div>
            
              <ReserveForm/>  

              <Footer/>

         
          
        </div> 
        </div>
    )

}

export default  Landing
