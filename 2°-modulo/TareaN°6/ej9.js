/*Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal{
    constructor(name,edad){
        this._name = name;
        this._edad = edad;
    }
    //Metodos get y set
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get edad(){
        return this._edad;
    }
    set edad(newEdad){
        this._edad = newEdad;
    }
    //metodo
    emitirSonido(){
        return true
    }
}
class Perro extends Animal{
    constructor(name,edad){
        super(name, edad)
    }
    /*//Metodos get y set
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get edad(){
        return this._edad;
    }
    set edad(newEdad){
        this._edad = newEdad;
    }*/

    //metodo emitirSonido() propio:
    emitirSonido(){
        return "wauu, wauu";
    }
}
class Gato extends Animal{
    constructor(name,edad){edad
        super(name, edad)
    }
    /*//Metodos get y set
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get edad(){
        return this._edad;
    }
    set edad(newEdad){
        this._edad = newEdad;
    }*/

    //metodo emitirSonido() propio:
    emitirSonido(){
        return "miauu, miauu";
    }
}

const siames = new Gato("Atenea",4);
const caniche = new Perro("Gala", 3);

siames.emitirSonido();
caniche.emitirSonido();