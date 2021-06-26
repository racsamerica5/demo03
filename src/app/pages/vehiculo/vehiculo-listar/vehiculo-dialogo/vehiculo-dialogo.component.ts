import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-dialogo',
  templateUrl: './vehiculo-dialogo.component.html',
  styleUrls: ['./vehiculo-dialogo.component.css']
})
export class VehiculoDialogoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService,
    private dialogRef: MatDialogRef<VehiculoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.vehiculoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
