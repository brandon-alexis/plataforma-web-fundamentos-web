function initApp() {
  let clientes = JSON.parse(localStorage.getItem("freshmarket_clientes"));

  if (!clientes) {
    const admin = {
      id: 0,
      nombre: "Admin",
      correo: "admin@freshmarket.com",
      telefono: "0000000000",
      password: "admin123",
      direccion: "N/A",
      rol: "admin",
      fechaRegistro: new Date().toISOString().split("T")[0],
    };

    localStorage.setItem("freshmarket_clientes", JSON.stringify([admin]));
  }
}

initApp();

function obtenerSesion() {
  return JSON.parse(localStorage.getItem("freshmarket_sesion"));
}

const perfil = document.querySelector(".perfil");
const botonInicio = document.getElementById("botonInicio");
const botonRegistro = document.getElementById("botonRegistro");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");

const session = obtenerSesion();

if (!session) {
  perfil.classList.add("hidden");
  botonCerrarSesion.classList.add("hidden");
}

if (session) {
  botonInicio.classList.add("hidden");
  botonRegistro.classList.add("hidden");
  botonCerrarSesion.classList.remove("hidden");
}

botonCerrarSesion.onclick = () => {
  localStorage.removeItem("freshmarket_sesion");
  window.location.href = "/index.html";
};
