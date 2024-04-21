class Persona {
    constructor(nombre, edad, genero) { this.nombre = nombre; this.edad = edad; this.genero = genero; }

    obtDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
    }
}

new Persona('Juan', 25, 'M').obtDetalles();

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`Asignatura: ${this.asignatura}`);
        console.log(`Nivel: ${this.nivel}`);
    }
}

new Profesor('Pedro', 35, 'M', 'Matemáticas', 'Secundaria').asignar();

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`Curso: ${this.curso}`);
        console.log(`Grupo: ${this.grupo}`);
    }
}

new Estudiante('Ana', 20, 'F', '2º', 'A').registrar();