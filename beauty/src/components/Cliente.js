import React from "react";
import "./css/estilo.css"

export default class Cliente extends React.Component{

    render(){

        return(

            <div>

            <center><h1>Clientes</h1></center>
            
            <div className="arreglo">

                <div >

                <center>
                    <h5 className="letra">Citas</h5>
                </center>
                    <div className="item"></div>
                </div>

                <div>
                <center>
                    <h5 className="letra">Control de Clientes</h5>
                    <div className="item"></div>
                    </center>
                </div>
                
            </div>

            <center>
            <input type="button" id="registroID" className="datos1" value="Registrar Cita"/>
            </center>
            </div>


        );

    }

}