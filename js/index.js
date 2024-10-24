class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
}

class Negocio {
    constructor(nombre, direccion, propietario) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.productos = [] //para almacenar productos
    }

    agregaProducto(producto) {
        this.productos.push(producto);
    }

    abierto(horario) {
        return horario >= 8 && horario <= 17;
    }
//retorna solo los productos que estan disponibles
    filtraProductoDisponible() {
        return this.productos.filter(producto => producto.disponible);
    }
}

const tienda1 = new Negocio("Controll Automatización", "Primero de Mayo 454", "Controll Automatización S.A.");

//para agregar productos a la tienda
tienda1.agregaProducto(new Producto("Levadizo Zed", 400000, true));
tienda1.agregaProducto(new Producto("Corredizo DKC400", 300000, true));
tienda1.agregaProducto(new Producto("BOB 30", 250000, true));
tienda1.agregaProducto(new Producto("Bull", 350000, true));
tienda1.agregaProducto(new Producto("Control Acceso", 60000, true));
tienda1.agregaProducto(new Producto("Cerradura Magnética", 95000, true));
tienda1.agregaProducto(new Producto("Tubular 50", 180000, true));
tienda1.agregaProducto(new Producto("Roller Black Out", 200000, true));
tienda1.agregaProducto(new Producto("Batcorr", 320000, true));
tienda1.agregaProducto(new Producto("Tokey", 70000, true));
tienda1.agregaProducto(new Producto("Tubular 60", 210000, false)); //ejemplo de producto no disponible

//para verificar si el negocio esta abierto
const verificarHorario = () => {
    let entrada = parseInt(prompt("Ingrese la hora en formato 24 hs. (0 - 24):"));

    if (isNaN(entrada) || entrada < 0 || entrada > 24) {
        alert("Por favor, ingrese una hora válida entre 0 y 24.");
        return;
    }

    if (tienda1.abierto(entrada)) {
        alert("La tienda esta abierta a la/s " + entrada + " hs.");
    } else {
        alert("La tienda esta cerrada a la/s " + entrada + " hs.");
    }
}

//para consultar productos disponibles
const consultarProductos = () => {
    let productosDisponibles = tienda1.filtraProductoDisponible();

    if (productosDisponibles.length === 0) {
        alert("No hay productos disponibles en la tienda.");
        return;
    }

    let resumenProductos = productosDisponibles.map(prod => `-${prod.nombre}: $${prod.precio}`).join("\n");
    alert("Productos disponibles:\n" + resumenProductos);
}

//inicia app
const iniciaApp = () => {
    let valor = true;

    while (valor) {
        let casos = prompt(
            "Bienvenido a Controll Automatización!" +
            "\n1. Verificar si estamos abiertos." +
            "\n2. Consultar productos disponibles." +
            "\n3. Salir."
        );

        switch(casos) {
            case "1":
                verificarHorario();
                break;
            case "2":
                consultarProductos();
                break;
            case "3":
                valor = false;
                alert("Gracias por visitar Controll Automatización.");
                break;
            default:
                alert("Por favor ingrese una opción válida.");
        }
    }
}

iniciaApp();