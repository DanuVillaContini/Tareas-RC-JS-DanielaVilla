/**4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */


let suma = 0;
do{
    let num = prompt('Ingrese un Numero');
    if(Number(num) == num) {
        numConvert = parseInt(num)
        suma = suma + numConvert;
    }else {
        if(num != undefined){
            alert('Lo ingresado no es un numero');
        }
    }
}while (confirm('Seguir?'))

alert('La suma total de todo lo ingresado es de: '+suma)