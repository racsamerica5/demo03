import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Propietario } from 'src/app/model/propietario';
import { PropietarioService } from 'src/app/service/propietario.service';
import { PropietarioDialogoComponent } from './propietario-dialogo/propietario-dialogo.component';

@Component({
  selector: 'app-propietario-listar',
  templateUrl: './propietario-listar.component.html',
  styleUrls: ['./propietario-listar.component.css']
})
export class PropietarioListarComponent implements OnInit {
  lista: Propietario[] = [];
  dataSource: MatTableDataSource<Propietario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'email', 'acciones'];
  private idMayor: number = 0;
  constructor(private propietarioService: PropietarioService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.propietarioService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this.propietarioService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.propietarioService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PropietarioDialogoComponent);
  }
  eliminar(id: number) {
    this.propietarioService.eliminar(id).subscribe(() => {
      this.propietarioService.listar().subscribe(data => {
        this.propietarioService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
