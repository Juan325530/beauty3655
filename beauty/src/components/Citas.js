import React from "react";
import './css/estilo.css'

export default class Citas extends React.Component{

    abrir(){

        document.getElementById('overlay').classList.add('active');
        document.getElementById('popup').classList.add('active');

    }  
    
    cerrar(){

        document.getElementById('overlay').classList.remove('active');
        document.getElementById('popup').classList.remove('active');

    }


    render(){

        return(

        <dir className="contenedor">
        
            <center><h1 className="titulo" >Solicitud de Citas</h1>

            <h3 className="letra">Nombre</h3>
            <input type="text" id="nombreid" className="datos1"/>
            <h3 className="letra">Apellidos</h3>
            <input type="text" id="apellidoid"className="datos1"/>
            <h3 className="letra">Telefono</h3>
            <input type="tel" id="telefonoid" className="datos1" />
            <h3 className="letra">Fecha</h3>
            <input type="date" id="fechaid" className="datos1"/>
            <h3 className="letra">Hora</h3>
            <input type="time" id="horaid" className="datos1"/>
            <h3 className="letra">Especialista</h3>
            <select className="datos1">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
            </select>

            </center>

            <input type="button" id="login" onClick={()=>this.abrir()}  value="Login"/>

            <div className="overlay" id="overlay">

                <div className="popup" id="popup">

                <input type="button" id="cerrarVentanaLogin" onClick={()=>this.cerrar()} className="cerrarVentanaLogin" value="X"/>

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

        </dir>

        );

        

    }

}
