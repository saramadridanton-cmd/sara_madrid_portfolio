/* CURSOR */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a').forEach(a => {
  a.addEventListener('mouseenter', () => cursor.classList.add('activo'));
  a.addEventListener('mouseleave', () => cursor.classList.remove('activo'));
});


/* CARRUSEL  */
const items = document.querySelectorAll('.carrusel-item');
let orden = ['front', 'left', 'right', 'hidden', 'hidden'];

function renderCarrusel() {
  items.forEach((item, i) => {
    item.className = 'carrusel-item ' + orden[i];
  });
}

if (items.length) {
  renderCarrusel();
  setInterval(() => {
    orden.unshift(orden.pop());
    renderCarrusel();
  }, 1800);
}


/* PRODUCTO */
const datosProductos = {
  1: {
    titulo: "TABURETE",
    texto: "Este taburete con forma de libélula nace del reto de crear un asiento ligero y fácil de transportar. Su diseño incorpora una solución multifuncional e ingeniosa: el reposapiés también funciona como asa. Se desplaza a lo largo del “cuerpo” de la libélula y se extrae por un hueco superior, permitiendo transportarlo cómodamente sin perder su funcionalidad como taburete."
  },
  2: {
    titulo: "ETIQUETA Y PACKAGING",
    texto: "Este proyecto es el diseño de etiqueta y packaging para el vino de Salvatore Tamburello, realizado durante mi estancia en la Universidad de Palermo (Sicilia). La etiqueta y el packaging recrean paisajes sicilianos, combinando ilustraciones y elementos gráficos inspirados en la región.  El packaging esta pensado con una ventana que permite ver la etiqueta original del vino. Se pensó tanto para una botella individual, como para el conjunto de seis botellas."
  },
  3: {
    titulo: "URA",
    texto: "URA busca disminuir el gasto de agua, gracias a un contador que se coloca sobre el grifo y te mide la cantidad de agua que gastas. Esta información se ve de dos maneras, a través de un dispositivo que se coloca en la pared, dividiendo el gasto de agua por habitaciones, y a través de la aplicación móvil, la cual no solo te informa de los gastos, sino que además te da tips de consumo."
  },
  4: {
    titulo: "CAMP AND GRILL",
    texto: "Camp and Grill es una barbacoa portable, pensada para las salidas al campo. Consta de dos partes, la barbacoa en la que se mete el carbón o las ramas y la tapa y soporte, que ambas estan pensadas para ser usadas a modo de bowl o plato. La barbacoa esta hecha de metal mientras que el soporte esta hecho de madera y la tapa de resina.vestigación formal y material a través de prototipos experimentales."
  },
  5: {
    titulo: "SOBRE MI",
    texto: "Soy Sara Madrid, diseñadora de Producto. Desde pequeña me ha fascinado crear con las manos: desmontar objetos para reinventarlos, dibujar y explorar nuevas formas de expresión. Esa curiosidad me llevó a formarme en diseño y a complementar mi aprendizaje con cursos de dibujo, proyectos europeos y una experiencia Erasmus en Palermo, Italia. Hoy enfoco mi trayectoria hacia el diseño social, buscando generar un impacto positivo a través de la creatividad y la resolución de problemas."
  }
};

const fondo = document.querySelector('.fondo-imagenes');
const ficha = document.getElementById('ficha');
const imgFinal = document.getElementById('img-final');
const titulo = document.getElementById('titulo-producto');
const texto = document.getElementById('texto-producto');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (fondo && ficha && id && datosProductos[id]) {

  ficha.classList.add('oculto');

  titulo.textContent = datosProductos[id].titulo;
  texto.textContent = datosProductos[id].texto;

  imgFinal.src = `img/p${id}/final.jpg`;

  const columnas = 8;
  const filas = 5;
  const total = columnas * filas;
  let index = 0;

  const intervalo = setInterval(() => {
    if (index >= total) {
      clearInterval(intervalo);
      setTimeout(() => {
        ficha.classList.remove('oculto');
        ficha.classList.add('visible');
      }, 400);
      return;
    }

    const img = document.createElement('img');
    img.src = `img/p${id}/${(index % 6) + 1}.jpg`;

    fondo.appendChild(img);
    index++;
  }, 60);

  document.body.classList.add(`p${id}`);
}


/* TRANSICIÓN páginas */
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    e.preventDefault();
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});






