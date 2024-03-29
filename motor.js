/*VARIABLES GLOBALES*/
let nuevoMensaje=document.getElementById("titulo-mensaje");
let parrafo=document.getElementById("parrafo");
let monito=document.getElementById("monito");
let pcopiar=document.getElementById("texto-resultado").value;


function encriptar(){
    let textoIngresado=document.getElementById("texto").value; 
   
    let  textoEncriptado=textoIngresado
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi,"ufat");
    pcopiar=textoEncriptado;
    if(textoIngresado.length!=0){
        document.getElementById("texto-resultado").value=textoEncriptado;
        nuevoMensaje.textContent="Mensaje encriptado con éxito!";
        document.getElementById("parrafo").textContent=textoEncriptado;/* texto parrafo derecho */
        monito.src="./img/encriptacion.jpg";
    }else{
        monito.src="./img/advertencia.png";
        nuevoMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        swal("Error", "Ingrese un mensaje para encriptar / desencriptar!!", "error");
    }
}

function desencriptar(){
    let textoCodificado=document.getElementById("texto").value;

    let  textoNormal=textoCodificado
                        .replace(/enter/gi,"e")
                        .replace(/imes/gi,"i")
                        .replace(/ai/gi,"a")
                        .replace(/ober/gi,"o")
                        .replace(/ufat/gi,"u");
    
    if(textoCodificado.length!=0){
        document.getElementById("texto").value=textoNormal;
        nuevoMensaje.textContent="Mensaje desencriptado con éxito!";
        document.getElementById("parrafo").textContent=textoNormal;/* texto parrafo derecho */
        document.getElementById("texto-resultado").textContent=textoEncriptado;
        monito.src="./img/desencriptacion.jpg";
    }else{
        monito.src="./img/advertencia.png";
        nuevoMensaje.textContent="Ningún mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        swal("Error", "Ingrese un mensaje para encriptar / desencriptar!!", "error");
    }
}

function copiarTexto() {
    let textoCopiar = document.getElementById("texto-resultado");
    console.log(textoCopiar);
    textoCopiar.select();
    document.execCommand("copy");
    textoCopiar.blur();
    alert("Texto copiado al portapapeles: " + textoCopiar.value);
}