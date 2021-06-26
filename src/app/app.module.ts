import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropietarioListarComponent } from './pages/propietario/propietario-listar/propietario-listar.component';
import { PropietarioEditarComponent } from './pages/propietario/propietario-editar/propietario-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PropietarioDialogoComponent } from './pages/propietario/propietario-listar/propietario-dialogo/propietario-dialogo.component';
import { PropietarioBuscarComponent } from './pages/propietario/propietario-buscar/propietario-buscar.component';
import { VehiculoListarComponent } from './pages/vehiculo/vehiculo-listar/vehiculo-listar.component';
import { VehiculoEditarComponent } from './pages/vehiculo/vehiculo-editar/vehiculo-editar.component';
import { VehiculoDialogoComponent } from './pages/vehiculo/vehiculo-listar/vehiculo-dialogo/vehiculo-dialogo.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './pages/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    PropietarioComponent,
    PropietarioListarComponent,
    PropietarioEditarComponent,
    VehiculoComponent,
    PropietarioDialogoComponent,
    PropietarioBuscarComponent,
    VehiculoListarComponent,
    VehiculoEditarComponent,
    VehiculoDialogoComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
