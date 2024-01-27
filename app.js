/**
 * ¡Bienvenidas y bienvenidos a nuestro primer desafío!

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!
 */
const ingresarTexto = document.getElementById('ingresarTexto');
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const botonCopiar = document.getElementById('botonCopiar');
const mensajeFinal = document.getElementById('mensajeFinal');
const munheco = document.getElementById('munheco');
const mensajeInfo = document.getElementById('mensajeInfo');
const right = document.getElementById('right');

var textoOriginal = "";
var textoEncriptado = "";

function encriptar(texto){
    return texto.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
}

function desencriptar(textoEncriptado) {
    return textoEncriptado.replace(/ufat/g, "u")
                          .replace(/ober/g, "o")
                          .replace(/ai/g, "a")
                          .replace(/imes/g, "i")
                          .replace(/enter/g, "e");
  }

  botonCopiar.addEventListener('click', () => {
    let texto = mensajeFinal;
    /*Funciona pero no es compatible con dispositivos móviles
    navigator.clipboard.writeText(texto.value);*/
    texto.select();
    document.execCommand('copy');
    alert('El texto ha sido copiado');
    reset();
});

const reemplazar = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    munheco.classList.add('oculto');
    ingresarTexto.value = '';
    mensajeInfo.style.display = 'none';
    botonCopiar.style.display = 'block';
    right.classList.add('ajustar');
    mensajeFinal.classList.add('ajustar');
};

const reset = () => {
    mensajeFinal.innerHTML = '';
    munheco.classList.remove('oculto');
    mensajeInfo.style.display = 'block';
    botonCopiar.style.display = 'none';
    right.classList.remove('ajustar');
    mensajeFinal.classList.remove('ajustar');
    ingresarTexto.focus();
};

botonEncriptar.addEventListener('click', () => {
    const texto = ingresarTexto.value.toLowerCase();
    if (texto != '') {
        reemplazar(encriptar(texto));
    } else {
        alert('Ingrese un texto a encriptar');
        reset();
    }
    
});

botonDesencriptar.addEventListener('click', () => {
    const texto = ingresarTexto.value.toLowerCase();
    if (texto != '') {
        reemplazar(desencriptar(texto));
    } else {
        alert('Ingrese un texto a desencriptar');
        reset();
    }
});