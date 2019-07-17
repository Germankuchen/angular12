export class Marcador {
    public latitud: number;
    public longitud: number;
    public titulo = '';
    public descripcion = '';

    constructor(latitud: number, longitud: number) {
        this.latitud = latitud;
        this.longitud = longitud;
    }    

}
