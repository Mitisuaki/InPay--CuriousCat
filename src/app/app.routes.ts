import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/user/home-page/home-page.component';
import { HistoricoTransacoesComponent } from './components/pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {path:"user/home-page", component: HomePageComponent},
  {path:"user/transactions", component: HistoricoTransacoesComponent},
  {path:"sign-up", component: CadastroUsuarioComponent},
  {path:"", component: HomeComponent}
];
