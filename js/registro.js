
const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(formulario);

    console.log(form);

    alert('algo');
    
})