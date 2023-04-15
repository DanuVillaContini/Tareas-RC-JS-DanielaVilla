/*Modelando clases

2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
   * Una propiedad titular con el valor "Alex".
   * Una propiedad saldo, teniendo como valor inicial 0.
   * Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
   * Un método extraer() que permita retirar la cantidad pasada como parámetro.
   * Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta{
    //propiedades:
    constructor(propietario, saldo){
        this.propietario=propietario;
        this.saldo=saldo;
    }
    //metodos:
    ingresar(dineroExtra){
        this.saldo = dineroExtra + this.saldo;
        return "Ingreso Exitoso"
    }
    extraer(dineroOut){
        this.saldo = this.saldo - dineroOut;
        return "Extraccion Exitosa"
    }
    informar(){
        const msg = "Informacion de la Nueva Cuenta: -Propietario: " + this.propietario + " -Saldo Actual: $ "+ this.saldo ;
        return msg;
    }
}

let cuentaNueva = new Cuenta('Ortencia', 10000);

