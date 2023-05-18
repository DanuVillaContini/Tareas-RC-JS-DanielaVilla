/**8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
  */

let numRepetir = prompt('Ingrese numero Tope de repeticiones')
if (Number(numRepetir) == numRepetir){
    if(numRepetir >=0 && numRepetir <=50 ){
        //For numero indicado de escalones
        for(let i = 0; i <= numRepetir; i++){
            //For numero indicado de escalones
            for(let piramide = 0; piramide < i; piramide++){
                document.write(i)
            }
            document.write("<br>");
        }
    }else{
        alert('El numero excede rango, ingrese otro')
    }
}else{
    alert('Dato ingresado no valido')
}

