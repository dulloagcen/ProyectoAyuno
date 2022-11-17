'use strict';

const botonRegistrar = document.querySelector('#registrarDatos');
const inputNombre = document.querySelector('#txtNombreEnferm');
const inputDescripcion = document.querySelector('#txtDescripcionEnferm');
const inputEstado = document.querySelector('#sleEstadoEnferm');
const inputMedicamento = document.querySelector('#txtMedicamento');

//Valida campos vacios

function validarCamposVacios() {
    let camposRequeridos = document.querySelectorAll('.sctRegistroEnfermedad [required]');
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

function validarNombre(){
    let nombre = inputNombre.value;
    let error = false;
    let expression = /^[a-zA-Z\s]+$/;
    if (expression.test(nombre) == false){
        inputNombre.classList.add('error');
        error = true;
    } else {
        inputNombre.classList.remove('error');
    }
    return error;
}

function obtenerDatos() {
    let espaciosVacios = validarCamposVacios();
    let errorNombre = validarNombre();
    if (espaciosVacios){
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Revise los campos vacíos!',
        });
    } else if (errorNombre){
        Swal.fire({
            icon: 'warning',
            title: 'Nombre no es válido',
            text: 'El nombre solo debe contener letras',
        });
    }
}

botonRegistrar.addEventListener('click',obtenerDatos);

