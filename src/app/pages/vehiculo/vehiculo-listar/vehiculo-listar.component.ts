import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { VehiculoDialogoComponent } from './vehiculo-dialogo/vehiculo-dialogo.component';


@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {
  lista: Vehiculo[] = [];
  dataSource: MatTableDataSource<Vehiculo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'licencia', 'fecha', 'propietario', 'acciones'];
  private idMayor: number = 0;

  constructor(private vehiculoService: VehiculoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vehiculoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.vehiculoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.vehiculoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(VehiculoDialogoComponent);
  }
  eliminar(id: number) {
    this.vehiculoService.eliminar(id).subscribe(() => {
      this.vehiculoService.listar().subscribe(data => {
        this.vehiculoService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
