import { Component, OnInit } from '@angular/core';
import { PropietarioService } from 'src/app/service/propietario.service';

@Component({
  selector: 'app-propietario-buscar',
  templateUrl: './propietario-buscar.component.html',
  styleUrls: ['./propietario-buscar.component.css']
})
export class PropietarioBuscarComponent implements OnInit {
  textoBuscar: string = ""


  constructor(private propietarioService:PropietarioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
    this.propietarioService.buscar(e.target.value).subscribe(data=>{ 
      this.propietarioService.setLista(data);
    });
  }
}
