function obtenerSesion() {
  return JSON.parse(localStorage.getItem("freshmarket_sesion"));
}

function obtenerClientes() {
  return JSON.parse(localStorage.getItem("freshmarket_clientes"));
}

const session = obtenerSesion();

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const rol = document.getElementById("rol");
const fecha = document.getElementById("fecha");

console.log(session);

nombre.innerHTML = session.nombre;
correo.innerHTML = session.correo;
rol.innerHTML = session.rol;
fecha.innerHTML = session.loginTime;

const panelDeUsuarios = document.querySelector(
  ".user-panel__section--usuarios",
);

if (session) {
  if (session.rol === "cliente") {
    panelDeUsuarios.classList.add("hidden");
  }
} else {
  window.location.href = "/index.html";
}
