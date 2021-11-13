import React from 'react'
import './reserve-form.css'
/*import mirror from '../../img/mirrors.jpg'*/
function ReserveForm(props){
   
 
    return(
<<<<<<< HEAD
        <div class="position-relative">
        <div class="bg-2"></div>
        <div class="container pt-4 pb-5">
            <div class="col-12">
                <h2 class="featurette-heading text-white">¿Deseas visitarnos? <span class="text-warning">Reserva una cita.</span></h2>
                <p class="lead text-white">¡Comienza aqui!</p>
=======
        <div className="position-relative">
        <div className="bg-2"></div>
        <div className="container pt-4 pb-5">
            <div className="col-12">
                <h2 className="featurette-heading text-white">¿Deseas visitarnos? <span className="text-warning">Reserva una cita.</span></h2>
                <p className="lead text-white">Lorem ipsum.</p>
>>>>>>> 15c6a80 (vistas de admin)
            </div>
            
        
        <form  className="mb-1">
                  <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <label className="form-label text-light" for="txt-dni">Número de identidad:</label>
                            <input className="form-control" id="txt-dni" type="text" placeholder="0801199510479" maxlength="13"/>
                            <div className="invalid-feedback">
                                <please>El número de identidad no es válido.</please>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <label className="form-label text-light" for="txt-nombre">Nombre completo:</label>
                            <input className="form-control" id="txt-nombre" type="text" placeholder="Helena María Velásquez Soto" maxlength="45"/>
                            <div className="invalid-feedback">
                                <please>Debe completar este campo.</please>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <label className="form-label text-light" for="txt-correo">Correo electrónico:</label>
                            <div className="input-group flex-nowrap"><span className="input-group-text" id="addon-wrapping">@</span>
                                <input className="form-control" id="txt-correo" type="email" maxlength="45"/>
                            </div>
                            <div className="invalid-feedback">
                                <please>El correo es inválido.</please>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <label className="form-label text-light" for="txt-telefono">Teléfono:</label>
                            <input className="form-control" id="txt-telefono" type="tel" maxlength="45" placeholder="97301540"/>
                            <div className="invalid-feedback">
                                <please>El número de teléfono es incorrecto.</please>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <label className="form-label text-light" for="txt-fecha">Fecha:</label>
                            <input className="form-control" id="txt-fecha" name="txt-fecha" type="date"/>
                            <div className="invalid-feedback">
                                <please>Selecione la fecha de la cita.</please>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <label className="form-label text-light" for="txt-hora">Hora:</label>
                            <input className="form-control" id="txt-hora" name="txt-hora" type="time"/>
                            <div className="invalid-feedback">
                                <please>Seleccione un horario para la cita.</please>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mt-3 m-auto">
                            <button className="btn btn-warning fw-bold w-100" id="btn-reservar" type="submit">Reservar<i className="fas fa-spinner fa-spin ms-2 d-none" id="loading-btn-reservar" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
                </div>
    </div>
    )


}

export default  ReserveForm
