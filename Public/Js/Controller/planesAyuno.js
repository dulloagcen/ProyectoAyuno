"use strict" 

/*********** Inicio Decripciones de los planes  y modales   ********/

// Plan 1 16:8
const btnPlan168 = document.getElementById('btnPlan168');
const containerModalPlan1 = document.getElementById('containerModalPlan1');
const closePlan1 = document.getElementById('closePlan1');

btnPlan168.addEventListener('click',()=>{containerModalPlan1.classList.add('show1');});
closePlan1.addEventListener('click',()=>{containerModalPlan1.classList.remove('show1');});

//Plan 2 14:10

const btnPlan1410 = document.getElementById('btnPlan1410');
const containerModalPlan2 = document.getElementById('containerModalPlan2');
const closePlan2 = document.getElementById('closePlan2');

btnPlan1410.addEventListener('click',()=>{containerModalPlan2.classList.add('show2');});
closePlan2.addEventListener('click',()=>{containerModalPlan2.classList.remove('show2');});

//Plan 3 18:6
const btnPlan186 = document.getElementById('btnPlan186');
const containerModalPlan3 = document.getElementById('containerModalPlan3');
const closePlan3 = document.getElementById('closePlan3');

btnPlan186.addEventListener('click',()=>{containerModalPlan3.classList.add('show3');});
closePlan3.addEventListener('click',()=>{containerModalPlan3.classList.remove('show3');});

//Plan 4 20:4
const btnPlan204 = document.getElementById('btnPlan204');
const containerModalPlan4 = document.getElementById('containerModalPlan4');
const closePlan4 = document.getElementById('closePlan4');

btnPlan204.addEventListener('click',()=>{containerModalPlan4.classList.add('show4');});
closePlan4.addEventListener('click',()=>{containerModalPlan4.classList.remove('show4');});
/*********** Fin Decripciones de los planes  y modales   ********/

/*********** INICIO tabla y modal Registro   ********/
/*********** Inicio Form Modal    ********/
const registreSuPlan = document.getElementById('registreSuPlan');
const containerModalRegistroPlan = document.getElementById('containerModalRegistroPlan');
const agregarPlan = document.getElementById('agregarPlan');

registreSuPlan.addEventListener('click',()=>{containerModalRegistroPlan.classList.add('showRegistroPlan');});
agregarPlan.addEventListener('click',()=>{containerModalRegistroPlan.classList.remove('showRegistroPlan');});
/*********** Fin Form Modal    ********/

/*********** Incio form Captura y muestra de informacion   ********/

const form =document.getElementById("registrarPlan")

form.addEventListener("submit",function(eventplanes){
    eventplanes.preventDefault();
    let registrarPlan = new FormData(form);
    insertRowInTablaRegistos(registrarPlan)
    }
)

function insertRowInTablaRegistos(registrarPlan){
        
    let tableRegistros = document.getElementById("registrosPlan")
    let newRegistrosPlanrow = tableRegistros.insertRow(+1);

    let newTypecell= newRegistrosPlanrow.insertCell(0);
    newTypecell.textContent = registrarPlan.get("planAyuno")

    newTypecell= newRegistrosPlanrow.insertCell(1);
    newTypecell.textContent = registrarPlan.get("dateInicio")

    newTypecell= newRegistrosPlanrow.insertCell(2);
    newTypecell.textContent = registrarPlan.get("timeIncio")

    newTypecell= newRegistrosPlanrow.insertCell(3);
    newTypecell.textContent = registrarPlan.get("dateFinal")
    
    newTypecell= newRegistrosPlanrow.insertCell(4);
    newTypecell.textContent = registrarPlan.get("timeFinal")

}


/*********** FIN tabla y modal Registro    ********/