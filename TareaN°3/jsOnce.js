/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */


let name1 = prompt("Nombre Persona Uno:");
let edad1 = parseInt(prompt('Edad: '))

let name2 = prompt("Nombre Persona Dos:");
let edad2 = parseInt(prompt('Edad: '))

let name3 = prompt("Nombre Persona Tres:");
let edad3 = parseInt(prompt('Edad: '))


let mayor = Math.max(edad1,edad2,edad3);

if(mayor == edad1){
    alert(name1 + ' con ' + edad1 + ' Años es la persona con mayor edad')
}else if (mayor == edad2){
    alert(name2 + ' con ' + edad2 + ' Años es la persona con mayor edad')
}else if (mayor == edad3){
    alert(name3 + ' con ' + edad3 + ' Años es la persona con mayor edad')
}





/*
//Probando como determinar un valor mayor usando Arrays .
const nombre = [];
let edad = [];
for(let i = 0; i<3 ; i++){
    nombre[i] = prompt('Nombre persona '+ i);
    edad[i] = parseInt(prompt('Edad persona '+ i))
}
console.log(nombre)
console.log(edad)

let mayor = Math.max(...edad); //se ponen tres puntos cuando quiero ver de la array

console.log('La mayor edad entre las personas es de: '+ mayor +' Años')
*/
