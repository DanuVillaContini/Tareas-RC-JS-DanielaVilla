
let n1 = prompt("Escribe un número")

let convertN1 = parseInt(n1)


if (convertN1 % 2 === 0 || convertN1 % 3 === 0 || convertN1 % 5 === 0 || convertN1 % 7 === 0) {

document.write("El numero ingresado es divisible por 2, 3, 5 o 7");

} else {

document.write("El numero ingresado no es divisible ni por 2, ni por 3, ni por 5, ni por 7");

}