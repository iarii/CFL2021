let readlineSync=require("readline-sync");
let precio=readlineSync.questionInt("ingrsa numero de precio");
console.log("numero de precio",precio);
let descuento=readlineSync.questionInt("ingrsa el porcentaje del descuento");
console.log("el porcentaje del descuento",descuento);
let precioFinal=precio*(100-descuento)/100;
console.log("precio final es",precioFinal);