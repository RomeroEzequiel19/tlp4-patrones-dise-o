
class InventarioViejo implements Inventario {
    equipos: { nombre: string, tipo: string, estado: string }[];

    constructor() {
        this.equipos = [];
    }

    public listarEquipos() {
        return this.equipos;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string ): void {
        const equipo = {
            nombre : nombre,
            tipo: tipo,
            estado: estado

        } 
        this.equipos.push(equipo);
    }
}

interface Inventario {
    equipos: { nombre: string, tipo: string, estado: string }[];
}


class AdaptadorInventario {

    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo( nombre: string, tipo: string, estado: string ) {
        this.inventarioViejo.agregarEquipo(nombre, tipo, estado);
    }

    public listarEquipos() {
        return this.inventarioViejo.listarEquipos();
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]