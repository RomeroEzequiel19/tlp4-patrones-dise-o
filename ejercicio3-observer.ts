interface Observador {
    actualizar(nombre: string, estado: string): void;
}

class Soporte implements Observador {
    actualizar(nombre: string, estado: string): void {
        console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}`);
    }
}

class Equipo {
    private observadores: Observador[] = [];
    constructor(private nombre: string, private tipo: string, private estado: string) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.nombre, this.estado));
    }
}

// Uso del patrón Observer
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.
