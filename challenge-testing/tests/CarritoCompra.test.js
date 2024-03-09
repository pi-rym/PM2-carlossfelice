const CarritoCompra = require("../index");

// const mockCarritoCompra=jest.fn(carritoCompra);

describe("Clase CarritoCompra", () => {
  let carritoCompra;
  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });

  it("El array esta vacio", () => {
    expect(() => carritoCompra([])).toHaveLength(0);
  });

  it("Agregamos un producto al array", () => {
    const producto = { id: 1, nombre: "Producto A", price: 50 };
    carritoCompra.agregarProducto(producto);

    expect(carritoCompra.compras).toContainEqual(producto);
  });

  it("Calculamos el total", () => {
    const producto1 = { id: 1, nombre: "Producto A", price: 50 };
    const producto2 = { id: 2, nombre: "Producto B", price: 40 };
    carritoCompra.agregarProducto(producto1);
    carritoCompra.agregarProducto(producto2);

    expect(carritoCompra.calcularTotal()).toBe(90);
  });
  it("Aplicamos descuento al total de la compra", () => {
    const producto1 = { id: 1, nombre: "Producto A", price: 50 };
    const producto2 = { id: 2, nombre: "Producto B", price: 40 };
    carritoCompra.agregarProducto(producto1);
    carritoCompra.agregarProducto(producto2);
    expect(carritoCompra.aplicarDescuento(30)).toBe(63);

  });
});
