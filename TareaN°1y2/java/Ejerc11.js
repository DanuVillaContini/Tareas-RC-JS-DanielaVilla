
let n1 = prompt("Escribe un número")

let convertN1 = parseInt(n1)


if (convertN1 % 2 === 0 || convertN1 % 3 === 0 || convertN1 % 5 === 0 || convertN1 % 7 === 0) {
if (convertN1 % 2 === 0) {
    document.write("El numero ingresado es divisible por 2 - ");
}
if (convertN1 % 3 === 0) {
    document.write("El numero ingresado es divisible por 3 - ");
}
if (convertN1 % 5 === 0) {
    document.write("El numero ingresado es divisible por 5 - ");
}
if (convertN1 % 7 === 0) {
    document.write("El numero ingresado es divisible por 7");
}
} else {
    document.write("El numero ingresado No es divisible por ninguno de estos numeros : 2, 3, 5, 7.");
}