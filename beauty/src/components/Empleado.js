import React from 'react';
import './css/estilo.css'

export default class Empleado extends React.Component{


    mostrar(){

        document.getElementById('divPerfilesID').style.display = 'none';
        document.getElementById('secundarioID').style.display = 'block';

    }

    Registra(){

        document.getElementById('secundarioID').style.display = 'none';
        document.getElementById('divPerfilesID').style.display = 'block';


    }

    render(){

        return(


            <div>

                <div id="divPerfilesID">

                <center><h1>Empleado</h1></center>

                <h2 className="letra">Perfiles</h2>

                <table id="perfilesID" >

                    <thead>
                
                        <tr>
                        <th>Numero</th><th>Nombre</th><th>Apellido</th><th>Citas</th><th>Fecha de Cita</th><th>Hora de Cita</th><th>Espefialidades</th>
                        </tr>

                    </thead>

                    <tr>
                    <th>1</th><th>Max</th><th>Turbado</th><th>Cabello</th><th>30-09-21</th><th>01:00 PM</th><th>Estilista</th>
                    </tr>
                    <tr>
                    <th>2</th><th>Alma Marcela</th><th>Gozo</th><th>Uñas</th><th>03-10-21</th><th>03:00 PM</th><th>Especialidad en Uñas Esculpidas</th>
                    </tr>

                </table>

                <input type="button" id="registroID" onClick={()=>this.mostrar()} className="datos1" value="Registrar Empleado"/>

                </div>
                <div id="secundarioID">

                    <form id="RegistroEmpleadoID">

                        <h1 className="titulo" >Registro de Empleado</h1>

                        <h3 className="letra">Nombre</h3>
                        <input type="text" id="nombreid" className="datos1"/>
                        <h3 className="letra">Apellidos</h3>
                        <input type="text" id="apellidoid"className="datos1"/>
                        <h3 className="letra">Telefono</h3>
                        <input type="tel" id="telefonoid" className="datos1" />
                        <h3 className="letra">Habilidades</h3>
                        <select className="datos1">
                        <option value="value1">Value 1</option>
                        <option value="value2" selected>Value 2</option>
                        <option value="value3">Value 3</option>
                        <br></br>
                        </select>

                    </form>

                    <input type="button" id="registroID" onClick={()=>this.Registra()} className="datos1" value="Registrar Empleado"/>

                    
                </div>

                

            </div>  

        )

    }

}