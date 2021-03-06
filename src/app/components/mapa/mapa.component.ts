import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat = -31.642586;
  lng = -60.692512;

  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.obtenerMarcadores();
  }

  editarMarcador(marcador: Marcador, indice: number) {
      const dialogRef = this.dialog.open(MapaEditarComponent, {
        width: '250px',
        data: marcador
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('resultado: ' + result.titulo);
        this.marcadores[indice] = result;
        this.guardarMarcadores();
      });
  }

  ngOnInit() {
  }

  obtenerMarcadores() {
    const marcadorString = localStorage.getItem('marcadores');
    if (marcadorString != null) {
      this.marcadores = JSON.parse(marcadorString);
    }
  }

  agregarMarcador(evento) {
    console.log(evento);
    console.log(evento.coords.lat);
    const MARCADOR = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(MARCADOR);
    this.guardarMarcadores();
    this.snackBar.open('Se agregó el marcador correctamente', 'Cerrar');
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(index) {
    this.marcadores.splice(index, 1);
    this.guardarMarcadores();
    this.snackBar.open('Se quitó el marcador correctamente', 'Cerrar');
  }

}
