/*

const formularioRegistro = document.getElementById("registroForm");

formularioRegistro.onsubmit((e) => {
    e.preventDefault();

    const form = new FormData(formularioRegistro);

    const cliente = {
      nombre: form.get("nombre"),
      correo: form.get("correo"),
      telefono: form.get("telefono"),
      direccion: form.get("direccion"),
      password: form.get("password"),
      errorMsg: document.getElementById("errorMsg"),
    };

    let clientes = JSON.parse(localStorage.getItem("freshmarket_clientes")) || [];

    const existeUsuario = clientes.find((user) => user.correo === correo);
});



*/

document
  .getElementById("registroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    let clientes =
      JSON.parse(localStorage.getItem("freshmarket_clientes")) || [];

    const existeUsuario = clientes.find((user) => user.correo === correo);

    if (existeUsuario) {
      errorMsg.textContent = "Este correo ya está registrado";
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      correo,
      telefono,
      password,
      direccion,
      rol: "cliente",
      fechaRegistro: new Date().toISOString().split("T")[0],
    };

    clientes.push(nuevoUsuario);
    localStorage.setItem("freshmarket_clientes", JSON.stringify(clientes));

    errorMsg.textContent = "";

    alert("Registro exitoso 🎉");
    window.location.href = "/paginas/login.html";
  });
