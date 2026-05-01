const categorias = document.querySelectorAll(".categoria");
const categoriaFlotante = document.querySelector(".categoria-flotante");

categorias.forEach((categoria) => {
  categoria.addEventListener("click", () => {
    categoriaFlotante.classList.remove("hidden");

    const imagen = categoria.querySelector(".categoria-imagen img");
    const nombre = categoria.querySelector(".categoria-nombre");

    categoriaFlotante.querySelector(".categoria-imagen img").src = imagen.src;
    categoriaFlotante.querySelector(".categoria-nombre").innerHTML =
      nombre.innerHTML;
  });
});

categoriaFlotante.onclick = () => {
  categoriaFlotante.classList.add("hidden");
};
