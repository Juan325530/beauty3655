import React from 'react'


function Banner(props){
   
 
    return(
        <div class="text-light position-relative">
        <div class="bg-1"></div>
        <div class="container pt-4 pb-5 pb-sm-4">
            <div class="row">
                <div class="col-12">
                    <h2 class="featurette-heading text-white">365 Beauty Salon. <span class="text-warning">Salón de belleza.</span></h2>
                    <p class="lead text-white">Nuestra visión es satisfacer las necesidades de belleza de nuestros clientes mediante servicios de alta calidad, brindado por un personal calificado que inspira confianza, para darle la mejor experiencia y superar expectativas en nuestros clientes.</p>
                </div>
                <div class="col-12">
                    <button class="btn btn-warning mb-3">Iniciar sesión</button>
                </div>
            </div>
        </div>
        <a href="https://www.freepik.com/photos/woman" class="position-absolute bottom-0 end-0 mb-2 me-3 link-secondary text-end">Woman photo created by freepik - www.freepik.com</a>
    </div>
    )

}

export default Banner