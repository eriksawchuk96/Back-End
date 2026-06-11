const lugares = [
  {
    nombre: "Montañas Nevadas",
    descripcion:
      "Un paraje increíble ideal para los amantes del esquí y los paisajes invernales de alta montaña.",
    imagen: "https://picsum.photos/id/1015/400/250",
  },
  {
    nombre: "Bosque místico",
    descripcion:
      "Senderos verdes rodeados de árboles centenarios, perfectos para desconectar de la rutina urbana.",
    imagen: "https://picsum.photos/id/1016/400/250",
  },
  {
    nombre: "Costa Dorada",
    descripcion:
      "Playas paradisíacas de arena fina y aguas cristalinas para disfrutar del sol durante todo el año.",
    imagen: "https://picsum.photos/id/1018/400/250",
  },
];
const galeria = document.getElementById("galeria");
lugares.forEach((lugar) => {
  const cardHTML = `
        <div class="col-12 col-md-4">
            <div class="card h-100 shadow-sm">
                <img src="${lugar.imagen}" class="card-img-top" alt="${lugar.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${lugar.nombre}</h5>
                    <p class="card-text text-secondary">${lugar.descripcion}</p>
                </div>
            </div>
        </div>
    `;
  galeria.insertAdjacentHTML("beforeend", cardHTML);
});
