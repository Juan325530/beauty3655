import React from 'react';
import Empleado from './Empleado.js';
import Facturacion from './Facturacion.js';
import Citas from './Citas.js';
import Cliente from './Cliente.js'; 
import Invetario from './Invetario.js'; 


export default class tablaGobal extends React.Component{

    render(){

        return(

            <div>

                <Facturacion/>
                <Citas/>
                <Empleado/>
                <Cliente/>
                <Invetario/>

            </div>

        );

    }

}