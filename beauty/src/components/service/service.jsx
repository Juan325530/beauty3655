import React from 'react'


function Service(props){
   
 
    return(
        <div class="col-lg-4 text-white">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2>{props.titulo}</h2>
        <p>{props.contenido}</p>
        <p><a class="btn btn-secondary" href="#">Ver detalles »</a></p>
    </div>
    )

}

export default  Service