import React from 'react'
import './reserve-form.css'
import mirror from '../../img/mirrors.jpg'
function ReserveForm(props){
   
 
    return(
        <div class="position-relative">
        <div class="bg-2"></div>
        <div class="container pt-4 pb-5">
            <div class="col-12">
                <h2 class="featurette-heading text-white">¿Deseas visitarnos? <span class="text-warning">Reserva una cita.</span></h2>
                <p class="lead text-white">Lorem ipsum.</p>
            </div>
            
        
        <form  class="mb-1">
                  <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <label class="form-label text-light" for="txt-dni">Número de identidad:</label>
                            <input class="form-control" id="txt-dni" type="text" placeholder="0801199510479" maxlength="13"/>
                            <div class="invalid-feedback">
                                <please>El número de identidad no es válido.</please>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <label class="form-label text-light" for="txt-nombre">Nombre completo:</label>
                            <input class="form-control" id="txt-nombre" type="text" placeholder="Helena María Velásquez Soto" maxlength="45"/>
                            <div class="invalid-feedback">
                                <please>Debe completar este campo.</please>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <label class="form-label text-light" for="txt-correo">Correo electrónico:</label>
                            <div class="input-group flex-nowrap"><span class="input-group-text" id="addon-wrapping">@</span>
                                <input class="form-control" id="txt-correo" type="email" maxlength="45"/>
                            </div>
                            <div class="invalid-feedback">
                                <please>El correo es inválido.</please>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <label class="form-label text-light" for="txt-telefono">Teléfono:</label>
                            <input class="form-control" id="txt-telefono" type="tel" maxlength="45" placeholder="97301540"/>
                            <div class="invalid-feedback">
                                <please>El número de teléfono es incorrecto.</please>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <label class="form-label text-light" for="txt-fecha">Fecha:</label>
                            <input class="form-control" id="txt-fecha" name="txt-fecha" type="date"/>
                            <div class="invalid-feedback">
                                <please>Selecione la fecha de la cita.</please>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <label class="form-label text-light" for="txt-hora">Hora:</label>
                            <input class="form-control" id="txt-hora" name="txt-hora" type="time"/>
                            <div class="invalid-feedback">
                                <please>Seleccione un horario para la cita.</please>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mt-3 m-auto">
                            <button class="btn btn-warning fw-bold w-100" id="btn-reservar" type="submit">Reservar<i class="fas fa-spinner fa-spin ms-2 d-none" id="loading-btn-reservar" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
                </div>
    </div>
    )


}

export default  ReserveForm
