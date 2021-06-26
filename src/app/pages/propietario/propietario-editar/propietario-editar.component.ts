import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Propietario } from 'src/app/model/propietario';
import { PropietarioService } from 'src/app/service/propietario.service';

@Component({
  selector: 'app-propietario-editar',
  templateUrl: './propietario-editar.component.html',
  styleUrls: ['./propietario-editar.component.css']
})
export class PropietarioEditarComponent implements OnInit {
  propietario: Propietario = new Propietario();
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  constructor(private propietarioService: PropietarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });



  }
  aceptar() {
    if (this.propietario.namePropietario.length>0 && this.propietario.emailPropietario.length>0) {
      if (this.edicion) {
        this.propietarioService.modificar(this.propietario).subscribe(() => {
          this.propietarioService.listar().subscribe(data => {
            this.propietarioService.setLista(data);
          });
        });

      } else {

        this.propietarioService.insertar(this.propietario).subscribe(() => {
          this.propietarioService.listar().subscribe(data => {
            this.propietarioService.setLista(data);
          });
        });
      }
      this.router.navigate(['propietarios']);
    } else {
      this.mensaje="Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.propietarioService.listarId(this.id).subscribe(data => {
        this.propietario = data
        console.log(data);
      });

    }

  }

}

