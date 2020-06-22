import { expect } from "chai";
import { Juego } from "./Juego";
import { Jugador } from "./jugador";


describe('Jugador', function() {
  it('sumarPuntaje', function() {
    let j = new Jugador("Elais", 0)
    j.sumarPuntaje()
    expect(j.puntaje).equal(1);
  });
});

describe('Jugador', function() {
  it('sumarPuntajeInvitado', function() {
    let j = new Juego()
    j.añadirInvitado()
    j.sumarPuntaje(j.tablapuntaje[0].nombre)
    expect(j.tablapuntaje[0].puntaje).equal(1);
  });
});

describe('Juego', function() {
  it('nuevoJugador', function() {
    let j = new Juego()
    j.nuevoJugador("Jose")
    expect(j.tablapuntaje.length).equal(1);
  });
});

describe('Juego', function() {
  it('añadirJugador', function() {
    let j = new Juego()
    let p = new Jugador("Jose", 0)
    j.añadirJugador(p)
    expect(j.tablapuntaje.length).equal(1);
  });
});

describe('Juego', function() {
  it('CrearNombreInvitado', function() {
    let j = new Juego()
    expect(j.crearNombreInvitado().startsWith("Invitado ")).equal(true);
  });
});

describe('Juego', function() {
  it('añadirInvitado', function() {
    let j = new Juego()
    j.añadirInvitado()
    expect(j.tablapuntaje.length).equal(1);
  });
});

describe('Juego', function() {
  it('quitarInvitado', function() {
    let j = new Juego()
    j.quitarInvitado(j.añadirInvitado())
    expect(j.tablapuntaje.length).equal(0);
  });
});

describe('Juego', function() {
  it('quitarInvitadoNoExiste', function() {
    let j = new Juego()
    j.nuevoJugador("Manuel")
    j.quitarInvitado("Manuel")
    expect(j.tablapuntaje.length).equal(1);
  });
});


describe('Juego', function() {
    it('buscarJugadorPorNombre', function() {
      let j = new Juego()
      let p = new Jugador("Jose", 0)
      j.añadirJugador(p)
      expect(j.buscarJugadorPorNombre("Jose")).equal(0);
    });
  });

  describe('Juego', function() {
    it('buscarJugadorPorNombre', function() {
      let j = new Juego()
      let p = new Jugador("Jose", 0)
      j.añadirJugador(p)
      expect(j.buscarJugadorPorNombre("luis")).equal(null);
    });
  });

  describe('Juego', function() {
    it('Ranking', function() {
      let j = new Juego()
      j.nuevoJugador("Osvaldo")
      j.nuevoJugador("Matias")
      j.nuevoJugador("Tito")
      j.nuevoJugador("Juan")
      for(let i = 0; i < 20; i++){
        j.sumarPuntaje("Tito")
      }
      for(let i = 0; i < 20; i++){
        if(i%2==0){
          j.sumarPuntaje("Matias")
        }
        else{
          j.sumarPuntaje("Juan")
        }
      }
      j.ranking()
      console.log(j.tablapuntaje)
      expect(j.tablapuntaje[0].nombre).equal("Tito");
    });
  });

  describe('Juego', function() {
    it('Ranking2', function() {
      let j = new Juego()
      j.nuevoJugador("Osvaldo")
      j.nuevoJugador("Matias")
      j.nuevoJugador("Tito")
      j.nuevoJugador("Juan")
      j.nuevoJugador("Leti")
      j.nuevoJugador("Vito")
      j.nuevoJugador("Samuel")
      for(let i = 0; i < 20; i++){
        j.sumarPuntaje("Tito")
        if(i%5==0){
          j.sumarPuntaje("Samuel")
        }
      }
      for(let i = 0; i < 35; i++){
        if(i%2==0){
          j.sumarPuntaje("Matias")
        }
        else if(i%3==0){
          j.sumarPuntaje("Leti")
          j.sumarPuntaje("Vito")
        }
        else{
          j.sumarPuntaje("Juan")
        }
      }
      j.ranking()
      console.log(j.tablapuntaje)
      expect(j.tablapuntaje[0].nombre).equal("Tito");
    });
  });

  describe('Juego', function() {
    it('sumarPuntaje', function() {
      let j = new Juego()
      j.nuevoJugador("Jose")
      j.sumarPuntaje("Jose")
      expect(j.tablapuntaje[j.buscarJugadorPorNombre("Jose")].puntaje).equal(1);
    });
  });

  describe('Juego', function() {
    it('sumarPuntaje20', function() {
      let j = new Juego()
      j.nuevoJugador("Jose")
      for(let i = 0; i < 20; i++){
        j.sumarPuntaje("Jose")
      }
      expect(j.tablapuntaje[j.buscarJugadorPorNombre("Jose")].puntaje).equal(20);
    });
  });