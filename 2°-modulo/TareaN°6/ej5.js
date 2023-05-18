/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
*/

class Persona {
    constructor(name, age, dni, sexo, peso, height, anioNac) {
        this.name = name;
        this.age = age;
        /*if (typeof age === 'number' && age >= 0) {
            this._edad = age;
        } else {
            console.log("Edad mal ingresada");
        }*/
        this.dni = dni;
        /*if (typeof dni === 'string' && dni.length === 9){
            this.dni = dni;
        }else{
            console.log("El DNI debe contener 9 caracteres")
        }*/
        this.sexo = sexo;
        this.peso = peso;
        this.height = height;
        //valido año de nacimiento, que sea un numero y contenga 4 digitos
        if (Number(anioNac) === anioNac && anioNac.toString().length === 4) {
            this.anioNac = anioNac;
        } else {
            console.log("El año de nacimiento No es un Numero Valido, ingrese 4 dígitos.");
        }
    }
    //metodos
    mostrarGeneracion() {
    if (this.anioNac >= 1994 && this.anioNac <= 2010) {
        console.log(this.name +" corresponde a la Generacion Z y se caracteriza por la Irreverencia");
    }
    if (this.anioNac >= 1981 && this.anioNac <= 1993) {
        console.log(this.name +" corresponde a la Generacion Y y se caracteriza por la Frustracion");
    }
    if (this.anioNac >= 1969 && this.anioNac <= 1980) {
        console.log(this.name +" corresponde a la Generacion X y se caracteriza por la Obsecion por el Exito");
    }
    if (this.anioNac >= 1949 && this.anioNac <= 1968) {
        console.log(this.name +" corresponde a la Generacion Baby Boom y se caracteriza por la Ambicion");
    }
    if (this.anioNac >= 1930 && this.anioNac <= 1948) {
        console.log(this.name +" corresponde a la Generacion Silent Generation y se caracteriza por la Austeridad");
    } else {
        console.log("Año de nacimiento no válido.");
    }
    }
}

const persona = new Persona("Jacinto", 24, 4552445, "masc", 85, 179, 1997);
