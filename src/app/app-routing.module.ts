import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PropietarioEditarComponent } from './pages/propietario/propietario-editar/propietario-editar.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { VehiculoEditarComponent } from './pages/vehiculo/vehiculo-editar/vehiculo-editar.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';

const routes: Routes = [
    {
        path: 'propietarios', component: PropietarioComponent, children: [
            { path: 'nuevo', component: PropietarioEditarComponent },
            { path: 'edicion/:id', component: PropietarioEditarComponent }
        ]
    },
    {
        path: 'vehiculos', component: VehiculoComponent, children: [
            { path: 'nuevo', component: VehiculoEditarComponent },
            { path: 'edicion/:id', component: VehiculoEditarComponent }
        ]
    },
    {
        path: 'login', component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

