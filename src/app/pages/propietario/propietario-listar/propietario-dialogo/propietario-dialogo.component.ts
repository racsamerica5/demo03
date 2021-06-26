import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PropietarioService } from 'src/app/service/propietario.service';

@Component({
  selector: 'app-propietario-dialogo',
  templateUrl: './propietario-dialogo.component.html',
  styleUrls: ['./propietario-dialogo.component.css']
})
export class PropietarioDialogoComponent implements OnInit {

  constructor(private propietarioService: PropietarioService,
    private dialogRef: MatDialogRef<PropietarioDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.propietarioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
