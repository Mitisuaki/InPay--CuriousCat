import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/user/home-page/home-page.component';
import { HistoricoTransacoesComponent } from './pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';


export const routes: Routes = [
  {path:"user/home-page", component: HomePageComponent},
  {path:"user/transactions", component: HistoricoTransacoesComponent},
  {path:"", redirectTo: "/", pathMatch:"full"}];
