// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un arreglo para almacenar los nombres
let listaAmigos = []

function asignarTexto(element, texto) {
    let elementHtml = document.querySelector(element)
    elementHtml.innerHTML = texto;
}

function mensajesInicio(){
    //inicio
    asignarTexto('h2', 'Digite el nombre de sus amigos')
}

mensajesInicio();

//funcion para agregar los nombres al arreglo
function agregarAmigo(){
    listaAmigos.push(numeroUsuario = document.getElementById('amigo').value)
    console.log(listaAmigos)
}

//funcion para limpiarla casilla
function limpiarCampo(){
    let valorCaja = document.querySelector('#amigo')
    valorCaja.value = ''
}

//funcion sortear amigo de la lista
function sortearAmigo(){
    const amigoSorteado = Math.floor(Math.random() * listaAmigos.length)
    console.log(amigoSorteado) // este el numero del amigo soreteado
    for(let i = 0; i < listaAmigos.length; i++){
        if (i == amigoSorteado){
            asignarTexto(`h2`, `El amigo sorteado es ${listaAmigos[i]}`) //mostrar al amigo sorteado
            break;
        }
    }
    //return amigoSorteado;
}

//let amigoListo = sortearAmigo;