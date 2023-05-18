

function Persona(nombre, edad, dni, domicilio, hijos, profesion) {
    this.nombre= nombre,
    this.edad= edad,
    this.dni= dni,
    this.domicilio= domicilio,
    this.hijos= hijos,
    this.profesion= profesion
}
function saludar(){
    document.write('Hola, como estas? Me llamo ', this.nombre + '<br>');
}
function listar(){
    document.write('<ul><li>Edad: '+ this.edad + '</li><br><li>DNI: ' + this.dni + '</li><br><li>Domicilio: ' + this.domicilio + '</li><br><li>Hijos: ' + this.hijos + '</li><br><li>Profesion: ' + this.profesion + '</li><br></ul>')
}
Persona.saludar=saludar;
Persona.listar=listar;

let persona = new Persona('Marta', '23', '15236896', 'cordoba 452', '0', 'estudiante');

persona.saludar = saludar;
persona.listar = listar;
