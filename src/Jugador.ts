export class Jugador{
    tipo : number // 0 => usuario logeado, 1 => invitado
    nombre : string
    puntaje : number
    
    constructor (nombre : string, tipo : number){
        this.nombre = nombre
        this.puntaje = 0
        this.tipo = tipo
    }

    public sumarPuntaje(){
            this.puntaje = this.puntaje + 1
    }
    
}export default Jugador