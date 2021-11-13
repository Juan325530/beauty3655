import React from "react";
import './css/estilo.css';

export default class Facturacion extends React.Component{

    render(){

        return(

            <dir>
                
                <center><h1>Facturacion</h1></center>

                <h2 className="letra">Ventas de Servicio</h2>

                <table id="perfilesID" >

                    <thead>
                
                        <tr>
                        <th>Numero</th><th>Nombre</th><th>Apellido</th><th>Servicio</th><th>Fecha de Cita</th><th>Hora de Salida</th><th>Empleado</th>
                        </tr>

                    </thead>

                    <tr>
                    <th>1</th><th>Benito</th><th>Camela</th><th>Corte</th><th>30-09-21</th><th>02:00 PM</th><th>Max Turbado</th>
                    </tr>
                    <tr>
                    <th>2</th><th>Elver</th><th>Gazo</th><th>Exfoliación</th><th>03-10-21</th><th>03:30 PM</th><th>Alma Marcela Gozo</th>
                    </tr>

                </table>

            </dir>

        );
        
    }

}