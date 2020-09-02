const formulario = document.querySelector('#formulario');
const listado = document.querySelector('#actividades');
const nombre = document.querySelector('#nombre-actividad');
const estado = document.querySelector('#estado-actividad');
let listaActividades = [];

const loadStorage = ()=>{
    localStorage.setItem('rutina', JSON.stringify(listaActividades));
}

const crearTarea = (actividad) =>{
    let tarea = {
        nombre:actividad,
        estado:false
    }
    return tarea;
}

const cargarUI = () =>{
    listado.innerHTML = ``;
    let cont = 0;
    let tareas = JSON.parse(localStorage.getItem('rutina'));
    let color = '';
    tareas.forEach(tarea => {
        if(tarea.estado == true){
            color = 'success';
        }else{color = 'danger';}
        listado.innerHTML += `
        <div class="alert alert-${color}">
            <span id="nombre-actividad">
                <b>${tarea.nombre}</b>
            </span>
            <span> - </span>
            <span id="estado-actividad">
            ${tarea.estado}
            </span>
            <span class="float-right">
                <span class="badge badge-pill" id="${cont}">✅</span>
                <span class="badge badge-pill" id="${cont}">❌</span>
            </span>
        </div>`;
        cont++;
    });
    return tareas;
}

const cambiarEstado = (listaActividades, pos)=>{
    let tarea = listaActividades[pos];
    if(tarea.estado == false){
        tarea.estado = true;
    }else{
        tarea.estado = false;
    }
    listaActividades.splice(pos, 1, tarea);
    loadStorage();
    cargarUI();
}

/*INICIO*/

listaActividades = cargarUI();
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = new FormData(formulario);
    if(data.get('actividad') == '' || data.get('actividad') == ' ' || data.get('actividad') == null){
        document.getElementById('error').innerHTML = `<div id ="error-alert" class="alert alert-danger"><b>¡No puedes introducir tareas vacias!</b></div>`;
        setTimeout(()=>{
            document.getElementById('error-alert').remove();
        },3000);
    }else{
        listaActividades.push(crearTarea(data.get('actividad')));
        loadStorage();
        cargarUI();
        formulario.reset();
    }
    
})

listado.addEventListener('click', (e)=>{
    e.preventDefault();
    let pos = e.target.getAttribute('id');
    //console.log(e.path[0].childNodes[1].innerText);
    //console.log(pos);
    if(e.target.innerHTML === '✅'){
        cambiarEstado(listaActividades, pos);
    }else if(e.target.innerHTML === '❌'){
        //console.log(e.target.innerHTML);
        listaActividades.splice(pos,1);
        loadStorage();
        cargarUI();
    }
    
})