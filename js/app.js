// Variables

const formulario = document.querySelector("#formulario");
const busquedaPerfil = document.querySelector("#busqueda_perfil");
const perfil = document.querySelector("#perfil")
const boxCargando = document.querySelector('.contenedor_cargando');
const header = document.querySelector('header');
const body = document.querySelector('body');
const nombreEmpresa = document.querySelector('#nombre');


// Eventos

// Submit del formulario
formulario.addEventListener('submit', e => {
  e.preventDefault();
  cargando();

  setTimeout( () => {
      boxCargando.classList.add('hidden');
      header.classList.remove('hidden');
      body.classList.add('w-10/12', 'm-auto');
      body.classList.remove('bg-slate-600');
      perfil.classList.remove('hidden');
      perfil.classList.add('flex');

  },8000);
});

// Información del cv




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


// Transición de carga
function cargando() {
    busquedaPerfil.classList.add('hidden');

    if(busquedaPerfil.classList.contains('hidden')) {
        boxCargando.classList.remove('hidden');
        header.classList.add('hidden');
        body.classList.remove('w-10/12', 'm-auto');
        body.classList.add('bg-slate-600');
    }
}

