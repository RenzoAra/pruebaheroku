import {Jugador} from './jugador'
import { throws } from 'assert';


export class Juego{

    public tablapuntaje : Array<Jugador> = []
    constructor (){
    }

    public crearNombreInvitado(){
        return "Invitado "+Math.floor(Math.random() * 1001);
    }

    public añadirInvitado(){
        let i = new Jugador(this.crearNombreInvitado(), 1)
        this.tablapuntaje.push(i)
        return i.nombre
    }

    public quitarInvitado(nombre : string){
        if(this.tablapuntaje[this.buscarJugadorPorNombre(nombre)].tipo == 1){
           this.tablapuntaje.splice(this.buscarJugadorPorNombre(nombre), 1) 
        }
    }
    
    public nuevoJugador(nombre : string){
        this.tablapuntaje.push(new Jugador(nombre, 0))
    }

    public añadirJugador(p : Jugador){
        this.tablapuntaje.push(p)
    }
    
    public ranking(){
        let a = this.tablapuntaje
        a.sort(function (a, b){
            return (b.puntaje - a.puntaje)
        })
        return a
    }

    public buscarJugadorPorNombre(nombre : string){
        for(let i = 0; i < this.tablapuntaje.length; i++){
            if(this.tablapuntaje[i].nombre == nombre){
                return i
            }
        }
        return null
    }

    public sumarPuntaje(nombre : string){
          this.tablapuntaje[this.buscarJugadorPorNombre(nombre)].sumarPuntaje();
    }

}export default Juego
