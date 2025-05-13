import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TorneoBBUComponent } from './pages/torneo-bbu/torneo-bbu.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'torneo-bbu', component: TorneoBBUComponent },
  { path: 'entrenamientos', component: EntrenamientosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // opcional: redirige rutas inválidas a inicio
];
