// Este comando selecciona un numero al azar
let numeroAleatorio = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// Accion de boton CHEQUEAR
function chequearResultado() {
    intentos ++ 
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Porfavor, ingresa un numero valido entre el 1 y 100.'
        mensaje.style.color = 'black'
        return
    }

    if(numeroIngresado === numeroAleatorio) {
        mensaje.textContent = '¡Felicitaciones! ¡Adivinaste el numero! ';
        mensaje.style.color = 'green';
        numeroEntrada.disable = true;
    } else if(numeroIngresado < numeroAleatorio) {
        mensaje.textContent = 'Proba poniendo un numero un poco mas alto!';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Proba poniendo un numero un poco mas bajo!';
        mensaje.style.color = 'red';
    }
}