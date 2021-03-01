
//* Pantalla
// toda la cuenta
let cuentaLarga = document.querySelector(".cuenta-larga");
// numeros en grande
let numVivo = document.querySelector(".numVivo");
cuentaLarga.innerHTML = "";

numVivo.innerHTML = "";

let acum = 0;

// Para validar
let flag = false;
let flagIgual = true;
let flagOp = false;



//* Botones de borrado
let c = document.getElementById("c");
let ce = document.getElementById("ce");
//* Pad num
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let coma = document.getElementById("coma");
//* Pad Operaciones
let division = document.getElementById("division");
let porcentaje = document.getElementById("porcentaje");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let igual = document.getElementById("igual");



//* Eventos Pad num
validador = ()=>{
    let validadorOp = cuentaLarga.innerHTML;
    let v = validadorOp.length-1;
    if(validadorOp[v] != "+" && validadorOp[v] != "-" && validadorOp[v] != "*" && validadorOp[v] != "/" && validadorOp[v] != "%" || numVivo.innerHTML !=""){
        return true;
    }
}



division.addEventListener("click", ()=>{
    if(validador() && flag == true){
    cuentaLarga.innerHTML += `${numVivo.innerHTML}${division.value}`;
    numVivo.innerHTML = "";
    flagOp = true;
}
});

porcentaje.addEventListener("click", ()=>{
    if(validador() && flag == true){
    cuentaLarga.innerHTML += `${numVivo.innerHTML}${porcentaje.value}`;
    numVivo.innerHTML = "";  
    flagOp = true;
}
});

suma.addEventListener("click", ()=>{
    if(validador() && flag == true){
    cuentaLarga.innerHTML += `${numVivo.innerHTML}${suma.value}`;
    numVivo.innerHTML = "";
    flagOp = true;
}
});

resta.addEventListener("click", ()=>{
    if(validador() && flag == true){
    cuentaLarga.innerHTML += `${numVivo.innerHTML}${resta.value}`;
    numVivo.innerHTML = "";
    flagOp = true;
}
});

multiplicacion.addEventListener("click", ()=>{
    if(validador() && flag == true){
    cuentaLarga.innerHTML += `${numVivo.innerHTML}${multiplicacion.value}`;
    numVivo.innerHTML = "";
    flagOp = true;
}
});

igual.addEventListener("click", ()=>{


    if(flagOp==true && flagIgual == true && flag == true){

        cuentaLarga.innerHTML += `${numVivo.innerHTML}`;
        let resuelto;
        let resueltoMas;
        if(acum>=1){
            let corte = cuentaLarga.innerHTML.split("=");
            // console.log("Array: "+corte);
            resueltoMas = eval(corte[acum]);
            cuentaLarga.innerHTML += `${igual.value}`;
            numVivo.innerHTML = resueltoMas;
        }else{
            
            resuelto = cuentaLarga.innerHTML;
            //+ eval() sirve para resolver calculos matematicos en forma de string.
            resuelto = eval(resuelto);
            cuentaLarga.innerHTML += `${igual.value}`;
            numVivo.innerHTML = resuelto;
        }
        // console.log("Acum: "+acum);
        acum++;
        flagIgual = false;
        flagOp = false;
}

});



//* Eventos Pad num
uno.addEventListener("click", ()=>{
    numVivo.innerHTML += uno.value;
    flag = true;
    flagIgual = true;
});

dos.addEventListener("click", ()=>{
    numVivo.innerHTML += dos.value;
    flag = true;
    flagIgual = true;
});

tres.addEventListener("click", ()=>{
    numVivo.innerHTML += tres.value;
    flag = true;
    flagIgual = true;
});

cuatro.addEventListener("click", ()=>{
    numVivo.innerHTML += cuatro.value;
    flag = true;
    flagIgual = true;
});

cinco.addEventListener("click", ()=>{
    numVivo.innerHTML += cinco.value;
    flag = true;
    flagIgual = true;
});

seis.addEventListener("click", ()=>{
    numVivo.innerHTML += seis.value;
    flag = true;
    flagIgual = true;
});

siete.addEventListener("click", ()=>{
    numVivo.innerHTML += siete.value;
    flag = true;
    flagIgual = true;
});

ocho.addEventListener("click", ()=>{
    numVivo.innerHTML += ocho.value;
    flag = true;
    flagIgual = true;
});

nueve.addEventListener("click", ()=>{
    numVivo.innerHTML += nueve.value;
    flag = true;
    flagIgual = true;
});

cero.addEventListener("click", ()=>{
    numVivo.innerHTML += cero.value;
    flag = true;
    flagIgual = true;
});

coma.addEventListener("click", ()=>{

if(numVivo.innerHTML != ""){
    numVivo.innerHTML += coma.value;
}
});




//Borrar
c.addEventListener("click", ()=>{
    cuentaLarga.innerHTML = "";
    numVivo.innerHTML = "";
    acum = 0;
    flag = false;
});


 ce.addEventListener("click", ()=>{
     let numBorrado = numVivo.innerHTML;
     numVivo.innerHTML = numBorrado.substring(0,numBorrado.length - 1);
 });