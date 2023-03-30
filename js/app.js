// VARIABLES

const formulario = document.querySelector("#formulario");
const busquedaPerfil = document.querySelector("#busqueda_perfil");
const perfil = document.querySelector("#cajaPerfil")
const boxCargando = document.querySelector('.contenedor_cargando');
const descripcion = document.querySelector('#perfil');
const btnSubmit = document.querySelector('#btnEnviar');
const btnMenu = document.querySelector('#btn-menu');
const formContacto = document.querySelector('#formContacto');

// EVENTOS

// Submit del formulario
formulario.addEventListener('submit', e => {
  e.preventDefault();

  boxCargando.classList.remove('hidden');

  setTimeout( () => {
    boxCargando.classList.add('hidden');
  },8000);

  setTimeout( () => {
    perfil.classList.remove('hidden');
  },8000);

});

// Evento Menu

btnMenu.addEventListener('click',() => {
  const menu = document.querySelector('#menu-nav');
  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else if(!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
})


// Validación de formulario

puesto.addEventListener('blur', validacion);


// Submit Form Contacto

formContacto.addEventListener('submit', (e) => {
  e.preventDefault();
  mensajeEnviado();

})

// Animación de texto
let textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  // FUNCIONES

// Validacion formulario

function validacion(e) {
  if(e.target.value.trim() === '') {
    alertaError(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
    return;
  }

  eliminarAlerta(e.target.parentElement);
}


// Mostrar alerta de error

function alertaError(mensaje, referencia, input) {

  const alerta = referencia.querySelector('.alerta');

  // Evita que el mensaje de error se siga repitiendo
  if(alerta) {
    alerta.remove();
  }

  // creacion del mensaje de error
  let error = document.createElement('p');
  error.textContent = mensaje;
  error.classList.add('text-center', 'text-sm', 'text-red-700', 'bg-red-200', 'alerta', 'mt-2', 'p-2')
  referencia.appendChild(error);
}

function eliminarAlerta(referencia) {
  const alerta = referencia.querySelector('.alerta');

  // En vez de evitar que se acumulen alertas elimina la alerta que ya está
  if(alerta) {
    alerta.remove();
  }
}

function mensajeEnviado() {

  const alerta = document.querySelector('.bg-green-300');

  // Evita que el mensaje de error se siga repitiendo
  if(alerta) {
    alerta.remove();
  }
  
  let parrafo = document.createElement('p');
  parrafo.textContent = 'Mensaje enviado correctamente';
  parrafo.classList.add('bg-green-300', 'border-green-800', 'text-green-800', 'text-center', 'py-3' , 'px-6', 'mt-3');
  formContacto.appendChild(parrafo);
}



































// Mensaje de error

/*function mensajeError(referencia,mensaje, input) {

  const mensajeAlerta = document.querySelector('.alerta');

  // Evita que el mensaje de error se ejecute más de una vez

  if(mensajeAlerta) {
    mensajeAlerta.remove();
  }

  let mensajeError = document.createElement('span');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('px-4', 'py-2', 'text-red-600', 'bg-red-300', 'text-center', 'w-6/12', 'alerta');
  input.before(mensajeError);
}

function limpiarMensajeError() {
  const mensajeAlerta = document.querySelector('.alerta');

  if(mensajeAlerta) {
    mensajeAlerta.remove();
  }
}
*/
