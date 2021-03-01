const boton = document.getElementById("btn-enviar");

boton.addEventListener('click',()=>{
    let binario = document.getElementById("Binario").value;
    let resultado = 0;
    let potencia = 0;

    let binarioArray = [];
    let validador = true;

    for(bin of binario){
        console.log(bin);
        if(bin != "1" && bin != "0"){
            alert('Por favor, ingrese solo numeros binarios');
            validador = false;
            document.getElementById("Binario").value = "";
            break;
        }
    }

    if(validador){
        for(let i=0; i < binario.length; i++){
            binarioArray[i] = binario[i];
        }

        binarioArray = binarioArray.reverse();

        for(let i = 0; i < binarioArray.length; i++){

            resultado = resultado + (binarioArray[i] * (2**potencia));
            potencia++;
        }

        let resultadoInput = document.querySelector(".resultadoInput");
        resultadoInput.value = resultado;
    }
});
