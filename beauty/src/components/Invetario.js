import React from "react";
import './css/estilo.css'
import logo1 from './../img/inventario/1.jpg';
import logo2 from './../img/inventario/2.jpg';
import logo3 from './../img/inventario/3.jpg';

export default class Invetario extends React.Component{

    mostraInsumos(){

        document.getElementById('menuPrincipalInventario').style.display = 'none';

        document.getElementById('insumosID').style.display = 'block';

    }

    mostraMaquillaje(){

        document.getElementById('menuPrincipalInventario').style.display = 'none';

        document.getElementById('maquillajeID').style.display = 'block';

    }

    mostraMaquinari(){

        document.getElementById('menuPrincipalInventario').style.display = 'none';

        document.getElementById('maquinariID').style.display = 'block';

    }

    perfilPrincipal(){

        document.getElementById('menuPrincipalInventario').style.display = 'block';
        document.getElementById('maquinariID').style.display = 'none';
        document.getElementById('maquillajeID').style.display = 'none';
        document.getElementById('insumosID').style.display = 'none'; 

    }

    crearInsumo(){

        document.getElementById('crearInsumoID').style.display = 'block'
        document.getElementById('insumos2ID').style.display = 'none'

    }

    guardarInsumo(){

        document.getElementById('insumos2ID').style.display = 'block'
        document.getElementById('crearInsumoID').style.display = 'none' 

    }

    crearMaquillaje(){

        document.getElementById('crearMaquillajeID').style.display = 'block'
        document.getElementById('maquillaje2ID').style.display = 'none'

    }

    guardarMaquillaje(){

        document.getElementById('maquillaje2ID').style.display = 'block'
        document.getElementById('crearMaquillajeID').style.display = 'none'

    }

    crearMaquinaria(){

        document.getElementById('crearMaquinariaID').style.display = 'block'
        document.getElementById('maquinaria2ID').style.display = 'none'

    }

    guardarMaquinaria(){

        document.getElementById('crearMaquinariaID').style.display = 'none'
        document.getElementById('maquinaria2ID').style.display = 'block'

    }




    render(){

        return(

            < dir> 


                    <div id="menuPrincipalInventario">

                        <center>
                        
                        <div><h1 className="titulo" >Inventario</h1></div>
                        <button onClick={()=>this.mostraInsumos()} className="boton"><img src={logo1} alt=" "/></button> 
                        <h3 className="letra">Insumos</h3> 
                        <button onClick={()=>this.mostraMaquillaje()} className="boton"><img src={logo2} alt=" "/></button>
                        <h3 className="letra">Maquillaje</h3>
                        <button onClick={()=>this.mostraMaquinari()} className="boton"><img src={logo3} alt=" "/></button>
                        <h3 className="letra">Maquinaria</h3>
                        </center>

                        
                    </div>

                <div id="insumosID">

                    <div id="insumos2ID">
                <center><h1>Insumos</h1></center>
                    
                    <table id="insumoListaID" className="perfilGloval" >

                    <thead>
                
                        <tr>
                        <th>Code</th><th>Nombre</th><th>Descripcion</th>
                        </tr>

                    </thead>

                    <tr>
                    <th>000</th><th>Toallas</th><th>De mano resistentes a los blanqueadores</th>
                    </tr>
                    <tr>
                    <th>001</th><th>Capas Profesionales</th><th> Para peluquerías</th>
                    </tr>

                </table>
                <div>
                <input type="button" id="atrasInsumoID"  onClick={()=>this.perfilPrincipal()} className="datos1" value="Atras"/>
                </div>
                <input type="button" id="registroID" onClick={()=>this.crearInsumo()} className="datos1" value="Crear Insumos"/>
                </div>

                <div id="crearInsumoID">

                <center><h1>Crear Insumo</h1></center>

                <h3 className="letra">Nombre</h3>
                <input type="text" id="nombreInsumoid" className="datos1"/>
                <h3 className="letra">Descripcion</h3>
                <input type="text" id="DescripcionInsumoid" className="datos1"/>
                <div>
                <input type="button" id="registroID" onClick={()=>this.guardarInsumo()} className="datos1" value="Guardar"/>
                </div>
                </div>

                

                </div>

                <div id="maquillajeID">

                    <div id="maquillaje2ID">

                <center><h1>Maquillaje</h1></center>
                    
                    <table id="maquillajeListaID" className="perfilGloval">

                    <thead>
                
                        <tr>
                        <th>Code</th><th>Nombre</th><th>Descripcion</th>
                        </tr>

                    </thead>

                    <tr>
                    <th>000</th><th>Bases</th><th>De diferente todos de piel</th>
                    </tr>
                    <tr>
                    <th>001</th><th>Contorno</th><th>Disimular volúmenes en el rostro</th>
                    </tr>

                </table>

                

                <div>
                <input type="button" id="atrasMaquillajeID"  onClick={()=>this.perfilPrincipal()} className="datos1" value="Atras"/>
                </div>
                <input type="button" id="registroID" onClick={()=>this.crearMaquillaje()} className="datos1" value="Crear Maquillaje"/>
                </div>
                </div>

                <div id="crearMaquillajeID">

                <center><h1>Crear Maquillaje</h1></center>

                <h3 className="letra">Nombre</h3>
                <input type="text" id="nombreMaquillajeid" className="datos1"/>
                <h3 className="letra">Descripcion</h3>
                <input type="text" id="DescripcionMaquillajeid" className="datos1"/>
                <div>
                <input type="button" id="registroID" onClick={()=>this.guardarMaquillaje()} className="datos1" value="Guardar"/>
                </div>
                </div>

                <div id="maquinariID">

                    <div id="maquinaria2ID">
                <center><h1>Maquinaria</h1></center>

                    <table id="maquinariListaID" className="perfilGloval">

                    <thead>
                
                        <tr>
                        <th>Code</th><th>Nombre</th><th>Descripcion</th>
                        </tr>

                    </thead>

                    <tr>
                    <th>000</th><th>Tijeras</th><th>Para cortar cabello estilizado</th>
                    </tr>
                    <tr>
                    <th>001</th><th>Secadora</th><th>Con doble temperatura</th>
                    </tr>

                </table>

                <div>
                <input type="button" id="MaquinariajeID"  onClick={()=>this.perfilPrincipal()} className="datos1" value="Atras"/>
                </div>
                <input type="button" id="registroID" onClick={()=>this.crearMaquinaria()} className="datos1" value="Crear Maquinaria"/>

                </div>

                <div id="crearMaquinariaID">

                <center><h1>Crear Maquinari</h1></center>

                <h3 className="letra">Nombre</h3>
                <input type="text" id="nombreMaquinariaid" className="datos1"/>
                <h3 className="letra">Descripcion</h3>
                <input type="text" id="DescripcionMaquinariaid" className="datos1"/>

                <div>
                <input type="button" id="registroID" onClick={()=>this.guardarMaquinaria()} className="datos1" value="Guardar"/>

                </div>
                </div>
    
                </div>

                

            </dir>

        );
        
    }

}