const info = document.querySelector('#info');
const infoClick = document.querySelector('#infoClick');
const sobreMi = document.querySelector('#sobreMi');
const email = document.querySelector('#email');
const fecha = document.querySelector('#nacimiento');
const ubi = document.querySelector('#ubicacion');
const tel = document.querySelector('#telefono');
const parrafoSobreMi = document.querySelector('#parrafoSobreMi');
const parrafoEmail = document.querySelector('#parrafoEmail');
const parrafoNacimiento = document.querySelector('#parrafoNacimiento');
const parrafoUbi = document.querySelector('#parrafoUbi');
const parrafoTel = document.querySelector('#parrafoTel');


// EVENTOS


sobreMi.addEventListener('click', () => {
    eliminarParrafo(parrafoEmail, parrafoNacimiento, parrafoTel, parrafoUbi);
    parrafoSobreMi.classList.remove('hidden');
    infoClick.classList.add('hidden');
});

email.addEventListener('click', () => {
    eliminarParrafo(parrafoSobreMi, parrafoNacimiento, parrafoTel, parrafoUbi);
    parrafoEmail.classList.remove('hidden');
    infoClick.classList.add('hidden');
})

fecha.addEventListener('click', () => {
    eliminarParrafo(parrafoSobreMi, parrafoEmail, parrafoTel, parrafoUbi);
    parrafoNacimiento.classList.remove('hidden');
    infoClick.classList.add('hidden');
})

ubi.addEventListener('click', () => {
    eliminarParrafo(parrafoSobreMi, parrafoNacimiento, parrafoTel, parrafoEmail);
    parrafoUbi.classList.remove('hidden');
    infoClick.classList.add('hidden');
})

tel.addEventListener('click', () => {
    eliminarParrafo(parrafoSobreMi, parrafoNacimiento, parrafoEmail, parrafoUbi);
    parrafoTel.classList.remove('hidden');
    infoClick.classList.add('hidden');
})



// FUNCIONES

function eliminarParrafo(a,b,c,d) {
    a.classList.add('hidden');
    b.classList.add('hidden');
    c.classList.add('hidden');
    d.classList.add('hidden');
}

/*function crearParrafo(parrafo) {

//Evita que el texto se siga añadiendo cada vez que pasa el mouse

    let texto = document.querySelector('.parrafo');

    if(texto) {
        remove(texto);
    }

    // Creación del parrafo

    let descripcion = document.createElement('p');
    descripcion.classList.add('text-lg', 'text-center' ,'parrafo', 'mt-6', 'ml3');
    descripcion.textContent = parrafo;
    info.appendChild(descripcion);
} */