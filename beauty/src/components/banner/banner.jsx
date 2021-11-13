import React from 'react'
import './index.css'



function Banner(props){

    
    const abrir = () =>{

        document.getElementById('overlay').classList.add('active');
        document.getElementById('popup').classList.add('active');

    }

    const cerrar =() => {

        document.getElementById('overlay').classList.remove('active');
        document.getElementById('popup').classList.remove('active');

    }
 
    return(
        <div className="text-light position-relative">
        <div className="bg-1"></div>
        <div className="container pt-4 pb-5 pb-sm-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="featurette-heading text-white">365 Beauty Salon. <span className="text-warning">Salón de belleza.</span></h2>
                    <p className="lead text-white">Nuestra visión es satisfacer las necesidades de belleza de nuestros clientes mediante servicios de alta calidad, brindado por un personal calificado que inspira confianza, para darle la mejor experiencia y superar expectativas en nuestros clientes.</p>
                </div>
                <div className="col-12">

                    <input className="btn btn-warning mb-3" type="button" id="login" onClick={()=>{abrir()}}  value="Iniciar sesión"/>
                
                </div>

            </div>
        </div>
        <a href="https://www.freepik.com/photos/woman" className="position-absolute bottom-0 end-0 mb-2 me-3 link-secondary text-end">Woman photo created by freepik - www.freepik.com</a>

        <div className="overlay" id="overlay">

                <div className="popup" id="popup">

                <input type="button" id="cerrarVentanaLogin" onClick={()=>{cerrar()}} className="cerrarVentanaLogin" value="X"/>

                    <center>

                        
                        <h1 className="titulo" id="login">Login</h1>

                        <form action=""> 

                            <div className="contenedorInput">

                                <input type="email" placeholder="Correo"/>
                                <input type="password" placeholder="Contraseña"/>

                            </div>

                            <input type="submit" className="submit" value="Inicio de Seccion"/>

                        </form>
                    </center>

                </div>

            </div> 

    </div>
    )

}

export default Banner