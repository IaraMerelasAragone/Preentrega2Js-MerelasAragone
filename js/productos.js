let montoFinal = 0;

let entrada = ""; //almacena entrada del usuario

const productos = [
    { nombre: "Levadizo Zed", precio: 400000 },
    { nombre: "Corredizo DKC400", precio: 300000} ,
    { nombre: "BOB 30", precio: 250000 },
    { nombre: "Bull", precio: 350000 },
    { nombre: "Control Acceso", precio: 60000 },
    { nombre: "Cerradura Magnética", precio: 95000 },
    { nombre: "Tubular 50", precio: 180000 },
    { nombre: "Roller Black Out", precio: 200000 },
    { nombre: "Batcorr", precio: 320000 },
    { nombre: "Tokey", precio: 70000 }
];

//suma el valor del producto al montoFinal
const total = (valor) => montoFinal += valor;

const saludoCliente = () => {
    let detalleProductos = productos.map(prod => `${prod.nombre}: $${prod.precio}`).join("\n");
    entrada = prompt(`Revise y anote el nombre de el/los productos que desea consultar:\n${detalleProductos}\n\nIngrese "salir" si desea finalizar la consulta.`);
}

//busca productos en el array productos y devuelve el objeto correspondiente
const buscarProducto = (nombreProducto) => {
    return productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
}

//inicia simulador
const simuladorCompra = () => {
    saludoCliente()

    while (entrada.toLowerCase() !== "salir"){
        let productoSeleccion = buscarProducto(entrada);

        if(productoSeleccion) {
            total(productoSeleccion.precio);
            alert(`Producto agregado: ${productoSeleccion.nombre} - $${productoSeleccion.precio}`);
        } else {
            alert("Producto no válido. Intente nuevamente ingresando un producto de la lista.");
        }

        entrada = prompt("Ingrese otro producto o escriba 'salir' para finalizar.");
    }

    const calculoIva = montoFinal * 0.21;
    const montoConIva = montoFinal + calculoIva;

    alert ("El monto final de su consulta es: $" + montoFinal + "\nIVA (21%): $" + calculoIva.toFixed(2) + "\nTotal con IVA: $" + montoConIva.toFixed(2));
}

simuladorCompra();

