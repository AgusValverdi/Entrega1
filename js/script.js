for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    alert("Producto en falta");
  } else if (i == 4) {
    alert("Producto no disponible , estan por ingresar");
  }
  let articuloIngresado = prompt("Ingrese el nombre del articulo");

  alert(
    "Su articulo" +
    articuloIngresado +
    "\nSu aritculo se encuentra en el sector N:" +
    i
  );
}
alert("Gracias , vuelva pronto");
