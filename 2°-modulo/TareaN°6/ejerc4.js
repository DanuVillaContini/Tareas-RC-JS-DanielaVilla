/**4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
* Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
* Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

class Producto {
    //propiedades:
    constructor(codigo, nombre, precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    imprimirDatos(){
        const msg = "*Producto: "+this.nombre+" *Codigo: "+this.codigo+" *Precio: $"+this.precio;
        return msg;
    }
}

const producto1 = new Producto(55840, 'Detergente Borita', 150);
const producto2 = new Producto(55751, 'Shampoo plusbelle', 280);
const producto3 = new Producto(55215, 'Jabon Gliserina', 325);


console.log(producto1.imprimirDatos());
console.log(producto2.imprimirDatos());
console.log(producto3.imprimirDatos());