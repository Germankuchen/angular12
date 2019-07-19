import { Component, OnInit, Inject } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  marcador: Marcador;

  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Marcador) {
    this.marcador = data;
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  guardar() {
    this.dialogRef.close(this.marcador);
  }

  ngOnInit() {
  }

}
