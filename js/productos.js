const CATEGORIA_ORGANICO = "Organico";
const CATEGORIA_ARTESANAL = "Artesanal";

const productos = [
  {
    nombre: "Tomate",
    precio: 1000,
    categoria: CATEGORIA_ORGANICO,
    imagen: "/imagenes/tomate.jpg",
  },
  {
    nombre: "Zanahoria",
    precio: 1500,
    categoria: CATEGORIA_ORGANICO,
    imagen: "/imagenes/zanahoria.jpg",
  },
  {
    nombre: "Pimenton",
    precio: 2000,
    categoria: CATEGORIA_ORGANICO,
    imagen: "/imagenes/pimenton.jpg",
  },
  {
    nombre: "Panela",
    precio: 3000,
    categoria: CATEGORIA_ARTESANAL,
    imagen: "/imagenes/panela.jpg",
  },
  {
    nombre: "Brocoli",
    precio: 1500,
    categoria: CATEGORIA_ORGANICO,
    imagen: "/imagenes/brocoli.jpg",
  },
  {
    nombre: "Pepino",
    precio: 2500,
    categoria: CATEGORIA_ORGANICO,
    imagen: "/imagenes/pepino.jpg",
  },
  {
    nombre: "Aji",
    precio: 800,
    categoria: CATEGORIA_ORGANICO,
    imagen: "/imagenes/aji.jpg",
  },
  {
    nombre: "Matequilla",
    precio: 4500,
    categoria: CATEGORIA_ARTESANAL,
    imagen: "/imagenes/mantequilla.jpg",
  },
];

const tarjetas = document.querySelector(".tarjetas");

cargarProductos(productos);

const botonOrganico = document.getElementById("botonOrganico");
const botonArtesanal = document.getElementById("botonArtesanal");
const botonTodo = document.getElementById("botonTodo");

botonOrganico.onclick = () => {
  cargarProductosOrganicos();
};

botonArtesanal.onclick = () => {
  cargarProductosArtesanal();
};

botonTodo.onclick = () => {
  cargarTodo();
};

function cargarProductosOrganicos() {
  const productosOrganicos = productos.filter(
    (producto) => producto.categoria === CATEGORIA_ORGANICO,
  );

  tarjetas.innerHTML = "";

  cargarProductos(productosOrganicos);
}

function cargarProductosArtesanal() {
  const cargarProductosArtesanal = productos.filter(
    (producto) => producto.categoria === CATEGORIA_ARTESANAL,
  );

  tarjetas.innerHTML = "";

  cargarProductos(cargarProductosArtesanal);
}

function cargarTodo() {
  tarjetas.innerHTML = "";
  cargarProductos(productos);
}

function cargarProductos(listaProductos) {
  listaProductos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
    <figure class="tarjeta-imagen">
        <img src="${producto.imagen}" alt="Producto ${producto.nombre}">
    </figure>
    <div class="tarjeta-contenido">
        <span class="tarjeta-nombre">${producto.nombre}</span>
        <span class="tarjeta-precio">$ ${producto.precio}</span>
        <span class="tarjeta-categoria">${producto.categoria}</span>
    </div>
    `;
    tarjetas.appendChild(tarjeta);
  });
}
