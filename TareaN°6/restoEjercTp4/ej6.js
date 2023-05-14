/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

/*INFO PARA MI: En Javascript, las propiedades get y set se utilizan para definir métodos de acceso a las propiedades de un objeto. Estos métodos permiten leer y escribir valores en una propiedad, respectivamente, pero con una sintaxis que parece el acceso directo a una propiedad.

La ventaja de utilizar get y set es que se pueden realizar comprobaciones y validaciones en los valores que se asignan o se leen de una propiedad, sin necesidad de utilizar métodos adicionales o llamar directamente a los métodos de acceso.-*/

class Libro{
    constructor(ISBN, titulo, autor, numPag){
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numPag = numPag;
    }
    //Metodos Get y Set:
    get ISBN(){
        return this._ISBN;
    }
    set ISBN(newISBN){
        this._ISBN = newISBN;
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(newtitulo){
        this._titulo = newtitulo;
    }
    get autor(){
        return this._autor;
    }
    set autor(newAutor){
        this._autor = newAutor;
    }
    get numPag(){
        return this._numPag;
    }
    set numPag(newNumPag){
        this._numPag = newNumPag;
    }

//Método mostrarLibro() 
    mostrarLibro(){
        console.log("El libro: "+this._titulo+", con un ISBN de: "+this._ISBN+", creado por el autor: "+this._autor+", tiene "+this._numPag+" páginas.")
    }
}

const libroUno = new Libro(9706660984,'El Principito','Antoine de Saint-Exupery',120);
const libroDos = new Libro(8484473805,'Orgullo Y Prejuicio (Tomo I)','Austen Jane',408);

libroUno.mostrarLibro();
libroDos.mostrarLibro();

//Comparar paginas:
if (libroUno.numPag > libroDos.numPag){
    console.log("El '"+libroUno.titulo+"' tiene mas paginas que '"+libroDos.titulo+"'.");
}else{
    console.log("El '"+libroDos.titulo+"' tiene mas paginas que '"+libroUno.titulo+"'.");
}
