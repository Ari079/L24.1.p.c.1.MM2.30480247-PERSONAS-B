class Personas{
    constructor(nombre, edad, sexo){
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo
    }
}

class Procesos{
    constructor(){
        this.contador_personas = 0,
        this.acumulador_edad = 0,
        this.edad_mayor = 0
    }
    procesar_personas(p){
        this.contador_personas++
        this.acumulador_edad += p.edad
        if(p.sexo == "F"){
            if(p.edad > this.edad_mayor){
                this.edad_mayor = p.edad
            }
        }
    }
    edadPromedio(){
        return (this.acumulador_edad/this.contador_personas).toFixed(2)
    }
}


let persona1 = new Personas("Luisa", 15 ,"F")
let persona2 = new Personas("Ana", 19 , "F")
let persona3 = new Personas("Jose", 21 , "M")
let persona4 = new Personas("Carmen", 17 ,"F")
let persona5 = new Personas("Rosa", 18 ,"F")
let persona6 = new Personas("Jose", 22 ,"M")
let persona7 = new Personas("Maria", 17 ,"F")
let persona8 = new Personas("Luz", 19 ,"F")
let persona9 = new Personas("Rafael", 23 ,"M")
let persona10 = new Personas("Liz", 15 ,"F")
let persona11 = new Personas("Marcos", 20 , "M")
let persona12 = new Personas("Leo", 16 ,"M")

let procesos = new Procesos()

procesos.procesar_personas(persona1)
procesos.procesar_personas(persona2)
procesos.procesar_personas(persona3)
procesos.procesar_personas(persona4)
procesos.procesar_personas(persona5)
procesos.procesar_personas(persona6)
procesos.procesar_personas(persona7)
procesos.procesar_personas(persona8)
procesos.procesar_personas(persona9)
procesos.procesar_personas(persona10)
procesos.procesar_personas(persona11)
procesos.procesar_personas(persona12)


let salida = document.getElementById("salida")
salida.innerHTML = `

Edad promedio: ${procesos.edadPromedio()}<br>
Edad mayor entre las mujeres: ${procesos.edad_mayor}


`