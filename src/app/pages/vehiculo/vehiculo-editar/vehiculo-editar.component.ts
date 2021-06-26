import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Propietario } from 'src/app/model/propietario';
import { Vehiculo } from 'src/app/model/vehiculo';
import { PropietarioService } from 'src/app/service/propietario.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-vehiculo-editar',
  templateUrl: './vehiculo-editar.component.html',
  styleUrls: ['./vehiculo-editar.component.css']
})
export class VehiculoEditarComponent implements OnInit {
  vehiculo: Vehiculo = new Vehiculo();
  id: number = 0;
  edicion: boolean = false;
  listaPropietarios: Propietario[] = [];
  idPropietarioSeleccionado: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = "";
  constructor(private vehiculoService: VehiculoService,
    private route: ActivatedRoute,
    private router: Router, private propietarioService: PropietarioService) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.propietarioService.listar().subscribe(data => { this.listaPropietarios = data });
  }
  aceptar() {
    if (this.vehiculo.licensePlateVehiculo.length > 0 &&
      this.idPropietarioSeleccionado>0) {
      let p = new Propietario();
      p.idPropietario = this.idPropietarioSeleccionado;
      this.vehiculo.propietario = p;
      this.vehiculo.manufacturingDateVehiculo = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.vehiculoService.modificar(this.vehiculo).subscribe(() => {
          this.vehiculoService.listar().subscribe(data => {
            this.vehiculoService.setLista(data);
          });
        });

      } else {
        this.vehiculoService.insertar(this.vehiculo).subscribe(() => {
          this.vehiculoService.listar().subscribe(data => {
            this.vehiculoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['vehiculos']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.vehiculoService.listarId(this.id).subscribe(data => {
        this.vehiculo = data
        console.log(data);
        this.idPropietarioSeleccionado = data.propietario.idPropietario;
      });

    }

  }

}

