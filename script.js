var textoIngresado = document.getElementById('textoIngresado');
var visulizacionTexto = document.getElementById('visualizacionTexto');
var textoDesencriptado='';
//var copiarTexto='';

function asignarTexto(elemento,texto) {
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;    
}

function encriptar() {
    let texto=textoIngresado.value;
    let textoEncriptado = "";
    
    if (texto=='Ingrese el texto aqui') {
        alert('no has ingresado ningun texto');
        return
    } else if(texto==''){
        alert('no has ingresado ningun texto');
    }

    if (!verificarTexto(texto)) {
        alert('ingrese correctamente el texto, no se puede usar mayusculas, ni acentos')
        return;
    }

    for (let index = 0; index < texto.length; index++) {
        if (texto.charAt(index)=='a') {
            textoEncriptado=textoEncriptado+'ai';
        }else if (texto.charAt(index)=='e') {
            textoEncriptado=textoEncriptado+'enter';
        }else if(texto.charAt(index)=='i') {
            textoEncriptado=textoEncriptado+'imes';
        }else if(texto.charAt(index)=='o') {
            textoEncriptado=textoEncriptado+'ober';
        }else if(texto.charAt(index)=='u') {
            textoEncriptado=textoEncriptado+'ufat';
        }else {
            textoEncriptado=textoEncriptado+texto.charAt(index);
        }
    }

    visulizacionTexto.value=textoEncriptado;
    console.log(textoEncriptado);  
    asignarTexto('#visualizacionTexto', textoEncriptado);
    asignarTexto('#mensaje','Mensaje Encriptado');
    
}

function desencriptar() {

    let desencriptarTexto=textoIngresado.value;
    textoDesencriptado=desencriptarTexto;
    visulizacionTexto.value=textoDesencriptado;

    asignarTexto('#visualizacionTexto', textoDesencriptado);
    asignarTexto('#mensaje','Mensaje Desencriptado');
    console.log(textoDesencriptado);  
    return;
}

function verificarTexto(texto) {
    let letras= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    let contador = 0;

    for (let index = 0; index < texto.length; index++) {
        for (let i = 0; i < letras.length; i++) {
            if (texto.charAt(index) == letras[i]) {
                contador++;
            }
        }
    }
    if (contador==0) {
        return true; 
    }
    return false;
    
}

function copiar() {

    let textoCopiar= visulizacionTexto.value;
    navigator.clipboard.writeText(textoCopiar);
    console.log(textoCopiar);
    return;
    
}




