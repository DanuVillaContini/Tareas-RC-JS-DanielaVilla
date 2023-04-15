/** 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulos{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    //metodos
    modificarAlto(newData){
        this.alto = newData
    }
    modificarAncho(newData){
        this.ancho = newData
    }
    propiedadesRectangulo(){
        return "Propiedades: *Alto: "+this.alto+" cm. *Ancho: "+this.ancho+" cm."
    }
    perimetro(){
        const calcular= this.alto * 2 + this.ancho * 2;
        return calcular;
    }
    area(){
        const calcular= this.alto * this.ancho;
        return calcular;
    }
}

const rectanguloUno = new Rectangulos(10,20);


