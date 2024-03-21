/*

?) constructor(): inicializa el carrito como un array vacio.
?) agregarProducto(producto):recibe un objeto representado un producto y lo agrega al carrito
?) calcularTotal():calcula el total de la compra sumando los precios de todos los productos en el carrito
?) aplicarDescuento(porcentaje):Aplica un descuento al total de la compra segun el porcentaje especificad
*/

class CarritoCompra {
  constructor() {
    this.compras = [];
  }

  agregarProducto(producto) {
    this.compras.push(producto);
  }

  calcularTotal() {
    let total = 0;
    this.compras.forEach((producto) => {
      total += producto.price;
    });
    return total;
  }

  aplicarDescuento(porcentaje) {
    let total = this.calcularTotal();
    let descuento = (total * porcentaje) / 100;
    let totalconDescuento = total - descuento;
    return totalconDescuento;
  }
}
module.exports = CarritoCompra;
