
import { Routes } from '@angular/router';
import { DadosUsuarioComponent } from './pages/dados-usuario/dados-usuario.component';

export const routes: Routes = [
  {path:"cep-test", component: DadosUsuarioComponent},
  {path:"home", component: DadosUsuarioComponent},
  {path:"", redirectTo: "/home", pathMatch:"full"}
];