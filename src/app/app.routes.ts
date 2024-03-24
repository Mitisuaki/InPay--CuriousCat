import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HomePageComponent } from './components/pages/user/home-page/home-page.component';
import { HistoricoTransacoesComponent } from './components/pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { CriarAcessarContaComponent } from './components/pages/user/criar-acessar-conta/criar-acessar-conta.component';

export const routes: Routes = [
  {path:"user/home-page", component: HomePageComponent},
  {path:"user/transactions", component: HistoricoTransacoesComponent},
  {path:"cadastro", component: CadastroUsuarioComponent},
  {path:"", component: LandingPageComponent},
  {path:"user/access-account",component: CriarAcessarContaComponent},
];
