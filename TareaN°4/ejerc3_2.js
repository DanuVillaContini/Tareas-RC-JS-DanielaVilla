/**2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

*Mostrar la longitud del arreglo.
*Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
*Añade en última posición la ciudad de París.
*Escribe por pantalla el elemento que ocupa la segunda posición.
*Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
 */



//Primer punto: creo array y lleno con prompt
const arrayCity= [];
do{
    const nameCity = prompt("Ingrese nombre de la ciuidad");
    arrayCity.push(nameCity);
}while (confirm('Seguir?'))
document.write('Ciudades Guardadas: '+arrayCity+'<br>'+'<br>')
//OTRA FORMA:
/*
let deseaIngresar = confirm("desea ingresar un ciudad?")
while(deseaIngresar === true){
    //en la var ciudad , almaceno lo que ingresa el user:
    const ciudad = prompt('Ingrese una ciudad')

    //guardo ciudad en la+'<br>'+'<br>' array:
    arrayCity.push(nameCity);

    //pregunto si deseo agregar otra a la array
    deseaIngresar = confirm("desea ingresar un ciudad?")
}
document.write('ciudade ingresadas:'+arrayCity+'<br>'+'<br>')*/



//Segundo punto: Mostrar la longitud del arreglo.
/*
document.write('Cantidad de elementos Guardados: '+arrayCity.length+'<br>'+'<br>')
*/
//para validar mejor, en caso de q no haya ingresos:
if(arrayCity.length === 0){
    document.write('el user no cargo ciudades'+'<br>'+'<br>')
}else{
    document.write('Cantidad de elementos Guardados: '+arrayCity.length+'<br>'+'<br>')
}


//Tercer Punto: Mostrar los ítems de las posiciones primera, tercera y última.
/*
document.write('Primer ELemento Guardado: ' + arrayCity[0])+'<br>'+'<br>'
document.write('Tercer ELemento Guardado: ' + arrayCity[2]+'<br>'+'<br>')
document.write('Ultimo ELemento Guardado: ' + arrayCity[arrayCity.length-1]+'<br>'+'<br>')
*/
//para validar mejor, en caso de q no haya ingresos:
if (arrayCity[0] !== undefined){
    document.write('Primer ELemento Guardado: ' + arrayCity[0]+'<br>'+'<br>')
}
if(arrayCity[2] !== undefined){
    document.write('Tercer ELemento Guardado: ' + arrayCity[2]+'<br>'+'<br>')
}
if(arrayCity.length > 0){
    document.write('Ultimo ELemento Guardado: ' + arrayCity[arrayCity.length-1]+'<br>'+'<br>')
}


//Cuarto Punto: Añade en última posición la ciudad de París.
arrayCity.push('Paris')
document.write('Paris Nueva Ciudad Añadida: '+ arrayCity+'<br>'+'<br>')


//Escribe por pantalla el elemento que ocupa la segunda posición
document.write('Segundo ELemento Guardado: ' + arrayCity[1]+'<br>'+'<br>')


//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
let pos = 1, numElement = 1;
let elementoElim = arrayCity.splice(pos, numElement)
arrayCity.splice(1,0,'Barcelona');
document.write('Se ha reemplazado la segunda ciudad por Barcelona: '+ arrayCity+'<br>'+'<br>')