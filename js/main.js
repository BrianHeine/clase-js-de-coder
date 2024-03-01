let r = 5000;
let s = 4500;
let g = 2000;
let totalP;
let compra


alert("Bienvenidos a TodoModa, se les avisa que solo pueden comprar hasta 10 prendas")
for (let x = 0; x <= 10; x++) {
    compra = prompt("Ingrese el producto que quiera comprar: r = remeras, s = sudaderas, g = gorras, en caso de que no quiera comprar coloque: no , y en el caso de cancelar su compra coloque: cancelar")
    if (compra.toLowerCase = "r") {
        totalP + r
        
    } else if(compra.toLowerCase = s) {
        totalP + s
        
    }else if(compra.toLowerCase = g){
        totalP + g

    }else if(compra.toLowerCase = "no"){
        alert("El total de su compra es de "+ totalP)

    }else if(compra.toLowerCase = "cancelar"){
        break
    }
    
}
