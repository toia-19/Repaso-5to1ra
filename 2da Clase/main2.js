/* Actividad 1 */
function ejercicio1() {
    let contrasena = prompt("Ingrese su contraseña:");
    let confirmarContrasena = prompt("Confirme su contraseña:");

    /* Op1 */
    /*  if (contrasena == confirmarContrasena){
        alert ("Contraseña correcta.");
    } else {
        alert ("Contraseña incorrecta. Vuelva a intentarlo.");
    } */

    /* Op2 */
    /* while(contrasena !== confirmarContrasena){
        alert("Contraseña incorrecta. Vuelva a intentarlo.");

        confirmarContrasena = prompt("Ingrese nuevamente la contraseña.")
    }

    alert("Contraseña correcta.") */

    /* Op3 */
    do {
        if (contrasena !== confirmarContrasena) {
            confirmarContrasena = prompt("Contraseña incorrecta. Vuelva a intentar.");

        } else {
            alert("Contraseña correcta.");
        }
    } while (contrasena !== confirmarContrasena)
}

/* Actividad 2 */

/* Actividad 3 */