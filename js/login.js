document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  const clientes =
    JSON.parse(localStorage.getItem("freshmarket_clientes")) || [];

  const usuario = clientes.find(
    (u) => u.correo === correo && u.password === password,
  );

  if (usuario) {
    // Guardar sesión
    const sesion = {
      correo: usuario.correo,
      nombre: usuario.nombre,
      rol: usuario.rol,
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem("freshmarket_sesion", JSON.stringify(sesion));

    // Redirigir
    window.location.href = "/index.html";
  } else {
    errorMsg.textContent = "Correo o contraseña incorrectos";
  }
});
