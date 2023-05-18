const num1 = prompt("Ingrese un Numero:")
const num2 = prompt("Ingrese un Segundo Numero:")
const num3 = prompt("Ingrese un Tercer Numero:")

const converNum1 = parseInt(num1)
const converNum2 = parseInt(num2)
const converNum3 = parseInt(num3)

if (converNum1 > converNum2 && converNum1 > converNum3){

    console.log("El numero "+num1+ " es mayor que los otros numeros")

}else if (converNum2 > converNum3){

    console.log("El numero "+num2+ " es mayor que los otros numeros")

}else{
    console.log("El numero "+num3+ " es mayor que los otros numeros")


}