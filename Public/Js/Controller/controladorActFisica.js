'use strict';

const botonRegistrar = document.querySelector('#registrarDatos');
const inputFechaInicio = document.querySelector('#txtFechaInicio');
const inputFechaFinal = document.querySelector('#txtFechaFinal');
const inputHoraInicio = document.querySelector('#txtHoraInicio');
const inputHoraFinal = document.querySelector('#txtHoraFinal');
const inputActividadFisica = document.querySelector('#sleActividad');

/*const fechaInicio = new Date(inputFechaInicio);
const fechaFinal = new Date(inputFechaFinal);

var diaInicio = fechaInicio.getDate();
var mesInicio = fechaInicio.getMonth()+1;
var annioInicio = fechaInicio.getFullYear();

var diaFinal = fechaFinal.getDate();
var mesFinal = fechaFinal.getMonth()+1;
var annioFinal = fechaFinal.getFullYear();
// const inputOtraActividad = document.querySelector('#txtOtraActividad');*/

//Valida campos vacios

function camposVacios() {
    let camposRequeridos = document.querySelectorAll('#frmActividad [required]');
    let error = false;
    for (let i = 0; i < camposRequeridos.length; i++){
        if (camposRequeridos[i].value == ''){
            camposRequeridos[i].classList.add('error');
            error = true;
        } else {
            camposRequeridos[i].classList.remove('error');
        }
    }
    return error;
}

function validarFechaInicial(){
    let fechaInicio = inputFechaInicio.valueOf();
    let error = false;
    let expression = /^[01-31]{2}-[01-12]{2}-[1970-2100]{4}$/
    if(expression.test(fechaInicio) == false){
        inputFechaInicio.classList.add('error');
        error = true;
    } else{
        inputFechaInicio.classList.remove('error');
    }

    return error;
}

function obtenerDatos() {
    let espaciosVacios = camposVacios();
    if (espaciosVacios){
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Revise los campos vacíos!',
        });
    }
}

botonRegistrar.addEventListener('click',obtenerDatos);


