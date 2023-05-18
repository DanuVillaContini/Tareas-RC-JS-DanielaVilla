/**Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58

 */

function perimetro(lado1, lado2){
    return (2*(lado1 + lado2))
}

let L1 = parseFloat(prompt('Ingrese longitud de uno de los lados del rectangulo: '))
let L2 = parseFloat(prompt('Ingrese longitud del otro lado del rectangulo: '))

let result = perimetro(L1, L2)
alert('El resultado del PERIMETRO CALCULADO es: '+ result)