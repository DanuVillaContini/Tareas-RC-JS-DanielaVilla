/**Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

function determinar(num){
    if(num % 2 == 0)  {
        return 'ES PAR'
    }else{
        return 'ES IMPAR'
        
    }
}

let numero = parseInt(prompt('Ingrese un numero: '))

let respuesta = determinar(numero)
alert('EL NUMERO ' + numero + ' ' + respuesta)