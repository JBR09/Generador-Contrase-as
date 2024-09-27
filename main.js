let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");


const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if(numeroDigitado < 6){
        alert("La cantidad de caracteres tiene que ser mayor a 6");
        }
        else{
            let password = "";
            for(let i = 0; i < numeroDigitado; i++ ){

                let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
                console.log(caracterAleatorio); 

                password += caracterAleatorio;
            

            }
            contrasena.value = password;  
            validarContrasena();
            
        }
    }

        
function validarContrasena(){
    if(!/\d/.test(contrasena.value)){
        console.log("La contraseña debe tener al menos un número.");
    }
    if(!/[A-Z]/.test(contrasena.value)){
        console.log("La contraseña debe tener al menos una letra mayúscula.");
    }
    if(!/[a-z]/.test(contrasena.value)){
        console.log("La contraseña debe tener al menos una letra minúscula.");
    }
    if(!/[!@#$%^&*()]/.test(contrasena.value)){
        console.log("La contraseña debe tener al menos un símbolo especial.");
    }
    if(/\d/.test(contrasena.value) && /[A-Z]/.test(contrasena.value) && /[a-z]/.test(contrasena.value) && /[!@#$%^&*()]/.test(contrasena.value)){
        console.log("Contraseña fuerte.");
    } else {
        console.log("Contraseña baja.");
    }               

}    

function limpiar(){
   contrasena.value = "";
   cantidad.value = "";
    console.log("se esta limpiando");
}




