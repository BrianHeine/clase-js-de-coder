let precioRemeras = 5000;
let precioSudaderas = 4500;
let precioGorras = 2000;
let totalP = 0;
let continuarComprando = true;

function saludar() {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    alert("Bienvenido/a a TodoModa " + nombre + " espero que compre a gusto :D")
}
saludar();

alert("Por favor, elija los productos para agregar al carrito de compras.");


while (continuarComprando) {
    const productoElegido = prompt("Ingrese el número del producto que desea comprar:\n1. Remeras\n2. Sudaderas\n3. Gorras\n\nSi desea finalizar la compra, por favor ingrese 0:");

    switch (productoElegido) {
        case "1":
            totalP += precioRemeras;
            alert("Excelente, usted ha agregado una remera.");
            break;
        case "2":
            totalP += precioSudaderas;
            alert("Excelente, usted ha agregado una sudadera.");
            break;
        case "3":
            totalP += precioGorras;
            alert("Excelente, usted ha agregado una gorra.");
            break;
        case "0":
            continuarComprando = false;
            break;
        default:
            alert("Opción inválida. Por favor, elija un número válido o escriba '0' para finalizar la compra.");
    }
}

if (totalP > 0) {
    const opcionFinal = confirm(`El total es de $${totalP}. Muchas gracias por su compra!`);
}