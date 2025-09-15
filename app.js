// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un arreglo para almacenar los nombres
let listaAmigos = []

function asignarTexto(element, texto) {
    let elementHtml = document.querySelector(element)
    elementHtml.innerHTML = texto;
}

function mensajesInicio() {
    //inicio
    asignarTexto('h2', 'Digite el nombre de sus amigos')
}

mensajesInicio();

//funcion para agregar los nombres al arreglo
function agregarAmigo() {
    if (document.getElementById('amigo').value == '') {
        alert('Ingrese un valor')
    } else {
        listaAmigos.push(document.getElementById('amigo').value)
        console.log(listaAmigos)
        mostrarAmigo()
    }
}

//funcion para limpiarla casilla
function limpiarCampo() {
    let valorCaja = document.querySelector('#amigo')
    valorCaja.value = ''
}

//funcion sortear amigo de la lista
function sortearAmigo() {
    const amigoSorteado = Math.floor(Math.random() * listaAmigos.length)
    console.log(amigoSorteado) // este el numero del amigo soreteado
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == amigoSorteado) {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `el afortunado es ${listaAmigos[i]}`;
            const li = document.createElement("li")
            break;
        }
    }
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar lista
    //return amigoSorteado;
}

function mostrarAmigo() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de actualizar

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

//let amigoListo = sortearAmigo;