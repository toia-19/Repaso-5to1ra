/* Actividad 1 */
function ejercicio1() {
    /* Op1 */
    /* let manzana = 24;

    let caja1 = 5;

    let acum = 0;

    if (caja1 === 5){
        acum = manzana * caja1;
        console.log(`Las manzanas por 5 cajas ingresadas en el turno mañana son: ${acum}`)
    } */

    /* Op2 */
    /*let cantCaja = 24;

    console.log("Cantidad de manzanas: ");
    console.log("Cantidad por 5 cajas: ", cantCaja * 5);
    console.log("Cantidad por 10 cajas: ", cantCaja * 10);
    console.log("Cantidad por 20 cajas: ", cantCaja * 20); */

    /* Op3 */
    /* console.log("Cantidad de manzanas en 5 cajas: "+ 5 * 24); */
}

/* Actividad 2 */
function ejercicio2() {
    /* Op1 */
    /*  let cantGomitas = parseInt(prompt("Ingrese la cantidad de gomitas"));
     let cantJugos = parseInt(prompt("Ingrese la cantidad de jugos"));
     // let cantAlfajores;
 
     let gomitas = 20;
     let jugos = 25;
 
     let totalGomitas = cantGomitas * gomitas;
     let totalJugos = cantJugos * jugos;
 
     let total = totalGomitas + totalJugos;
 
     console.log("La cantidad de gomitas: " + totalGomitas);
     console.log("La cantidad de jugos: " + totalJugos);
     console.log("La total: " + total); */

    /* Op2 */
    /* const precioGomita = 20;
    const precioJugo = 25;

    let cantidadGomitas = parseInt(prompt("Ingrese la cantidad de gomitas:"));
    let cantidadJugos = parseInt(prompt("Ingrese la cantidad de jugos:"));

    let gananciasGom = precioGomita * cantidadGomitas;
    let gananciasJugos = precioJugo * cantidadJugos;

    console.log("La ganancia por gomitas es de: ", gananciasGom);
    console.log("La ganancia por jugos es de: ", gananciasJugos);

    let gananciaTotal = gananciasGom + gananciasJugos;

    console.log("La ganancia total del día es de: ", gananciaTotal) */
}

/* Actividad 3 */
function ejercicio3() {
    /* Op1 */
    /* let precioAuto = parseInt(prompt("Ingrese el precio del auto: "));

    let descuento = 0;

    if (precioAuto > 20000) {
        descuento = precioAuto * 0.15;
    }

    let precioDescuento = precioAuto - descuento;

    let interes = precioDescuento * 0.12;

    let precioFinalCuotas = precioDescuento + interes;

    console.log("Precio original: " + precioAuto);
    console.log("Descuento aplicado: " + descuento);
    console.log("Precio con descuento: " + precioDescuento);
    console.log("Precio total en cuotas: " + precioFinalCuotas);
    console.log("Cada cuota, de 12 cuotas: " + (precioFinalCuotas / 12).toFixed(2)); */

    /* Op2 */
    /* let precioAuto = parseInt(prompt("Ingrese el precio del auto: "));

    if (precioAuto >= 20000) {
        let pagaencuotas = parseInt(prompt("Paga en cuotas: 1 = (sí) / 2 = (no):"))

        if (pagaencuotas == 1) {
            let pagaencuotas = precioAuto * 1.12;

            console.log(`Precio mas recargo del 12%: ${pagaencuotas}`);
            console.log(`Precio en cada una de las 12 cuotas: ${pagaencuotas / 12}`);

        } else if (pagaencuotas == 1) {
            let preciocondesc = precioAuto * 0.85;

            console.log(`Precio total con 20% de descuento: ${preciocondesc}`);
        } else {
            console.log("No aplicas para el descuento :(")
        }
    } else {
        console.log("No aplicas para el descuento :(")
    } */

    /* Op3 */
    let precioAuto = parseInt(prompt("Ingrese el precio del auto: "));
    let cuotas = 12;

    if (precioAuto > 20000) {
        precioFinal = precioAuto * 0.85;
    }

    let valorCuota = precioFinal / cuotas;
    
    console.log("Precio total del auto con descuento: " + precioFinal.toFixed(2))
    
    console.log(`Cada cuota costará: ${valorCuota.toFixed(2)}`);
}