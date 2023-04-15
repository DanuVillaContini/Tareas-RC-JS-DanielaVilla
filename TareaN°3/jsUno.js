/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let edad = parseInt(prompt("Indique su Edad: "))

if (edad >= 18){
    document.write("Ustede es mayor de edad, habilitado para conducir")
}else{
    document.write("Ustede No esta habilitado para conducir, es menor de edad")

}